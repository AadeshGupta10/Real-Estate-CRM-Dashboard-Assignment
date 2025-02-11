import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { routing } from './Routes/Routing'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const routes = createBrowserRouter(
  createRoutesFromElements(
    routing
  )
)

const reactQuery = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={reactQuery}>
      <RouterProvider router={routes} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
)