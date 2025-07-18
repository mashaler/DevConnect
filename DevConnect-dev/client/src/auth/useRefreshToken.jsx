import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/auth/refresh', {
            withCredentials: true
        });
        setAuth(prev => {
            return {
                ...prev,
                username: response.data.username,
                avatar: response.data.avatar,
                role: response.data.role,
                accessToken: response.data.accessToken
            }

        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;