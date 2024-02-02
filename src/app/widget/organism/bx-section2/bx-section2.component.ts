import { Component } from '@angular/core';

@Component({
  selector: 'app-bx-section2',
  templateUrl: './bx-section2.component.html',
  styleUrls: ['./bx-section2.component.scss']
})
export class BxSection2Component {
  cardHeading: string = 'Industry';
  cardHeading2: string = 'Offerings';
  cardHeading3: string = 'Description';
  
  para:string = 'Predictive analytics is often applied here and for prediction of future possible relevant matters for tickets. Data science optimises these processes helping the companies to improve customer satisfaction rates and avoid previous mistakes. ';

  cardItems: { imageSrc: string, text: string , iconSrc: string}[] = [
    { imageSrc: '../../../../assets/icons/IT.svg', text: 'Information Technology',iconSrc: '../../../../assets/icons/Vector 93.svg' },
    { imageSrc: '../../../../assets/icons/HR.svg', text: 'Human Resources' ,iconSrc: '../../../../assets/icons/Vector 93.svg' },
    { imageSrc: '../../../../assets/icons/procurement.svg', text: 'Procurement',iconSrc: '../../../../assets/icons/Vector 93.svg'  },
    { imageSrc: '../../../../assets/icons/finance.svg', text: 'Finance' ,iconSrc: '../../../../assets/icons/Vector 93.svg' },
    { imageSrc: '../../../../assets/icons/banking.svg', text: 'Banking',iconSrc: '../../../../assets/icons/Vector 93.svg'  },
  ];
  offerings: {  text: string , iconSrc: string}[] = [
    { text: 'Ticket Response ',iconSrc: '../../../../assets/icons/Vector 93.svg' },
    { text: 'Sentiment Analysis' ,iconSrc: '../../../../assets/icons/Vector 93.svg' },
    { text: 'Project Capabilities',iconSrc: '../../../../assets/icons/Vector 93.svg'  },
    { text: 'Error reduction ' ,iconSrc: '../../../../assets/icons/Vector 93.svg' },
  ];
}
