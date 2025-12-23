import { useParams } from "react-router-dom";
import { FarmerConfig } from "../FarmerData/FarmerConfig";
import { useEffect, useState, useMemo, useRef } from "react";
import { $api } from "../../../utils/Headers";
import Loading from "../../UI/Loadings/Loading";
import { io } from "socket.io-client";


export default function Farmer() {
    const { name } = useParams();
    const province = FarmerConfig[name];
    const [apiData, setApiData] = useState([]);
    const socketRef = useRef(null); // Добавляем реф для socket

    const [loading, setLoading] = useState(true);

    if (!province) {
        return (
            <div className="flex flex-col items-center justify-center h-[70vh] p-4">
                <div className="flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-4 border border-red-100">
                    <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.694-.833-2.464 0L4.342 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                </div>
                <h2 className="text-lg font-semibold text-gray-800 text-center mb-2">
                    Маълумот топилмади
                </h2>
                <p className="text-sm text-gray-600 text-center">
                    Бу ҳудуд учун маълумот ҳали мавжуд эмас.
                </p>
            </div>
        );
    }

    // Функция для получения значения из API данных
    const getValueFromApi = (farmerName, taskName, key = "Мавсум боши") => {
        const item = apiData.find(
            (data) =>
                data.farmer === farmerName &&
                data.task === taskName &&
                data.key === key
        );
        return item ? item.value : null;
    };

    // Функция для сопоставления данных из API с структурой таблицы
    const mapApiDataToDistricts = useMemo(() => {
        const updatedDistricts = province.districts.map(district => {
            const newDistrict = { ...district };

            // Блок 1: Кузги шудгорлаш
            const seasonStart1 = getValueFromApi(district.name, "Кузги шудгорлаш");
            if (seasonStart1 !== null) {
                newDistrict.seasonStart = seasonStart1;
                const debt = parseFloat(newDistrict.existingDebt) || 0;
                const start = parseFloat(seasonStart1) || 0;
                if (debt > 0) {
                    newDistrict.percentage = ((start / debt) * 100).toFixed(1);
                }
            }

            // Блок 2: Насосларга қуёш панели ўрнатиш
            const seasonStart2 = getValueFromApi(district.name, "Насосларга қуёш панели ўрнатиш");
            if (seasonStart2 !== null) {
                newDistrict.seasonStart2 = seasonStart2;
                const debt = parseFloat(newDistrict.existingDebt2) || 0;
                const start = parseFloat(seasonStart2) || 0;
                if (debt > 0) {
                    newDistrict.percentage2 = ((start / debt) * 100).toFixed(1);
                }
            }

            // Блок 3: Ички ариқларни бетонлаштириш
            const seasonStart3 = getValueFromApi(district.name, "Ички ариқларни бетонлаштириш");
            if (seasonStart3 !== null) {
                newDistrict.seasonStart3 = seasonStart3;
                const debt = parseFloat(newDistrict.existingDebt3) || 0;
                const start = parseFloat(seasonStart3) || 0;
                if (debt > 0) {
                    newDistrict.percentage3 = ((start / debt) * 100).toFixed(1);
                }
            }

            return newDistrict;
        });

        return updatedDistricts;
    }, [apiData, province.districts]);

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
            const response = await $api.get(`farmer/${name}`);
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
                            {mapApiDataToDistricts.map((district, index) => (
                                <tr key={district.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100'}>
                                    {/* Номер и название */}
                                    <td className="sticky left-0 z-5 p-2 border border-[#212121] text-center text-gray-700 bg-gray-50">
                                        {district.id}
                                    </td>
                                    <td className="sticky left-[40px] z-5 p-2 border border-[#212121] text-gray-800 bg-gray-50 font-medium">
                                        {district.name}
                                    </td>

                                    {/* Блок 1 */}
                                    <td className="p-2 border border-[#212121] text-center text-gray-700">
                                        {district.existingDebt || '-'}
                                    </td>
                                    <td className="p-2 border border-[#212121] text-center text-gray-600">
                                        {district.oneDay || '-'}
                                    </td>
                                    <td className="p-2 border border-[#212121] text-center text-gray-600 font-medium">
                                        {district.seasonStart || '-'}
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
                                        {district.seasonStart2 || '-'}
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
                                        {district.seasonStart3 || '-'}
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
                                        {district.seasonStart || '-'}
                                    </td>
                                    <td className="p-2 border border-[#212121] text-center text-gray-700 font-medium">
                                        {district.percentage ? `${district.percentage}%` : '-'}
                                    </td>
                                </tr>
                            ))}

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

Farmer.defaultProps = {
    districts: null,
    totals: null,
    title: "Фермерлар буйича ҳисобот"
};