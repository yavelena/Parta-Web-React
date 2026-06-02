// components
import PageHeader from "../components/PageHeader";
import Panel from "../components/Panel";
import SummaryCard from "../components/SummaryCard";
import LowStockTableRow from "../components/LowStockTableRow";
import ProgressStat from "../components/ProgressStat";
import RecentMovementsTableRow from "../components/RecentMovementsTableRow";
import ReviewItem from "../components/ReviewItem";
// data 
import {
  summaryData,
  lowStockItems,
  categoryStats,
  recentMovements,
  reviewItems
} from "../data/dashboardData";


export default function DashboardPage() {

  return (
    <>

      <PageHeader title="Dashboard" description="Electronic components inventory overview" />

      <section className="grid gap-4" aria-label="Inventory summary">
        {
          summaryData.map(item => (
            <SummaryCard key={item.id} {...item} />
          ))
        }
      </section>

      <div className="layout-with-sidebar">

        <Panel
          title="Low Stock"
          subtitle={`${lowStockItems.length} items`}
          bodyClassName="no-padding"
        >
          <table className="data-table">
            <thead>
              <tr>
                <th>Part</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Threshold</th>
                <th>Locations</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {lowStockItems.map(item => (
                <LowStockTableRow key={item.id} {...item} />
              ))}
            </tbody>
          </table>
        </Panel>

        <Panel
          title="Inventory by Category"
          bodyClassName="flex-col gap-4"
        >
          {
            categoryStats.map(item => (
              <ProgressStat key={item.id} {...item} />
            ))
          }
        </Panel>

        <Panel
          title="Recent Movements"
          subtitle={`Last ${recentMovements.length} transactions`}
          bodyClassName="no-padding"
        >
          <table className="data-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Type</th>
                <th>Part</th>
                <th>Qty</th>
                <th>Location</th>
                <th>User</th>
                <th>Project</th>
              </tr>
            </thead>
            <tbody>
              {
                recentMovements.map(movement => (<RecentMovementsTableRow key={movement.id} {...movement} />))
              }
            </tbody>
          </table>
        </Panel>

        <Panel
          title="Needs Review"
          subtitle={`${reviewItems.length} items`}
        >
          <div className="flex-col gap-3">

            {
              reviewItems.map(item => (
                <ReviewItem key={item.id} {...item} />
              ))
            }

            <a href="#" className="review-link">
              Review All Items →
            </a>

          </div>

        </Panel>
      </div>
    </>
  )
}
