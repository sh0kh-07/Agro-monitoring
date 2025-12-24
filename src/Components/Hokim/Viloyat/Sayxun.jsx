import React from 'react';

const Sayxun = () => {
    // Данные для таблицы
    const tableData = [
        {
            id: 1,
            region: "Фаровон",
            representativeName: "А.Раупов",
            representativePosition: "Туман бугалтеря маркази дир-ри",
            isSoftMerge: true,
            values: [
                "", "", "", "", "644", "559", "84", "", "15", "35", "", "", "", "", "", "", "", "509", "", "302", "59", "5", "", "0.2", "4", "5", "", "5.4", "105", "7", "254", "7", "254", "100", "", "", "9", "5", "6", "2", "51", "-3", "-2", "4", "", "", "", "", "", "", "", "", "1", "154", "", "", "", "-1", "-154", "3", "4", "", "", "", "-3", "-4", "", "", "", ""
            ]
        },
        {
            id: 2,
            region: "Шурузук",
            representativeName: "Ф.Султонов",
            representativePosition: "Оқолтин дон АЖ раиси",
            values: [
                "103", "", "3", "3", "987", "342", "645", "22", "53", "113", "29", "29", "", "", "", "", "", "1,296", "", "928", "72", "11", "", "0.3", "2", "5", "", "6.0", "125", "16", "329", "16", "329", "100", "", "", "20", "7", "15", "4", "51", "-5", "-3", "4", "", "2", "50", "3", "67", "1", "11", "16", "-2", "-56", "5", "1,02", "1", "223", "22", "-4", "-798", "17", "399", "", "-17", "-399", "3", "1", "", "-3"
            ]
        },
        {
            id: 3,
            region: "Пахтакор",
            representativeName: "Б.Курбанов",
            representativePosition: "Туман Прокурори",
            values: [
                "50", "", "8", "16", "777", "508", "268", "", "", "", "", "", "", "", "", "", "", "860", "", "697", "81", "33", "", "2.4", "7", "18", "", "18.9", "108", "18", "708", "18", "708", "100", "", "", "18", "8", "11", "4", "55", "-7", "-4", "2", "", "", "", "3", "410", "1", "133", "32", "-2", "-278", "8", "2,456", "", "", "", "-8", "-2,456", "13", "401", "", "-13", "-401", "2", "1", "", "-2"
            ]
        },
        {
            id: 4,
            region: "Сайхун бахори",
            isRegionSoftMerge: true,
            representativeName: "Қ.Ғиёсиддинов",
            representativePosition: "Туман Фермерлар кенгаши раиси",
            isPositionSoftMerge: true,
            values: [
                "", "", "", "", "461", "19", "442", "", "15", "27", "15", "15", "", "", "", "", "", "868", "", "743", "86", "31", "", "0.3", "1", "9", "", "13.5", "147", "25", "1,064", "25", "1,017", "96", "", "-47", "27", "9", "11", "4", "46", "-16", "-5", "2", "", "", "", "6", "538", "1", "145", "27", "-5", "-393", "16", "6,061", "7", "536", "9", "-9", "-5,525", "24", "813", "", "-24", "-813", "2", "1", "", "-2"
            ]
        },
        {
            id: 5,
            region: "Ўзбекистон",
            isRegionSoftMerge: true,
            representativeName: "Х.Қиличев",
            representativePosition: "Туман ҳокимининг ўринбосари",
            isPositionSoftMerge: true,
            values: [
                "8", "", "8", "100", "1,362", "933", "429", "", "", "40", "14", "14", "", "", "", "", "", "952", "", "767", "81", "42", "", "1.0", "2", "15", "", "16.4", "112", "24", "614", "24", "614", "100", "", "", "27", "10", "19", "6", "61", "-8", "-4", "", "", "", "", "6", "560", "1", "57", "10", "-5", "-503", "13", "3,981", "1", "68", "2", "-12", "-3,912", "18", "320", "", "-18", "-320", "1", "", "", "-1"
            ]
        },
        {
            id: 6,
            region: "Бирлашган",
            isRegionSoftMerge: true,
            representativeName: "Э.Муродқосимов",
            representativePosition: "Туман Аг-пекция бўлими бошлиғи",
            isPositionSoftMerge: true,
            values: [
                "5", "", "5", "100", "194", "81", "157", "", "15", "75", "15", "15", "", "", "", "", "", "495", "", "491", "99", "27", "", "1.1", "4", "10", "", "11.3", "112", "17", "680", "17", "680", "100", "", "", "18", "6", "10", "3", "48", "-8", "-3", "5", "", "", "", "", "", "", "", "", "", "", "", "2", "801", "2", "184", "23", "", "-618", "8", "130", "-8", "-130", "", "", "", ""
            ]
        },
        {
            id: 7,
            region: "Т.Ғуломов",
            isRegionSoftMerge: true,
            representativeName: "А.Файзуллаев",
            representativePosition: "Туман ҚХБ бошлиғи ўринбосари",
            isPositionSoftMerge: true,
            values: [
                "2", "", "2", "100", "527", "115", "412", "", "", "48", "", "", "", "", "", "", "", "652", "", "652", "100", "19", "", "0.7", "4", "10", "", "10.5", "103", "26", "555", "26", "555", "100", "", "", "24", "6", "17", "4", "65", "-7", "-2", "", "", "", "", "2", "230", "", "", "", "-2", "-230", "6", "657", "1", "35", "5", "-5", "-622", "19", "345", "", "-19", "-345", "1", "1", "", "-1"
            ]
        },
        {
            id: 8,
            region: "Қ.Султонов",
            isRegionSoftMerge: true,
            representativeName: "Д.Очилов",
            representativePosition: "Туман Сув бўлими бошлиғи",
            values: [
                "16", "", "5", "32", "321", "", "321", "", "", "24", "", "", "", "", "", "", "", "777", "", "748", "96", "19", "", "1.7", "9", "12", "", "13.2", "108", "40", "910", "40", "910", "100", "", "", "32", "8", "16", "3", "37", "-16", "-5", "6", "", "", "", "2", "49", "", "", "", "-2", "-49", "2", "141", "2", "67", "48", "", "-73", "16", "371", "", "-16", "-371", "1", "1", "", "-1"
            ]
        },
        {
            id: 9,
            region: "Ш.Рахимов",
            isRegionSoftMerge: true,
            representativeName: "К.Муллажанов",
            representativePosition: "Туман ҳокими",
            values: [
                "6", "", "1", "22", "265", "", "265", "", "", "61", "19", "36", "", "", "", "", "", "521", "", "516", "99", "17", "", "1.0", "6", "11", "", "15.4", "138", "39", "977", "39", "977", "100", "", "", "31", "7", "23", "5", "69", "-8", "-2", "4", "", "", "", "7", "295", "", "", "", "-7", "-295", "15", "1,927", "1", "30", "2", "-14", "-1,897", "25", "212", "", "-25", "-212", "3", "", "", "-3"
            ]
        },
        {
            id: 10,
            region: "Ғалаба",
            representativeName: "И.Абдуллаев",
            representativePosition: "Ўс-лар кар-ни ва ҳимояси бошқармаси бошлиғи",
            isPositionSoftMerge: true,
            values: [
                "7", "", "", "", "226", "12", "214", "35", "", "", "", "", "", "", "", "", "", "607", "", "583", "96", "22", "", "1.6", "7", "10", "", "10.5", "108", "33", "861", "33", "833", "97", "", "-29", "25", "7", "5", "3", "43", "-20", "-4", "5", "", "7", "140", "8", "579", "", "", "", "-8", "-579", "10", "2,092", "1", "20", "1", "-9", "-2,072", "21", "451", "", "-21", "-451", "2", "1", "", "-2"
            ]
        },
        {
            id: 11,
            region: "К.Сохил",
            representativeName: "С.Хамидов",
            representativePosition: "Туман Агро банк бошқарувчиси",
            isPositionSoftMerge: true,
            values: [
                "2", "", "", "", "15", "", "15", "", "", "", "", "", "", "", "", "", "", "359", "", "259", "72", "9", "", "0.8", "8", "8", "", "8.9", "108", "7", "217", "7", "198", "91", "", "-19", "10", "2", "", "0", "15", "-10", "-2", "", "", "2", "", "", "", "", "", "", "2", "557", "", "", "", "-2", "-557", "4", "286", "", "", "", "-4", "-286", "1", "1", "", "-1"
            ]
        },
        {
            id: 12,
            region: "А.Темур",
            representativeName: "Р.Умматқулов",
            representativePosition: "Туман ИИБ бошлиғи",
            values: [
                "12", "", "4", "31", "699", "263", "436", "", "", "214", "", "", "", "", "", "881", "", "716", "81", "22", "", "0.8", "4", "17", "", "19.2", "111", "20", "761", "20", "761", "100", "", "", "15", "9", "9", "4", "44", "-6", "-5", "2", "", "", "", "7", "332", "", "", "", "-7", "-332", "8", "1,142", "1", "49", "4", "-7", "-1,093", "15", "209", "", "", "", "-15", "-209", "1", "1", "", "-1"
            ]
        },
        {
            id: 13,
            region: "Гулистон",
            representativeName: "А.Эштемиров У.Хамзаев",
            representativePosition: "Сирдарёсувқурилишинвест ДМ директори ТВ ",
            isPositionSoftMerge: true,
            values: [
                "63", "", "2", "3", "650", "471", "179", "", "", "121", "", "", "", "", "", "1,344", "", "1,106", "82", "30", "", "5.0", "17", "16", "", "16.5", "102", "27", "921", "27", "916", "99", "", "-5", "35", "12", "21", "5", "43", "-14", "-7", "9", "", "2", "22", "2", "139", "", "", "", "-2", "-139", "5", "780", "1", "15", "2", "-4", "-765", "9", "107", "", "", "", "-9", "-107", "3", "2", "", "-3"
            ]
        },
        {
            id: 14,
            region: "Робот",
            representativeName: "Ш.Мухаммдов",
            representativePosition: "Туман Ветеринария бошлиғи",
            values: [
                "132", "", "", "", "", "", "", "", "", "830", "", "453", "55", "5", "", "2.0", "38", "8", "", "7.7", "103", "10", "156", "10", "156", "100", "", "", "14", "6", "9", "2", "43", "-5", "-3", "3", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "3", "341", "", "", "", "-3", "-341", "1", "", "", "-1"
            ]
        },
        {
            id: 15,
            region: "Янгиобод",
            representativeName: "А.Мавлонов",
            representativePosition: "Туман ДСИ бошлиғи",
            values: [
                "251", "", "", "", "14", "", "14", "", "", "", "", "", "", "", "", "", "", "1,484", "", "1,178", "79", "56", "", "7.9", "14", "19", "", "18.8", "102", "72", "1,665", "72", "1,531", "92", "", "-133", "61", "14", "48", "10", "69", "-13", "-4", "3", "", "5", "167", "6", "338", "", "", "", "-6", "-338", "", "", "", "", "", "25", "491", "", "", "", "-25", "-491", "", "", "", ""
            ]
        },
        {
            id: 16,
            region: "Бўстон",
            representativeName: "А.Ўсаров",
            representativePosition: "Туман ўс-лар ҳим-си ва карантини бўлими бошлиғи",
            isPositionSoftMerge: true,
            values: [
                "109", "", "", "", "859", "697", "162", "", "", "10", "", "10", "", "", "", "", "", "1,264", "", "711", "56", "16", "", "2.6", "16", "8", "", "9.0", "110", "25", "689", "25", "674", "98", "", "-15", "30", "9", "12", "4", "44", "-18", "-5", "6", "", "2", "33", "2", "127", "", "", "", "-2", "-127", "7", "658", "", "-7", "-658", "16", "597", "", "", "", "-16", "-597", "3", "3", "", "-3"
            ]
        },
        {
            id: 17,
            region: "Жами:",
            isTotal: true,
            representativeName: "",
            representativePosition: "",
            values: [
                "766", "", "38", "5", "9", "4", "5", "57", "99", "769", "92", "119", "", "", "", "", "", "13,7", "", "10,851", "79", "363", "", "29", "8", "180", "", "201", "112", "406", "11,361", "406", "11,113", "98", "", "-248", "396", "124", "232", "63", "51", "-164", "-61", "55", "", "20", "36", "54", "3,665", "4", "346", "9", "-50", "-3,319", "100", "22,426", "18", "1,226", "5", "-82", "-21,2", "236", "5,476", "", "-236", "-5,476", "24", "13", "", "-24"
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
                            <td style={{ left: '295px' }} className="s0 sticky-col">Лавозими</td>
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
                                    style={{ left: row.isTotal ? '295px' : '295px' }}
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

export default Sayxun;