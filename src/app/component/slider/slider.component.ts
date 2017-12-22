import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @Input() max: number;
  @Input() value: number;
  @Output() onSlide = new EventEmitter<number>();

  private emit(value) {
    this.onSlide.emit(value);
  }
}
