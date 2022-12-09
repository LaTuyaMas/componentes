import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  slides: {img: string, titulo: string, desc: string}[] = [
    {
      img: '/assets/slides/no-image-icon.jpg',
      titulo: 'Comparte fotos',
      desc: 'Las mejores fotos a tu alcance'
    },
    {
      img: '/assets/slides/music.png',
      titulo: 'La mejor música',
      desc: 'Lleva tu música siempre contigo'
    },
    {
      img: '/assets/slides/calendar.png',
      titulo: 'Calendario',
      desc: 'Para que no te olvides nada'
    },
    {
      img: '/assets/slides/placeholder.png',
      titulo: 'Comparte tu ubicación',
      desc: 'Para que siempre sepas donde estas'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
