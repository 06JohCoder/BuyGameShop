import LayoutDefault from "../LayoutDefault";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Blog from "../pages/Blog/Blog";
import InstrucPay from "../pages/InstrucPay/InstrucPay";
import Search from "../LayoutDefault/Search/SearchTitle";
import Details from "../LayoutDefault/Details/Details";
import Silde from "../LayoutDefault/silde/silde";
import Login from "../LayoutDefault/Login/Login";
import AdminLayout from "../Admin/AdminLayout";
import ProtectedRoute from "../Admin/ProtectedRoute";
import Contact from "../LayoutDefault/Contact/Contact";
import Banner from "../Admin/Banner/Banner";


import Dashboard from "../Admin/Dashboard";

import ProductManager from "../Admin/ProductMnagement/ProductManager";
import LoginForm from "../Admin/Login/LoginForm";
import UserManagement from '../Admin/UserManagement/UserManagement';
import NewsManagement from '../Admin/NewsManagement/NewsManagement';
import ScrollToTop from "../LayoutDefault/Details/ScrollToTop";
import Introduce from "../LayoutDefault/Introduce/Introduce";

export const routes = [
    {
        path: '/',
        element: <LayoutDefault />,
        children: [
            {
                index: true, // ✅
                element: <Home />,
            },
            {
                path: 'cart', // ✅
                element: <Cart />
            },
            {
                path: 'blog', // ✅
                element: <Blog />
            },
            {
                path: 'instrucpay', // ✅
                element: <InstrucPay />
            },
            {
                path: 'search', // ✅
                element: <Search />
            },
            // Dynamic route for details

            {
                path: '/detail',
                element: <Silde />,
            },
            {
                path: '/detail/:id',
                element: <Details />,
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/contact",
                element: <Contact />
            }, {
                path: "/introduce",
                element: <Introduce />
            }


        ]
    }
    ,
    {
        path: '/admin',
        element: (
            <ProtectedRoute>
                <AdminLayout />
            </ProtectedRoute>
        ),
        children: [
            {

                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'products',
                element: <ProductManager />
            }
            ,
            {
                path: 'usermanagement',
                element: <UserManagement />
            },
            {
                path: 'newsmanagement',
                element: <NewsManagement />
            },
            {

                path: 'banner',
                element: <Banner />
            }
        ]


    }
    ,
    {
        path: "/loginadmin",
        element: <LoginForm />
    }
];
