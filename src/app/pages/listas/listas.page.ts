import {Component, OnInit, ViewChild} from '@angular/core';
import {Usuario} from "../../common/interfaces";
import {DataService} from "../../services/data.service";
import {IonList, ToastController} from "@ionic/angular";

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})
export class ListasPage implements OnInit {

  @ViewChild('lista', {static: false}) lista!: IonList;
  usuarios: Usuario[] = []
  constructor(private dataService: DataService,
              private toastCtrl: ToastController) { }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers() {
    this.dataService.getUsers().subscribe(
      (data: Usuario[]) => {
        this.usuarios = data;
      }
    )
  }

  call(user: Usuario) {
    console.log(user);
    this.presentToast('Llamando a '+user.name, 'primary');
    this.lista.closeSlidingItems();
  }

  favorite(user: Usuario) {
    console.log(user);
    this.presentToast(user.name+' añadido a favoritos', 'danger');
    this.lista.closeSlidingItems();
  }

  share(user: Usuario) {
    console.log(user);
    this.presentToast('Compartir '+user.name, 'secondary');
    this.lista.closeSlidingItems();
  }

  private async presentToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500,
      color
    })
    await toast.present();
  }
}
