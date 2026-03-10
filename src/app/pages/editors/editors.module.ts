import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';

import { EditorsRoutingModule, routedComponents } from './editors-routing.module';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    EditorsRoutingModule,
    FormsModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class EditorsModule { }
