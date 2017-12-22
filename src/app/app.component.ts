import {Component, OnInit} from '@angular/core';
import {DataService} from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private offset = 0;
  private running = false;
  private max: number;
  private interval: number;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.max = this.getMax();
    this.interval = this.getInterval();
  }

  private getPositions(): Array<Array<number>> {
    return this.dataService.getPositions(this.offset);
  }

  private getNextPos(): Array<Array<number>> {
    return this.offset !== this.max
      ? this.dataService.getPositions(this.offset + 1)
      : [];
  }

  private setOffset(offset) {
    this.offset = offset;
  }

  private getMax() {
    return this.dataService.countPositions() - 1;
  }

  private getInterval() {
    return this.dataService.getInterval();
  }

  private incOffset() {
    if (this.offset < this.max) {
      this.offset++;
    }
  }

  private setRunning(running) {
    this.running = running;
  }
}
