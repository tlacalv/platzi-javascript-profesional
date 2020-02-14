//"CLASS"
function MediaPlayer(config) {
    this.media = config.el
    //recibe plugins en array
    this.plugins = config.plugins || [];
    //inicializa plug ins
    this._initPlugins()
  }
  MediaPlayer.prototype._initPlugins = function(){
      //para cada instancia en el array de plugins corre el metodo run.
      this.plugins.forEach(plugin => {
          plugin.run(this)
      })
  }
  MediaPlayer.prototype.play = function (){
    this.media.play();
  }
  MediaPlayer.prototype.pause =function(){
    this.media.pause();
  }
  MediaPlayer.prototype.togglePlay = function(){
    if(this.media.paused){
      this.play();
    }else{
      this.pause();
    }
  }
  MediaPlayer.prototype.toggleMute = function(){
    if(this.media.muted){
      this.unmute();
    }else{
      this.mute();
    }
  }
  MediaPlayer.prototype.mute = function(){
      this.media.muted = true;
  }
  MediaPlayer.prototype.unmute = function(){
      this.media.muted = false;
  }

  export default MediaPlayer;