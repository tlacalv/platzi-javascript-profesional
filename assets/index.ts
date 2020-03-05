import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
const video = document.querySelector("video")
const player = new MediaPlayer({el: video, plugins: [
  //crea una instancia de AutoPlay
  new AutoPlay(),
  new AutoPause(),
] });

const buttonPlay: HTMLElement = document.querySelector("#play")
const buttonMute: HTMLElement = document.querySelector("#mute")


buttonPlay.onclick =() => player.togglePlay();
buttonMute.onclick =() => player.toggleMute();
if('serviceWorker' in navigator){
  
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message)
  })
}