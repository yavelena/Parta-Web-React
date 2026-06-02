export const summaryData = [
  {
    id: "total-part-groups",
    title: "Total Part Groups",
    value: "2,847",
    change: "↑ +12",
    changeClass: "color-green",
    description: "Unique specifications"
  },
  {
    id: "total-stock-lots",
    title: "Total Stock Lots",
    value: "8,234",
    change: "↑ +156",
    changeClass: "color-green",
    description: "Physical inventory items"
  },
  {
    id: "total-locations",
    title: "Total Locations",
    value: "412",
    change: " 0 ",
    changeClass: "",
    description: "Rack/shelf/bin positions"
  },
  {
    id: "low-stock-items",
    title: "Low Stock Items",
    value: "24",
    change: "↓ +3",
    changeClass: "color-red",
    description: "Below threshold"
  },
  {
    id: "unverified-items",
    title: "Unverified Items",
    value: "89",
    change: "↑ -12",
    changeClass: "color-green",
    description: "Pending review"
  },
  {
    id: "movements-today",
    title: "Movements Today",
    value: "147",
    change: "↑ +24",
    changeClass: "color-green",
    description: "Transactions logged"
  }
];


export const lowStockItems = [
  {
    id: "resistor-10k-0402",
    part: "Resistor 10kΩ 1% 0402",
    category: "Resistor",
    stock: 245,
    threshold: 500,
    locations: 3,
  },
  {
    id: "capacitor-10uf-0805",
    part: "Capacitor 10μF 16V X7R 0805",
    category: "Capacitor",
    stock: 124,
    threshold: 500,
    locations: 2,
  },
  {
    id: "led-red-0805",
    part: "LED Red 0805 2mA",
    category: "LED",
    stock: 78,
    threshold: 200,
    locations: 1,
  },
  {
    id: "ic-555-timer",
    part: "IC 555 Timer DIP-8",
    category: "IC",
    stock: 15,
    threshold: 100,
    locations: 1,
  },
  {
    id: "transistor-npn-2n3904",
    part: "Transistor NPN 2N3904 TO-92",
    category: "Transistor",
    stock: 8,
    threshold: 50,
    locations: 1,
  }
];


export const categoryStats = [
  {
    id: "resistors",
    label: "Resistors",
    value: 1247,
    percent: 100
  },
  {
    id: "capacitors",
    label: "Capacitors",
    value: 892,
    percent: 72
  },
  {
    id: "ics",
    label: "ICs",
    value: 423,
    percent: 34
  },
  {
    id: "leds",
    label: "LEDs",
    value: 156,
    percent: 13
  },
  {
    id: "connectors",
    label: "Connectors",
    value: 129,
    percent: 5
  }
];

export const recentMovements = [
  {
    id: "movement-001",
    time: "14:32",
    type: "Consume",
    part: "Resistor 10kΩ 1% 0402",
    quantity: -50,
    location: "R-12-C",
    user: "M. Rodriguez",
    project: "PRJ-2847"
  },
  {
    id: "movement-002",
    time: "13:18",
    type: "Receive",
    part: "IC STM32F407VGT6",
    quantity: 25,
    location: "IC-08-A",
    user: "J. Chen",
    project: null
  },
  {
    id: "movement-003",
    time: "12:54",
    type: "Move",
    part: "Capacitor 22μF 25V 0805",
    quantity: 100,
    location: "C-23-D → C-24-A",
    user: "A. Park",
    project: null
  },
  {
    id: "movement-004",
    time: "11:45",
    type: "Consume",
    part: "Resistor 4.7kΩ 1% 0603",
    quantity: -200,
    location: "R-18-B",
    user: "S. Kumar",
    project: "PRJ-2851"
  },
  {
    id: "movement-005",
    time: "10:23",
    type: "Adjust",
    part: "LED Green 0805 2mA",
    quantity: -15,
    location: "L-05-C",
    user: "J. Chen",
    project: null
  },
  {
    id: "movement-006",
    time: "09:47",
    type: "Receive",
    part: "Connector USB-C SMT",
    quantity: 50,
    location: "CN-14-F",
    user: "A. Park",
    project: null
  }
];

export const reviewItems = [
  {
    id: "review-capacitor-0805",
    title: "Unknown Capacitor 0805",
    location: "C-45-G",
    quantity: 47,
    threshold: 10,
    date: "2026-04-10"
  },
  {
    id: "review-resistor-0603",
    title: "Resistor (unlabeled) 0603",
    location: "R-32-A",
    quantity: 23,
    threshold: 50,
    date: "2026-04-11"
  },
  {
    id: "review-ic-tssop-20",
    title: "IC (partial label) TSSOP-20",
    location: "IC-22-D",
    quantity: 1,
    threshold: 20,
    date: "2026-04-09"
  }
];