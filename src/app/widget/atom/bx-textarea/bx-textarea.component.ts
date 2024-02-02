import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-bx-textarea',
  templateUrl: './bx-textarea.component.html',
  styleUrls: ['./bx-textarea.component.scss']
})
export class BxTextareaComponent {
  @Input() type!: string;
  @Input() placeholder!: string ;
  @Input() imageUrl!: string ;
  @Input() formControls!:string ;
  @Input() parentForm!: FormGroup;
 
  
}
