import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bx-sec2-card',
  templateUrl: './bx-sec2-card.component.html',
  styleUrls: ['./bx-sec2-card.component.scss']
})
export class BxSec2CardComponent {
  @Input() heading!: string ;
  @Input() para?:string;
  @Input() items: { imageSrc?: string, text: string, iconSrc?: string }[] = [];
  @Input() style!:any;
  

 
}
