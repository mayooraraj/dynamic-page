import { style } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bx-label',
  templateUrl: './bx-label.component.html',
  styleUrls: ['./bx-label.component.scss']
})
export class BxLabelComponent {

 @Input() label!:string;
 @Input() style!:any;
}
