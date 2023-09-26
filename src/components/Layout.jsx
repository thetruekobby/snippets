import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <h1 className="font-bold text-2xl my-5 border-b-2 px-5 ">
        <Link to={"/"} className="cursor-pointer">
          Home
        </Link>
      </h1>
      <Outlet />
    </>
  )
}

export default Layout
