import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
    },
})

export const fetchUserData = async (username) => {
    
    try {
        const response = await api.get(`/users/${username}`)
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error.message);
        throw error;
    }
};