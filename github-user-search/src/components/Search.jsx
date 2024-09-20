import { useState } from "react"
import { fetchUsers } from "../services/githubService"

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

        /////////////////////////////////////////////////////

        setLoading(true)
        setError('')
        setUsersData([])
        setPage(1)
        setHasMore(true)

        try {
            const data = await fetchUsers({ username, location, minRepos, page: 1 });
            setUsersData(data)
            if (data.length < 30) setHasMore(false)
        } catch (err) {
            console.error('Error in handleSubmit:', err.message);
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
            const data = await fetchUsers({ username, location, minRepos, page: nextPage })
            setUserData((prev) => [...prev, ...data])
            setPage(nextPage)
            if (data.length < 30) setHasMore(false)
        } catch (err) {
            console.error('Error loading more users:', err.message);
            setError('An error occured while loading more results.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>GitHub User Search</h2>

                <div>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            placeholder="e.g., gatera"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Location:</label>
                        <input
                            type="text"
                            placeholder="e.g., Kigali"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Minimum Respositories</label>
                        <input
                            type="text"
                            placeholder="e.g., 10"
                            value={minRepos}
                            onChange={(e) => setMinRepos(e.target.value)}
                        />
                    </div>
                </div>

                {error && <p>{error}</p>}

                <div>
                    <button
                        type="submit"
                    >
                        Serch
                    </button>
                </div>
            </form>

            {loading && <p>Loading...</p>}

            {error && <p>{error}</p>}

            {usersData.length > 0 && (
                <div>
                    <h3>Search Results:</h3>
                    <ul>
                        {usersData.map((user) => (
                            <li key={user.id}>
                                <div>
                                    <img
                                        src={user.avatar_url}
                                        alt={`${user.login} avatar`}
                                    />
                                    <div>
                                        <h4>{user.login}</h4>
                                        {user.name && <p>Location: {user.location}</p>}
                                        <p>Repositories: {user.public_repos}</p>
                                        <a
                                            href={user.html_url}
                                            target="_blank"
                                            rel="noopener noreferre"
                                        >
                                            View GitHub Profile
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {hasMore && !loading && (
                        <div>
                            <button
                                onClick={loadMore}
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