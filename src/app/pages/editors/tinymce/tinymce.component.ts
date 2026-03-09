import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EditorModule } from '@tinymce/tinymce-angular';

@Component({
  selector: 'ngx-tinymce-page',
  standalone: true,
  imports: [MatCardModule, EditorModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>TinyMCE</mat-card-title></mat-card-header>
      <mat-card-content>
        <editor [init]="{ height: 500, menubar: true, plugins: 'lists link image table code', toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | removeformat' }"></editor>
      </mat-card-content>
    </mat-card>
  `,
})
export class TinymceComponent {}
