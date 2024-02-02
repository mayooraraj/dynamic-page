import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() btnText!:string;
  @Input() btnIcon!:string;
  @Input() btnrightIcon!:string;
  @Input() style: any;

  @Output() dynamicClickEvent = new EventEmitter<void>();

  emitClickEvent(){
    this.dynamicClickEvent.emit();
  }
}
