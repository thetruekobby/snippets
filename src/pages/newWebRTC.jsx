import { useRef } from "react"
import { useState } from "react"
import { useEffect } from "react"
import io from "socket.io-client"
import Peer from "simple-peer"

const socket = io("http://localhost:5000", {
  autoConnect: false,
})
const NewWebRTC = () => {
  console.log("rendered")
  const [stream, setStream] = useState()
  const [availableUsers, setAvailableUsers] = useState([])
  const [userId, setUserId] = useState()
  const [callId, setCallId] = useState()
  const [count, setCount] = useState(0)
  const [callerDetails, setCallerDetails] = useState()
  const [callerSignalData, setCallerSignalData] = useState()

  const localVideoRef = useRef()
  const remoteVideoRef = useRef()
  const incomingCallModalRef = useRef()
  const connectionRef = useRef()

  // STEP 1 - GET LOCAL STREAM OR VIDEO
  const getLocalStream = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })

    localVideoRef.current.srcObject = stream
    setStream(stream)
    console.log("end of getLocalStream")
  }

  const callFunction = async () => {
    // await getLocalStream()
    // console.log("after get local stream")
    // console.log(stream)
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    })

    peer.on("signal", (signalData) => {
      socket.emit("callUser", { callId, signalData })
    })

    peer.on("stream", (remoteStream) => {
      remoteVideoRef.current.srcObject = remoteStream
    })

    socket.on("callAccepted", (data) => {
      const { signalData } = data
      peer.signal(signalData)
    })
  }

  const answerCallFunction = async () => {
    await getLocalStream()
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    })

    peer.on("signal", (signalData) => {
      socket.emit("answerCall", { callId: callerDetails.id, signalData })
    })

    peer.on("stream", (stream) => {
      remoteVideoRef.current.srcObject = stream
    })

    peer.signal(callerSignalData)
  }

  useEffect(() => {
    socket.connect()

    socket.on("connect", () => {
      console.log("client connected to server successfully")
      setUserId(socket.id)
      // alert("connected successfully")
    })
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      setStream(stream)
    })

    socket.on("incomingCall", (data) => {
      alert("incoming call from " + data.from)
      setCallerDetails({ id: data.from })
      setCallerSignalData(data.signalData)
      incomingCallModalRef.current.showModal()
    })
    return () => {
      socket.disconnect()
      socket.off("incomingCall")
    }
  }, [])

  useEffect(() => {}, [socket])

  return (
    <div className="max-w-7xl mx-auto px-6">
      <button className="bg-gray-400 w-[100px]" onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <h1 className="text-3xl text-center">NewWebRTC Test</h1>
      <p>your id is {userId}</p>
      <div className="flex gap-2">
        <input type="text" className="p-2 border" value={callId} onChange={(e) => setCallId(e.target.value)} />
        <button className="bg-green-600 text-white p-4 rounded" onClick={callFunction}>
          Call
        </button>
      </div>
      <div className="flex flex-col gap-2"></div>
      <div className="h-[70vh] border relative">
        <video ref={remoteVideoRef} className="w-full h-full border-2 bg-black" autoPlay muted playsInline />
        {/* local video video */}
        <div className="w-[20%] aspect-video bg-green-500 absolute top-2 right-2">
          <video ref={localVideoRef} autoPlay muted playsInline></video>
        </div>
      </div>
      {/*  */}
      <dialog ref={incomingCallModalRef} className="bg-white p-6">
        <p>Call From {callerDetails?.id}</p>
        <button className="bg-green-600 text-white p-4 rounded" onClick={answerCallFunction}>
          Answer
        </button>
        <button className="bg-red-600 text-white p-4 rounded" onClick={() => incomingCallModalRef.current.close()}>
          Decline
        </button>
      </dialog>
    </div>
  )
}

export default NewWebRTC

// socket.on("newUSer", (data) => {
//   setAvailableUsers((prev) => [...prev, data])
// })
// socket.on("availableUsers", (data) => {
//   const ids = data.filter((id) => {
//     return id !== userId
//   })
//   setAvailableUsers(ids)
// })

{
  /* {availableUsers.map((user) => (
        <div key={user} className="flex gap-2">
        <input key={user} type="text" value={user} disabled />
        <button className="bg-green-600 text-white p-4 rounded">Call</button>
        </div>
        ))} */
}

{
  /* <button className="bg-red-600 text-white p-4 rounded">Decline</button> */
}
// let peerConfiguration = {
//   iceServers: [
//     {
//       urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302"],
//     },
//   ],
// }
