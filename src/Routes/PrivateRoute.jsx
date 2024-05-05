import { ColorRing } from "react-loader-spinner";
import useAuth from "../components/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    if (user?.email) {
        return children;
    }
    if (loading) {
        <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
    }
    else <Navigate to={'/login'} replace></Navigate>
};

export default PrivateRoute;