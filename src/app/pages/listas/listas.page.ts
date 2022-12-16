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
  habilitado: boolean = true;

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

  reordenar(event: any){
    console.log(event);

    const itemMover = this.usuarios.splice(event.detail.from, 1)[0];
    this.usuarios.splice(event.detail.to, 0, itemMover);

    event.detail.complete();
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
