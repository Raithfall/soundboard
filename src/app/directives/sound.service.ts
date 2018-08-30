import {Injectable} from '@angular/core';
import {Sound} from '../model/sound';
import {Soundboard} from '../model/soundboard';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  constructor() {
  }

  getDefaultSoundBoard(): Soundboard {
    const soundList: Sound[] = [];
    soundList.push(new Sound('Les Bronzés', 'bronzes.mp3', 'bronzes.jpeg'));
    soundList.push(new Sound('Chirac le ouf', 'lebruitetlodeur.mp3', 'chirac.jpg'));
    soundList.push(new Sound('Indignité', 'indignite.mp3', 'sarkozy.jpg'));
    soundList.push(new Sound('Indignité', 'indignite.mp3', 'sarkozy.jpg'));
    soundList.push(new Sound('Indignité', 'indignite.mp3', 'sarkozy.jpg'));
    soundList.push(new Sound('Indignité', 'indignite.mp3', 'sarkozy.jpg'));
    soundList.push(new Sound('Indignité', 'indignite.mp3', 'sarkozy.jpg'));

    const soundBoard: Soundboard = new Soundboard();
    soundBoard.name = 'Bios Sound';
    soundBoard.description = 'Play this shit!!';
    soundBoard.sounds = soundList;

    return soundBoard;
  }

}
