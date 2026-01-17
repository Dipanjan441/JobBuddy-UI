import { AUTHENTICATION_TYPE } from './types';
import { useAppSelector } from '../../store/hooks';
import { selectIsAuthLoggedIn } from '../auth/state/authSelector';
import { Navigate, useLocation } from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE } from './routes';

interface Props {
    children: React.ReactNode;
    guardType?: AUTHENTICATION_TYPE;
}

const RouteGuard = ({ guardType = AUTHENTICATION_TYPE.GENERAL, children }: Props) => {
    const location = useLocation();
    const isAuthenticated = useAppSelector(selectIsAuthLoggedIn);
    console.log('RouteGuard - isAuthenticated:', isAuthenticated);
    //scenario 1: User wants to access an authenticated route but is not logged in
    if (guardType === AUTHENTICATION_TYPE.AUTHENTICATE && !isAuthenticated) {
        return <Navigate to={LOGIN_ROUTE.path} state={{ from: location }} replace />
    }
    //scenario 2: User wants to access an unauthenticated route but is logged in
    if (guardType === AUTHENTICATION_TYPE.UNAUTHENTICATE && isAuthenticated) {
        const from = location.state?.from?.pathname || HOME_ROUTE.path;
        return <Navigate to={from} replace />
    }
    //scenario 3: General route or all conditions met
    return <>{children}</>;
}

export default RouteGuard
