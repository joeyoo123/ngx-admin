import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface TreeNode { name: string; size: string; kind: string; items?: TreeNode[]; level?: number; expanded?: boolean; visible?: boolean; }

@Component({
  selector: 'ngx-tree-grid',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatIconModule, MatButtonModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Tree Grid</mat-card-title></mat-card-header>
      <mat-card-content>
        <table mat-table [dataSource]="flatData" class="full-width">
          <ng-container matColumnDef="name">
            <th mat-header-cell *matHeaderCellDef>Name</th>
            <td mat-cell *matCellDef="let row">
              <span [style.padding-left.px]="(row.level || 0) * 24">
                <button mat-icon-button *ngIf="row.items?.length" (click)="toggle(row)" class="toggle-btn">
                  <mat-icon>{{ row.expanded ? 'expand_more' : 'chevron_right' }}</mat-icon>
                </button>
                <span *ngIf="!row.items?.length" class="leaf-spacer"></span>
                {{ row.name }}
              </span>
            </td>
          </ng-container>
          <ng-container matColumnDef="size"><th mat-header-cell *matHeaderCellDef>Size</th><td mat-cell *matCellDef="let row">{{ row.size }}</td></ng-container>
          <ng-container matColumnDef="kind"><th mat-header-cell *matHeaderCellDef>Kind</th><td mat-cell *matCellDef="let row">{{ row.kind }}</td></ng-container>
          <tr mat-header-row *matHeaderRowDef="['name', 'size', 'kind']"></tr>
          <tr mat-row *matRowDef="let row; columns: ['name', 'size', 'kind'];" [hidden]="!row.visible"></tr>
        </table>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`.full-width{width:100%}.toggle-btn{width:24px;height:24px;line-height:24px}.leaf-spacer{display:inline-block;width:40px}`],
})
export class TreeGridComponent {
  treeData: TreeNode[] = [
    { name: 'Projects', size: '1.8 MB', kind: 'dir', items: [
      { name: 'project-1.doc', size: '240 KB', kind: 'doc' },
      { name: 'project-2.doc', size: '290 KB', kind: 'doc' },
      { name: 'Internal', size: '1.2 MB', kind: 'dir', items: [
        { name: 'report.xls', size: '400 KB', kind: 'xls' },
        { name: 'notes.txt', size: '50 KB', kind: 'txt' },
      ]},
    ]},
    { name: 'Reports', size: '400 KB', kind: 'dir', items: [
      { name: 'report-2024.pdf', size: '200 KB', kind: 'pdf' },
      { name: 'report-2023.pdf', size: '200 KB', kind: 'pdf' },
    ]},
    { name: 'Other', size: '109 MB', kind: 'dir', items: [
      { name: 'backup.bkp', size: '107 MB', kind: 'bkp' },
      { name: 'secret-note.txt', size: '2 MB', kind: 'txt' },
    ]},
  ];
  flatData: TreeNode[] = [];

  constructor() { this.flatData = this.flatten(this.treeData, 0); }

  private flatten(nodes: TreeNode[], level: number): TreeNode[] {
    const result: TreeNode[] = [];
    for (const node of nodes) {
      const flatNode = { ...node, level, expanded: false, visible: level === 0 };
      result.push(flatNode);
      if (node.items) { result.push(...this.flatten(node.items, level + 1)); }
    }
    return result;
  }

  toggle(node: TreeNode) {
    node.expanded = !node.expanded;
    const idx = this.flatData.indexOf(node);
    const level = node.level || 0;
    for (let i = idx + 1; i < this.flatData.length; i++) {
      if ((this.flatData[i].level || 0) <= level) break;
      if (node.expanded && (this.flatData[i].level || 0) === level + 1) { this.flatData[i].visible = true; }
      else if (!node.expanded) { this.flatData[i].visible = false; this.flatData[i].expanded = false; }
    }
    this.flatData = [...this.flatData];
  }
}
