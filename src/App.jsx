import { Route, Routes, useLocation } from "react-router-dom"
import Layout from "./components/Layout"
import { useUpdateTitle } from "./hooks/useUpdateTitle"
import { routes } from "./data"

function App() {
  const { pathname } = useLocation()
  const updateTitle = useUpdateTitle()
  updateTitle(pathname.slice(1))

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {routes.map((route, i) => (
            <Route key={i} path={route.name} element={route.component} />
          ))}
        </Route>
      </Routes>
    </>
  )
}

export default App
