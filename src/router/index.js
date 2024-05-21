
import MainLayout from '../pages/Main'
import Default from "../pages/Default";
import { createHashRouter } from 'react-router-dom'

const hashRouter = createHashRouter([
    {
        path: '/',
        element: <Default/>,
    },
    {
        path: '/main',
        element: <MainLayout/>
    },
])

export default hashRouter