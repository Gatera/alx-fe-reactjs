export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_KEY}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};