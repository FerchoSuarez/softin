import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Modulo
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


//Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],

  exports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ]
})
export class MaterialModule { }
