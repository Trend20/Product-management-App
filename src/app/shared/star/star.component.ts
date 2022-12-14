import { Component, Input, OnChanges, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input()rating: number = 0;
  cropWidth: number = 75;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75/5;
  }

  onRatingClicked():void{
    this.ratingClicked.emit(`The clicked rating is ${this.rating}`);
  }

}
