import { Component } from "react"
import { get } from "react-hook-form"
class ErrorBoundary extends Component {
  state = {  hasError: false }

  //used to update state when an error is caught
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  //A function that tuns when an error is caught
  //  componentDidCatch(error, info) {
  //   console.error("ErrorBoundary caught an error", error, info)
  // }

  render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}

export default ErrorBoundary
