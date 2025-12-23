import { useParams } from "react-router-dom";
import { FarmerConfig } from "../FarmerData/FarmerConfig";
import { Typography } from "@material-tailwind/react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState, useMemo } from "react";
import { $api } from "../../../utils/Headers";

export default function Farmer() {
    const { name } = useParams();
    const province = FarmerConfig[name];
    const [apiData, setApiData] = useState([]);

    if (!province) {
        return (
            <div className="flex flex-col items-center justify-center h-[70vh]">
                <div className="flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
                    <ExclamationCircleIcon className="w-10 h-10 text-red-500" />
                </div>
                <Typography variant="h5" color="red" className="text-center">
                    Маълумот топилмади
                </Typography>
                <Typography color="gray" className="text-center mt-2">
                    Бу ҳудуд учун маълумот ҳали мавжуд эмас.
                </Typography>
            </div>
        )
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
            const seasonStart1 = getValueFromApi(district.name, "Кузги шудгорлаш", "Мавсум боши");
            if (seasonStart1 !== null) {
                newDistrict.seasonStart = seasonStart1;
                const debt = parseFloat(newDistrict.existingDebt) || 0;
                const start = parseFloat(seasonStart1) || 0;
                if (debt > 0) {
                    newDistrict.percentage = ((start / debt) * 100).toFixed(1) + '%';
                }
            }
            
            // Блок 2: Насосларга қуёш панели ўрнатиш
            const seasonStart2 = getValueFromApi(district.name, "Насосларга қуёш панели ўрнатиш", "Мавсум боши");
            if (seasonStart2 !== null) {
                newDistrict.seasonStart2 = seasonStart2;
                const debt = parseFloat(newDistrict.existingDebt2) || 0;
                const start = parseFloat(seasonStart2) || 0;
                if (debt > 0) {
                    newDistrict.percentage2 = ((start / debt) * 100).toFixed(1) + '%';
                }
            }
            
            // Блок 3: Ички ариқларни бетонлаштириш
            const seasonStart3 = getValueFromApi(district.name, "Ички ариқларни бетонлаштириш", "Мавсум боши");
            if (seasonStart3 !== null) {
                newDistrict.seasonStart3 = seasonStart3;
                const debt = parseFloat(newDistrict.existingDebt3) || 0;
                const start = parseFloat(seasonStart3) || 0;
                if (debt > 0) {
                    newDistrict.percentage3 = ((start / debt) * 100).toFixed(1) + '%';
                }
            }
            
            return newDistrict;
        });

        return updatedDistricts;
    }, [apiData, province.districts]);

    // Функция для подсчета итогов на основе обновленных данных
    const calculateTotals = () => {
        let totals = {
            existingDebt: 0,
            seasonStart: 0,
            percentage: '',
            
            existingDebt2: 0,
            seasonStart2: 0,
            percentage2: '',
            
            existingDebt3: 0,
            seasonStart3: 0,
            percentage3: '',
        };

        mapApiDataToDistricts.forEach(district => {
            // Блок 1
            totals.existingDebt += parseFloat(district.existingDebt) || 0;
            totals.seasonStart += parseFloat(district.seasonStart) || 0;
            
            // Блок 2
            totals.existingDebt2 += parseFloat(district.existingDebt2) || 0;
            totals.seasonStart2 += parseFloat(district.seasonStart2) || 0;
            
            // Блок 3
            totals.existingDebt3 += parseFloat(district.existingDebt3) || 0;
            totals.seasonStart3 += parseFloat(district.seasonStart3) || 0;
        });

        // Вычисляем проценты
        totals.percentage = totals.existingDebt > 0 
            ? ((totals.seasonStart / totals.existingDebt) * 100).toFixed(1) + '%'
            : '';
        
        totals.percentage2 = totals.existingDebt2 > 0 
            ? ((totals.seasonStart2 / totals.existingDebt2) * 100).toFixed(1) + '%'
            : '';
        
        totals.percentage3 = totals.existingDebt3 > 0 
            ? ((totals.seasonStart3 / totals.existingDebt3) * 100).toFixed(1) + '%'
            : '';

        // Форматируем числа
        const formatNumber = (num) => {
            return num.toLocaleString('ru-RU', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2
            }).replace(',', '.');
        };

        return {
            existingDebt: formatNumber(totals.existingDebt),
            seasonStart: formatNumber(totals.seasonStart),
            percentage: totals.percentage,
            
            existingDebt2: formatNumber(totals.existingDebt2),
            seasonStart2: formatNumber(totals.seasonStart2),
            percentage2: totals.percentage2,
            
            existingDebt3: formatNumber(totals.existingDebt3),
            seasonStart3: formatNumber(totals.seasonStart3),
            percentage3: totals.percentage3,
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
        }
    };

    useEffect(() => {
        Get();
    }, [name]);

    const totalsData = calculateTotals();

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Заголовок страницы */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    {province.title}
                </h1>
                <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="overflow-x-auto">
                    <div className="min-w-max">
                        <table className="w-full border-collapse">
                            <thead>
                                {/* Основной заголовок строки */}
                                <tr className="border-b border-black">
                                    <th rowSpan={3} className="sticky left-0 z-20 p-3 border rounded-tl-sm text-center font-semibold text-gray-700 bg-gray-50 border-r border-black">
                                        Т/р
                                    </th>
                                    <th rowSpan={3} className="sticky left-12 z-20 p-3 border-b text-center font-semibold text-gray-700 bg-gray-50 border-r border-black border-t min-w-[150px]">
                                        "Туманлар номи"
                                    </th>

                                    {/* Основные заголовки блоков */}
                                    <th colSpan={4} className="p-3 text-center font-medium text-gray-800 bg-blue-50 border-r border-t border-black min-w-[250px]">
                                        Кузги шудгорлаш
                                    </th>

                                    <th colSpan={4} className="p-3 text-center font-medium text-gray-800 bg-blue-50 border-t border-r border-black min-w-[250px]">
                                        Насосларга қуёш панели ўрнатиш
                                    </th>

                                    <th colSpan={4} className="p-3 text-center font-medium text-gray-800 bg-blue-50 border-t border-r border-black min-w-[250px]">
                                        Ички ариқларни бетонлаштириш
                                    </th>

                                    <th colSpan={4} className="p-3 text-center font-medium text-gray-800 bg-blue-50 border-t border-r border-black min-w-[250px]">
                                        Ариқларни тозалаш (қўл кучида)
                                    </th>
                                </tr>

                                {/* Подзаголовки */}
                                <tr className="border-b border-gray-200">
                                    {/* Блок 1 */}
                                    <th rowSpan={2} className="p-2 text-center font-medium text-gray-700 border-t border-b bg-blue-100 border-r border-black min-w-[120px]">
                                        Режа
                                    </th>
                                    <th colSpan={2} className="p-2 text-center font-medium text-gray-700 border-t border-b bg-blue-100 border-r border-black">
                                        Амалда
                                    </th>
                                    <th rowSpan={2} className="p-2 text-center font-medium text-gray-700 bg-blue-100 border-b border-r border-black min-w-[70px]">
                                        %
                                    </th>

                                    {/* Блок 2 */}
                                    <th rowSpan={2} className="p-2 text-center font-medium text-gray-700 bg-blue-100 border-r border-b border-black min-w-[120px]">
                                        Режа
                                    </th>
                                    <th colSpan={2} className="p-2 text-center font-medium text-gray-700 bg-blue-100 border-r border-b border-black">
                                        Амалда
                                    </th>
                                    <th rowSpan={2} className="p-2 text-center font-medium text-gray-700 border-b bg-blue-100 border-r border-black min-w-[70px]">
                                        %
                                    </th>

                                    {/* Блок 3 */}
                                    <th rowSpan={2} className="p-2 text-center font-medium text-gray-700 border-b bg-blue-100 border-r border-black min-w-[120px]">
                                        Режа
                                    </th>
                                    <th colSpan={2} className="p-2 text-center font-medium text-gray-700 bg-blue-100 border-r border-black">
                                        Амалда
                                    </th>
                                    <th rowSpan={2} className="p-2 text-center font-medium text-gray-700 bg-blue-100 border-r border-black min-w-[70px]">
                                        %
                                    </th>

                                    {/* Блок 4 */}
                                    <th rowSpan={2} className="p-2 text-center font-medium text-gray-700 border-b bg-blue-100 border-r border-black min-w-[120px]">
                                        Режа
                                    </th>
                                    <th colSpan={2} className="p-2 text-center font-medium text-gray-700 border-b bg-blue-100 border-r border-black">
                                        Амалда
                                    </th>
                                    <th rowSpan={2} className="p-2 text-center font-medium text-gray-700 border-b border-black bg-blue-100 min-w-[70px]">
                                        %
                                    </th>
                                </tr>

                                {/* Самые внутренние заголовки */}
                                <tr className="border-b border-gray-200">
                                    {/* Блок 1 */}
                                    <th className="p-2 text-center text-sm font-normal text-gray-600 border-b bg-blue-50 border-r border-black min-w-[90px]">
                                        "Бир кунда"
                                    </th>
                                    <th className="p-2 text-center text-sm font-normal text-gray-600 border-b bg-blue-50 border-r border-black min-w-[90px]">
                                        Мавсум боши
                                    </th>

                                    {/* Блок 2 */}
                                    <th className="p-2 text-center text-sm font-normal border-b text-gray-600 bg-blue-50 border-r border-black min-w-[90px]">
                                        "Бир кунда"
                                    </th>
                                    <th className="p-2 text-center text-sm font-normal border-b text-gray-600 bg-blue-50 border-r border-black min-w-[90px]">
                                        Мавсум боши
                                    </th>

                                    {/* Блок 3 */}
                                    <th className="p-2 text-center text-sm font-normal border-b text-gray-600 bg-blue-50 border-r border-black min-w-[90px]">
                                        "Бир кунда"
                                    </th>
                                    <th className="p-2 text-center text-sm font-normal border-b text-gray-600 bg-blue-50 border-r border-black min-w-[90px]">
                                        Мавсум боши
                                    </th>

                                    {/* Блок 4 */}
                                    <th className="p-2 text-center text-sm font-normal border-b text-gray-600 bg-blue-50 border-r border-black min-w-[90px]">
                                        "Бир кунда"
                                    </th>
                                    <th className="p-2 text-center text-sm font-normal border-b text-gray-600 border-black bg-blue-50 min-w-[90px]">
                                        Мавсум боши
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {mapApiDataToDistricts.map((district, index) => (
                                    <tr
                                        key={district.id}
                                        className={`
                                            border-b border-black 
                                            ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                                            hover:bg-blue-50 transition-colors duration-150
                                        `}
                                    >
                                        {/* Статичные колонки */}
                                        <td className="sticky left-0 z-10 p-3 text-center font-medium text-gray-700 bg-gray-50 border border-black">
                                            {district.id}
                                        </td>
                                        <td className="sticky left-12 z-10 p-3 font-medium text-gray-800 bg-gray-50 border-r border-black">
                                            {district.name}
                                        </td>

                                        {/* Блок 1 */}
                                        <td className="p-3 text-center font-medium text-gray-700 border-r border-black">
                                            {district.existingDebt || <span className="text-gray-400">-</span>}
                                        </td>
                                        <td className="p-3 text-center border-r border-black">
                                            {district.oneDay || <span className="text-gray-400">-</span>}
                                        </td>
                                        <td className="p-3 text-center border-r border-black">
                                            {district.seasonStart || <span className="text-gray-400">-</span>}
                                        </td>
                                        <td className="p-3 text-center font-medium border-r border-black">
                                            {district.percentage || <span className="text-gray-400">-</span>}
                                        </td>

                                        {/* Блок 2 */}
                                        <td className="p-3 text-center font-medium text-gray-700 border-r border-black">
                                            {district.existingDebt2 || <span className="text-gray-400">-</span>}
                                        </td>
                                        <td className="p-3 text-center border-r border-black">
                                            {district.oneDay2 || <span className="text-gray-400">-</span>}
                                        </td>
                                        <td className="p-3 text-center border-r border-black">
                                            {district.seasonStart2 || <span className="text-gray-400">-</span>}
                                        </td>
                                        <td className="p-3 text-center font-medium border-r border-black">
                                            {district.percentage2 || <span className="text-gray-400">-</span>}
                                        </td>

                                        {/* Блок 3 */}
                                        <td className="p-3 text-center font-medium text-gray-700 border-r border-black">
                                            {district.existingDebt3 || <span className="text-gray-400">-</span>}
                                        </td>
                                        <td className="p-3 text-center border-r border-black">
                                            {district.oneDay3 || <span className="text-gray-400">-</span>}
                                        </td>
                                        <td className="p-3 text-center border-r border-black">
                                            {district.seasonStart3 || <span className="text-gray-400">-</span>}
                                        </td>
                                        <td className="p-3 text-center font-medium border-r border-black">
                                            {district.percentage3 || <span className="text-gray-400">-</span>}
                                        </td>

                                        {/* Блок 4 */}
                                        <td className="p-3 text-center font-medium text-gray-700 border-r border-black">
                                            {district.existingDebt || <span className="text-gray-400">-</span>}
                                        </td>
                                        <td className="p-3 text-center border-r border-black">
                                            {district.oneDay || <span className="text-gray-400">-</span>}
                                        </td>
                                        <td className="p-3 text-center border-r border-black">
                                            {district.seasonStart || <span className="text-gray-400">-</span>}
                                        </td>
                                        <td className="p-3 text-center font-medium">
                                            {district.percentage || <span className="text-gray-400">-</span>}
                                        </td>
                                    </tr>
                                ))}

                                {/* Итоговая строка */}
                                <tr className="border-t-2 border-black bg-gray-100 font-semibold">
                                    <td colSpan={2} className="sticky left-0 z-10 p-3 text-gray-800 bg-gray-100 border-r border-black">
                                        Жами
                                    </td>

                                    {/* Блок 1 итогов */}
                                    <td className="p-3 text-center text-gray-800 border-r border-black">
                                        {totalsData.existingDebt}
                                    </td>
                                    <td className="p-3 text-center text-gray-600 border-r border-black">
                                        -
                                    </td>
                                    <td className="p-3 text-center text-gray-600 border-r border-black">
                                        {totalsData.seasonStart}
                                    </td>
                                    <td className="p-3 text-center text-gray-800 border-r border-black">
                                        {totalsData.percentage || '-'}
                                    </td>

                                    {/* Блок 2 итогов */}
                                    <td className="p-3 text-center text-gray-800 border-r border-black">
                                        {totalsData.existingDebt2}
                                    </td>
                                    <td className="p-3 text-center text-gray-600 border-r border-black">
                                        -
                                    </td>
                                    <td className="p-3 text-center text-gray-600 border-r border-black">
                                        {totalsData.seasonStart2}
                                    </td>
                                    <td className="p-3 text-center text-gray-800 border-r border-black">
                                        {totalsData.percentage2 || '-'}
                                    </td>

                                    {/* Блок 3 итогов */}
                                    <td className="p-3 text-center text-gray-800 border-r border-black">
                                        {totalsData.existingDebt3}
                                    </td>
                                    <td className="p-3 text-center text-gray-600 border-r border-black">
                                        -
                                    </td>
                                    <td className="p-3 text-center text-gray-600 border-r border-black">
                                        {totalsData.seasonStart3}
                                    </td>
                                    <td className="p-3 text-center text-gray-800 border-r border-black">
                                        {totalsData.percentage3 || '-'}
                                    </td>

                                    {/* Блок 4 итогов */}
                                    <td className="p-3 text-center text-gray-800 border-r border-black">
                                        {totalsData.existingDebt}
                                    </td>
                                    <td className="p-3 text-center text-gray-600 border-r border-black">
                                        -
                                    </td>
                                    <td className="p-3 text-center text-gray-600 border-r border-black">
                                        {totalsData.seasonStart}
                                    </td>
                                    <td className="p-3 text-center text-gray-800">
                                        {totalsData.percentage || '-'}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

Farmer.defaultProps = {
    districts: null,
    totals: null,
    title: "Туманлар буйича ҳисобот"
};