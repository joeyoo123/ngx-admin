import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'ngx-modal-overlays',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
})
export class ModalOverlaysComponent {}
