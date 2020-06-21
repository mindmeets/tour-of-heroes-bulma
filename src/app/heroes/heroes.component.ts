import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  files: FileList;

  constructor() { }

  ngOnInit(): void {
  }

  getNames(files: FileList): string[] {
    console.log()
    let fileNames: string[] = [];
    for(let i = 0; i < files.length; i++){
      fileNames[i] = files[i].name;
    }
    return fileNames;
  }

  onChange(event: Event): void {
    // this.files = event.target.files;
    // if(event.target.className == ) {
      // console.log('File selected: ' + event.target.className);
    // }
  }

}
