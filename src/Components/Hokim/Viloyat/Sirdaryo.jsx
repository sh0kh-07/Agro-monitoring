import React from 'react';

const Sirdayo = () => {
    const tableData = [
        {
            id: 1,
            region: "Ж.Маманов",
            isRegionSoftMerge: true,
            representativeName: "Т.Элмуродов",
            isNameSoftMerge: true,
            representativePosition: "Туман ДСИ бошлиғи",
            isPositionSoftMerge: true,
            values: [
                "27", "", "", "", "618", "91", "527", "", "", "", "", "", "", "", "", "", "", "618", "", "572", "93", "22", "", "", "", "19", "", "15.7", "83", "15", "382", "15", "371", "97", "", "-10", "31", "5,261", "4", "1,264", "24", "-27", "-3,997", "4", "", "", "", "7", "642", "", "", "", "-7", "-642", "7", "1,652", "", "-7", "-1,652", "9", "580", "", "", "", "-9", "-580", "8", "4", "3", "-5"
            ]
        },
        {
            id: 2,
            region: "У.Умаров",
            representativeName: "С.Исматуллаев",
            isNameSoftMerge: true,
            representativePosition: "Туман Агро банк бошқарувчиси",
            isPositionSoftMerge: true,
            values: [
                "", "", "", "", "466", "81", "385", "", "", "", "", "", "", "", "", "", "", "466", "", "130", "28", "13", "", "", "", "20", "", "13.4", "69", "13", "169", "13", "169", "100", "", "", "26", "4,401", "14", "2,248", "51", "-12", "-2,153", "", "", "", "", "4", "426", "", "", "", "-4", "-426", "3", "1,981", "", "-3", "-1,981", "3", "21", "", "", "", "-3", "-21", "2", "2", "2", ""
            ]
        },
        {
            id: 3,
            region: "Хакикат",
            representativeName: "С.Таджибоев",
            isNameSoftMerge: true,
            representativePosition: "Уруғчиликни рив-риш бошқармаси бошлиғи",
            isPositionSoftMerge: true,
            values: [
                "13", "", "", "", "245", "81", "165", "", "", "", "", "", "", "", "", "", "", "245", "", "119", "49", "17", "", "", "", "20", "", "15.4", "77", "25", "701", "25", "679", "97", "", "-22", "58", "9,126", "12", "2,619", "29", "-46", "-6,507", "4", "", "", "", "4", "759", "", "", "", "-4", "-759", "4", "415", "1", "56", "13", "-3", "-359", "6", "9", , "", "-6", "-9", "4", "4", "4", ""
            ]
        },
        {
            id: 4,
            region: "Синдаробод",
            isRegionSoftMerge: true,
            representativeName: "О.Абдуллаев",
            isNameSoftMerge: true,
            representativePosition: "Туман ИИБ бошлиғи",
            isPositionSoftMerge: true,
            values: [
                "23", "", "", "", "628", "", "628", "", "", "", "", "", "", "", "", "", "", "628", "", "431", "69", "29", "", "0.2", "1", "18", "", "14.3", "82", "34", "970", "34", "970", "100", "", "", "48", "10,445", "45", "10,376", "99", "-3", "-69", "5", "", "9", "790", "", "", "", "-9", "-790", "12", "2,419", "2", "78", "3", "-10", "-2,341", "21", "464", "3", "27", "6", "-18", "-437", "3", "1", "1", "-2"
            ]
        },
        {
            id: 5,
            region: "Охунбобоев",
            isRegionSoftMerge: true,
            representativeName: "Б.Исаев",
            representativePosition: "туман сув бўлими бошлиғи",
            isPositionSoftMerge: true,
            values: [
                "20", "", "", "", "615", "", "615", "20", "", "", "", "", "", "", "", "", "", "624", "", "547", "88", "28", "", "0.8", "3", "20", "", "11.8", "60", "27", "555", "26", "550", "99", "-1", "-5", "37", "6,416", "3", "1,12", "17", "-34", "-5,296", "1", "", "5", "334", "", "", "", "-5", "-334", "12", "2,16", "", "", "", "-12", "-2,16", "15", "190", "", "", "", "-15", "-190", "2", "2", "2", ""
            ]
        },
        {
            id: 6,
            region: "Янги Хаёт",
            representativeName: "З.Илёсов",
            representativePosition: "Туман Прокурори ёрдамчиси",
            isPositionSoftMerge: true,
            values: [
                "", "", "", "", "765", "", "765", "", "10", "58", "", "", "", "", "", "", "", "765", "", "715", "93", "36", "", "0.5", "1", "23", "", "18.9", "84", "27", "521", "27", "521", "100", "", "", "40", "7,064", "32", "7,506", "106", "-8", "442", "1", "", "1", "12", "", "", "", "-1", "-12", "9", "847", "3", "156", "18", "-6", "-691", "16", "170", "3", "6", "3", "-13", "-164", "4", "4", "4", ""
            ]
        },
        {
            id: 7,
            region: "Истиклол",
            representativeName: "О.Хакимов",
            isNameSoftMerge: true,
            representativePosition: "Туман ҳокимининг ўринбосари",
            isPositionSoftMerge: true,
            values: [
                "", "", "", "", "843", "", "843", "", "", "14", "", "", "", "", "", "", "", "779", "", "255", "33", "14", "", "0.6", "5", "20", "", "18.6", "95", "12", "187", "12", "187", "100", "", "", "21", "5,284", "16", "2,975", "56", "-5", "-2,309", "1", "", "2", "817", "", "", "", "-2", "-817", "5", "4,611", "2", "106", "2", "-3", "-4,505", "9", "66", "", "", "", "-9", "-66", "3", "3", "3", ""
            ]
        },
        {
            id: 8,
            region: "Янги Обод",
            isRegionSoftMerge: true,
            representativeName: "Р.Куватов",
            representativePosition: "Туман карантин бўлими бошлиғи",
            isPositionSoftMerge: true,
            values: [
                "", "", "", "", "429", "", "429", "", "", "", "", "", "", "", "", "", "", "429", "", "309", "72", "4", "", "", "", "20", "", "18.8", "96", "15", "259", "15", "259", "100", "", "", "26", "3,83", "23", "3,721", "97", "-3", "-109", "8", "", "", "", "3", "108", "", "", "", "-3", "-108", "11", "1,32", "3", "80", "6", "-8", "-1,24", "18", "81", "", "-18", "-81", "1", "1", "1", ""
            ]
        },
        {
            id: 9,
            region: "Узбекистон",
            isRegionSoftMerge: true,
            representativeName: "Ж.Умаров",
            representativePosition: "Вилоят ҚХБ бошлиғининг биринчи ўринбосари",
            isPositionSoftMerge: true,
            values: [
                "5", "", "5", "100", "481", "", "481", "", "", "101", "", "", "", "", "", "", "", "481", "", "480", "100", "20", "", "1.3", "7", "20", "", "19.4", "99", "22", "362", "22", "362", "100", "", "", "27", "5,021", "25", "4,726", "94", "-2", "-295", "6", "", "3", "199", "4", "158", "79", "1", "-41", "13", "1,986", "4", "102", "5", "-9", "-1,884", "17", "114", "1", "2", "2", "-16", "-112", "4", "3", "2", "-2"
            ]
        },
        {
            id: 10,
            region: "И.Каримов",
            isRegionSoftMerge: true,
            representativeName: "А.Турдимуродов",
            isNameSoftMerge: true,
            representativePosition: "Туман ҳокими",
            isPositionSoftMerge: true,
            values: [
                "", "", "", "", "727", "", "727", "", "62", "165", "", "", "", "", "", "", "", "790", "", "790", "100", "28", "", "3.7", "13", "21", "", "20.8", "99", "40", "609", "40", "609", "100", "", "", "41", "7,11", "41", "7,534", "106", "", "424", "1", "", "1", "5", "1", "5", "100", "", "", "18", "1,52", "6", "307", "20", "-12", "-1,213", "25", "264", "5", "20", "8", "-20", "-244", "", "", "", ""
            ]
        },
        {
            id: 11,
            region: "Хамза",
            representativeName: "Н.Беккулов",
            isNameSoftMerge: true,
            representativePosition: "Туман Фермерлар кенгаши раиси",
            isPositionSoftMerge: true,
            values: [
                "", "", "", "", "389", "", "389", "", "", "", "", "", "", "", "", "", "", "389", "", "359", "92", "19", "", "", "", "19", "", "18.5", "100", "20", "324", "21", "329", "102", "1", "5", "28", "3,649", "20", "3,823", "105", "-8", "174", "", "", "", "", "1", "6", "", "-1", "-6", "2", "496", "", "", "", "-2", "-496", "11", "251", "", "", "", "-11", "-251", "1", "", "", "-1"
            ]
        },
        {
            id: 12,
            region: "Малик",
            representativeName: "М.Назаров",
            isNameSoftMerge: true,
            representativePosition: "Вилоят Прокурорининг ўринбосари",
            isPositionSoftMerge: true,
            values: [
                "3", "", "", "", "1,71", "47", "1,663", "", "78", "226", "", "", "", "", "", "", "", "1,71", "", "1,561", "91", "25", "", "1.4", "5", "22", "", "15.5", "72", "52", "1,02", "52", "1,02", "100", "", "", "83", "15,183", "36", "9,191", "61", "-47", "-5,992", "6", "", "", "", "4", "292", "", "-4", "-292", "24", "7,617", "4", "196", "3", "-20", "-7,421", "48", "582", "6", "46", "8", "-42", "-537", "2", "2", "2", ""
            ]
        },
        {
            id: 13,
            region: "Сирдарё",
            representativeName: "И.Нематов",
            isNameSoftMerge: true,
            representativePosition: "Туман Ветеринария бўлими бошлиғи",
            isPositionSoftMerge: true,
            values: [
                "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "1,82", "", "1,82", "100", "13", "", "0.1", "1", "20", "", "8.6", "43", "3", "245", "3", "245", "100", "", "", "16", "10,638", "", "", "", "-16", "-10,638", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "1", "0", "", "", "", "-1", "0", "4", "4", "2", "-2"
            ]
        },
        {
            id: 14,
            region: "Сохил",
            representativeName: "Б.Қаршибоев",
            isNameSoftMerge: true,
            representativePosition: "Туман Агроинспекция бўлими бошлиғи",
            isPositionSoftMerge: true,
            values: [
                "", "", "", "", "85", "", "85", "", "", "", "", "", "", "", "", "", "", "830", "", "758", "91", "30", "", "1.9", "6", "21", "", "10.4", "50", "26", "604", "26", "604", "100", "", "", "53", "9,73", "", "", "", "-53", "-9,73", "3", "", "", "", "13", "732", "", "", "", "-13", "-732", "7", "486", "", "-7", "-486", "14", "173", "", "", "", "-14", "-173", "5", "2", "2", "-3"
            ]
        },
        {
            id: 15,
            region: "Шоликор",
            representativeName: "Ж.Гаппаров",
            isNameSoftMerge: true,
            representativePosition: "Туман ҚХБ мутахасисси",
            isPositionSoftMerge: true,
            values: [
                "12", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "1,869", "", "1,921", "103", "76", "", "2.8", "4", "20", "", "19.7", "98", "82", "1,788", "82", "1,788", "100", "", "", "88", "17,15", "68", "15,031", "88", "-20", "-2,119", "4", "", "", "", "3", "43", "", "", "", "-3", "-43", "", "", "", "",  "", "31", "1,49", "50", "69", "5", "19", "-1,421", "", "", "", ""
            ]
        },
        {
            id: 16,
            region: "С.Рахимов",
            isRegionSoftMerge: true,
            representativeName: "Д.Абдуллаев",
            isNameSoftMerge: true,
            representativePosition: "Вилоят УНС бош-рмаси бошлиғи",
            isPositionSoftMerge: true,
            values: [
                "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "387", "", "380", "98", "2", "", "", "", "14", "", "10.4", "75", "15", "240", "15", "240", "100", "", "", "32", "3,691", "4", "833", "23", "-28", "-2,859", "1", "", "", "", "2", "26", "", "", "", "-2", "-26", "", "", "", "", "", "", "", "", "", "", "", "", "8", "4", "4", "-4"
            ]
        },
        {
            id: 17,
            region: "Жами",
            isTotal: true,
            representativeName: "",
            representativePosition: "",
            values: [
                "101", "", "5", "4", "8", "300", "7,7", "20", "150", "564", "", "", "", "",  "", "12,829", "", "11,147", "87", "376", "", "13", "4", "312", "", "250", "80", "428", "8,934", "428", "8,901", "100", "", "-33", "655", "124", "343", "72,966", "59", "-312", "-51,034", "45", "", "", "", "62", "5,191", "5", "163", "3", "-57", "-5,028", "127", "27,509", "25", "1,081", "4", "-102", "-26,428", "244", "4,456", "68", "170", "4", "-176", "-4,287", "51", "36", "32", "-19"
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

export default Sirdayo;