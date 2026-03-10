import { Component } from '@angular/core';
import { PositionModel } from './entity/position.model';

@Component({
  standalone: false,
  selector: 'ngx-search-map',
  templateUrl: './search-map.component.html',
})
export class SearchMapComponent {
  searchedPosition: PositionModel = new PositionModel();

  setPosition(position: PositionModel) {
    this.searchedPosition = position;
  }
}
