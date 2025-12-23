export const tasks = [
    { id: "t1", name: "Кузги шудгорлаш" },
    { id: "t2", name: "Насосларга қуёш панели ўрнатиш" },
    { id: "t3", name: "Ички ариқларни бетонлаштириш" },
    // { id: "t4", name: "Ариқларни тозалаш (қўл кучида)" },
];

export const hududlar = [
    {
        id: "1",
        name: "Т.Латипов",
        values: {
            t1: { plan: 100, actual: 40 },
            t2: { plan: 80, actual: 60 },
            t3: { plan: 50, actual: 20 },
            // t4: { plan: 50, actual: 20 },
        },
    },
    {
        id: "2",
        name: "А.Навоий",
        values: {
            t1: { plan: 120, actual: 90 },
            t2: { plan: 60, actual: 30 },
            t3: { plan: 70, actual: 50 },
            // t4: { plan: 70, actual: 50 },
        },
    },
];

export const hududFermers = {
    "1": [
        {
            id: "f1",
            name: "Сармич ўғлони",
            values: {
                t1: { plan: 40, actual: 10 },
                t2: { plan: 30, actual: 5 },
                t3: { plan: 20, actual: 8 },
            },
        },
        {
            id: "f2",
            name: "Fermer A2",
            values: {
                t1: { plan: 60, actual: 30 },
                t2: { plan: 50, actual: 20 },
                t3: { plan: 30, actual: 12 },
            },
        },
    ],
};

