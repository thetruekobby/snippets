import { useRef } from "react"
import { useState } from "react"
import { useEffect } from "react"

let peerConnection

const WebRTC = () => {
  const localVideoRef = useRef()
  useEffect(() => {
    ;(async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true,
      })
      localVideoRef.current.srcObject = stream
    })()
  }, [localVideoRef])

  const createOffer = async () => {
    peerConnection = new RTCPeerConnection(servers)
    const remoteStream = new MediaStream()

    // document.getElementById('user-2').src0bject = remoteStream

    //loop through audio and video tracks
    localStream.getTracks().forEach((track) => {
      peerConnection.addTrack(track, localStream)
    })

    peerConnection.ontrack = (event) => {
      event.streams[0].getTracks().forEach((track) => {
        remoteStream.addTrack(track)
      })
    }


    //setting local description triggers onIceCandidate - makes a series of requests to the stun server to create the ice candidates
    peerConnection.onicecandidate = async (event) => {
      if (event.candidate) {
        console.log("New ICE candidate:", event.candidate)
      }
    }

    const offer = await peerConnection.createOffer()
    await peerConnection.setLocalDescription(offer)
    console.log(offer)
  }

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
      <h1 className="text-3xl text-center">WebRTC Test</h1>
      {/* playsInline */}
      <video ref={localVideoRef} className="w-full aspect-video" autoPlay></video>
    </div>
  )
}
export default WebRTC
