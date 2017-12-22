import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  @Input() offset: number;
  @Input() interval: number;
  @Input() total: number;

  private getElapsed() {
    return this.convert(Math.floor(this.offset / (1000 / this.interval)));
  }

  private getTotal() {
    return this.convert(Math.floor(this.total / (1000 / this.interval)));
  }

  private convert(s: number): string {
    const h = Math.floor(s / 3600);
    s -= h * 3600;
    const m = Math.floor(s / 60);
    s -= m * 60;

    return `${this.format(h)}:${this.format(m)}:${this.format(s)}`;
  }

  private format(v: number): string {
    return v > 9 ? v.toString() : `0${v}`;
  }
}
