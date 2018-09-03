import {Injectable} from '@angular/core';
import {Sound} from '../model/sound';
import {Soundboard} from '../model/soundboard';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  myServer = '/soundboard';

  constructor(private http: HttpClient) {
  }

  getDefaultSoundBoard(): Soundboard {
    const soundList: Sound[] = [];
    soundList.push(new Sound('Les Bronzés', 'bronzes.mp3', 'bronzes.jpeg'));
    soundList.push(new Sound('Chirac le ouf', 'lebruitetlodeur.mp3', 'chirac.jpg'));
    soundList.push(new Sound('Indignité', 'indignite.mp3', 'sarkozy.jpg'));
    soundList.push(new Sound('Indignité', 'indignite.mp3', 'sarkozy.jpg'));

    const soundBoard: Soundboard = new Soundboard();
    soundBoard.name = 'Bios Sound';
    soundBoard.description = 'Play this shit!!';
    soundBoard.sounds = soundList;

    return soundBoard;
  }

  getAll(): Observable<Soundboard[]> {
    return this.http.get<Soundboard[]>(this.myServer + '/all');
  }

  getById(id): Observable<Soundboard> {
    return this.http.get<Soundboard>(this.myServer + '/' + id);
  }

  create(soundboard): Observable<Soundboard> {
    return this.http.post<Soundboard>(this.myServer, soundboard);
  }

  update(soundboard): Observable<Soundboard> {
    return this.http.put<Soundboard>(soundboard.id, soundboard);
  }

  delete(soundboard): Observable<any> {
    return this.http.delete(soundboard.id);
  }

}
