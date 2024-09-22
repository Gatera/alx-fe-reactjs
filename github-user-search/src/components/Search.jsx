import { useState } from "react"
import { fetchUserData } from "../services/githubService"

function Search() {
    const [username, setUsername] = useState('')
    const [location, setLocation] = useState('')
    const [minRepos, setMinRepos] = useState('')
    const [usersData, setUsersData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username && !location && !minRepos) {
            setError('Please enter at least one search criterion.')
            return
        }

        setLoading(true)
        setError('')
        setUsersData([])
        setPage(1)
        setHasMore(true)

        try {
            const data = await fetchUserData({ username, location, minRepos, page: 1 });
            setUsersData(data)
            if (data.length < 30) setHasMore(false)
        } catch (err) {
            setError('An error occured. Please try again later.')
        } finally {
            setLoading(false)
        }
    }

    const loadMore = async () => {
        if (!hasMore) return;

        setLoading(true)
        setError('')

        try {
            const nextPage = page + 1
            const data = await fetchUserData({ username, location, minRepos, page: nextPage })
            setUserData((prev) => [...prev, ...data])
            setPage(nextPage)
            if (data.length < 30) setHasMore(false)
        } catch (err) {
            setError('An error occured while loading more results.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-3xl mx-auto p-4">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6 mb-6">
                <h2 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
                        <input
                            type="text"
                            placeholder="e.g., gatera"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-md"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
                        <input
                            type="text"
                            placeholder="e.g., Kigali"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-md"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Minimum Respositories</label>
                        <input
                            type="text"
                            placeholder="e.g., 10"
                            value={minRepos}
                            onChange={(e) => setMinRepos(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-md"
                        />
                    </div>
                </div>

                {error && <p>{error}</p>}

                <div className="flex items-center justify-center mt-6">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-md"
                    >
                        Search
                    </button>
                </div>
            </form>

            {loading && <p>Loading...</p>}

            {error && <p>{error}</p>}

            {usersData.length > 0 && (
                <div>
                    <h3 className="text-xl font-bold mb-4">Search Results:</h3>
                    <ul>
                        {usersData.map((user) => (
                            <li key={user.id} className="mb-6">
                                <div className="flex items-center">
                                    <img
                                        src={user.avatar_url}
                                        alt={`${user.login} avatar`}
                                        className="w-16 h-16 rounded-full mr-4"
                                    />
                                    <div>
                                        <h4 className="text-lg font-bold">{user.login}</h4>
                                        {user.name && <p>Location: {user.location}</p>}
                                        <p>Repositories: {user.public_repos}</p>
                                        <a
                                            href={user.html_url}
                                            target="_blank"
                                            rel="noopener noreferre"
                                            className="text-blue-500 hover:underline"
                                        >
                                            View GitHub Profile
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {hasMore && !loading && (
                        <div className="flex items-center justify-center mt-6">
                            <button
                                onClick={loadMore}
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow"
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Search