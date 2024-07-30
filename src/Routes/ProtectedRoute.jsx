/* eslint-disable react/prop-types */

import { Navigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;
