

const PrivateRoute = ({children}) => {
    const token = localStorage.getItem('token');
    if(!token){
        window.location.href='/login'
    }
    if(token)
    return children;
};

export default PrivateRoute;