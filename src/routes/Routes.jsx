import { createBrowserRouter } from "react-router-dom";

import NotFound from "../NotFound";
import Main from "../layout/Main";
import Dashboard from "../Dashboard";
import Login from "../components/login/Login";
import Registration from "../components/registration/Registration";
import CashIn from "../components/cashin/CashIn";
import CashOut from "../components/cashout/CashOut";
import SendMoney from "../components/sendmoney/SendMoney";
import Transactions from "../components/transactions/Transactions";
import PrivateRoute from "../components/private/PrivateRoute";
// import PrivateRoute from "../components/private/PrivateRoute";

export const router = createBrowserRouter([{

        path:'/',
        element:<Main></Main>,
        errorElement:<NotFound />,
        children:[
            {
            path:'/',
            element:<Dashboard />
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            
            {
                path:'/register',
                element:<Registration></Registration>
            },
            
            {
                path:'/transactions',
                element:<PrivateRoute><Transactions></Transactions></PrivateRoute>
            },
            
            {
                path:'/cashin',
                element:<PrivateRoute><CashIn></CashIn></PrivateRoute>
            },

            {
                path:'/cashout',
                element:<PrivateRoute><CashOut></CashOut></PrivateRoute>
            },
            
            {
                path:'/sendmoney',
                element:<PrivateRoute><SendMoney></SendMoney></PrivateRoute>
            },
            
           

            
        ]
    }
])