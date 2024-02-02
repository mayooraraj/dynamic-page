import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent {

  @Input() imageSrc!: string;
  @Input() heading!: string;
  @Input() addressLines!: string[];
  @Input() office?: string;
  @Input() phone?: string;
  @Input() mobile?: string;
  @Input() email?: string;
}
