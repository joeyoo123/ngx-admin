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
        <textarea rows="20" style="width:100%;padding:16px;font-family:inherit;border:1px solid #e4e9f2;border-radius:4px;"
          [(ngModel)]="editorContent"></textarea>
      </nb-card-body>
    </nb-card>
  `,
})
export class CKEditorComponent {
  editorContent = 'Start typing your content here...';
}
