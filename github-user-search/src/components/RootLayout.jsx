import { NavLink, Outlet } from "react-router-dom"

function RootLayout() {
  return (
    <div>
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="search">Search</NavLink>
            </nav>
        </header>

        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout