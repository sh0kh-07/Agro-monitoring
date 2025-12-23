import { NavLink } from "react-router-dom";
import { $api } from "../../../utils/Headers";
import { useEffect, useState, useMemo } from "react";
import Loading from "../../UI/Loadings/Loading";

export default function Viloyat() {
    const [loading, setLoading] = useState(true)
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

    // Функция для сопоставления данных из API с структурой таблицы
    const mapApiDataToDistricts = useMemo(() => {
        // Создаем копию districts
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

        // Обрабатываем данные из API
        apiData.forEach(item => {
            const mapping = taskMapping[item.task];
            
            if (!mapping) return; // Если task не найден в маппинге, пропускаем
            
            // Находим соответствующий район
            const districtIndex = updatedDistricts.findIndex(d => d.name === item.district);
            
            if (districtIndex !== -1) {
                // Если ключ "Мавсум боши", обновляем seasonStart
                if (item.key === 'Мавсум боши') {
                    updatedDistricts[districtIndex][mapping.column] = item.value;
                    
                    // Также обновляем процент
                    const debt = parseFloat(updatedDistricts[districtIndex][mapping.debtColumn]) || 0;
                    const seasonStart = parseFloat(item.value) || 0;
                    
                    if (debt > 0) {
                        const percentage = ((seasonStart / debt) * 100).toFixed(1);
                        updatedDistricts[districtIndex][mapping.percentageColumn] = percentage;
                    }
                }
                // Можно добавить обработку других ключей здесь, если нужно
            }
        });

        return updatedDistricts;
    }, [apiData]);

    // Подсчет итогов на основе обновленных данных
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
        }finally{
            setLoading(false)
        }
    };

    useEffect(() => {
        Get();
    }, []);

    if(loading){
        return(
            <Loading/>
        )
    }

    return (
        <div className=" bg-gray-50 min-h-screen">
            {/* Заголовок страницы */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Туманлар буйича ҳисобот</h1>
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
                                            <NavLink to={`/tuman/province/${district.name}`}>
                                                {district.name}
                                            </NavLink>
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
                                            {district.percentage ? `${district.percentage}%` : <span className="text-gray-400">-</span>}
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
                                            {district.percentage2 ? `${district.percentage2}%` : <span className="text-gray-400">-</span>}
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
                                            {district.percentage3 ? `${district.percentage3}%` : <span className="text-gray-400">-</span>}
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
                                            {district.percentage ? `${district.percentage}%` : <span className="text-gray-400">-</span>}
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
                                        {totals.existingDebt}
                                    </td>
                                    <td className="p-3 text-center text-gray-600 border-r border-black">
                                        -
                                    </td>
                                    <td className="p-3 text-center text-gray-600 border-r border-black">
                                        {totals.seasonStart}
                                    </td>
                                    <td className="p-3 text-center text-gray-800 border-r border-black">
                                        {totals.percentage ? `${totals.percentage}%` : '-'}
                                    </td>

                                    {/* Блок 2 итогов */}
                                    <td className="p-3 text-center text-gray-800 border-r border-black">
                                        {totals.existingDebt2}
                                    </td>
                                    <td className="p-3 text-center text-gray-600 border-r border-black">
                                        -
                                    </td>
                                    <td className="p-3 text-center text-gray-600 border-r border-black">
                                        {totals.seasonStart2}
                                    </td>
                                    <td className="p-3 text-center text-gray-800 border-r border-black">
                                        {totals.percentage2 ? `${totals.percentage2}%` : '-'}
                                    </td>

                                    {/* Блок 3 итогов */}
                                    <td className="p-3 text-center text-gray-800 border-r border-black">
                                        {totals.existingDebt3}
                                    </td>
                                    <td className="p-3 text-center text-gray-600 border-r border-black">
                                        -
                                    </td>
                                    <td className="p-3 text-center text-gray-600 border-r border-black">
                                        {totals.seasonStart3}
                                    </td>
                                    <td className="p-3 text-center text-gray-800 border-r border-black">
                                        {totals.percentage3 ? `${totals.percentage3}%` : '-'}
                                    </td>

                                    {/* Блок 4 итогов */}
                                    <td className="p-3 text-center text-gray-800 border-r border-black">
                                        {totals.existingDebt}
                                    </td>
                                    <td className="p-3 text-center text-gray-600 border-r border-black">
                                        -
                                    </td>
                                    <td className="p-3 text-center text-gray-600 border-r border-black">
                                        {totals.seasonStart}
                                    </td>
                                    <td className="p-3 text-center text-gray-800">
                                        {totals.percentage ? `${totals.percentage}%` : '-'}
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