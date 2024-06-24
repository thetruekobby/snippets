import { useState } from "react"

const Debouncing = () => {
  const data = [
    {
      id: 1,
      name: "Chelsey Perry",
      age: 24,
      email: "robertajensen@smith.com",
    },
    {
      id: 2,
      name: "Susan Valdez",
      age: 69,
      email: "elliskelsey@tucker-holmes.com",
    },
    {
      id: 3,
      name: "Amy Griffin DDS",
      age: 64,
      email: "williamlopez@yahoo.com",
    },
    {
      id: 4,
      name: "Allison Johnson",
      age: 48,
      email: "xwhite@smith.com",
    },
    {
      id: 5,
      name: "Aaron Henderson",
      age: 25,
      email: "jose75@reese.com",
    },
    {
      id: 6,
      name: "Matthew Lee",
      age: 48,
      email: "suegonzalez@reilly-bean.com",
    },
    {
      id: 7,
      name: "Jason Howell",
      age: 27,
      email: "anthonygray@gmail.com",
    },
    {
      id: 8,
      name: "Sarah Williams",
      age: 66,
      email: "mhall@yahoo.com",
    },
    {
      id: 9,
      name: "Brandon Mccormick",
      age: 53,
      email: "jessemcgrath@brooks-snyder.com",
    },
    {
      id: 10,
      name: "Paul Bell",
      age: 62,
      email: "michaelmontgomery@patterson.com",
    },
    {
      id: 11,
      name: "Sarah Montgomery",
      age: 22,
      email: "williamtaylor@thompson-payne.info",
    },
    {
      id: 12,
      name: "Manuel Reed",
      age: 68,
      email: "yherman@stone-ray.net",
    },
    {
      id: 13,
      name: "Carolyn Jordan",
      age: 63,
      email: "amorgan@turner-white.com",
    },
    {
      id: 14,
      name: "Karen Sandoval PhD",
      age: 43,
      email: "tkeller@arnold.com",
    },
    {
      id: 15,
      name: "Kristin Moore",
      age: 71,
      email: "starkcharlene@franklin-rivera.info",
    },
    {
      id: 16,
      name: "Sydney Cunningham",
      age: 60,
      email: "michaelpowers@kelley-martinez.com",
    },
    {
      id: 17,
      name: "Jamie King",
      age: 74,
      email: "michael41@myers.com",
    },
    {
      id: 18,
      name: "Billy Rogers",
      age: 71,
      email: "gallowaymarc@gamble.info",
    },
    {
      id: 19,
      name: "Jared Brown",
      age: 75,
      email: "cobbpaul@holmes.com",
    },
    {
      id: 20,
      name: "Valerie Craig",
      age: 31,
      email: "sroberts@ramirez.com",
    },
  ]

  const [val, setVal] = useState("")

  let timer
  const searchFunc = (e) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      console.log(e.target.value)
      setVal(e.target.value)
    }, 10000)
  }
  return (
    <>
      <div>Debouncing</div>
      <input
        type="text"
        className="border-2 border-black p-2"
        onChange={(e) => {
          searchFunc(e)
        }}
      />
      {data
        ?.filter((user) => user.name.includes(val))
        .map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
    </>
  )
}
export default Debouncing


