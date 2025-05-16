import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './layout/RootLayout';
import Home from './view/home/home';
import WorkspaceDetails from './view/workspace/workspaceDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'workspace/:workSpaceId',
                element:<WorkspaceDetails/>
            },
            
        ]
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;