import { Injectable } from '@angular/core';

//interface
import { Alert } from "@core/models/alert.interface";

//Material
import { MatDialog } from "@angular/material/dialog";

// Warning: No modificar porfavor es un componente que se usa en toda la aplicacion

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  	openDialog(data: Alert): void{
		const dialogRef = this.dialog.open(data.template, {
			data: {
				title: data.title, 
				text: data.text, 
				icon: data.icon, 
				contentClass: data.contentClass, 
				confirmButton: data.confirmButton, 
				confirmButtonText: data.confirmButtonText, 
				confirmButtonClass: data.confirmButtonClass, 
				cancelButton: data.cancelButton, 
				cancelButtonText: data.cancelButtonText, 
				cancelButtonClass: data.cancelButtonClass, 
				closeButton: data.closeButton, 
				callback: data.callback
			},
		  	panelClass: data.paneClass
		});
		dialogRef.afterClosed().subscribe((res)=>{
		  data.callback(res);
		})
	}
}	
