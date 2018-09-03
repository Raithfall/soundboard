import {Component, OnInit} from '@angular/core';
import {SoundService} from '../directives/sound.service';
import {Sound} from '../model/sound';
import {animate, style, transition, trigger} from '@angular/animations';
import {Soundboard} from '../model/soundboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('100ms linear', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('100ms linear', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  colsNumber: number;
  soundboard: Soundboard;

  constructor(private soundService: SoundService) {
  }

  ngOnInit() {
    this.colsNumber = 5;
    this.soundboard = this.soundService.getDefaultSoundBoard();
  }

  play(sound: Sound) {
    this.soundboard.play(sound);
    this.soundService.getById(1).subscribe((soundboard) => console.log(soundboard.name));

  }

}
