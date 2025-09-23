import axios from "axios"

const Axios = () => {
  const http = axios.create({ baseURL: "http://localhost:5000" })

  class customError extends Error {
    constructor(message) {
      super(message)
    }
  }

  http.interceptors.response.use(
    (res) => {
      // console.log("🚀 || res:", res)
      if (!res.data.responseCode?.toString().startsWith("2")) {
        return Promise.reject(new Error("thrown error"))
      } else {
        return res
      }
    },
    (error) => {
      console.log("caught error in interceptor")
      error.message = "Custom error message set bu me"
      return Promise.reject(modifyErrorMessage(error))
    }
  )

  const modifyErrorMessage = (error) => {
    error.message = error.response?.data?.responseMessage || error.message
    return error
  }

  const fetchData = () => {
    http
      .get("/")
      .then((res) => console.log({ res }))
      .catch((err) => console.log({ err }))
  }
  return (
    <div>
      <div className="">Axios</div>
      <button
        onClick={() => {
          fetchData()
        }}
      >
        Fetch data
      </button>
    </div>
  )
}
export default Axios
