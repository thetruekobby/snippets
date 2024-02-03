import { Link, Outlet, useLocation } from "react-router-dom"

const Layout = () => {
  const { pathname } = useLocation()
  return (
    <>
      <h1
        className={`font-bold text-2xl my-5 border-b-2 px-5 ${
          pathname.includes("parallax") && "absolute bottom-0"
        }`}
      >
        <Link to={"/"} className="cursor-pointer">
          Back to Home
        </Link>
      </h1>
      <Outlet />
    </>
  )
}

export default Layout
