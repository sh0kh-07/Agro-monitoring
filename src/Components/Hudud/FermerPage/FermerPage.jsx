import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import StickyTable from "../HududlarPage/components/StickyTable";
import { tasks, hududFermers, hududlar } from "../../../data/mockData";
import { calcTotals } from "../../../utils/calcTotals";
import { useDebouncedCallback } from "../../../hooks/useDebouncedCallback";
import { postTaskValue } from "../../../data/postTaskValue";
import clsx from "clsx";
import { ArrowLeft } from "lucide-react";

export default function FermerPage() {
    const navigate = useNavigate()
    const { id } = useParams();
    const selectedHudud = hududlar.find((h) => h.id === id)?.name
    const [rows, setRows] = useState(hududFermers[id] || []);
    const [statusMap, setStatusMap] = useState({});

    const debouncedPost = useDebouncedCallback(async (payload, cellKey) => {
        try {
            setStatusMap((p) => ({ ...p, [cellKey]: "loading" }));
            await postTaskValue(payload);
            setStatusMap((p) => ({ ...p, [cellKey]: "success" }));
        } catch {
            setStatusMap((p) => ({ ...p, [cellKey]: "error" }));
        }
    });

    const handleChange = (row, task, value) => {
        const v = String(Math.min(Number(value), row.values[task.id].plan));
        const cellKey = `${row.id}_${task.id}`;

        setRows((prev) =>
            prev.map((r) =>
                r.id === row.id
                    ? {
                        ...r,
                        values: {
                            ...r.values,
                            [task.id]: { ...r.values[task.id], actual: v },
                        },
                    }
                    : r
            )
        );

        const payload = {
            district: "Боёвут",
            area: selectedHudud,
            farmer: row.name,
            task: task.name,
            key: "Мавсум боши",
            value: v,
        };

        debouncedPost(payload, cellKey);
    };

    const totals = calcTotals(rows, tasks);

    return (
        <div className="min-h-screen bg-[#1b2a3ae6] p-6 text-white">
            <div className="flex items-center gap-8 mb-8">
                <button
                    onClick={() => navigate(-1)}
                    className="
        inline-flex items-center gap-2
        rounded-lg border border-slate-200
        px-3 py-2 text-sm font-medium
        text-slate-700 bg-transparent
        hover:bg-slate-100
        active:scale-95
        transition
      "
                >
                    <ArrowLeft size={18} />
                    <span>Ortga</span>
                </button>
                <h1 className="text-xl font-semibold mb-4">
                    {selectedHudud}  - Fermer xo‘jaliklari
                </h1>
            </div>


            <StickyTable
                rows={rows}
                tasks={tasks}
                totals={totals}
                showTotal
                renderCell={(row, task) => {
                    const v = row.values[task.id];
                    const percent = Math.round((v.actual / v.plan) * 100);
                    const cellKey = `${row.id}_${task.id}`;
                    const status = statusMap[cellKey];

                    return (
                        <>
                            {/* REJA */}
                            <td className="border border-slate-600 px-2 py-2 text-center">
                                {v.plan}
                            </td>

                            {/* INPUT */}
                            <td className="border border-slate-600 px-2 py-2 text-center">
                                <div className="relative">
                                    <input
                                        type="number"
                                        min={-1}
                                        max={v.plan}
                                        value={v.actual}
                                        onChange={(e) =>
                                            handleChange(row, task, e.target.value)
                                        }
                                        className={clsx(
                                            "w-20 bg-transparent text-white border-b outline-none text-center",
                                            status === "loading" && "border-yellow-400",
                                            status === "success" && "border-green-400",
                                            status === "error" && "border-red-400"
                                        )}
                                    />

                                    {status && (
                                        <span
                                            className={clsx(
                                                "absolute -right-3 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full",
                                                status === "loading" && "bg-yellow-400 animate-pulse",
                                                status === "success" && "bg-green-400",
                                                status === "error" && "bg-red-400"
                                            )}
                                        />
                                    )}
                                </div>
                            </td>

                            {/* FOIZ */}
                            <td className="border border-slate-600 px-2 py-2 text-center font-semibold">
                                {percent}%
                            </td>
                        </>
                    );
                }}
            />
        </div>
    );
}
