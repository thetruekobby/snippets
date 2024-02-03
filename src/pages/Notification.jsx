
const Notification = () => {
    return (
      <>
        <div>Notification</div>
        <button
          onClick={() => {
            Notification.requestPermission().then((permission) => {
              console.log("🚀  permission:", permission)
              if (permission === "granted") {
                new Notification("use effect", {
                  body: "This is the body",
                  icon: "ninja-closed.svg",
                  image: "vite.svg3",
                })
              }
            })
          }}
        >
          Trigger Notification
        </button>
      </>
    )
}

export default Notification