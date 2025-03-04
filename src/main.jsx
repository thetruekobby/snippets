import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import ErrorBoundary from "./components/ErrorBoundary.jsx"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

const apolloClient = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache:  new InMemoryCache(),
})

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary fallback={<h1>Something went wrong.</h1>}>
          <ApolloProvider client={apolloClient}>
            <App />
          </ApolloProvider>
        </ErrorBoundary>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
