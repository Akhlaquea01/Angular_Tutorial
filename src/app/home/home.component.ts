import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isListView!: boolean;
  topicDetails: Array<any> = [
    {
      title: 'Angular',
      description: 'Angular is a platform that makes it easy to build applications with the web.',
    },
    {
      title: 'React',
      description: 'React is a JavaScript library for building user interfaces.',
    },
    {
      title: 'Vue',
      description: 'Vue.js is an open-source progressive JavaScript framework for building user interfaces.',
    },
    {
      title: 'Angular',
      description: 'Angular is a platform that makes it easy to build applications with the web.',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  public listView():void { 
    this.isListView = true;
  }
  public gridView():void { 
    this.isListView = false;
  }
}
