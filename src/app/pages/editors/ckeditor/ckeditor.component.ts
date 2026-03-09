import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'ngx-ckeditor-page',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>CKEditor 5</mat-card-title></mat-card-header>
      <mat-card-content>
        <div class="editor-placeholder">
          <p>CKEditor 5 rich text editor. Configure with ckeditor5-angular.</p>
          <textarea rows="20" class="fallback-editor">{{ editorContent }}</textarea>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`.fallback-editor{width:100%;padding:16px;font-family:inherit;border:1px solid #e4e9f2;border-radius:4px}.editor-placeholder{padding:16px 0}`],
})
export class CkeditorComponent {
  editorContent = 'Start typing your content here...';
}
