import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent {
  @Input() running;
  @Output() onClick = new EventEmitter<boolean>();

  emit(running) {
    this.onClick.emit(running);
  }
}
