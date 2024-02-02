import { Component } from '@angular/core';

@Component({
  selector: 'app-bx-country-cards',
  templateUrl: './bx-country-cards.component.html',
  styleUrls: ['./bx-country-cards.component.scss']
})
export class BxCountryCardsComponent {
  countries = [
    {
      imageSrc: '../../../../assets/images/uae.svg',
      heading: 'Beinex – UAE',
      addressLines: ['506, BB01, Bay Square', 'Business Bay', 'P. O. Box 82940', 'Dubai, United Arab Emirates'],
      phone: '+971 4 243 9494',
      mobile: '+971 52 695 0068',
      email: 'Info@beinex.com'
    },
    {
      imageSrc: '../../../../assets/images/qatar.svg',
      heading: 'Beinex Qatar',
      addressLines: ['Global Business Centre II', 'Office No. R19, 2nd floor Al', 'Hitmi Village, Building No 40', 'Cornish Road, Doha, Qatar', 'P.O Box 25422'],
      office: '+974 44023981',
      phone: '+974 50682589',
      email: 'Info@beinex.qa',
    },
    {
      imageSrc: '../../../../assets/images/uk.svg',
      heading: 'Beinex – United Kingdom',
      addressLines: ['New Broad Street House', '35 New Broad St', 'London England EC2M 1NH'],
      phone: ' +44 7539 393552',
      email: 'UK@beinex.com',
    },
    {
      imageSrc: '../../../../assets/images/india.png',
      heading: 'Beinex – India (Kochi)',
      addressLines: ['#19, Ground Level', 'Infopark TBC, JNI Stadium', 'Kaloor, Kochi', ' Kerala 682017, India'],
      office: '+91 484 4855800',
      phone: ' +91 920 7204499 ',
      mobile: '+91 952 6451099 ',
      email: 'Info@beinex.com',
    },
    {
      imageSrc: '../../../../assets/images/kenya.svg',
      heading: 'Beinex – Kenya',
      addressLines: ['Beinex Consulting Ltd', 'Purshottam Place, 7th floor,', 'Westlands Rd, Museum Hill', 'P.O. Box 66217 00800,', 'Nairobi, Kenya. '],
      phone: '+254 020 515 4016 ',
      email: 'Info@beinex.com',
    },
  ];
  
}
