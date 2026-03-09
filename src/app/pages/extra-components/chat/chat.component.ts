import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
  date: Date;
}

@Component({
  selector: 'ngx-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Chat</mat-card-title></mat-card-header>
      <mat-card-content>
        <div class="chat-container">
          <div class="messages">
            <div *ngFor="let msg of messages" class="message" [class.user]="msg.sender === 'user'" [class.bot]="msg.sender === 'bot'">
              <div class="bubble">{{ msg.text }}</div>
              <div class="time">{{ msg.date | date:'shortTime' }}</div>
            </div>
          </div>
          <div class="input-row">
            <mat-form-field appearance="outline" class="flex-field">
              <input matInput [(ngModel)]="newMessage" placeholder="Type a message..." (keyup.enter)="send()">
            </mat-form-field>
            <button mat-fab color="primary" (click)="send()"><mat-icon>send</mat-icon></button>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .chat-container{height:500px;display:flex;flex-direction:column}
    .messages{flex:1;overflow-y:auto;padding:16px}
    .message{margin-bottom:12px;display:flex;flex-direction:column}
    .message.user{align-items:flex-end}
    .message.bot{align-items:flex-start}
    .bubble{padding:12px 16px;border-radius:16px;max-width:70%}
    .user .bubble{background:#3366ff;color:#fff;border-bottom-right-radius:4px}
    .bot .bubble{background:#f0f0f0;color:#222;border-bottom-left-radius:4px}
    .time{font-size:0.75rem;color:#8f9bb3;margin-top:4px}
    .input-row{display:flex;gap:8px;align-items:center;padding-top:8px}
    .flex-field{flex:1}
  `],
})
export class ChatComponent {
  messages: ChatMessage[] = [
    { text: 'Hello! How can I help you?', sender: 'bot', date: new Date() },
  ];
  newMessage = '';

  send() {
    if (!this.newMessage.trim()) return;
    this.messages.push({ text: this.newMessage, sender: 'user', date: new Date() });
    const userMsg = this.newMessage;
    this.newMessage = '';
    setTimeout(() => {
      this.messages.push({ text: `You said: "${userMsg}". This is a demo response.`, sender: 'bot', date: new Date() });
    }, 1000);
  }
}
