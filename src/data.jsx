import Home from "./pages/Home"
import StackingContext from "./pages/StackingContext"
import Tab from "./pages/Tab"
import Toggle from "./pages/Toggle"
import Skeleton from "./pages/Skeleton"
import Flashcard from "./pages/Flashcard"
import ScrollingWords from "./pages/ScrollingWords"
import ClosedEyes from "./pages/ClosedEyes"
import LiveFeedback from "./pages/LiveFeedback"
import FloatingLabel from "./pages/FloatingLabel"
import HoverEffect from "./pages/HoverEffect"
import FormStepper from "./pages/FormStepper"
import AnimatingGradient from "./pages/AnimatingGradient"
import Carousel from "./pages/Carousel"
import ParallaxScroll from "./pages/ParallaxScroll"
import AnimateHeight from "./pages/AnimateHeight"
import Params from "./pages/Params"
import CircularProgressBar from "./pages/CircularProgressBar"
import DirectionAware from "./pages/DirectionAware"
import AnimateDisplayBlock from "./pages/AnimateDisplayBlock"
import ParentComponent from "./pages/PropsToParents"
import Debouncing from "./pages/Debouncing"
import SnappingCards from "./pages/SnappingCards"
import Grid from "./pages/Grid"
import WebRTC from "./pages/WebRTC"
import Test from "./Test"
import NewWebRTC from "./pages/newWebRTC"
import HookForm from "./pages/HookForm"
import Portal from "./pages/Portal"

export const routes = [
  { name: "/", component: <Home /> },
  { name: "tab", component: <Tab /> },
  { name: "toggle-button", component: <Toggle /> },
  { name: "skeleton", component: <Skeleton /> },
  { name: "flash-card", component: <Flashcard /> },
  { name: "scrolling-words", component: <ScrollingWords /> },
  { name: "closed-eyes-pass-field", component: <ClosedEyes /> },
  { name: "live-input-feedback", component: <LiveFeedback /> },
  { name: "floating-label", component: <FloatingLabel /> },
  { name: "hover-effect", component: <HoverEffect /> },
  { name: "form-stepper", component: <FormStepper /> },
  { name: "animating-gradient", component: <AnimatingGradient /> },
  { name: "carousel", component: <Carousel /> },
  { name: "parallax-scroll", component: <ParallaxScroll /> },
  { name: "stacking-context", component: <StackingContext /> },
  { name: "animate-height", component: <AnimateHeight /> },
  { name: "params/176?q=hello", component: <Params /> },
  { name: "circular-progress-bar", component: <CircularProgressBar /> },
  { name: "direction-aware", component: <DirectionAware /> },
  { name: "animate-display-block", component: <AnimateDisplayBlock /> },
  { name: "props-to-parents", component: <ParentComponent /> },
  { name: "debouncing", component: <Debouncing /> },
  { name: "snapping-cards", component: <SnappingCards /> },
  { name: "grid", component: <Grid /> },
  { name: "webRTC", component: <WebRTC /> },
  { name: "new webRTC", component: <NewWebRTC /> },
  { name: "React hook form", component: <HookForm /> },
  { name: "Portal", component: <Portal /> },
  { name: "test", component: <Test /> },
]

export const routeLinks = routes.map((route) => route.name).filter((route) => route !== "/")
