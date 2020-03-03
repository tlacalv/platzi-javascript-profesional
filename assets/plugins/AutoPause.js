class AutoPause {
    constructor(){
        this.threshold = 0.25;
        //cambia eel this del objeto.
        this.handleIntersection = this.handleIntersection.bind(this);
    }
    run(player){
        this.player = player;
        //creamos intersection observer, recibe el handler o callback y la configuracion
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        })
        //observamos el elemento del dom
        observer.observe(player.media)
    }
    handleIntersection(entries){
        const entry = entries[0]
        //validamos el valor del intersectionRatio
        const isVisible = entry.intersectionRatio >= this.threshold
        if(isVisible){
            this.player.play();
        }else{
            this.player.pause();
        }
    }
}
export default AutoPause;