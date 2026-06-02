import { getProgressColorClass } from "../utils/progressColor";

export default function ProgressStat({ label, value, percent })
{
    const colorClass = getProgressColorClass(percent);

    return (
        <div className="flex-col gap-2">
            <div className="row-space-between">
                <span className="text-500 font-semibold">{label}</span>
                <span className="text-900 font-semibold">{value}</span>
            </div>

            <div
                className="progress-track"
                role="progressbar"
                aria-label={label}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={percent}
            >
                <div
                    className={`progress-fill progress-${colorClass}`}
                    style={{ width: `${percent}%` }}
                />
            </div>
        </div>
    );
}