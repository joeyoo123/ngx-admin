import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'ngx-ckeditor',
  template: `
    <nb-card>
      <nb-card-header>
        CKEditor
      </nb-card-header>
      <nb-card-body>
        <p>CKEditor 4 has been removed due to security vulnerabilities.
        Migrate to <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/frameworks/angular.html" target="_blank">CKEditor 5</a> for a modern rich text editing experience.</p>
      </nb-card-body>
    </nb-card>
  `,
})
export class CKEditorComponent {
}
