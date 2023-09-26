import { useEffect, useState } from "react"
import { PostsSkeleton, UserSkeleton } from "../components/SkeletonElement"

const Skeleton = () => {
  const [posts, setPosts] = useState()
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true)
        setTimeout(async () => {
          console.log("🚀 ~ file: Skeleton.jsx:8 ~ setTimeout ~ async:")
          const res = await fetch("https://jsonplaceholder.typicode.com/posts")
          const data = await res.json()
          setPosts(data)
          setLoading(false)
        }, 5000)
        setTimeout(async () => {
          console.log("🚀 ~ file: Skeleton.jsx:14 ~ setTimeout ~ async:")
          const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
          const data = await res.json()
          setUser(data)
        }, 5000)
      } catch (error) {
        console.log(error)
      }
    }

    fetchItems()
  }, [])

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [loading])

  return (
    <div className="px-10">
      <div className="flex gap-10">
        <div className="flex-[2]">
          {posts &&
            posts.map((post) => (
              <div key={post.id}>
                <h1 className="font-bold">{post.title}</h1>
                <p className="mb-5 text-justify">{post.body}</p>
              </div>
            ))}
          {loading &&
            [1, 2, 3, 4, 5].map((n) => {
              return <PostsSkeleton key={n} />
            })}
        </div>
        <div className="flex-1">
          {user && (
            <div>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
          )}
          {loading && <UserSkeleton />}
        </div>
      </div>
    </div>
  )
}

export default Skeleton
