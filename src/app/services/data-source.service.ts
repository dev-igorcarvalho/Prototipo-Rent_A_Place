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
    {id: 1, title: 'Cozy Room 1', subTitle: '3 blocks away from subway', shortTips:'Near the Beach', description: this.description, fotoUrl: '../../../../assets/images/local4.jpg', fotoMap: '../../assets/images/ipanemaMap.JPG', bairro: 'Ipanema', rating: '',  distance: 1.2, time: 0, price: 6, extras: ''},
    {id: 2, title: 'Cozy Room 2', subTitle: 'Near the supermarket', shortTips:'Hammock & Office', description: this.description, fotoUrl: '../../../../assets/images/local6.jpg', fotoMap: '../../assets/images/cateteMap.JPG', bairro: 'Catete', rating: '',  distance: 3.6, time: 0, price: 2, extras: ''},
    {id: 3, title: 'Cozy Room 3', subTitle: 'Best place for a napp', shortTips:'Downtown Area', description: this.description, fotoUrl: '../../../../assets/images/local2.jpg', fotoMap: '../../assets/images/tijucaMap.JPG', bairro: 'Tijuca', rating: '',  distance: 4.8, time: 0, price: 3, extras: ''},
    {id: 4, title: 'Cozy Room 4', subTitle: 'Best view ever', shortTips:'Cosy Place', description: this.description, fotoUrl: '../../../../assets/images/local1.jpg', fotoMap: '../../assets/images/botafogoMap.JPG', bairro: 'Botafogo', rating: '',  distance: 6.9, time: 0, price: 4, extras: ''},
    {id: 5, title: 'Cozy Room 5', subTitle: 'Near a surfing spot', shortTips:'SofaBed', description: this.description, fotoUrl: '../../../../assets/images/local5.jpg', fotoMap: '../../assets/images/centroMap.JPG', bairro: 'Centro', rating: '',  distance: 7.9, time: 0, price: 5, extras: ''},
    {id: 6, title: 'Cozy Room 6', subTitle: 'Near the supermarket', shortTips:'Relax and go', description: this.description, fotoUrl: '../../../../assets/images/local3.jpg', fotoMap: '../../assets/images/flamengoMap.JPG', bairro: 'Flamengo', rating: '',  distance: 8.8, time: 0, price: 6, extras: ''},
    {id: 7, title: 'Cozy Room 7', subTitle: 'Near a surfing spot', shortTips:'Bed and Lunch', description: this.description, fotoUrl: '../../../../assets/images/local1.jpg', fotoMap: '../../assets/images/gloriaMap.JPG', bairro: 'Glória', rating: '',  distance: 10.3, time: 0, price: 7, extras: ''},
    {id: 8, title: 'Cozy Room 8', subTitle: 'Best place for a napp', shortTips:'Best couch ever', description: this.description, fotoUrl: '../../../../assets/images/local2.jpg', fotoMap: '../../assets/images/lapaMap.JPG', bairro: 'Lapa', rating: '',  distance: 11.8, time: 0, price: 8, extras: ''},
    {id: 9, title: 'Cozy Room 9', subTitle: '3 blocks away from subway', shortTips:'Near the Beach', description: this.description, fotoUrl: '../../../../assets/images/local3.jpg', fotoMap: '../../assets/images/ipanemaMap.JPG', bairro: 'Ipanema', rating: '',  distance: 13.7, time: 0, price: 9, extras: ''}
  ]

  localDataSourceAroundYou: Local[] = [
    {id: 1, title: 'Cozy Room 1', subTitle: '3 blocks away from subway', shortTips:'', description: this.description, fotoUrl: '../../../../assets/images/local3.jpg', fotoMap: '../../assets/images/ipanemaMap.JPG', bairro: 'Ipanema', rating: '',  distance: 80, time: 0, price: 6, extras: ''},
    {id: 2, title: 'Cozy Room 2', subTitle: 'Near the supermarket', shortTips:'', description: this.description, fotoUrl: '../../../../assets/images/local4.jpg', fotoMap: '../../assets/images/cateteMap.JPG', bairro: 'Catete', rating: '',  distance: 150, time: 0, price: 2, extras: ''},
    {id: 3, title: 'Cozy Room 3', subTitle: 'Best place for a napp', shortTips:'', description: this.description, fotoUrl: '../../../../assets/images/local2.jpg', fotoMap: '../../assets/images/tijucaMap.JPG', bairro: 'Tijuca', rating: '',  distance: 200, time: 0, price: 3, extras: ''},
    {id: 4, title: 'Cozy Room 4', subTitle: 'Best view ever', shortTips:'', description: this.description, fotoUrl: '../../../../assets/images/local1.jpg', fotoMap: '../../assets/images/botafogoMap.JPG', bairro: 'Botafogo', rating: '',  distance: 247, time: 0, price: 4, extras: ''},
    {id: 5, title: 'Cozy Room 5', subTitle: 'Near a surfing spot', shortTips:'', description: this.description, fotoUrl: '../../../../assets/images/local4.jpg', fotoMap: '../../assets/images/centroMap.JPG', bairro: 'Centro', rating: '',  distance: 322, time: 0, price: 5, extras: ''},
    {id: 6, title: 'Cozy Room 6', subTitle: 'Near the supermarket', shortTips:'', description: this.description, fotoUrl: '../../../../assets/images/local3.jpg', fotoMap: '../../assets/images/flamengoMap.JPG', bairro: 'Flamengo', rating: '',  distance: 415, time: 0, price: 6, extras: ''},
    {id: 7, title: 'Cozy Room 7', subTitle: 'Near a surfing spot', shortTips:'', description: this.description, fotoUrl: '../../../../assets/images/local1.jpg', fotoMap: '../../assets/images/gloriaMap.JPG', bairro: 'Glória', rating: '',  distance: 478, time: 0, price: 7, extras: ''},
    {id: 8, title: 'Cozy Room 8', subTitle: 'Best place for a napp', shortTips:'', description: this.description, fotoUrl: '../../../../assets/images/local2.jpg', fotoMap: '../../assets/images/lapaMap.JPG', bairro: 'Lapa', rating: '',  distance: 674, time: 0, price: 8, extras: ''},
    {id: 9, title: 'Cozy Room 9', subTitle: '3 blocks away from subway', shortTips:'', description: this.description, fotoUrl: '../../../../assets/images/local3.jpg', fotoMap: '../../assets/images/ipanemaMap.JPG', bairro: 'Ipanema', rating: '',  distance: 712, time: 0, price: 9, extras: ''}
  ]
}
