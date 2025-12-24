import React from 'react';

const AgriculturalTable2 = () => {
    // Данные для таблицы
    const tableData = [
        {
            id: 1,
            region: "Сардоба",
            representativeName: "Ф.Мамадалиев",
            representativePosition: "Туман Сув етказиб \n бериш хизмати ДМ директори",
            values: [
                "", "", "", "", "1,022", "", "1,022", "1,012", "", "", "", "", "", "", "", "", "", "", "", "1,616", "", "1,416", "88", "24", "", "3.7", "16", "19", "", "16.2", "84", "2", "553", "2", "553", "100", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "1", "24", "1", "24", "100", "", "", "1", "6", "", "", "", "-1", "-6", "3", "1", "2", "-1"
            ]
        },
        {
            id: 2,
            region: "Р.Мусамухаммедов",
            representativeName: "М.Эркаев",
            representativePosition: "Туман Ўсимликлар ҳимояси \n ва карантини бўлими бошлиғи",
            values: [
                "", "", "", "", "410", "", "410", "410", "", "", "", "", "", "", "", "", "", "", "", "703", "106", "665", "95", "28", "", "1.7", "6", "22", "", "8.7", "40", "1", "301", "1", "301", "100", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "1", "24", "1", "24", "100", "", "", "1", "6", "", "", "", "-1", "-6", "3", "1", "2", "-1"
            ]
        },
        {
            id: 3,
            region: "К.Укубаев",
            representativeName: "И.Олимжонов",
            representativePosition: "Туман Агроинспекция бўлими бошлиғи",
            values: [
                "", "", "", "", "1,183", "", "1,183", "1,183", "", "", "", "", "", "", "", "", "", "", "",  "1,455", "75", "1,455", "100", "5", "", "2.6", "48", "19", "", "11.7", "61", "1", "982", "1", "982", "100", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", '', "1", "1", "", "-1"
            ]
        },
        {
            id: 4,
            region: "С.Сиддиқов",
            representativeName: "Х.Бекмурадов",
            representativePosition: "Туман ИИБ бошлиғи",
            values: [
                "", "", "", "", "2,415", "47", "2,368", "1,5", "", "30", "", "", "", "", "", "",  "","","", "3,028", "81", "2,426", "80",  "", "1.2", "8", "18", "", "10.4", "57", "15", "751", "15", "751", "100", "", "", "17", "15", "10", "3", "23", "-7", "-11", "1", "", "", "", "1", "24", "", "", "", "-1", "-24", "6", "1,59", "4", "176", "11", "-2", "-1,414", "20", "726",  "-20", "-726", "3", "2", "1", "-2"
            ]
        },
        {
            id: 5,
            region: "Фарғона",
            representativeName: "Б.Мирзакулов",
            representativePosition: "Туман ҳокимининг ўринбосари",
            values: [
                "", "", "", "", "2,43", "60", "2,37", "500", "", "17", "", "", "", "", "", "", "", "", "", "2,749", "", "2,538", "92", "13", "", "0.9", "7", "20", "", "11.0", "54", "27", "1,199", "27", "1,199", "100", "", "", "26", "17", "8", "2", "14", "-18", "-15", "", "", "", "", "", "", "",  "3", "722", "2", "118", "16", "-1", "-604", "25", "845", "", "", "", "-25", "-845", "2", "2", "", "-2"
            ]
        },
        {
            id: 6,
            region: "Мустақил Диёр",
            representativeName: "З.Фармонов",
            representativePosition: "Туман Агро банк филиали бошқарувчиси",
            values: [
                "", "", "", "", "1,061", "115", "946", "67", "", "", "", "", "", "", "", "", "","", "",   "1,282", "", "1,071", "84", "4", "", "0.7", "18", "19", "", "11.1", "57", "27", "1,005", "27", "1,005", "100", "", "", "26", "9", "21", "6", "75", "-5", "-2", "5", "", "", "", "", "1", "29", "1", "28", "95", "", "-2", "19", "271", "", "",  "-19", "-271", "", "", "", "","", "", "", 
            ]
        },
        {
            id: 7,
            region: "Андижон",
            representativeName: "У.Кушбаков",
            representativePosition: "Туман Прокурори",
            values: [
                "", "", "", "", "1,203", "103", "1,1", "", "", "", "", "", "", "", "","1,509", "", "1,365", "90", "3", "", "1.5", "44", "22", "", "8.0", "37", "38", "1,241", "38", "1,241", "100", "", "", "33", "10", "19", "5", "56", "-14", "-4", "5", "", "", "", "1", "110", "", "", "", "-1", "-110", "3", "568", "2", "94", "16", "-1", "-474", "29", "780", "", "", "", "-29", "-780", "2", "2", "", "-2"
            ]
        },
        {
            id: 8,
            region: "У.Носир",
            representativeName: "Х.Сувонов",
            representativePosition: "Туман ҳокими",
            values: [
                "", "", "", "", "2,043", "267", "1,776", "", "", "", "", "", "", "", "", "", "", "", "2,533", "121", "2,022", "80", "4", "", "1.9", "44", "26", "", "10.0", "39", "54", "2,765", "54", "2,765", "100", "", "", "50", "22", "33", "12", "56", "-17", "-10", "6", "", "", "", "", "", "", "",  "11", "2,375", "7", "514", "22", "-4", "-1,861", "33", "1,467", "", "", "", "-33", "-1,467", "2", "1", "1", "-1"
            ]
        },
        {
            id: 9,
            region: "М.Улуғбек",
            representativeName: "М.Қурбонов",
            representativePosition: "Туман Ветеринария бўлими бошлиғи",
            values: [
                "", "", "", "", "724", "145", "579", "", "", "", "", "", "", "", "", "", "", "", "913", "", "769", "84", "22", "", "2.0", "9", "13", "", "8.3", "66", "23", "868", "23", "868", "100", "", "", "23", "8", "17", "5", "65", "-6", "-3", "4", "", "", "", "", "", "", "",  "9", "1,984", "3", "143", "7", "-6", "-1,841", "16", "796", "", "", "", "-16", "-796", "1", "", "1", ""
            ]
        },
        {
            id: 10,
            region: "З.М.Бобур",
            representativeName: "Т.Маматқулов",
            representativePosition: "Туман ҚҲБ ўринбосари",
            values: [
                "", "", "", "", "1,51", "598", "913", "793", "", "", "", "", "", "", "", "", "", "", "2,166", "", "1,402", "65", "25", "", "1.6", "6", "21", "", "12.1", "59", "15", "1,584", "15", "1,584", "100", "", "", "11", "3", "11", "3", "100", "", "", "", "", "", "", "", "", "", "",  "5", "534", "3", "45", "8", "-2", "-489", "9", "292", "", "", "", "-9", "-292", "1", "1", "", "-1"
            ]
        },
        {
            id: 11,
            region: "А.Тоиров",
            representativeName: "Р.Абдукодиров",
            representativePosition: "Туман ДСИ бошлиғи",
            values: [
                "", "", "", "", "1", "", "1", "1", "", "", "", "", "", "", "", "", "", "", "2,696", "", "1,309", "49", "46", "", "1.1", "2", "21", "", "9.4", "46", "4", "1,148", "4", "1,148", "100", "", "", "3", "1", "", "", "", "-3", "-1", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",  "2", "1", "", "-2"
            ]
        },
        {
            id: 12,
            region: "Жами",
            representativeName: "",
            representativePosition: "",
            isTotal: true,
            values: [
                "", "", "", "", "15", "1,334", "13,666", "6,464", "", "47", "", "", "", "", "", "20,65", "383", "16,438", "80", "190", "", "19", "10", "220", "", "117", "53", "207", "12,398", "207", "12,398", "100", "", "", "189", "83", "119", "38", "45", "-70", "-45", "21", "", "", "", "2", "134", "", "", "", "-2", "-134", "40", "7,85", "24", "1,165", "15", "-16", "-6,685", "153", "5,188", "", "", "", "-153", "-5,188", "20", "12", "7", "-13"
            ]
        }
    ];

    return (
        <div className="grid-container" dir="ltr">
            <div className="table-scroll-wrapper">
                <table className="waffle" cellSpacing="0" cellPadding="0">
                    <thead>
                        {/* Первая строка заголовков */}
                        <tr style={{ height: '20px' }}>
                            <th className="s0 sticky-col col1" rowSpan="3" style={{ left: '0px' }}>Т/р</th>
                            <th className="s0 sticky-col col2" rowSpan="3" style={{ left: '48px' }}>
                                Ҳудудлар <br /> номи
                            </th>
                            <th className="s0 sticky-col col3" colSpan="2" rowSpan="2" style={{ left: '165px', top: '2px' }}>
                                Бириктирилган вакиллар
                            </th>
                            <th className="s1" colSpan="4">Ер ўзлаштириш</th>
                            <th className="s1" colSpan="11">Шинжон усулида</th>
                            <th className="s1" colSpan="4">Кузги шудгорлаш</th>
                            <th className="s1" colSpan="4">Ички ариқларни <br /> бетонлаштириш</th>
                            <th className="s1" colSpan="4">Ариқларни тозалаш <br /> (қўл кучида)</th>
                            <th className="s1" colSpan="7">Ғаллани суғориш <br /> 1-сув</th>
                            <th className="s1" colSpan="7">Пилла шартнома тузиш</th>
                            <th className="s1" colSpan="4">Насосларга қуёш панели ўрнатиш</th>
                            <th className="s1" colSpan="7">Ғалла кредетидан қарздорлиги млн.сўм</th>
                            <th className="s1" colSpan="7">Пахта кредетидан қарздорлиги млн.сўм</th>
                            <th className="s1" colSpan="7">Сув солиғидан қарздорлик млн.сўм</th>
                            <th className="s1" colSpan="4">Судга бериш</th>
                        </tr>

                        {/* Вторая строка заголовков */}
                        <tr style={{ height: '20px' }}>
                            <td className="s0" rowSpan="2">Режа</td>
                            <td className="s0" colSpan="2">Амалда</td>
                            <td className="s0" rowSpan="2">%</td>
                            <td className="s0" rowSpan="2">Жами <br /> 2026 йил шинжон</td>
                            <td className="s0" rowSpan="2">2025 йилгача қилинган</td>
                            <td className="s0" rowSpan="2">2026 йилда режа</td>
                            <td className="s0" rowSpan="2">Ўз ҳисобидан қилина-диган майдон</td>
                            <td className="s0" colSpan="2">Сув кредитга ариза юбориш</td>
                            <td className="s0" colSpan="2">Молия-лаштириш</td>
                            <td className="s0" colSpan="2">Амалда ишга туширилди</td>
                            <td className="s0" rowSpan="2">%</td>
                            <td className="s0" rowSpan="2">Режа</td>
                            <td className="s0" colSpan="2">Амалда</td>
                            <td className="s0" rowSpan="2">%</td>
                            <td className="s0" rowSpan="2">Режа</td>
                            <td className="s0" colSpan="2">Амалда</td>
                            <td className="s0" rowSpan="2">%</td>
                            <td className="s0" rowSpan="2">Режа</td>
                            <td className="s0" colSpan="2">Амалда</td>
                            <td className="s0" rowSpan="2">%</td>
                            <td className="s0" colSpan="2">Режа</td>
                            <td className="s0" colSpan="2">Амалда</td>
                            <td className="s0" rowSpan="2">%</td>
                            <td className="s0" colSpan="2">Фарқи,<br /> +,-</td>
                            <td className="s0" colSpan="2">Режа</td>
                            <td className="s0" colSpan="2">Амалда</td>
                            <td className="s0" rowSpan="2">%</td>
                            <td className="s0" colSpan="2">Фарқи,<br /> +,-</td>
                            <td className="s0" rowSpan="2">Режа,<br /> сони</td>
                            <td className="s0" colSpan="2">Амалда</td>
                            <td className="s0" rowSpan="2">%</td>
                            <td className="s0" colSpan="2">Мавжуд қарз</td>
                            <td className="s0" colSpan="2">Амалда сўндирилди</td>
                            <td className="s0" rowSpan="2">%</td>
                            <td className="s0" colSpan="2">Қолдиқ,<br /> +,-</td>
                            <td className="s0" colSpan="2">Мавжуд қарз</td>
                            <td className="s0" colSpan="2">Амалда сўндирилди</td>
                            <td className="s0" rowSpan="2">%</td>
                            <td className="s0" colSpan="2">Қолдиқ,<br /> +,-</td>
                            <td className="s0" colSpan="2">Мавжуд</td>
                            <td className="s0" colSpan="2">Амалда тўланди</td>
                            <td className="s0" rowSpan="2">%</td>
                            <td className="s0" colSpan="2">Қолдиқ,<br /> +,-</td>
                            <td className="s0" rowSpan="2">Режа</td>
                            <td className="s0" rowSpan="2">Судга хужжат берилди</td>
                            <td className="s0" rowSpan="2">Суд қарори чиқа-рилди</td>
                            <td className="s0" rowSpan="2">Фарқи,<br /> +,-</td>
                        </tr>

                        {/* Третья строка заголовков */}
                        <tr style={{ height: '20px' }}>
                            <td style={{ left: '165px' }} className="s0 sticky-col">Ф.И.Ш</td>
                            <td style={{ left: '250px' }} className="s0 sticky-col">Лавозими</td>
                            <td className="s0">Бир <br /> кунда</td>
                            <td className="s0">Мавсум боши</td>
                            <td className="s0">Бир <br /> кунда</td>
                            <td className="s0">Мавсум боши</td>
                            <td className="s0">Бир кунда</td>
                            <td className="s0">Мавсум боши</td>
                            <td className="s0">Бир <br /> кунда</td>
                            <td className="s0">Мавсум боши</td>
                            <td className="s0">Бир <br /> кунда</td>
                            <td className="s0">Мавсум <br /> боши</td>
                            <td className="s0">Бир <br /> кунда</td>
                            <td className="s0">Мавсум <br /> боши</td>
                            <td className="s0">Бир <br /> кунда</td>
                            <td className="s0">Мавсум <br /> боши</td>
                            <td className="s0">ф/х <br /> сони</td>
                            <td className="s0">га</td>
                            <td className="s0">ф/х <br /> сони</td>
                            <td className="s0">га</td>
                            <td className="s0">ф/х <br /> сони</td>
                            <td className="s0">га</td>
                            <td className="s0">ф/х <br /> сони</td>
                            <td className="s0">тн</td>
                            <td className="s0">ф/х <br /> сони</td>
                            <td className="s0">тн</td>
                            <td className="s0">ф/х <br /> сони</td>
                            <td className="s0">тн</td>
                            <td className="s0">Бир <br /> кунда</td>
                            <td className="s0">Мавсум боши</td>
                            <td className="s0">ф/х <br /> сони</td>
                            <td className="s0">сумма</td>
                            <td className="s0">ф/х <br /> сони</td>
                            <td className="s0">сумма</td>
                            <td className="s0">ф/х <br /> сони</td>
                            <td className="s0">сумма</td>
                            <td className="s0">ф/х <br /> сони</td>
                            <td className="s0">сумма</td>
                            <td className="s0">ф/х <br /> сони</td>
                            <td className="s0">сумма</td>
                            <td className="s0">ф/х <br /> сони</td>
                            <td className="s0">сумма</td>
                            <td className="s0">ф/х <br /> сони</td>
                            <td className="s0">сумма</td>
                            <td className="s0">ф/х <br /> сони</td>
                            <td className="s0">сумма</td>
                            <td className="s0">ф/х <br /> сони</td>
                            <td className="s0">сумма</td>
                        </tr>
                    </thead>


                    <tbody>
                        {tableData.map((row, rowIndex) => (
                            <tr
                                key={row.id}
                                style={{
                                    height: row.id === 18 ? '37px' :
                                        row.id === 6 ? '50px' :
                                            row.id === 7 || row.id === 9 || row.id === 10 ? '48px' :
                                                row.id === 5 ? '44px' :
                                                    row.id === 8 || row.id === 15 || row.id === 16 || row.id === 18 ? '46px' :
                                                        row.id === 3 || row.id === 13 || row.id === 14 || row.id === 16 ? '41px' :
                                                            row.id === 2 ? '38px' : '20px'
                                }}
                            >
                                <td
                                    className={`${row.isTotal ? "s0" : "s2"} sticky-col col1`}
                                    style={{ left: '0px' }}
                                    colSpan={row.isTotal ? 2 : 1}
                                >
                                    {row.isTotal ? "Жами" : row.id}
                                </td>

                                {!row.isTotal && (
                                    <td
                                        className={`${row.isTotal ? "s0" : "s3"} sticky-col col2`}
                                        style={{ left: '48px' }}
                                    >
                                        {row.region}
                                    </td>
                                )}

                                <td
                                    className={`${row.isTotal ? "s0" : "s2"} sticky-col col3`}
                                    style={{ left: row.isTotal ? '165px' : '165px' }}
                                >
                                    {row.representativeName}
                                </td>

                                <td
                                    className={`${row.isTotal ? "s0" : "s2"} sticky-col col4`}
                                    style={{ left: row.isTotal ? '250px' : '250px' }}
                                >
                                    {row.representativePosition}
                                </td>

                                {row.values.map((value, index) => (
                                    <td
                                        key={index}
                                        className={row.isTotal ? "s6" : "s2"}
                                    >
                                        {value}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AgriculturalTable2;