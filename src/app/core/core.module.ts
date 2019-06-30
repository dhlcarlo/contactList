import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';
import { ToastService } from './toast.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule, // because we use <router-outlet> and routerLink
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent, RouterModule, FormsModule, ReactiveFormsModule],
  providers: [ToastService]
})
export class CoreModule {}
