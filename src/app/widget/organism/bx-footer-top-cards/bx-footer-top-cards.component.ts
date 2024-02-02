import { Component } from '@angular/core';

@Component({
  selector: 'app-bx-footer-top-cards',
  templateUrl: './bx-footer-top-cards.component.html',
  styleUrls: ['./bx-footer-top-cards.component.scss']
})
export class BxFooterTopCardsComponent {
  footercard = [
    {
      bxIcon : '../../../../assets/images/bxlogo.svg',
      sectionTitle : '',
      items :['About Beinex​', 'Careers', 'Press Releases', '' , 'Beinex in the News'],
  },
  {
    sectionTitle : 'Our Services',
    items : ['Advanced Analytics', 'AI /ML/RPA', 'Alteryx APA', 'Audit Analytics' , 'Beinex Digital', 'Business Intelligence'],
  },
  {
    sectionTitle : '',
    items : ['Competitive Intelligence', 'Modern Cloud Analytics', 'Risk Analytics', 'Tableau' , 'Tableau Support Services'], 
  },
  {
    sectionTitle : 'Our Industries',
    items : ['Finance', 'Human Resources', 'Procurement', 'Sales'],
  },
  {
    sectionTitle : 'Our Partners',
    items : ['Tableau', 'Alteryx', 'AURAA', 'Amazon Web Services'],
  },
  {
    sectionTitle : '',
    items : ['Microsoft Azure', 'Snowflake', 'Salesforce', 'Alation'],
  }
];
}
