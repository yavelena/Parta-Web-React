# Parta Web React

Parta Web React is a React-based inventory management web application for electronic components.

This project is a React rewrite of an earlier plain HTML, CSS, and JavaScript version of Parta. The main goal is to rebuild the web interface using modern React concepts, reusable components, routing, form handling, API integration, and clean project structure.

The application is designed for managing electronic parts, checking stock levels, searching local inventory, and searching external component data through a Digi-Key search API.

## Live Demo

GitHub Pages:

```text
https://yavelena.github.io/Parta-Web-React
```

Repository:

```text
https://github.com/yavelena/Parta-Web-React
```

## Project Goal

The goal of this project is to demonstrate practical React development skills in a real-world style application.

Instead of building the original sample Event Management project, this project applies the same required React concepts to a custom inventory management system for electronic parts.

The project demonstrates:

* Component-based UI architecture
* React Router navigation
* State management with React hooks
* Form handling and validation
* Conditional rendering
* Loading, error, empty, and success states
* API integration
* Reusable UI components
* Theme switching with Context API
* Local storage persistence
* Performance optimization with `useMemo`
* DOM interaction with `useRef`

## Tech Stack

* React
* Vite
* React Router
* JavaScript
* CSS
* CSS variables
* Local storage
* External backend API for Digi-Key search

## Main Pages

### Dashboard

The Dashboard page shows a summary of the inventory system.

It includes:

* Summary cards
* Low stock table
* Inventory by category
* Recent movements
* Items that need review

This page demonstrates component composition and reusable UI blocks.

Main components used:

* `SummaryCard`
* `Panel`
* `ProgressStat`
* `LowStockTableRow`
* `RecentMovementsTableRow`
* `ReviewItem`

### Inventory Search

The Inventory Search page allows the user to search and sort local inventory data.

Features:

* Search input
* Debounced search
* Sorting by relevance, quantity, and name
* Table rendering
* Empty state when no parts are found
* Derived data optimized with `useMemo`

React concepts used:

* `useState`
* Custom debounce hook
* `useMemo`
* Controlled input
* List rendering with keys
* Conditional rendering

### Digi-Key Search

The Digi-Key Search page allows the user to search for electronic components using a backend API.

Features:

* Search form
* Quantity, site, language, and currency fields
* Form validation
* Loading state
* API error state
* No-results state
* Results rendering
* Example query buttons
* Clear button
* External product and datasheet links

React concepts used:

* `useActionState`
* `useFormStatus`
* `useRef`
* Form actions
* Field-level validation
* Submit-level error handling
* Conditional rendering
* API service abstraction
* Component decomposition

The Digi-Key API logic is separated into a service file, so the page component is not responsible for low-level HTTP request details.

## Theme Support

The project includes a light/dark theme toggle.

Features:

* Theme button in the header
* Sun/moon icon switching
* Global theme state through Context API
* Theme saved in `localStorage`
* Theme applied through `data-theme` on the root document element
* CSS variables for light and dark colors

React concepts used:

* `createContext`
* `useContext`
* `useState`
* `useEffect`
* Local storage persistence

## React Concepts Covered

### Component Composition

The UI is split into small reusable components instead of keeping large HTML blocks inside page files.

Examples:

* `Layout`
* `Header`
* `Sidebar`
* `PageHeader`
* `Panel`
* `SummaryCard`
* `InventoryTableRow`
* `DigiKeySearchForm`
* `DigiKeyResultsBlock`
* `DigiKeyResultCard`
* `DigiKeySearchSidebar`

### Props

Components receive data and callbacks through props.

Examples:

* Passing inventory items to table rows
* Passing form actions to search forms
* Passing search results to result blocks
* Passing callback handlers to example query buttons

### State

The project uses React state for UI behavior such as:

* Mobile sidebar open/close
* Inventory search input
* Inventory sort mode
* Theme selection
* Digi-Key form state

### Form Handling

The Digi-Key Search page uses modern React form handling with `useActionState`.

The form supports:

* Validation
* Pending state
* Submit error state
* Clear action
* API result handling

### Conditional Rendering

The application conditionally renders different UI states:

* Loading spinner
* Validation errors
* API errors
* No-results block
* Search results
* Mobile sidebar overlay

### Refs

The Digi-Key page uses `useRef` to focus and update the search input when the user clicks an example query button.

### Performance Optimization

The Inventory Search page uses `useMemo` to avoid recalculating filtered and sorted inventory data on every render.

### Context API

The theme system uses React Context to provide the current theme and theme toggle function across the application.

## API Integration

The Digi-Key Search page connects to a backend endpoint:

```text
POST /api/Parts/search
```

The request sends a payload with:

```js
{
    query,
    quantity,
    site,
    language,
    currency
}
```

The response is normalized so the UI can handle both a single object and an array of results.

The API layer is separated into a service file:

```text
src/services/digiKeyApi.js
```

This keeps API logic separate from UI rendering logic.

## Project Structure

```text
src/
    actions/
        digiKeySearchAction.js

    components/
        Header.jsx
        Sidebar.jsx
        Layout.jsx
        PageHeader.jsx
        Panel.jsx
        ThemeToggle.jsx

        SummaryCard.jsx
        ProgressStat.jsx
        LowStockTableRow.jsx
        RecentMovementsTableRow.jsx
        ReviewItem.jsx

        InventoryTableRow.jsx

        DigiKeySearchForm.jsx
        DigiKeyLoadingBlock.jsx
        DigiKeyErrorBlock.jsx
        DigiKeyNoResultsBlock.jsx
        DigiKeyResultsBlock.jsx
        DigiKeyResultCard.jsx
        DigiKeyExternalLink.jsx
        DigiKeySearchSidebar.jsx

    context/
        ThemeContext.jsx

    data/
        dashboardData.js
        inventory.json

    hooks/
        useDebounce.js

    pages/
        Dashboard.jsx
        InventorySearch.jsx
        DigiKeySearchPage.jsx

    services/
        digiKeyApi.js

    utils/
        stockStatus.js
        progressColor.js
        movementStyles.js
        inventoryFormat.js
        digiKeyFormat.js
```

## How to Run Locally

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Current Status

Implemented:

* React application structure
* Routing between pages
* Layout with header and sidebar
* Dashboard page
* Inventory Search page
* Digi-Key Search page
* API integration for Digi-Key search
* Loading, error, no-results, and results states
* Reusable components
* Theme toggle
* Local storage theme persistence
* Debounced search
* `useMemo` optimization for inventory filtering and sorting
* `useRef` example query interaction

Still planned:

* Add Part or Edit Part workflow
* `useReducer` example for a multi-step flow
* Portal-based modal or toast notification
* Additional responsive polish
* More complete dark theme styling
* Final cleanup before submission

## Notes

This is an educational React project. The focus is not only on the final UI, but also on learning how to move from plain HTML, CSS, and JavaScript to a structured React application.

The project intentionally demonstrates common React patterns step by step:

* Breaking UI into components
* Moving logic out of page components
* Separating API services from rendering
* Using state only where needed
* Keeping derived data as derived data
* Choosing React tools based on the problem instead of using every tool everywhere
