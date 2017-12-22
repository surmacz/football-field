import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-interval',
  template: ''
})
export class IntervalComponent implements OnInit, OnDestroy {
  @Input() refreshEvery: number;
  @Input() running: boolean;
  @Output() onRefresh = new EventEmitter<void>();
  private intervalId;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      if (this.running) {
        this.onRefresh.emit();
      }
    }, this.refreshEvery);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
