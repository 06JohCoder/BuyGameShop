import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const location = useLocation();
    // const user = JSON.parse(localStorage.getItem('user'));
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
        return <Navigate to="/loginadmin" state={{ from: location }} replace />;
    }

    const currentTime = new Date().getTime();

    const isExpired = currentTime > storedUser.expireTime;
    if (isExpired) {
        localStorage.removeItem('user');
        return <Navigate to="/loginadmin" state={{ from: location }} replace />;
    }

    return children;
}
export default ProtectedRoute;
// import { useRoutes } from "react-router-dom";