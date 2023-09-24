import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Tab from "./pages/Tab"
import Layout from "./components/Layout"

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route element={<Layout />}>
        <Route path="/tab" element={<Tab />} />
      </Route>
    </Routes>
  )
}

export default App
