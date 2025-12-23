import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FarmerConfig } from "../FarmerData/FarmerConfig";
export default function Farmer() {
    // Значения по умолчанию, если пропсы не переданы

    const { name } = useParams();

    const province = FarmerConfig[name];

    if (!province) {
        return <div>Маълумот топилмади</div>;
    }


    const defaultTotals = {
        existingDebt: '12 321', oneDay: '', seasonStart: '', percentage: '',
        existingDebt2: '12 321', oneDay2: '', seasonStart2: '', percentage2: '',
        existingDebt3: '12 321', oneDay3: '', seasonStart3: '', percentage3: '',
    };

    const totalsData = defaultTotals;

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
                                        Ер ўзлаштириш
                                    </th>

                                    <th colSpan={4} className="p-3 text-center font-medium text-gray-800 bg-blue-50 border-t border-r border-black min-w-[250px]">
                                        Ер ўзлаштириш
                                    </th>

                                    <th colSpan={4} className="p-3 text-center font-medium text-gray-800 bg-blue-50 border-t border-r border-black min-w-[250px]">
                                        Ер ўзлаштириш
                                    </th>

                                    <th colSpan={4} className="p-3 text-center font-medium text-gray-800 bg-blue-50 border-t border-r border-black min-w-[250px]">
                                        Ер ўзлаштириш
                                    </th>
                                </tr>

                                {/* Подзаголовки */}
                                <tr className="border-b border-gray-200">
                                    {/* Блок 1 */}
                                    <th rowSpan={2} className="p-2 text-center font-medium text-gray-700 border-t border-b bg-blue-100 border-r border-black min-w-[120px]">
                                        Мавжуд қарздорлик
                                    </th>
                                    <th colSpan={2} className="p-2 text-center font-medium text-gray-700 border-t border-b bg-blue-100 border-r border-black">
                                        Амалда
                                    </th>
                                    <th rowSpan={2} className="p-2 text-center font-medium text-gray-700 bg-blue-100 border-b border-r border-black min-w-[70px]">
                                        %
                                    </th>

                                    {/* Блок 2 */}
                                    <th rowSpan={2} className="p-2 text-center font-medium text-gray-700 bg-blue-100 border-r border-b border-black min-w-[120px]">
                                        Мавжуд қарздорлик
                                    </th>
                                    <th colSpan={2} className="p-2 text-center font-medium text-gray-700 bg-blue-100 border-r border-b border-black">
                                        Амалда
                                    </th>
                                    <th rowSpan={2} className="p-2 text-center font-medium text-gray-700 border-b bg-blue-100 border-r border-black min-w-[70px]">
                                        %
                                    </th>

                                    {/* Блок 3 */}
                                    <th rowSpan={2} className="p-2 text-center font-medium text-gray-700 border-b bg-blue-100 border-r border-black min-w-[120px]">
                                        Мавжуд қарздорлик
                                    </th>
                                    <th colSpan={2} className="p-2 text-center font-medium text-gray-700 bg-blue-100 border-r border-black">
                                        Амалда
                                    </th>
                                    <th rowSpan={2} className="p-2 text-center font-medium text-gray-700 bg-blue-100 border-r border-black min-w-[70px]">
                                        %
                                    </th>

                                    {/* Блок 4 */}
                                    <th rowSpan={2} className="p-2 text-center font-medium text-gray-700 border-b bg-blue-100 border-r border-black min-w-[120px]">
                                        Мавжуд қарздорлик
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
                                {province.districts.map((district, index) => (
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
                                        {totalsData.oneDay || '-'}
                                    </td>
                                    <td className="p-3 text-center text-gray-600 border-r border-black">
                                        {totalsData.seasonStart || '-'}
                                    </td>
                                    <td className="p-3 text-center text-gray-800 border-r border-black">
                                        {totalsData.percentage || '-'}
                                    </td>

                                    {/* Блок 2 итогов */}
                                    <td className="p-3 text-center text-gray-800 border-r border-black">
                                        {totalsData.existingDebt2}
                                    </td>
                                    <td className="p-3 text-center text-gray-600 border-r border-black">
                                        {totalsData.oneDay2 || '-'}
                                    </td>
                                    <td className="p-3 text-center text-gray-600 border-r border-black">
                                        {totalsData.seasonStart2 || '-'}
                                    </td>
                                    <td className="p-3 text-center text-gray-800 border-r border-black">
                                        {totalsData.percentage2 || '-'}
                                    </td>

                                    {/* Блок 3 итогов */}
                                    <td className="p-3 text-center text-gray-800 border-r border-black">
                                        {totalsData.existingDebt3}
                                    </td>
                                    <td className="p-3 text-center text-gray-600 border-r border-black">
                                        {totalsData.oneDay3 || '-'}
                                    </td>
                                    <td className="p-3 text-center text-gray-600 border-r border-black">
                                        {totalsData.seasonStart3 || '-'}
                                    </td>
                                    <td className="p-3 text-center text-gray-800 border-r border-black">
                                        {totalsData.percentage3 || '-'}
                                    </td>

                                    {/* Блок 4 итогов */}
                                    <td className="p-3 text-center text-gray-800 border-r border-black">
                                        {totalsData.existingDebt}
                                    </td>
                                    <td className="p-3 text-center text-gray-600 border-r border-black">
                                        {totalsData.oneDay || '-'}
                                    </td>
                                    <td className="p-3 text-center text-gray-600 border-r border-black">
                                        {totalsData.seasonStart || '-'}
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

// Определение пропсов по умолчанию
Farmer.defaultProps = {
    districts: null,
    totals: null,
    title: "Туманлар буйича ҳисобот"
};