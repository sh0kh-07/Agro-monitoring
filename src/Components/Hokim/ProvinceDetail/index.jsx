import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { provinceConfig } from "../Data/provinceConfig";
import { useEffect, useState, useMemo, useRef } from "react";
import { $api } from "../../../utils/Headers";
import { io } from "socket.io-client";

import Loading from "../../UI/Loadings/Loading";

export default function ProvinceDetail() {
    const { name } = useParams();
    const province = provinceConfig[name];
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
        const socketRef = useRef(null); // Добавляем реф для socket
    

    if (!province) {
        return <div className="p-8 text-center text-gray-600">Маълумот топилмади</div>;
    }

    // Функция для получения значения из API для конкретного района и задачи
    const getApiValue = useMemo(() => {
        return (districtName, taskName) => {
            const item = apiData.find(
                item => item.area === districtName && 
                       item.task === taskName && 
                       item.key === 'Мавсум боши'
            );
            return item ? item.value : null;
        };
    }, [apiData]);

    // Функция для сопоставления данных из API с структурой таблицы
    const mapApiDataToDistricts = useMemo(() => {
        // Создаем копию districts из конфига
        const updatedDistricts = province.districts.map(district => ({ ...district }));
        
        // Сопоставление task из API с блоками в таблице
        const taskMapping = {
            'Кузги шудгорлаш': {
                column: 'seasonStart',
                debtColumn: 'existingDebt',
                percentageColumn: 'percentage'
            },
            'Насосларга қуёш панели ўрнатиш': {
                column: 'seasonStart2',
                debtColumn: 'existingDebt2',
                percentageColumn: 'percentage2'
            },
            'Ички ариқларни бетонлаштириш': {
                column: 'seasonStart3',
                debtColumn: 'existingDebt3',
                percentageColumn: 'percentage3'
            }
        };

        // Обновляем данные из API для каждого района
        updatedDistricts.forEach(district => {
            Object.entries(taskMapping).forEach(([task, mapping]) => {
                const apiValue = getApiValue(district.name, task);
                if (apiValue) {
                    district[mapping.column] = apiValue;
                    
                    // Рассчитываем процент
                    const debt = parseFloat(district[mapping.debtColumn]) || 0;
                    const value = parseFloat(apiValue) || 0;
                    
                    if (debt > 0) {
                        const percentage = ((value / debt) * 100).toFixed(1);
                        district[mapping.percentageColumn] = percentage;
                    }
                }
            });
        });

        return updatedDistricts;
    }, [apiData, province.districts, getApiValue]);

    // Функция для подсчета итогов
    const calculateTotals = () => {
        let totals = {
            existingDebt: 0, seasonStart: 0,
            existingDebt2: 0, seasonStart2: 0,
            existingDebt3: 0, seasonStart3: 0,
        };

        mapApiDataToDistricts.forEach(district => {
            totals.existingDebt += parseFloat(district.existingDebt) || 0;
            totals.seasonStart += parseFloat(district.seasonStart) || 0;
            totals.existingDebt2 += parseFloat(district.existingDebt2) || 0;
            totals.seasonStart2 += parseFloat(district.seasonStart2) || 0;
            totals.existingDebt3 += parseFloat(district.existingDebt3) || 0;
            totals.seasonStart3 += parseFloat(district.seasonStart3) || 0;
        });

        const formatNumber = (num) => {
            return num.toLocaleString('ru-RU', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
        };

        const percentage1 = totals.existingDebt > 0 ? ((totals.seasonStart / totals.existingDebt) * 100).toFixed(1) : '';
        const percentage2 = totals.existingDebt2 > 0 ? ((totals.seasonStart2 / totals.existingDebt2) * 100).toFixed(1) : '';
        const percentage3 = totals.existingDebt3 > 0 ? ((totals.seasonStart3 / totals.existingDebt3) * 100).toFixed(1) : '';

        return {
            existingDebt: formatNumber(totals.existingDebt),
            seasonStart: formatNumber(totals.seasonStart),
            percentage: percentage1,
            existingDebt2: formatNumber(totals.existingDebt2),
            seasonStart2: formatNumber(totals.seasonStart2),
            percentage2: percentage2,
            existingDebt3: formatNumber(totals.existingDebt3),
            seasonStart3: formatNumber(totals.seasonStart3),
            percentage3: percentage3,
        };
    };

    const Get = async () => {
        try {
            const response = await $api.get(`area/${name}`);
            if (response.data && response.data.data) {
                setApiData(response.data.data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        Get();
    }, [name]);


useEffect(() => {
    let isActive = true;

    const refreshData = async () => {
        if (isActive) {
            console.log("Выполняю обновление данных...");
            try {
                await Get(); // Предполагаю, что Get() асинхронная
                console.log("Данные успешно обновлены");
            } catch (error) {
                console.error("Ошибка при обновлении данных:", error);
            }
        }
    };

    // Первоначальная загрузка
    refreshData();

    socketRef.current = io("https://dev.ithubs.uz", {
        path: "/coffee/socket.io",
        transports: ["websocket"],
    });

    const socket = socketRef.current;

    // Принудительное обновление при любых изменениях
    const forceRefresh = () => {
        console.log("Принудительное обновление данных");
        refreshData();
    };

    socket.on("district:update", forceRefresh);
    
    // Также слушаем другие события, которые могут требовать обновления
    socket.onAny((eventName, ...args) => {
        console.log(`Событие сокета: ${eventName}`, args);
        if (eventName.includes("update") || eventName.includes("change") || eventName.includes("refresh")) {
            forceRefresh();
        }
    });

    socket.on("connect", () => {
        console.log("Socket подключен");
        forceRefresh(); // Обновляем при подключении
    });

    socket.on("disconnect", () => {
        console.log("Socket отключен");
    });

    return () => {
        isActive = false;
        socket.off("district:update");
        socket.off("connect");
        socket.off("disconnect");
        socket.disconnect();
    };
}, []);
    const totalsData = calculateTotals();

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4">
            {/* Заголовок страницы */}
            <div className="mb-6">
                <h1 className="text-xl font-bold text-gray-800 mb-2">
                    {province.title}
                </h1>
                <div className="h-0.5 w-16 bg-gray-300"></div>
            </div>

            <div className="bg-white border border-[#212121] shadow-sm rounded-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                        <thead>
                            {/* Основные заголовки */}
                            <tr className="bg-gray-100">
                                <th rowSpan={3} className="sticky left-0 z-10 p-2 border border-[#212121] text-center font-semibold text-gray-700 bg-gray-100 min-w-[40px]">
                                    №
                                </th>
                                <th rowSpan={3} className="sticky left-[40px] z-10 p-2 border border-[#212121] text-center font-semibold text-gray-700 bg-gray-100 min-w-[150px]">
                                    Туманлар номи
                                </th>

                                {/* Основные заголовки блоков */}
                                <th colSpan={4} className="p-2 border border-[#212121] text-center font-medium text-gray-700 bg-blue-50 min-w-[200px]">
                                    Кузги шудгорлаш
                                </th>
                                <th colSpan={4} className="p-2 border border-[#212121] text-center font-medium text-gray-700 bg-blue-50 min-w-[200px]">
                                    Насосларга қуёш панели ўрнатиш
                                </th>
                                <th colSpan={4} className="p-2 border border-[#212121] text-center font-medium text-gray-700 bg-blue-50 min-w-[200px]">
                                    Ички ариқларни бетонлаштириш
                                </th>
                                <th colSpan={4} className="p-2 border border-[#212121] text-center font-medium text-gray-700 bg-blue-50 min-w-[200px]">
                                    Ариқларни тозалаш (қўл кучида)
                                </th>
                            </tr>

                            {/* Подзаголовки */}
                            <tr className="bg-gray-50">
                                {[...Array(4)].map((_, blockIndex) => (
                                    <>
                                        <th rowSpan={2} className="p-2 border border-[#212121] text-center font-medium text-gray-700 min-w-[80px]">
                                            Режа
                                        </th>
                                        <th colSpan={2} className="p-2 border border-[#212121] text-center font-medium text-gray-700">
                                            Амалда
                                        </th>
                                        <th rowSpan={2} className="p-2 border border-[#212121] text-center font-medium text-gray-700 min-w-[60px]">
                                            %
                                        </th>
                                    </>
                                ))}
                            </tr>

                            {/* Детальные заголовки */}
                            <tr className="bg-gray-50">
                                {[...Array(4)].map((_, blockIndex) => (
                                    <>
                                        <th className="p-2 border border-[#212121] text-center text-xs text-gray-600 min-w-[70px]">
                                            Бир кунда
                                        </th>
                                        <th className="p-2 border border-[#212121] text-center text-xs text-gray-600 min-w-[70px]">
                                            Мавсум боши
                                        </th>
                                    </>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {mapApiDataToDistricts.map((district, index) => {
                                // Получаем значения из API для каждого блока
                                const seasonStartValue = getApiValue(district.name, 'Кузги шудгорлаш');
                                const seasonStart2Value = getApiValue(district.name, 'Насосларга қуёш панели ўрнатиш');
                                const seasonStart3Value = getApiValue(district.name, 'Ички ариқларни бетонлаштириш');
                                
                                return (
                                    <tr key={district.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100'}>
                                        {/* Номер и название */}
                                        <td className="sticky left-0 z-5 p-2 border border-[#212121] text-center text-gray-700 bg-gray-50">
                                            {district.id}
                                        </td>
                                        <td className="sticky left-[40px] z-5 p-2 border border-[#212121] text-gray-800 bg-gray-50">
                                            <NavLink 
                                                to={`/tuman/1/${district.name}`}
                                                className="text-blue-600 hover:text-blue-800 hover:underline"
                                            >
                                                {district.name}
                                            </NavLink>
                                        </td>

                                        {/* Блок 1 - Кузги шудгорлаш */}
                                        <td className="p-2 border border-[#212121] text-center text-gray-700">
                                            {district.existingDebt || '-'}
                                        </td>
                                        <td className="p-2 border border-[#212121] text-center text-gray-600">
                                            {district.oneDay || '-'}
                                        </td>
                                        <td className="p-2 border border-[#212121] text-center text-gray-600 font-medium">
                                            {seasonStartValue || '-'}
                                        </td>
                                        <td className="p-2 border border-[#212121] text-center text-gray-700 font-medium">
                                            {district.percentage ? `${district.percentage}%` : '-'}
                                        </td>

                                        {/* Блок 2 - Насосларга қуёш панели ўрнатиш */}
                                        <td className="p-2 border border-[#212121] text-center text-gray-700">
                                            {district.existingDebt2 || '-'}
                                        </td>
                                        <td className="p-2 border border-[#212121] text-center text-gray-600">
                                            {district.oneDay2 || '-'}
                                        </td>
                                        <td className="p-2 border border-[#212121] text-center text-gray-600 font-medium">
                                            {seasonStart2Value || '-'}
                                        </td>
                                        <td className="p-2 border border-[#212121] text-center text-gray-700 font-medium">
                                            {district.percentage2 ? `${district.percentage2}%` : '-'}
                                        </td>

                                        {/* Блок 3 - Ички ариқларни бетонлаштириш */}
                                        <td className="p-2 border border-[#212121] text-center text-gray-700">
                                            {district.existingDebt3 || '-'}
                                        </td>
                                        <td className="p-2 border border-[#212121] text-center text-gray-600">
                                            {district.oneDay3 || '-'}
                                        </td>
                                        <td className="p-2 border border-[#212121] text-center text-gray-600 font-medium">
                                            {seasonStart3Value || '-'}
                                        </td>
                                        <td className="p-2 border border-[#212121] text-center text-gray-700 font-medium">
                                            {district.percentage3 ? `${district.percentage3}%` : '-'}
                                        </td>

                                        {/* Блок 4 - Ариқларни тозалаш (қўл кучида) */}
                                        <td className="p-2 border border-[#212121] text-center text-gray-700">
                                            {district.existingDebt || '-'}
                                        </td>
                                        <td className="p-2 border border-[#212121] text-center text-gray-600">
                                            {district.oneDay || '-'}
                                        </td>
                                        <td className="p-2 border border-[#212121] text-center text-gray-600 font-medium">
                                            {seasonStartValue || '-'}
                                        </td>
                                        <td className="p-2 border border-[#212121] text-center text-gray-700 font-medium">
                                            {district.percentage ? `${district.percentage}%` : '-'}
                                        </td>
                                    </tr>
                                );
                            })}

                            {/* Итоговая строка */}
                            <tr className="bg-gray-100 font-semibold border-t-2 border-gray-400">
                                <td colSpan={2} className="sticky left-0 z-5 p-2 border border-[#212121] text-gray-800 bg-gray-100">
                                    Жами
                                </td>

                                {/* Итоги блока 1 */}
                                <td className="p-2 border border-[#212121] text-center text-gray-800">
                                    {totalsData.existingDebt}
                                </td>
                                <td className="p-2 border border-[#212121] text-center text-gray-600">-</td>
                                <td className="p-2 border border-[#212121] text-center text-gray-800">
                                    {totalsData.seasonStart}
                                </td>
                                <td className="p-2 border border-[#212121] text-center text-gray-800">
                                    {totalsData.percentage ? `${totalsData.percentage}%` : '-'}
                                </td>

                                {/* Итоги блока 2 */}
                                <td className="p-2 border border-[#212121] text-center text-gray-800">
                                    {totalsData.existingDebt2}
                                </td>
                                <td className="p-2 border border-[#212121] text-center text-gray-600">-</td>
                                <td className="p-2 border border-[#212121] text-center text-gray-800">
                                    {totalsData.seasonStart2}
                                </td>
                                <td className="p-2 border border-[#212121] text-center text-gray-800">
                                    {totalsData.percentage2 ? `${totalsData.percentage2}%` : '-'}
                                </td>

                                {/* Итоги блока 3 */}
                                <td className="p-2 border border-[#212121] text-center text-gray-800">
                                    {totalsData.existingDebt3}
                                </td>
                                <td className="p-2 border border-[#212121] text-center text-gray-600">-</td>
                                <td className="p-2 border border-[#212121] text-center text-gray-800">
                                    {totalsData.seasonStart3}
                                </td>
                                <td className="p-2 border border-[#212121] text-center text-gray-800">
                                    {totalsData.percentage3 ? `${totalsData.percentage3}%` : '-'}
                                </td>

                                {/* Итоги блока 4 */}
                                <td className="p-2 border border-[#212121] text-center text-gray-800">
                                    {totalsData.existingDebt}
                                </td>
                                <td className="p-2 border border-[#212121] text-center text-gray-600">-</td>
                                <td className="p-2 border border-[#212121] text-center text-gray-800">
                                    {totalsData.seasonStart}
                                </td>
                                <td className="p-2 border border-[#212121] text-center text-gray-800">
                                    {totalsData.percentage ? `${totalsData.percentage}%` : '-'}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

// Определение пропсов по умолчанию
ProvinceDetail.defaultProps = {
    districts: null,
    totals: null,
    title: "Туманлар буйича ҳисобот"
};