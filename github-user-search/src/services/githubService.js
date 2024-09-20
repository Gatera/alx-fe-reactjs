import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
    },
})

export const fetchUsers = async ({ username, location, minRepos, page = 1 }) => {
    
    try {
        //Building the search query
        let query = ''
        if (username) query += `${username} in:login`
        if (location) query += ` location:${location}`
        if (minRepos) query += ` repos:>=${minRepos}`

        if (!query) throw new Error("No search criteria provided.");
        
        // Make API request
        const response = await api.get('/search/users', {
            params: {
                q: query.trim(),
                per_page: 30,
                page,
            },
        });

        const users = response.data.items;

        //Fetch additional user details
        const detailedUsers = await Promise.all(
            users.map(async (user) => {
                const userDetails = await api.get(`/users/${user.login}`);
                return userDetails.data;
            })
        );

        return detailedUsers;
    } catch (error) {
        console.error('Error fetching users:', error.message);
        throw error;
    }
};