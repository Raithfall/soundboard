export class Sound {
  name: string;
  file: string;
  image: string;
  audio: any;
  path  = 'assets/sounds/';


  constructor(name: string, file: string, image: string) {
    this.name = name;
    this.file = file;
    this.image = image;
    this.audio = new Audio(this.path + this.file);
  }
}
