const el = document.documentElement
const rfs = el.requestFullscreen || el.webkitMatchesSelector 
export const fullScreen = () => {
    if(typeof rfs != "undefined"){
        rfs.call(el)
    }
}

export const exitScreen = () => {
    if (document.exitFullscreen) { 
        document.exitFullscreen()
    }
    if(typeof rfs != "undefined") {
        rfs.call(el)
    }
}