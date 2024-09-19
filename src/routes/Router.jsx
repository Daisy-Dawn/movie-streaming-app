import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../components/pages/Home'
import Layout from '../components/layout/Layout'
import ErrorPage from '../components/error/ErrorPage'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '',
                    element: <Home />,
                    errorElement: <ErrorPage />,
                },
            ],
        },
    ])

    return <RouterProvider router={router} />
}

export default Router
