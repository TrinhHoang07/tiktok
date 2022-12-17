import Home from "~/pages/Home"
import Following from "~/pages/Following"
import Upload from "~/pages/Upload"
import { HeaderOnly } from "~/components/Layout"
const publicRoutes = [
    {
        id: 1,
        path: '/',
        component: Home
    },
    {
        id: 2,
        path: '/following',
        component: Following
    },
    {
        id: 3,
        path: '/upload',
        component: Upload,
        layout: HeaderOnly
    },
]

const privateRoutes = [

]

export {
    publicRoutes,
    privateRoutes
}