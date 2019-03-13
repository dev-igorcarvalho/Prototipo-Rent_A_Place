import { Injectable } from '@angular/core';
import { Local } from '../models/local';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  constructor() { }

  description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'+
  ' ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut '+
  'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore';

  localDataSource: Local[] = [
    {id: 1, title: 'Cozy Room 1', subTitle: '3 blocks away from subway', description: this.description, fotoUrl: '../../../../assets/images/local3.jpg', fotoMap: '../../assets/images/map.JPG', bairro: 'Ipanema', rating: '',  distance: 9.2, time: 0, price: 6, extras: ''},
    {id: 2, title: 'Cozy Room 2', subTitle: 'Near the supermarket', description: this.description, fotoUrl: '../../../../assets/images/local4.jpg', fotoMap: '../../assets/images/map.JPG', bairro: 'Catete', rating: '',  distance: 3.6, time: 0, price: 2, extras: ''},
    {id: 3, title: 'Cozy Room 3', subTitle: 'Best place for a napp', description: this.description, fotoUrl: '../../../../assets/images/local2.jpg', fotoMap: '../../assets/images/map.JPG', bairro: 'Tijuca', rating: '',  distance: 4.8, time: 0, price: 3, extras: ''},
    {id: 4, title: 'Cozy Room 4', subTitle: 'Best view ever', description: this.description, fotoUrl: '../../../../assets/images/local1.jpg', fotoMap: '../../assets/images/map.JPG', bairro: 'Botafogo', rating: '',  distance: 6.9, time: 0, price: 4, extras: ''},
    {id: 5, title: 'Cozy Room 5', subTitle: 'Near a surfing spot', description: this.description, fotoUrl: '../../../../assets/images/local4.jpg', fotoMap: '../../assets/images/map.JPG', bairro: 'Centro', rating: '',  distance: 0.9, time: 0, price: 5, extras: ''},
    {id: 6, title: 'Cozy Room 6', subTitle: 'Near the supermarket', description: this.description, fotoUrl: '../../../../assets/images/local3.jpg', fotoMap: '../../assets/images/map.JPG', bairro: 'Flamengo', rating: '',  distance: 2.7, time: 0, price: 6, extras: ''},
    {id: 7, title: 'Cozy Room 7', subTitle: 'Near a surfing spot', description: this.description, fotoUrl: '../../../../assets/images/local1.jpg', fotoMap: '../../assets/images/map.JPG', bairro: 'Glória', rating: '',  distance: 1.3, time: 0, price: 7, extras: ''},
    {id: 8, title: 'Cozy Room 8', subTitle: 'Best place for a napp', description: this.description, fotoUrl: '../../../../assets/images/local2.jpg', fotoMap: '../../assets/images/map.JPG', bairro: 'Lapa', rating: '',  distance: 11.8, time: 0, price: 8, extras: ''},
    {id: 9, title: 'Cozy Room 9', subTitle: '3 blocks away from subway', description: this.description, fotoUrl: '../../../../assets/images/local3.jpg', fotoMap: '../../assets/images/map.JPG', bairro: 'Ipanema', rating: '',  distance: 3.7, time: 0, price: 9, extras: ''}
  ]
}
