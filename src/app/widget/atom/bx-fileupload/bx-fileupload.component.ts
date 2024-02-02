import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bx-fileupload',
  templateUrl: './bx-fileupload.component.html',
  styleUrls: ['./bx-fileupload.component.scss']
})
export class BxFileuploadComponent {
  @Input() name!:string;
 // @Input() control!:FormControl;
  @Input() formControls!:string ;
  @Input() parentForm!: FormGroup;
  @Input() fileInputLabel!:string;
 
 
}