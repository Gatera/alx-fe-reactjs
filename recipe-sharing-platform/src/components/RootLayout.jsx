import { NavLink, Outlet } from "react-router-dom"

function RootLayout() {
  return (
    <div>
        <header>
            <nav className='flex gap-4 justify-end max-w-7xl mx-auto'>
                <h1 className='mr-auto border-b-2 border-solid border-[#FF885B] uppercase font-bold'>Recipe Sharing</h1>

                <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "text-gray-500 p-1.5" : isActive ? "bg-[#FF885B] p-1.5 rounded" : "p-1.5"}>Home</NavLink>
            </nav>
      </header>

      <main className="my-10 mx-auto max-w-7xl">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout