import {ChangeDetectorRef, Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  @Input() interval: number;
  private _changes: Array<Array<number>>;
  private positions: Array<Array<number>> = [];
  private toUpdate: Array<Array<number>> = [];
  private toAdd: Array<Array<number>> = [];
  private toDelete: Array<Array<number>> = [];
  private transition: string;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.transition = `all ${this.interval}ms linear 0s`;
  }

  @Input() set changes(c: Array<Array<number>>) {
    this._changes = c;
    this.toUpdate = [];
    this.toAdd = [];
    this.toDelete = [];
    this.processChanges();
    this.updatePositions();
    this.cd.detectChanges();
  }

  private processChanges() {
    for (const change of this._changes) {
      const i = this.positions.findIndex(v => v[0] === change[0]);
      if (i > -1) {
        this.toUpdate.push(change);
      } else {
        this.toAdd.push(change);
      }
    }

    for (const position of this.positions) {
      const i = this._changes.findIndex(v => v[0] === position[0]);
      if (i === -1) {
        this.toDelete.push(position);
      }
    }
  }

  private updatePositions() {
    this.delete();
    this.update();
    this.add();
  }

  private update() {
    for(const toUp of this.toUpdate) {
      const i = this.positions.findIndex(v => v[0] === toUp[0]);
      this.positions[i][1] = toUp[1];
      this.positions[i][2] = toUp[2];
    }
  }

  private add() {
    for (const toAdd of this.toAdd) {
      this.positions.push(toAdd);
    }
  }

  private delete() {
    for (const toDel of this.toDelete) {
      const i = this.positions.findIndex(v => v[0] === toDel[0]);
      this.positions.splice(i, 1);
    }
  }

  private getX(position: Array<number>): number {
    return Math.round(this.limit(position[1]) * 1507);
  }

  private getY(position: Array<number>): number {
    return Math.round(this.limit(position[2]) * 1011);
  }

  private limit(v) {
    return v < 0 ? 0 : v > 1 ? 1 : v;
  }
}
