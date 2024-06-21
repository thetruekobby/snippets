//function to retrieve cookie values
const checkCookie = (name) => {
  const splitCookies = document.cookie.split(";")
  return splitCookies
    ?.find((cookie) => cookie.includes(name + "="))
    ?.split("=")?.[1]
    ?.trim()
}


 function fileToBinaryString(file: File) {
   return new Promise((resolve, reject) => {
     const reader = new FileReader()
     reader.onload = () => {
       // Convert array buffer to binary string
       const binaryStr = arrayBufferToBinaryString(reader.result)
       resolve(binaryStr)
     }

     reader.onerror = reject
     reader.readAsArrayBuffer(file)
   })
 }

 function arrayBufferToBinaryString(buffer) {
   // const binaryArray = new Uint8Array(buffer)
   // return String.fromCharCode.apply(null, binaryArray)
   const binaryArray = new Uint8Array(buffer)
   let binaryString = ""
   for (let i = 0; i < binaryArray.length; i++) {
     binaryString += String.fromCharCode(binaryArray[i])
   }
   return binaryString
 }