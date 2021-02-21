import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public tabs = [
    {index: 0, active: false, text: 'landing.MOST_SELLING'},
    {index: 1, active: true, text: 'landing.BEST_SELLING'},
    {index: 2, active: false, text: 'landing.MOST_VISITED'}
  ];
  public carsTimeout = [
    '/assets/cars/1.jpg',
    '/assets/cars/2.jpg',
    '/assets/cars/3.jpg',
    '/assets/cars/4.jpg'
  ];
  public cars6 = [
    {image: '/assets/cars/1.jpg', title: '85,000 km', subtitle: '$8300'},
    {image: '/assets/cars/2.jpg', title: '67,000 km', subtitle: '$12500'},
    {image: '/assets/cars/3.jpg', title: '42,000 km', subtitle: '$11300'},
    {image: '/assets/cars/4.jpg', title: '85,000 km', subtitle: '$8300'},
    {image: '/assets/cars/5.jpg', title: '33,000 km', subtitle: '$8600'},
    {image: '/assets/cars/6.jpg', title: '28,000 km', subtitle: '$19000'},
    {image: '/assets/cars/2.jpg', title: '28,000 km', subtitle: '$19000'},
    {image: '/assets/cars/3.jpg', title: '28,000 km', subtitle: '$19000'},
    {image: '/assets/cars/1.jpg', title: '28,000 km', subtitle: '$19000'},
  ];

  public carSixBodyType = [
    {image: '/assets/cars/1.jpg', title: 'Sedan'},
    {image: '/assets/cars/2.jpg', title: 'SUV / Crossover'},
    {image: '/assets/cars/3.jpg', title: 'Pickup'},
    {image: '/assets/cars/4.jpg', title: 'Coupe'},
    {image: '/assets/cars/5.jpg', title: 'Hatchback'},
    {image: '/assets/cars/6.jpg', title: 'Van'},
  ];

  public carSixMakes = [
    {image: '/assets/cars/1.jpg', title: 'Peugeot'},
    {image: '/assets/cars/2.jpg', title: 'Volkswagen'},
    {image: '/assets/cars/3.jpg', title: 'Hyundai'},
    {image: '/assets/cars/4.jpg', title: 'Renault'},
    {image: '/assets/cars/5.jpg', title: 'Kia Motors'},
    {image: '/assets/cars/6.jpg', title: 'Toyota'},
    {image: '/assets/cars/4.jpg', title: 'Volkswagen'},
    {image: '/assets/cars/4.jpg', title: 'Hyundai'},
  ];

  public cars4 = [
    {image: '/assets/cars/1.jpg', title: '2019', offers: '451 offers', subtitle: 'BMW series 5'},
    {image: '/assets/cars/2.jpg', title: '2018', offers: '561 offers', subtitle: 'Chevrolet Express Cargo'},
    {image: '/assets/cars/3.jpg', title: '2020', offers: '4211 offers', subtitle: 'Toyota Prius AWD'},
    {image: '/assets/cars/4.jpg', title: '2012', offers: '1231 offers', subtitle: 'Ford F-150'},
    {image: '/assets/cars/5.jpg', title: '2000', offers: '4231 offers', subtitle: 'Chevrolet Express Cargo'},
    {image: '/assets/cars/6.jpg', title: '2001', offers: '9651 offers', subtitle: 'Toyota Prius AWD'},
  ];
  public  = this.cars4.reverse();

  constructor() {
  }

  ngOnInit(): void {
  }

  public setActiveTab(index: number): void {
    this.tabs.map(tab => tab.active = false);
    this.tabs[index].active = true;
  }
}
