import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'ngx-typography',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Typography</mat-card-title></mat-card-header>
      <mat-card-content>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p><strong>Bold text</strong></p>
        <p><em>Italic text</em></p>
        <p><small>Small text</small></p>
        <p><a href="#">Link text</a></p>
        <blockquote>This is a blockquote. It can be used to highlight important text or quotes.</blockquote>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`blockquote{border-left:4px solid #3366ff;padding:12px 24px;margin:16px 0;color:#8f9bb3;background:#f7f9fc}`],
})
export class TypographyComponent {}
