import {
    getMovementBadgeClass,
    getQuantityClass,
} from "../utils/movementStyles";

import { formatSignedQuantity } from "../utils/dataFormatters";


export default function RecentMovementsTableRow({
    id,
    time,
    type,
    part,
    quantity,
    location,
    user,
    project
}) {
    const badgeClass = getMovementBadgeClass(type);
    const quantityClass = `${getQuantityClass(quantity)} font-semibold`;
    const formattedQuantity = formatSignedQuantity(quantity);

    return (
        <tr key={id}>
            <td className="text-500">{time}</td>
            <td>
                <span className={`badge-${badgeClass}`}>{type}</span>
            </td>
            <td>{part}</td>
            <td className={quantityClass}>{formattedQuantity}</td>
            <td className="text-500">{location}</td>
            <td className="text-500">{user}</td>
            <td>
                {
                    project
                        ? <a href="#" className="accent-link">{project}</a>
                        : <span className="text-400">—</span>
                }
            </td>
        </tr>
    )
}

