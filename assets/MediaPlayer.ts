//"CLASS"
class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  constructor(config) {
    this.media = config.el;
    //recibe plugins en array
    this.plugins = config.plugins || [];
    //inicializa plug ins
    this.initPlugins();
  }
  private initPlugins() {
    //para cada instancia en el array de plugins corre el metodo run.
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    if (this.media.paused) {
      this.play();
    }
    else {
      this.pause();
    }
  }
  toggleMute() {
    if (this.media.muted) {
      this.unmute();
    }
    else {
      this.mute();
    }
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
}

  export default MediaPlayer;