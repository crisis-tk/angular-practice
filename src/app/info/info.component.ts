import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  hoby = 'アクアリウム';
  word = 'なんとかなる';
  birthday = '1989 年 8 月 1 日';

  constructor() { }

  ngOnInit() {
  }

}
