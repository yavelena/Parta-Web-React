import { getStockStatusByLabel } from "../utils/stockStatus";
import { formatQuantity } from "../utils/dataFormatters";

export default function InventoryTableRow({
  id,
  name,
  category,
  package: packageType,
  parameters,
  qty,
  locations,
  manufacturers,
  status,
  partNumbers
}) {
  const stockStatus = getStockStatusByLabel(status);
  const manufacturersDisplay = manufacturers.join(", ");
  return (
    <tr>
      
      <td>
        <div className="table-part-name">
          {name}
        </div>
        <div className="table-part-sub text-500">
          {partNumbers} part numbers
        </div>
      </td>
      
      <td>
        <span className="table-tag">
          {category}
        </span>
      </td>
      
      <td>
        {packageType}
      </td>
      
      <td className="text-500">
        {parameters.map(param => 
          <div key={param}>{param}</div>
        )}
      </td>
      
      <td className="text-900 font-semibold">
        {formatQuantity(qty)}
      </td>
      
      <td>
        <span className="badge table-count-badge">
          {locations}
        </span>
      </td>
      
      <td className="text-500">
        {manufacturersDisplay}
      </td>
      
      <td>
        <span className={`badge ${stockStatus.class}`}>{stockStatus.label}</span>
      </td>
      
      <td>
        <a href="#" className="icon-link">View Details</a>
      </td>
    </tr>
  )
}
