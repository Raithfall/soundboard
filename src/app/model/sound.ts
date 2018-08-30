export class Sound {
  name: string;
  file: string;
  image: string;
  audio: any;
  path  = 'assets/sounds/';
  isActive = false;

  private currentTime: number;
  private isPaused: boolean;

  constructor(name: string, file: string, image: string) {
    this.name = name;
    this.file = file;
    this.image = image;
    this.audio = new Audio(this.path + this.file);

    // check this before crying: https://stackoverflow.com/questions/46865762/angular-view-not-updating-after-model-changes
    this.currentTime = this.audio.currentTime;
    this.isPaused = this.audio.paused;
    this.audio.ontimeupdate = (event) => {
      this.currentTime = this.audio.currentTime;
      this.isPaused = this.audio.paused;
    };
  }

  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  play() {
    return this.audio.play();
  }

  isPlaying(): boolean {
    return !this.isPaused;
  }

}
