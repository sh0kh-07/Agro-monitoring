export function calcTotals(rows, tasks) {
    const totals = {};

    tasks.forEach((task) => {
        let plan = 0;
        let actual = 0;

        rows.forEach((row) => {
            plan += row.values[task.id].plan;
            actual += row.values[task.id].actual;
        });

        totals[task.id] = {
            plan,
            actual,
            percent: plan ? Math.round((actual / plan) * 100) : 0,
        };
    });

    return totals;
}
