import { Howl } from "howler"


class MusicPlayer {
    static instance: MusicPlayer;

    private currentMusic?: Howl;
    private currentMusicName: string = "";
    private fadeOut: number = 300;

    constructor() {
        if (MusicPlayer.instance) {
            return MusicPlayer.instance;
        }

        MusicPlayer.instance = this;
    }

    stopMusic() {
        this.currentMusic?.stop();
    }

    fadeOutMusic(duration?: number) {
        this.currentMusic?.fade(this.currentMusic.volume(), 0, duration ? duration : this.fadeOut);
    }

    playMusic(music: string, volume?: number, onStartFunc?: () => void, onEndFunc?: () => void, loop: boolean = true) {
        if(music === this.currentMusicName){
            return
        }
        this.currentMusicName = music
        this.stopMusic()
        this.currentMusic = new Howl({
            src: [`./music/${music}`],
            loop: loop,
            volume: volume ? volume : 0.7,
            onfade: () => this.stopMusic(),
            onplay: onStartFunc,
            onend: () => {
                    if(!loop){
                        this.currentMusicName = ""
                    }
                    onEndFunc
                } 
        });
        this.currentMusic.play()
    }


    playSFX(sfx: string, volume?: number) {
        const sound = new Howl({
            src: [`./sfx/${sfx}`],
            pool: 10,
            volume: volume ? volume : 0.7
        });

        sound.play();
    }
}


const musicPlayer = new MusicPlayer();
export default musicPlayer;