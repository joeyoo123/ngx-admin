import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

declare var CKEDITOR: any;

@Component({
  standalone: false,
  selector: 'ngx-ckeditor',
  template: `
    <nb-card>
      <nb-card-header>
        CKEditor
      </nb-card-header>
      <nb-card-body>
        <div #editorContainer></div>
      </nb-card-body>
    </nb-card>
  `,
})
export class CKEditorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('editorContainer', { static: true }) editorContainer: ElementRef;
  private editorInstance: any;

  ngAfterViewInit() {
    if (typeof CKEDITOR !== 'undefined') {
      CKEDITOR.basePath = '/assets/ckeditor/';
      this.editorInstance = CKEDITOR.replace(this.editorContainer.nativeElement, {
        extraPlugins: 'divarea',
        height: '320',
      });
    }
  }

  ngOnDestroy() {
    if (this.editorInstance) {
      this.editorInstance.destroy();
      this.editorInstance = null;
    }
  }
}
