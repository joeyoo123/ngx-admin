import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  templateUrl: './gmaps.component.html',
})
export class GmapsComponent {
  readonly position = { lat: 51.678418, lng: 7.809007 };
}
