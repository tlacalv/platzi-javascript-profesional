import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
const video = document.querySelector("video")
const player = new MediaPlayer({el: video, plugins: [
  //crea una instancia de AutoPlay
  new AutoPlay(),
] });

const buttonPlay = document.querySelector("#play")
const buttonMute = document.querySelector("#mute")


buttonPlay.onclick =() => player.togglePlay();
buttonMute.onclick =() => player.toggleMute();