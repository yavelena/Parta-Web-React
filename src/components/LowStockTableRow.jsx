import { getStockStatus } from "../utils/stockStatus";

export default function LowStockTableRow({
    id,
    part,
    category,
    stock,
    threshold,
    locations
}) {
    const status = getStockStatus(stock, threshold);
    return (
        <tr key={id}>
            <td>{part}</td>
            <td>{category}</td>
            <td>{stock}</td>
            <td>{threshold}</td>
            <td>{locations}</td>
            <td>
                <span className={status.badgeClass}>{status.label}</span>
            </td>
        </tr>
    )
}
