import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  protected stars: boolean[];
  @Input()
  protected rating= 0;
  constructor() { }

  ngOnInit() {
    this.stars = [false, false, true, true, true];
  }

}
