import React from 'react';

const Sirdayo = () => {
    const tableData = [
        {
            id: 1,
            region: "Пахтакор",
            representative: "Қ.Юлдашев",
            position: "Туман ҳокими",
            values: [54, "", 15, 28, "1,72", 105, "1,615", 865, "", 119, "", "", "", "", "", "1,724", "", "1,407", "81.6", 22, "", "1.8", "8.2", 22, "", "15.5", "70.5", 33, 729, 33, 729, "100", "", "", 25, 10, 24, 8, "81.0", -1, -2, 1, "", 1, "100", 20, "1,417", "", "", "", -20, "-1,417", 25, "3,346", 12, 252, 8, -13, "-3,093", 32, "1,299", 8, 157, "12.0", -24, "-1,143", 27, 22, "", -27]
        },
        {
            id: 2,
            region: "Фарход",
            representative: "Х.Абдуллаев",
            position: "Туман прокурори",
            values: [2, "", "", "", "1,196", "", "1,196", 15, "", 44, "", "", "", "", "", "1,198", "", 968, "80.8", 20, "", "1.6", "8.0", 24, "", "16.2", "67.5", 56, "1,019", 56, "1,019", "100", "", "", 41, 15, 29, 10, "70.5", -12, -4, 17, "", 17, "100", 21, "1,3", "", "", "", -21, "-1,3", 37, "6,202", 14, 229, 4, -23, "-5,973", 41, "1,094", 13, 135, "12.3", -28, -960, 5, 1, "", -5]
        },
        {
            id: 3,
            region: "А.Темур",
            representative: "А.Тўракулов",
            position: "Туман ИИБ бошлиғи",
            values: [110, "", "", "", 961, "", 961, 600, "", 38, "", "", "", "", "", 623, "", 501, "80.5", 18, "", "1.4", "7.8", 25, "", "16.7", "66.3", 21, 328, 21, 328, "100", "", "", 35, 10, 30, 7, "69.0", -5, -3, "", "", "", "", 8, 274, "", "", "", -8, -274, 27, "3,048", 2, 119, 4, -25, "-2,929", 27, 565, 2, 20, "3.5", -25, -546, 14, 8, "", -14]
        },
        {
            id: 4,
            region: "Ширин",
            representative: "Т.Қаюмов",
            position: "Туман Мелиорация бўлими бошлиғи",
            values: [2, "", "", "", 50, "", 50, "", "", "", "", "", "", "", "", 52, "", 40, "77.5", 5, "", "0.3", "6.0", 5, "", "3.2", "64.4", 8, 72, 8, 72, "100", "", "", 6, 1, 4, 1, "70.0", -2, 0, 2, "", 2, "100", 3, 114, "", "", "", -3, -114, 6, 226, 1, 5, 2, -5, -221, 7, 70, "", "", "", -7, -70, 3, 2, "", -3]
        },
        {
            id: 5,
            region: "Чамбил",
            representative: "А.Жўрабоев",
            position: "Сувназорат инспекцияси вилоят бошқармаси бошлиғи",
            values: [122, "", "", "", 181, "", 181, 10, "", "", "", "", "", "", "", 303, "", 229, "75.5", 3, "", "0.2", "6.7", 6, "", "3.3", "55.8", 15, 206, 15, 206, "100", "", "", 12, 3, 13, 2, "70.1", 1, -1, 3, "", 1, 33, 10, 309, "", "", "", -10, -309, 12, 314, 8, 195, 62, -4, -119, 12, 418, 1, 0, "0.0", -11, -418, 2, 1, "", -2]
        },
        {
            id: 6,
            region: "Бобур",
            representative: "А.Мирзабеков",
            position: "Туман ҳокимининг ўринбосари",
            values: [13, "", "", "", "", "", "", "", "", "", "", "", "", "", "", 95, "", 70, "73.6", 5, "", "0.4", "8.0", 4, "", "2.5", "60.7", 1, 5, 1, 5, "100", "", "", 24, 7, 23, 5, "74.1", -1, -2, 3, "", 1, 33, 3, 52, "", "", "", -3, -52, "", "", "", "", "", "", "", 1, 22, 1, 0, "1.3", "", -22, 4, 2, "", -4]
        },
        {
            id: 7,
            region: "Туркистон",
            representative: "О.Саидов",
            position: "Туман ҚХБ бошлиғи ўринбосари",
            values: ["1,45", "", 49, 3, 231, "", 231, "", "", 62, "", "", "", "", "", "1,681", "", "1,34", "79.7", 11, "", "0.8", "7.3", 27, "", "17.0", "62.9", 15, 240, 15, 240, "100", "", "", 22, 5, 22, 3, "72.5", "", -1, "", "", "", "", 8, 504, "", "", "", -8, -504, 9, "1,264", 2, 100, 8, -7, "-1,164", 10, 192, "", "", "", -10, -192, 4, 2, "", -4]
        },
        {
            id: 8,
            region: "Ховособод",
            representative: "Ж.Кадиров Х.Атамуратов",
            position: "Ховос дон АЖ раиси ҚХМ сифатини баҳолаш маркази",
            values: [29, "", "", "", 154, "", 154, "", "", "", "", "", "", "", "", 183, "", 151, "82.5", 7, "", "0.5", "7.1", 22, "", "14.0", "63.5", 18, 279, 18, 279, "100", "", "", 24, 4, 22, 3, "71.2", -2, -1, 2, "", "", "", 15, 655, "", "", "", -15, -655, 14, "1,097", 1, 12, 1, -13, "-1,085", 16, 367, "", "", "", -16, -367, "", "", "", ""]
        },
        {
            id: 9,
            region: "Ўзб.Муст.5 йил",
            representative: "А.Хидиров",
            position: "Вилоят ҳокимининг ўринбосари",
            values: ["1,656", "", 250, 15, "2,449", "", "2,449", "2,449", "", "", "", "", "", 312, "12.7", "3,715", "", "1,958", "52.7", 4, "", "0.5", "12.5", 3, "", "1.9", "63.3", 1, 291, 1, 291, "100", "", "", "", "", "", "", "", "", "", "", "", "", "", 1, 534, "", "", "", -1, -534, 1, 195, "", "", "", -1, -195, "", "", "", "", "", "", "", 9, "", "", -9]
        },
        {
            id: 10,
            region: "Янгиер",
            representative: "Ж.Болтаев Л.Ахмедов",
            position: "Вилоят ИИБ бошлиғи ўринбосари Туман ЎҲ ва карантини бошлиғи",
            values: [60, "", "", "", 680, "", 680, "", "", 13, "", "", "", "", "", 645, "", 517, "80.2", 20, "", "1.5", "7.5", 24, "", "14.5", "60.7", 28, 446, 28, 446, "100", "", "", 33, 11, 23, 6, "54.0", -10, -5, 3, "", 3, "100", 9, 623, 1, 9, "1.5", -8, -614, 13, 941, 6, 88, 9, -7, -853, 20, 833, "", "", "", -20, -833, 9, 6, "", -9]
        },
        {
            id: 11,
            region: "Х.Норчаев",
            representative: "У.Мамарасулов",
            position: "Вилоят Агро банк бошқарувчиси",
            values: ["", "", "", "", "1,959", "", "1,959", 35, "", 224, "", "", "", "", "", "1,959", "", "1,59", "81.2", 25, "", "2.0", "8.0", 21, "", "14.2", "67.7", 36, 762, 36, 762, "100", "", "", 18, 6, 20, 4, "61.4", 2, -2, 1, "", 1, "100", 15, 833, "", "", "", -15, -833, 19, "3,56", 7, 116, 3, -12, "-3,444", 32, "1,245", 5, 36, "2.9", -27, "-1,209", 15, 11, 3, -12]
        },
        {
            id: 12,
            region: "Хамза",
            representative: "Н.Шодиев",
            position: "Вилоят Агроинспекция бошқармаси бошлиғи",
            values: ["", "", "", "", "1,412", "", "1,412", 612, "", 31, "", "", "", "", "", "1,412", "", "1,106", "78.3", 18, "", "1.4", "7.5", 14, "", "9.5", "67.3", 27, 652, 27, 652, "100", "", "", 18, 5, 13, 4, "68.9", -5, -2, "", "", "", "", 11, "1,207", 2, 40, "3.3", -9, "-1,167", 16, "2,948", 7, 176, 6, -9, "-2,772", 24, 977, 2, 21, "2.1", -22, -956, 15, 13, 1, -14]
        },
        {
            id: 13,
            region: "Э.Каххоров",
            representative: "Н.Атақулов С.Бабаев",
            position: "Вилоят Ҳавза бошқармаси бошлиғии Туман Сув бўлими бошлиғи",
            values: [72, "", "", "", "1,007", "", "1,007", 209, "", 132, "", "", "", "", "", "1,02", "", 826, "81.0", 17, "", "5.9", "34.8", 8, "", "6.0", "74.6", 24, 451, 24, 451, "100", "", "", 22, 6, 8, 4, "69.5", -14, -2, "", "", "", "", 21, 802, 1, 9, "1.1", -20, -793, 25, "3,624", 9, 192, 5, -16, "-3,432", 30, "1,652", 4, 55, "3.3", -26, "-1,598", 16, 10, "", -16]
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
                                    {row.representative}
                                </td>

                                <td
                                    className={`${row.isTotal ? "s0" : "s2"} sticky-col col4`}
                                    style={{ left: row.isTotal ? '250px' : '250px' }}
                                >
                                    {row.position}
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