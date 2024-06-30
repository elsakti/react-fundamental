import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";


import Home from "../pages/Home";
import About from "../pages/About";
import Blogs from "../pages/blogs";
import Post from "../pages/blogs/_id";
import ErrorPage from "../components/ErrorPage";

import {posts, post} from "../apis/loader";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage/>, 
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/About',
                element: <About/>
            },
            {
                path: '/Blogs',
                element: <Blogs/>,
                loader:posts
            },
            {
                path: '/Blog/:id',
                element: <Post/>,
                loader: post

            }


        ]
    },
    
])