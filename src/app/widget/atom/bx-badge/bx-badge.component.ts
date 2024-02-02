import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SharedataService } from 'src/app/service/sharedata.service';

@Component({
  selector: 'app-bx-badge',
  templateUrl: './bx-badge.component.html',
  styleUrls: ['./bx-badge.component.scss']
})
export class BxBadgeComponent {
 
  @Input() badgeText!:string;
  @Input() style!:any;
  @Input() formControls!:string ;
  onBadgeClick(): void {
    this.style = { ...this.style, 'background-color': '#2D82E5','color':'white' };
  }
}
