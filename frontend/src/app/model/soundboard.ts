import {Sound} from './sound';

export class Soundboard {
  id: string;
  name: string;
  description: string;
  sounds: Sound[];

  constructor() {
  }

  isPlaying(): boolean {
    return !!this.sounds.filter(sound => sound.isPlaying()).length;
  }

  play(sound: Sound) {
    this.sounds.map(s => s.stop());
    sound.play();
  }

}
