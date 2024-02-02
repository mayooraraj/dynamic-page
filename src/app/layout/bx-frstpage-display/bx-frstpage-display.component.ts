import { Component } from '@angular/core';
import { SharedataService } from 'src/app/service/sharedata.service';

@Component({
  selector: 'app-bx-frstpage-display',
  templateUrl: './bx-frstpage-display.component.html',
  styleUrls: ['./bx-frstpage-display.component.scss']
})
export class BxFrstpageDisplayComponent {
   
  constructor(private dataSharingService:SharedataService){}
  formData$ = this.dataSharingService.formData$; 
}
