import { Cashflow, Dashboard, HomePage, Partners, Pnl, Projects, Transactions } from 'pages'
import { createBrowserRouter } from 'react-router-dom'
import { dashboardLayout } from 'shared/layouts'

const router = createBrowserRouter([
  {path: '/', element: <HomePage />},

  {element: dashboardLayout, children: [
    {path: '/projects', element: <Projects />},
    {path: '/pnl', element: <Pnl />},
    {path: '/dashboard', element: <Dashboard />},
    {path: '/partners', element: <Partners />},
    {path: '/cashflow', element: <Cashflow />},
    {path: '/transactions', element: <Transactions />},
  ]}
])

export { router }