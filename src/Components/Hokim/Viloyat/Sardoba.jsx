import React from 'react';

const Sardoba = () => {
    // Данные для таблицы
    const tableData = [
        {
            id: 1,
            region: "Т.Малик",
            representativeName: "А.Рахимов",
            representativePosition: '"Сардоба-агро-пилла" директори',
            values: [
                '4', '', '', '', '40', '', '40', '', '', '', '', '', '', '', '', '129', '', '103', '79', '3', '', '0.2', '8', '4', '', '4.3', '98', '3', '55', '3', '55', '100', '', '', '35', '3', '4', '1', '20', '-31', '-2', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '5', '72', '1', '4', '6', '-4', '-68', '5', '2', '1', '-4'
            ]
        },
        {
            id: 2,
            region: "Ғ.Ғулом",
            representativeName: "Ш.Бекмуродов",
            representativePosition: "Туман УНС бўлими бошлиғи",
            values: [
                '281', '', '53', '19', '', '', '', '', '', '', '', '', '', '', '', '366', '', '298', '82', '', '', '', '', '2', '0.1', '1.4', '59', '7', '43', '7', '43', '100', '', '', '20', '1', '3', '0', '13', '-17', '-1', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
            ]
        },
        {
            id: 3,
            region: "Ш.Рашидов",
            representativeName: "О.Бекмуродов",
            representativePosition: "Туман МЭ бўлими бошлиғи",
            values: [
                '', '', '', '', '36', '', '36', '', '', '', '', '', '', '', '', '253', '', '203', '80', '6', '', '0.8', '13', '3', '0.1', '2.1', '67', '5', '123', '5', '123', '100', '', '', '37', '3', '6', '0', '11', '-31', '-3', '', '', '', '', '', '', '', '', '', '', '', '1', '21', '1', '21', '100', '', '', '3', '17', '2', '1', '3', '-1', '-16', '2', '', '', '-2'
            ]
        },
        {
            id: 4,
            region: "Истиқлол",
            representativeName: "Ғ.Қуроқов",
            representativePosition: "Агросаноат ривожлантириш\n агентлиги туман бўлими бошлиғи",
            values: [
                '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '204', '', '159', '78', '', '', '', '', '1', '', '0.7', '49', '6', '59', '6', '59', '100', '', '', '29', '2', '16', '1', '53', '-13', '-1', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1', '', '', '-1'
            ]
        },
        {
            id: 5,
            region: "Индорама МЧЖ",
            representativeName: "О.Самадов",
            representativePosition: "Индорама МЧЖ мутахассиси",
            values: [
                '44', '', '44', '100', '6,3', '2,807', '3,493', '3,493', '', '', '', '', '', '', '', '5,387', '', '4,224', '78', '89', '', '7.6', '9', '113', '2.0', '76.3', '67', '1', '4,865', '1', '4,865', '100', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', "", ''
            ]
        },
        {
            id: 6,
            region: "Пахтаобод",
            representativeName: "Р.Норбоев\nИ.Ибодуллаев",
            representativePosition: "Туман Прокурори, \nТуман Агроинспекция бошлиғи",
            values: [
                '144', '', '63', '44', '1,849', '468', '1,381', '38', '', '145', '', '30', '', '', '', '3,845', '', '3,129', '81', '18', '', '2.1', '12', '54', '1.0', '30.4', '56', '61', '2,006', '61', '2,006', '100', '', '', '127', '22', '60', '17', '75', '-67', '-5', '2', '', '', '', '1', '32', '1', '32', '100', '', '', '16', '2,045', '12', '586', '29', '-4', '-1,459', '44', '803', '20', '180', '22', '-24', '-624', '6', '4', '1', '-5'
            ]
        },
        {
            id: 7,
            region: "Ф.Хўжаев",
            representativeName: "Б.Санаев\nФ.Хайдаров",
            representativePosition: "Туман ИИБ бошлиғи, \nТуман Карантин бошлиғи",
            values: [
                '129', '', '37', '29', '1,108', '153', '955', '334', '', '17', '', '', '', '', '', '1,89', '', '1,485', '79', '17', '', '1.9', '11', '25', '0.8', '15.7', '63', '29', '994', '29', '994', '100', '', '', '71', '11', '42', '8', '75', '-29', '-3', '2', '', '', '', '3', '526', '', '', '', '-3', '-526', '7', '3,077', '5', '121', '4', '-2', '-2,956', '15', '336', '5', '53', '16', '-10', '-284', '9', '5', '1', '-8'
            ]
        },
        {
            id: 8,
            region: "Қўшчинор",
            representativeName: "А.Бошбеков\nА.Бўронов",
            representativePosition: "Туман ҳокимининг ўринбосари, \nТуман Сув бўлими бошлиғи",
            values: [
                '89', '', '24', '27', '1,07', '568', '502', '169', '', '15', '', '', '', '', '', '2,2', '', '1,765', '80', '18', '', '2.9', '16', '22', '0.7', '15.8', '72', '22', '827', '22', '827', '100', '', '', '63', '12', '40', '9', '75', '-23', '-3', '3', '', '', '', '3', '178', '2', '71', '40', '-1', '-107', '12', '3,359', '10', '456', '14', '-2', '-2,903', '24', '905', '5', '2', '0', '-19', '-903', '10', '5', '2', '-8'
            ]
        },
        {
            id: 9,
            region: "Дўстлик",
            representativeName: "З.Каримов\nЖ.Мисиров",
            representativePosition: "Туман ҳокими, \nТуман Ветеринария бошлиғи",
            values: [
                '48', '', '19', '39', '931', '35', '896', '359', '', '18', '', '', '', '', '', '2,179', '', '1,757', '81', '8', '', '0.9', '11', '24', '0.9', '13.6', '57', '32', '927', '32', '927', '100', '', '', '60', '9', '40', '7', '78', '-20', '-2', '3', '', '', '', '2', '175', '', '', '', '-2', '-175', '9', '1,156', '6', '135', '12', '-3', '-1,021', '21', '277', '2', '28', '10', '-19', '-249', '7', '4', '2', '-5'
            ]
        },
        {
            id: 10,
            region: "Баҳмал",
            representativeName: "Р.Примқулов\nН.Рахимов",
            representativePosition: "Вилоят Фермерлар кенгаши раиси, \nТуман Фермерлар кенгаши раиси",
            values: [
                '', '', '', '', '488', '422', '66', '14', '', '', '', '', '', '', '', '1,144', '', '922', '81', '8', '', '1.1', '14', '13', '0.6', '10.9', '85', '16', '554', '16', '554', '100', '', '', '22', '5', '14', '4', '75', '-8', '-1', '2', '', '', '', '1', '43', '', '', '', '-1', '-43', '3', '590', '3', '137', '23', '', '-453', '5', '65', '3', '25', '39', '-2', '-40', '', '', '', ''
            ]
        },
        {
            id: 11,
            region: "Узоқов",
            representativeName: "Ғ.Бекмуродов\nУ.Бердибеков",
            representativePosition: "Туман ҚХБ бошлиғи ўринбосари,\nТуман Агро банк бошқарувчиси",
            values: [
                '', '', '', '', '1,178', '48', '1,13', '600', '', '12', '', '', '', '', '', '1,804', '', '1,427', '79', '18', '', '1.7', '9', '28', '0.6', '24.3', '86', '19', '1,028', '19', '1,028', '100', '', '', '66', '14', '37', '10', '70', '-29', '-4', '8', '', '2', '25', '2', '406', '1', '55', '14', '-1', '-351', '10', '6,336', '7', '561', '9', '-3', '-5,775', '20', '1,058', '6', '25', '2', '-14', '-1,033', '10', '7', '1', '-9'
            ]
        },
        {
            id: 0,
            region: "Туман жами",
            representativeName: "",
            representativePosition: "",
            values: [
                '740', '', '240', '32.5', '13', '4,5', '8,5', '5,008', '', '207', '', '30', '', '', '', '19,4', '', '15,472', '80', '185', '', '19', '10', '291', '7', '196', '67', '201', '11,48', '201', '11,48', '100', '', '', '530', '83', '262', '57', '68.3', '-268', '-26', '20', '', '2', '10.0', '12', '1,36', '4', '158', '12', '-8', '-1,202', '58', '16,586', '44', '2,019', '12', '-14', '-14,567', '137', '3,533', '44', '317', '9', '-93', '-3,216', '50', '27', '8', '-42'
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
                            <td style={{ left: '310px' }} className="s0 sticky-col">Лавозими</td>
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
                                    style={{ left: row.isTotal ? '310px' : '310px' }}
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
                                    )}
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

export default Sardoba;