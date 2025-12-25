import React from 'react';

const AgriculturalTable = () => {
    // Данные для таблицы
    const tableData = [
        {
            id: 1,
            region: "Й.Охунбобоев",
            representativeName: "Б.Ғайбуллаев",
            representativePosition: "Туман Мелиорация \nбўлими бошлиғи",
            values: [
                '', '4', '153', '', '3,2', '3,2', '', '116', '', '', '', '', '', '', '',
                '4,394', '', '3,252', '74.0', '21', '', '2.0', '9', '29', '', '19.3',
                '66.1', '2', '49', '2', '49', '100.0', '', '', '12', '3', '13', '3',
                '98.4', '1', '0', '', '', '', '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
            ]
        },
        {
            id: 2,
            region: "А.Қулбеков",
            representativeName: "С.Неъматов",
            representativePosition: "Сирдарё МЭ бошлиғи",
            values: [
                '', '', '194', '', '', '', '', '150', '', '', '', '', '', '', '',
                '', '', '', '', '', '9', '', '1.3', '14', '21', '',
                '17.4', '84.6', '2', '38', '2', '38', '100.0', '', '',
                '30', '8', '12', '3', '43.9', '-18', '-4',
                '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '', '1', '1', '', '-1'
            ]
        },
        {
            id: 3,
            region: "Ғ.Юнусов",
            representativeName: "Ш.Мухаммадиев",
            representativePosition: "Туман УНС\n участка бошлиғи",
            values: [
                '550', '6', '44', '8', '2,4', '2,4', '', '660', '', '', '', '', '', '', '',
                '2,649', '', '2,3', '86.8', '10', '', '2.4', '23', '29', '',
                '17.4', '60.8', '1', '10', '1', '10', '100.0', '', '',
                '6', '2', '14', '4', '254.4', '8', '2',
                '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '', '', '', '', "", ""
            ]
        },
        {
            id: 4,
            region: "Хўжаобод",
            representativeName: "Д.Абдунабиев",
            representativePosition: "Вилоят ХКТ ва\n ООМХ ДМ бошлиғи",
            values: [
                '', '', '95', '', '1,8', '1,8', '', '550', '', '', '', '', '', '', '',
                '1,962', '', '1,549', '79.0', '7', '', '1.3', '17', '26', '',
                '14.4', '54.7', '', '', '', '', '', '', "",
                '2', '1', '14', '4', '723.4', '12', '3',
                '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
            ]
        },
        {
            id: 5,
            region: "Чинобод",
            representativeName: "А.Умаров",
            representativePosition: "Туман ҳокими",
            values: [
                '450', '8', '152', '34', '500', '', '500', '177', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '2', '', '0.7', '34', '11', '',
                '6.9', '59.8', '3', '77', '3', '77', '100.0', '', '',
                '14', '4', '10', '2', '64.2', '-4', '-1',
                '', '', '', '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '', '1', '1', '', '-1'
            ]
        },
        {
            id: 6,
            region: "Барлос",
            representativeName: "С.Саидумаров",
            representativePosition: "Туман ҳокимининг ўринбосари",
            values: [
                '480', '', '', '', '450', '', '450', '', '', '', '', '', '', '', '',
                '', '', '', '', '5', '', '2.5', '53', '11', '',
                '6.5', '56.8', '1', '10', '1', '10', '100.0', '', '',
                '12', '3', '15', '5', '153.6', '3', '2',
                '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', "", '', '', '1', '1', '', '-1'
            ]
        },
        {
            id: 7,
            region: "Гулистон",
            representativeName: "Х.Маматқулов",
            representativePosition: "“Ўзагролизинг” \nАЖ директори",
            values: [
                '', '', '', '', '', '', '', '1,8', '', '', '', '', '', '', '',
                '1,5', '', '929', '62.0', '14', '', '2.8', '20', '24', '',
                '18.6', '77.4', '1', '342', '1', '342', '100.0', '', '',
                '6', '2', '3', '0', '24.7', '-3', '-1',
                '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '1', '1,655', '', '', '', '-1', '-1,655', '', '', '', ''
            ]
        },
        {
            id: 8,
            region: "Янгиобод",
            representativeName: "Н.Мадиев",
            representativePosition: "Туман Агроинспекция\n бўлими бошлиғи",
            values: [
                '', '', '', '', '710', '', '710', '', '', '', '', '', '', '', '',
                '861', '', '756', '87.8', '33', '', '0.5', '2', '26', '',
                '15.9', '60.5', '2', '23', '2', '23', '100.0', '', '',
                '34', '9', '5', '1', '15.2', '-29', '-8',
                '', '', '', '', '', '', '', '', '', '', '', '', "", '', '',
                '', '', '', '', '', '', '', '', '', '', '1', '1', '', '-1'
            ]
        },
        {
            id: 9,
            region: "Тошкент",
            representativeName: "С.Бўронов",
            representativePosition: 'Туман "СЕБХ" \nДМ рахбари в.б',
            values: [
                '', '', '', '#####', '588', '', '588', '3,2', '', '', '', '', '', '', '',
                '611', '', '528', '86.4', '33', '', '1.7', '5', '26', '',
                '16.0', '60.8', '2', '39', '2', '39', '100.0', '', '',
                '34', '9', '9', '2', '25.3', '-25', '-7', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', "", '', '', '4', '4', '', '-4'
            ]
        },
        {
            id: 10,
            region: "Мирзачўл",
            representativeName: "О.Ачилов",
            representativePosition: "Туман ҚХБ \nбўлими бошлиғи",
            values: [
                '1,51', '', '', '', '2,394', '550', '1,844', '', '', '', '', '', '', '', '',
                '2,414', '', '1,734', '71.8', '32', '', '2.0', '6', '28', '', '20.0', '71.3',
                '', '', '', '', '', '', '', '28', '7', '26', '5', '69.9', '-2', '-2',
                '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '5', '5', '', '-5'
            ]
        },
        {
            id: 11,
            region: "Мустақиллик",
            representativeName: "И.Юсупов",
            representativePosition: "Туман прокурори \nўринбосари",
            values: [
                '500', '7', '107', '21', '150', '50', '100', '2,95', '', '', '', '', '', '', '', '', '231', '',
                '191', '82.8', '14', '', '1.4', '10', '17', '', '8.4', '48.9', '3', '68', '3', '68', '100.0', '', '',
                '20', '5', '5', '1', '22.5', '-15', '-4', '', '', '', '', '', '', '', '', "", "", '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                '1', '1', '', '-1'
            ]
        },
        {
            id: 12,
            region: "Беруний",
            representativeName: "Д.Тошматов",
            representativePosition: "Туман ДСИ бошлиғи",
            values: [
                '300', '', '', '', '550', '550', '', '5', '', '', '', '', '', '', '', '', '615', '', '615', '100.0', '14',
                '', '1.6', '12', '19', '', '8.0', '41.1', '', '', '', '', '', '', '', '', '', '20', '5', '39', '6', '111.9', '19', '1',
                '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '4', '4', '', '-4'
            ]
        },
        {
            id: 13,
            region: "М.Улуғбек",
            representativeName: "А.Холматов",
            representativePosition: "Туман ИИБ бошлиғи",
            values: [
                '290', '8', '1,3', '448', '750', '750', '', '1,301', '', '', '', '', '', '', '', '', '995', '', '911', '91.6', '15',
                '', '2.8', '18', '21', '', '12.8', '61.9', '3', '40', '3', '40', '100.0', '', '', '22', '6', '18', '5', '93.8', '-4', '0',
                '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '4', '4', '', '-4'
            ]
        },
        {
            id: 14,
            region: "Т.Ахмедов",
            representativeName: "Н.Нурматов",
            representativePosition: "Туман Ветеринария\n бўлими бошлиғи",
            values: [
                '', '', '', '', '483', '', '483', '25', '', '', '', '', '', '', '', '983', '', '768', '78.1', '37', '', '2.9', '8', '29', '', '18.4', '64.3', '4', '201', '4', '201', '100.0', '', '', '16', '4', '12', '3', '80.9', '-4', '-1', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1', '1', '', '-1'
            ]
        },
        {
            id: 15,
            region: "Дехқонобод",
            representativeName: "Д.Ибодуллаев",
            representativePosition: "Туман Карантини\n бўлими бошлиғи",
            values: [
                '', '', '', '', '810', '', '810', '16', '', '', '', '', '', '', '', '1,114', '', '1,006', '90.3', '40', '', '2.1', '5', '29', '', '18.9', '66.0', '4', '206', '4', '206', '100.0', '', '', '27', '7', '15', '6', '87.4', '-12', '-1', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', "", '', '1', '1', '', '-1'
            ]
        },
        {
            id: 16,
            region: "Оқолтин",
            representativeName: "Т.Имомов",
            representativePosition: "Туман Агропилла\n МЧЖ рахбари",
            values: [
                '', '', '', '', '1,615', '200', '1,415', '200', '', '', '', '', '', '', '', '1,396', '', '1,073', '76.9', '37', '', '1.5', '4', '29', '', '18.1', '63.2', '3', '82', '3', '82', '100.0', '', '', '27', '7', '19', '5', '67.5', '-8', '-2', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2', '1,894', '', '', '', '-2', '-1,894', '',
            ]
        },
        {
            id: 17,
            region: "Бахор",
            representativeName: "А.Хайдаров",
            representativePosition: "Сирдарё\n Гидрометеорология бошлиғи",
            values: [
                '', '', '', '', '600', '', '600', '8', '', '', '', '', '', '', '', '775', '', '696', '89.8', '22', '', '2.0', '9', '21', '', '12.4', '60.2', '1', '15', '1', '15', '100.0', '', '', '6', '2', '4', '1', '93.9', '-2', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
            ]
        },
        {
            id: 18,
            region: "Жами",
            representativeName: "",
            representativePosition: "",
            values: [
                '', '', '', '', '4,08', '33', '2,045', '50', '17', '9,5', '7,5', '11,158', '', '', '', '', '', '', '', '20,5', '', '16,309', '80', '344', '', '31', '9', '396', '', '249', '63', '32', '1,2', '32', '1,2', '100', '', '', '316', '83', '233', '59', '71', '-83', '-24', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '3', '3,549', '', '', '', '-3', '-3,549', '24', '24', '', '-24'
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
                            <th className="s0 sticky-col col3" colSpan="2" rowSpan="3" style={{ left: '165px', top: '2px' }}>
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
                                    style={{ left: row.isTotal ? '255px' : '255px' }}
                                >
                                    {row.representativePosition.includes('\n') ? (
                                        <>
                                            {row.representativePosition.split('\n').map((line, i) => (
                                                <React.Fragment key={i}>
                                                    {line}
                                                    {i < row.representativePosition.split('\n').length - 1 && <br />}
                                                </React.Fragment>
                                            ))}
                                        </>
                                    ) : (
                                        row.representativePosition
                                    )}                                </td>

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

export default AgriculturalTable;