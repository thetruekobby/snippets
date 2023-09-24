import { useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Tab from "./pages/Tab"
import Layout from "./components/Layout"
import { useUpdateTitle } from "./hooks/useUpdateTitle"

function App() {
  const { pathname } = useLocation()
  const updateTitle = useUpdateTitle()
  useEffect(() => {
    updateTitle(pathname.slice(1))
  }, [updateTitle, pathname])

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route element={<Layout />}>
        <Route path="tab" element={<Tab />} />
        <Route path="test" element={<Tab />} />
      </Route>
    </Routes>
  )
}

export default App
