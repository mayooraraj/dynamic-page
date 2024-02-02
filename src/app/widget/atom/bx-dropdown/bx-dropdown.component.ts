import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bx-dropdown',
  templateUrl: './bx-dropdown.component.html',
  styleUrls: ['./bx-dropdown.component.scss']
})
export class BxDropdownComponent {

  @Input() name!:string;
  @Input() formControls!:string;
  @Input() imageUrl!: string ;
  @Input() parentForm!:FormGroup;
  @Input() options: { label: string ;value: string }[] = [];
  @Input() customcountryStyle!: { [key : string]: any};
}
