import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Tab from "./pages/Tab"
import Layout from "./components/Layout"
import { useUpdateTitle } from "./hooks/useUpdateTitle"
import Toggle from "./pages/Toggle"
import Skeleton from "./pages/Skeleton"
import Flashcard from "./pages/Flashcard"
import ScrollingWords from "./pages/ScrollingWords"
import ClosedEyes from "./pages/ClosedEyes"
import LiveFeedback from "./pages/LiveFeedback"

function App() {
  const { pathname } = useLocation()
  const updateTitle = useUpdateTitle()
  updateTitle(pathname.slice(1))

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route element={<Layout />}>
        <Route path="tab" element={<Tab />} />
        <Route path="toggle-button" element={<Toggle />} />
        <Route path="skeleton" element={<Skeleton />} />
        <Route path="flash-card" element={<Flashcard/>} />
        <Route path="scrolling-words" element={<ScrollingWords/>} />
        <Route path="closed-eyes-pass-field" element={<ClosedEyes/>} />
        <Route path="live-input-feedback" element={<LiveFeedback/>} />
      </Route>
    </Routes>
  )
}

export default App
