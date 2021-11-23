import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { Alert } from "@core/models/alert.interface";

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alert
  ) { }

  ngOnInit(): void {
  }

  confirm(): void{
    this.dialogRef.close(true);
  }
  cancel(): void{
    this.dialogRef.close(false);
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
