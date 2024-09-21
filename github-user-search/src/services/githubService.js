import axios from "axios";

export const fetchUserData = async ({ username, location, minRepos, page = 1 }) => {
    
    try {
        //Building the search query
        let query = ''
        if (username) query += `${username} in:login`
        if (location) query += ` location:${location}`
        if (minRepos) query += ` repos:>=${minRepos}`

        query = query.trim()

        if (!query) throw new Error("No search criteria provided.");
        
        const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=30&page=${page}`

        // Make API request
        const response = await axios.get(url, {
            headers: {
                Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
            },
        });

        const users = response.data.items;

        //Fetch additional user details
        const detailedUsers = await Promise.all(
            users.map(async (user) => {
                const userDetailsResponse = await axios.get(`https://api.github.com/users/${user.login}`, {
                    headers: {
                        Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
                    },
                });
                return userDetailsResponse.data;
            })
        );

        return detailedUsers;
    } catch (error) {
        console.error('Error fetching users:', error.message);
        throw error;
    }
};