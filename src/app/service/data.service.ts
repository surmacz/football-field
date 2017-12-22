import {Injectable} from '@angular/core';
import {Data} from '../interface/data.interface';
import {data} from '../data';

@Injectable()
export class DataService {
  private data: Data;

  constructor() {
    this.data = data;
  }

  getPositions(offset: number): Array<Array<number>> {
    return this.data.player_positions[offset];
  }

  countPositions(): number {
    return this.data.player_positions.length;
  }

  getInterval(): number {
    return this.data.interval;
  }
}
