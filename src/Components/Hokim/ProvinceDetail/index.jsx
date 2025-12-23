import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { provinceConfig } from "../Data/provinceConfig";
import { useEffect, useState, useMemo } from "react";
import { $api } from "../../../utils/Headers";

export default function ProvinceDetail() {
    const { name } = useParams();
    const province = provinceConfig[name];
    const [apiData, setApiData] = useState([]);

    if (!province) {
        return <div>Маълумот топилмади</div>;
    }

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

        // Обрабатываем данные из API
        apiData.forEach(item => {
            const mapping = taskMapping[item.task];
            
            if (!mapping) return; // Если task не найден в маппинге, пропускаем
            
            // Находим соответствующий район (используем area из API)
            const districtIndex = updatedDistricts.findIndex(d => d.name === item.area);
            
            if (districtIndex !== -1 && item.key === 'Мавсум боши') {
                // Обновляем seasonStart значением из API
                updatedDistricts[districtIndex][mapping.column] = item.value;
                
                // Также обновляем процент
                const debt = parseFloat(updatedDistricts[districtIndex][mapping.debtColumn]) || 0;
                const seasonStart = parseFloat(item.value) || 0;
                
                if (debt > 0) {
                    const percentage = ((seasonStart / debt) * 100).toFixed(1);
                    updatedDistricts[districtIndex][mapping.percentageColumn] = percentage;
                }
            }
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

        // Суммируем значения по всем районам из обновленных данных
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

        // Вычисляем проценты (Мавсум боши / Режа * 100)
        totals.percentage = totals.existingDebt > 0 
            ? ((totals.seasonStart / totals.existingDebt) * 100).toFixed(1)
            : '';
        
        totals.percentage2 = totals.existingDebt2 > 0 
            ? ((totals.seasonStart2 / totals.existingDebt2) * 100).toFixed(1)
            : '';
        
        totals.percentage3 = totals.existingDebt3 > 0 
            ? ((totals.seasonStart3 / totals.existingDebt3) * 100).toFixed(1)
            : '';

        // Форматируем числа с пробелами для тысяч
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
            const response = await $api.get(`area/${name}`);
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

    // Функция для получения значения из API для конкретного района и задачи
    const getApiValue = (districtName, taskName) => {
        const item = apiData.find(
            item => item.area === districtName && 
                   item.task === taskName && 
                   item.key === 'Мавсум боши'
        );
        return item ? item.value : null;
    };

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
                                    <th rowSpan={3} className="sticky left-0 z-20 p-3 border rounded-tl-sm text-center font-semibold text-gray-700 bg-gray-50 border-r  border-black">
                                        Т/р
                                    </th>
                                    <th rowSpan={3} className="sticky left-12 z-20 p-3 border-b text-center font-semibold text-gray-700 bg-gray-50 border-r border-black border-t min-w-[150px]">
                                        "Туманлар номи"
                                    </th>

                                    {/* Основные заголовки блоков */}
                                    <th colSpan={4} className="p-3 text-center font-medium text-gray-800 bg-blue-50 border-r  border-t border-black min-w-[250px]">
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
                                {mapApiDataToDistricts.map((district, index) => {
                                    // Получаем значения из API для каждого блока
                                    const seasonStartValue = getApiValue(district.name, 'Кузги шудгорлаш');
                                    const seasonStart2Value = getApiValue(district.name, 'Насосларга қуёш панели ўрнатиш');
                                    const seasonStart3Value = getApiValue(district.name, 'Ички ариқларни бетонлаштириш');
                                    
                                    return (
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
                                                <NavLink to={`/tuman/1/${district.name}`}>
                                                    {district.name}
                                                </NavLink>
                                            </td>

                                            {/* Блок 1 - Кузги шудгорлаш */}
                                            <td className="p-3 text-center font-medium text-gray-700 border-r border-black">
                                                {district.existingDebt || <span className="text-gray-400">-</span>}
                                            </td>
                                            <td className="p-3 text-center border-r border-black">
                                                {district.oneDay || <span className="text-gray-400">-</span>}
                                            </td>
                                            <td className="p-3 text-center border-r border-black">
                                                {seasonStartValue || <span className="text-gray-400">-</span>}
                                            </td>
                                            <td className="p-3 text-center font-medium border-r border-black">
                                                {district.percentage ? `${district.percentage}%` : <span className="text-gray-400">-</span>}
                                            </td>

                                            {/* Блок 2 - Насосларга қуёш панели ўрнатиш */}
                                            <td className="p-3 text-center font-medium text-gray-700 border-r border-black">
                                                {district.existingDebt2 || <span className="text-gray-400">-</span>}
                                            </td>
                                            <td className="p-3 text-center border-r border-black">
                                                {district.oneDay2 || <span className="text-gray-400">-</span>}
                                            </td>
                                            <td className="p-3 text-center border-r border-black">
                                                {seasonStart2Value || <span className="text-gray-400">-</span>}
                                            </td>
                                            <td className="p-3 text-center font-medium border-r border-black">
                                                {district.percentage2 ? `${district.percentage2}%` : <span className="text-gray-400">-</span>}
                                            </td>

                                            {/* Блок 3 - Ички ариқларни бетонлаштириш */}
                                            <td className="p-3 text-center font-medium text-gray-700 border-r border-black">
                                                {district.existingDebt3 || <span className="text-gray-400">-</span>}
                                            </td>
                                            <td className="p-3 text-center border-r border-black">
                                                {district.oneDay3 || <span className="text-gray-400">-</span>}
                                            </td>
                                            <td className="p-3 text-center border-r border-black">
                                                {seasonStart3Value || <span className="text-gray-400">-</span>}
                                            </td>
                                            <td className="p-3 text-center font-medium border-r border-black">
                                                {district.percentage3 ? `${district.percentage3}%` : <span className="text-gray-400">-</span>}
                                            </td>

                                            {/* Блок 4 - Ариқларни тозалаш (қўл кучида) */}
                                            <td className="p-3 text-center font-medium text-gray-700 border-r border-black">
                                                {district.existingDebt || <span className="text-gray-400">-</span>}
                                            </td>
                                            <td className="p-3 text-center border-r border-black">
                                                {district.oneDay || <span className="text-gray-400">-</span>}
                                            </td>
                                            <td className="p-3 text-center border-r border-black">
                                                {seasonStartValue || <span className="text-gray-400">-</span>}
                                            </td>
                                            <td className="p-3 text-center font-medium">
                                                {district.percentage ? `${district.percentage}%` : <span className="text-gray-400">-</span>}
                                            </td>
                                        </tr>
                                    );
                                })}

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
                                        {totalsData.percentage ? `${totalsData.percentage}%` : '-'}
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
                                        {totalsData.percentage2 ? `${totalsData.percentage2}%` : '-'}
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
                                        {totalsData.percentage3 ? `${totalsData.percentage3}%` : '-'}
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
                                        {totalsData.percentage ? `${totalsData.percentage}%` : '-'}
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

// Определение пропсов по умолчанию
ProvinceDetail.defaultProps = {
    districts: null,
    totals: null,
    title: "Туманлар буйича ҳисобот"
};