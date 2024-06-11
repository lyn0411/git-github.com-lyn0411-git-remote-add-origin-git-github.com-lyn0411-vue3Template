import { setStyle } from "./hasStyle"
export const screenRecording = () => {
    console.log(navigator.mediaDevices);
    
    // const streamPromise = navigator.mediaDevices.getDisplayMedia()
    
    // const recordedChunks:BlobPart[] = []
    // let option = {
    //     mimeType:'video/webm; codecs=vp9'
    // }
    // streamPromise.then(steam => {
    //     let mediaRecorder = new MediaRecorder(steam,option)
    //     mediaRecorder.ondataavailable = handleDataAvailable
    //     mediaRecorder.start()
    // })
    // const handleDataAvailable = (event:BlobEvent) => {
    //     if(event.data.size > 0){
    //         recordedChunks.push(event.data)
    //         download()
    //     }
    // }
    // const download = () => {
    //     const blob = new Blob(recordedChunks,{type:"video/webm"})
    //     const url = URL.createObjectURL(blob)
    //     const a = document.createElement("a")
    //     document.body.appendChild(a)as
    //     setStyle(a,"display","none")
    //     a.href = url
    //     a.download = "test.webm"
    //     a.click()
    //     window.URL.revokeObjectURL(url)
    // }
}
