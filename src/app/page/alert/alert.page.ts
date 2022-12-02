import { Component, OnInit } from '@angular/core';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  titulo = '';

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async mostrarAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Titulo de alert',
      subHeader: 'Subtitulo',
      message: 'Esto es un mensaje de alerta',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Cancel pulsado')
        }
      },{
        text: 'OK',
        handler: () => {
          console.log('OK pulsado');
    }
      }]
    });
    await alert.present();
  }

  async mostrarInput() {
    const alert = await this.alertCtrl.create({
      header: 'Alert con input',
      subHeader: 'Insert el nombre',
      inputs: [{
        name: 'Nombre',
        type: 'text',
        placeholder: 'Escribe el nombre'
      },{
        name: 'Apellido',
        type: 'text',
        placeholder: 'Escribe el apellido'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Cancel pulsado')
        }
      },{
        text: 'OK',
        handler: (datos: {Nombre: string, Apellido: string}) => {
          console.log('OK pulsado', datos);
          this.titulo = datos.Nombre + ' ' + datos.Apellido;
        }
      }]
    });
    await alert.present();
  }
}
