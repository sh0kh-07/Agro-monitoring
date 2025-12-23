import clsx from "clsx";
import React from "react";

export default function StickyTable({
    using,
    totals,
    rows,
    tasks,
    renderCell,
    onRowClick,
    showTotal = false,
}) {
    return (
        <div className="relative h-[85vh] overflow-auto rounded-xl border border-slate-300 bg-slate-50 shadow-sm">
            <table className="border-separate border-spacing-0 min-w-max w-full text-sm">

                {/* ===== THEAD ===== */}
                <thead className="s">
                    {/* TASK GROUP HEADER */}
                    <tr>
                        <th className="stick left-0 z-50 bg-slate-900  border border-slate-700 border-b-0  px-3 py-3 w-12 text-center">
                            №
                        </th>
                        <th className="stick left-12 z-50 bg-slate-900  border border-slate-700 border-b-0  px-4 py-3 w-64 text-center">
                            {using === "hudud" ? "Hudud" : "F/X"}
                        </th>

                        {tasks.map((task) => (
                            <th
                                key={task.id}
                                colSpan={3}
                                className="bg-slate-900  border border-slate-700 px-4 py-3 text-center"
                            >
                                <span
                                    className="block truncate max-w-[220px]"
                                    title={task.name}
                                >
                                    {task.name}
                                </span>
                            </th>
                        ))}
                    </tr>

                    {/* SUB HEADER */}
                    <tr>
                        <th className="sticky left-0 z-50 bg-slate-800 border border-t-0" />
                        <th className="sticky left-12 z-50 bg-slate-800 border border-t-0" />

                        {tasks.map((task) => (
                            <React.Fragment key={task.id}>
                                <th className="text-slate-200 border border-slate-700 px-2 py-2 text-xs">
                                    Reja
                                </th>
                                <th className="text-slate-200 border border-slate-700 px-2 py-2 text-xs">
                                    Mavsum boshi
                                </th>
                                <th className="text-slate-200 border border-slate-700 px-2 py-2 text-xs">
                                    %
                                </th>
                            </React.Fragment>
                        ))}
                    </tr>
                </thead>

                {/* ===== TBODY ===== */}
                <tbody>
                    {rows.map((row, index) => (
                        <tr
                            key={row.id}
                            onClick={() => onRowClick?.(row)}
                            className={clsx(
                                "group transition-colors",
                                index % 2 === 0 ? "bg-transparent" : "bg-slate-50",
                                "hover:bg-blue-500 cursor-pointer"
                            )}
                        >
                            <td className="sticky left-0 z-30 border border-slate-200 px-3 py-2 text-center font-medium">
                                {index + 1}
                            </td>
                            <td className="sticky left-12 z-30  border border-slate-200 px-3 py-2 font-medium text-slate-800">
                                {row.name}
                            </td>

                            {tasks.map((task) => renderCell(row, task))}
                        </tr>
                    ))}
                </tbody>

                {/* ===== TOTAL ===== */}
                {showTotal && totals && (
                    <tfoot className="sticky bottom-0 z-40 bg-slate-200">
                        <tr>
                            <td
                                colSpan={2}
                                className="sticky left-0 z-50 bg-slate-200 border px-4 py-3 font-semibold"
                            >
                                JAMI
                            </td>

                            {tasks.map((task) => {
                                const t = totals[task.id];
                                return (
                                    <React.Fragment key={task.id}>
                                        <td className="border px-2 py-2 text-center font-semibold">
                                            {t.plan}
                                        </td>
                                        <td className="border px-2 py-2 text-center font-semibold text-blue-700">
                                            {t.actual}
                                        </td>
                                        <td className="border px-2 py-2 text-center font-semibold">
                                            {t.percent}%
                                        </td>
                                    </React.Fragment>
                                );
                            })}
                        </tr>
                    </tfoot>
                )}

            </table>
        </div>
    );
}
