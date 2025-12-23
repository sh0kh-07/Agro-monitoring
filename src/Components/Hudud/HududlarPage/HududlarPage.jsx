import clsx from "clsx";

import { useNavigate } from "react-router-dom";
import StickyTable from "./components/StickyTable";
import { hududlar, tasks } from "../../../data/mockData";
import { calcTotals } from "../../../utils/calcTotals";

export default function HududlarPage() {
    const navigate = useNavigate();
    const totals = calcTotals(hududlar, tasks);

    return (
        <div className="p-6 text-black">
            <h1 className="text-black text-xl font-semibold mb-4">Боёвут tumani - Hududlar bo‘yicha ishlar</h1>

            <StickyTable
            using={"hudud"}
                totals={totals}
                rows={hududlar}
                tasks={tasks}
                showTotal
                onRowClick={(row) => navigate(`/hudud/hudud/${row.id}`)}
                renderCell={(row, task) => {
                    const v = row.values[task.id];
                    const percent = Math.round((v.actual / v.plan) * 100);

                    return (
                        <>
                            <td className="border border-slate-200 px-2 py-2 text-center text-slate-700">
                                {v.plan}
                            </td>

                            <td className="border border-slate-200 px-2 py-2 text-center font-medium text-blue-700">
                                {v.actual}
                            </td>

                            <td className={clsx(
                                "border border-slate-200 px-2 py-2 text-center font-semibold",
                                percent >= 90 && "text-green-600",
                                percent >= 70 && percent < 90 && "text-yellow-600",
                                percent < 70 && "text-red-600"
                            )}>
                                {percent}%
                            </td>

                        </>
                    );
                }}
            />
        </div>
    );
}
