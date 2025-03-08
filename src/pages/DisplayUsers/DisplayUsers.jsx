import React, { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

const DisplayUsers = ({ func }) => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const res = await axios.get("https://jsonplaceholder.typicode.com/users")
      setUsers(res.data.map((user) => user.name))
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  if (error) {
    return <div className="" data-testid="error">{error}</div>
  }

  return (
    <div data-testid="display-users">
      <h1 className="text-center font-bold">Display Users</h1>
      <button className="p-2 bg-gray-100 border rounded" onClick={fetchUsers}>
        {loading ? "Loading..." : "Fetch Users"}
      </button>
      <button className="p-2 bg-gray-100 border rounded" onClick={func}>
        run props function
      </button>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}
export default DisplayUsers
