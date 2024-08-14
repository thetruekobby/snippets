import { useRef } from "react"
import { useState } from "react"
import { useEffect } from "react"

let peerConnection

const NewWebRTC = () => {
  const localVideoRef = useRef()




  //stun servers - from google
  const servers = {
    iceServers: [
      {
        urls: ["stun:stun1.1.google.com: 19302", "stun:stun2.1.google. com: 19302"],
      },
    ],
  }

  return (
    <div>
      <h1 className="text-3xl text-center">NewWebRTC Test</h1>
      {/* playsInline */}
      <video ref={localVideoRef} className="w-full aspect-video" autoPlay></video>
    </div>
  )
}
export default NewWebRTC
