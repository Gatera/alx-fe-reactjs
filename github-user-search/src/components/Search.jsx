import { useState } from "react"
import { fetchUserData } from "../services/githubService"

function Search() {
    const [search, setSearch] = useState('')
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (search.trim() === '') {
            setError('Please enter a valid GitHub username.')
        }
        
        setLoading(true)
        setError('')
        setUserData(null)

        try {
            const data = await fetchUserData(search)
            setUserData(data)
        } catch (err) {
            setError('Looks like we can\'t find the user.')
        } finally {
            setLoading(false)
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Enter GitHub username:</label>
            <input
                type="text"
                required
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>

        {loading && <p>Loading...</p>}

        {error && <p>{error}</p>}

        {userData && (
            <div>
                <h2>{userData.name ? userData.name : userData.login}</h2>
                <img src={userData.avatar_url} alt={`${userData.login} avatar`} width="150" />
                <p>{userData.bio}</p>
                <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                    View GitHub Profile
                </a>
            </div>
        )}
    </div>
  )
}

export default Search