import { NavLink } from "react-router-dom";
import { $api } from "../../../utils/Headers";
import { useEffect, useState, useMemo, useRef } from "react";
import Loading from "../../UI/Loadings/Loading";


import { io } from "socket.io-client";
export default function Viloyat() {
    const [loading, setLoading] = useState(true)
    const socketRef = useRef(null); // Добавляем реф для socket

    const [apiData, setApiData] = useState([]);

    const districts = [
        {
            id: 1,
            name: 'Боёвут',
            existingDebt: '269', oneDay: '', seasonStart: '', percentage: '',
            existingDebt2: '47', oneDay2: '', seasonStart2: '', percentage2: '',
            existingDebt3: '317', oneDay3: '', seasonStart3: '', percentage3: '',
        },
        {
            id: 2,
            name: 'Гулистон',
            existingDebt: '334', oneDay: '', seasonStart: '', percentage: '',
            existingDebt2: '64', oneDay2: '', seasonStart2: '', percentage2: '',
            existingDebt3: '311', oneDay3: '', seasonStart3: '', percentage3: '',
        },
        {
            id: 3,
            name: 'Мирзаобод',
            existingDebt: '396', oneDay: '', seasonStart: '', percentage: '',
            existingDebt2: '', oneDay2: '', seasonStart2: '', percentage2: '',
            existingDebt3: '344', oneDay3: '', seasonStart3: '', percentage3: '',
        },
        {
            id: 4,
            name: 'Оқолтин',
            existingDebt: '220', oneDay: '', seasonStart: '', percentage: '',
            existingDebt2: '21', oneDay2: '', seasonStart2: '', percentage2: '',
            existingDebt3: '190', oneDay3: '', seasonStart3: '', percentage3: '',
        },
        {
            id: 5,
            name: 'Сардоба',
            existingDebt: '291', oneDay: '', seasonStart: '', percentage: '',
            existingDebt2: '20', oneDay2: '', seasonStart2: '', percentage2: '',
            existingDebt3: '185', oneDay3: '', seasonStart3: '', percentage3: '',
        },
        {
            id: 6,
            name: 'Сайҳунобод',
            existingDebt: '180', oneDay: '', seasonStart: '', percentage: '',
            existingDebt2: '57', oneDay2: '', seasonStart2: '', percentage2: '',
            existingDebt3: '363', oneDay3: '', seasonStart3: '', percentage3: '',
        },
        {
            id: 7,
            name: 'Сирдарё',
            existingDebt: '312', oneDay: '', seasonStart: '', percentage: '',
            existingDebt2: '45', oneDay2: '', seasonStart2: '', percentage2: '',
            existingDebt3: '375 ', oneDay3: '', seasonStart3: '', percentage3: '',
        },
        {
            id: 8,
            name: 'Ховос',
            existingDebt: '205', oneDay: '', seasonStart: '', percentage: '',
            existingDebt2: '32', oneDay2: '', seasonStart2: '', percentage2: '',
            existingDebt3: '175', oneDay3: '', seasonStart3: '', percentage3: '',
        },
    ];

    // Функция для получения значения из API
    const getApiValue = (districtName, taskName) => {
        const item = apiData.find(
            item => item.district === districtName &&
                item.task === taskName &&
                item.key === 'Мавсум боши'
        );
        return item ? item.value : null;
    };

    // Функция для сопоставления данных из API с структурой таблицы
    const mapApiDataToDistricts = useMemo(() => {
        const updatedDistricts = districts.map(district => ({ ...district }));

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

        // Обновляем данные из API
        updatedDistricts.forEach(district => {
            // Получаем значения для каждой задачи
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
    }, [apiData]);

    // Подсчет итогов
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

    const totals = calculateTotals();

    const Get = async () => {
        setLoading(true)
        try {
            const response = await $api.get(`district`);
            if (response.data && response.data.data) {
                setApiData(response.data.data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    };

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


    if (loading) {
        return <Loading />
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Заголовок */}
            <div className="mb-6">
                <h1 className="text-xl font-bold text-gray-800 mb-2">Туманлар буйича ҳисобот</h1>
                <div className="h-0.5 w-16 bg-gray-300"></div>
            </div>

            {/* Таблица */}
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

                                {/* Блоки */}
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
                                // Получаем значения из API
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
                                                to={`/tuman/province/${district.name}`}
                                                className="text-blue-600 hover:text-blue-800 hover:underline"
                                            >
                                                {district.name}
                                            </NavLink>
                                        </td>

                                        {/* Блок 1 */}
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

                                        {/* Блок 2 */}
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

                                        {/* Блок 3 */}
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

                                        {/* Блок 4 */}
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
                                    {totals.existingDebt}
                                </td>
                                <td className="p-2 border border-[#212121] text-center text-gray-600">-</td>
                                <td className="p-2 border border-[#212121] text-center text-gray-800">
                                    {totals.seasonStart}
                                </td>
                                <td className="p-2 border border-[#212121] text-center text-gray-800">
                                    {totals.percentage ? `${totals.percentage}%` : '-'}
                                </td>

                                {/* Итоги блока 2 */}
                                <td className="p-2 border border-[#212121] text-center text-gray-800">
                                    {totals.existingDebt2}
                                </td>
                                <td className="p-2 border border-[#212121] text-center text-gray-600">-</td>
                                <td className="p-2 border border-[#212121] text-center text-gray-800">
                                    {totals.seasonStart2}
                                </td>
                                <td className="p-2 border border-[#212121] text-center text-gray-800">
                                    {totals.percentage2 ? `${totals.percentage2}%` : '-'}
                                </td>

                                {/* Итоги блока 3 */}
                                <td className="p-2 border border-[#212121] text-center text-gray-800">
                                    {totals.existingDebt3}
                                </td>
                                <td className="p-2 border border-[#212121] text-center text-gray-600">-</td>
                                <td className="p-2 border border-[#212121] text-center text-gray-800">
                                    {totals.seasonStart3}
                                </td>
                                <td className="p-2 border border-[#212121] text-center text-gray-800">
                                    {totals.percentage3 ? `${totals.percentage3}%` : '-'}
                                </td>

                                {/* Итоги блока 4 */}
                                <td className="p-2 border border-[#212121] text-center text-gray-800">
                                    {totals.existingDebt}
                                </td>
                                <td className="p-2 border border-[#212121] text-center text-gray-600">-</td>
                                <td className="p-2 border border-[#212121] text-center text-gray-800">
                                    {totals.seasonStart}
                                </td>
                                <td className="p-2 border border-[#212121] text-center text-gray-800">
                                    {totals.percentage ? `${totals.percentage}%` : '-'}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}