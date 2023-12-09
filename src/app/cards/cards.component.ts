import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent  implements OnInit {

  public card= [
      {
        img: 'https://pop.proddigital.com.br/wp-content/uploads/sites/8/2021/11/breaking-bad-696x392.jpg',
        title: 'Breaking Bad',
        subtitle: 'Serie de TV',
        content: 'Un profesor de química de secundaria convertido en fabricante de metanfetaminas después de ser diagnosticado con cáncer.'
      },
      {
        img: 'https://ew.com/thmb/P8Em8wGYLd20dWvPsZTNSx-ExIA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/000122934hr-2000-7f3854d2253541a1a4b0226ae13b05da.jpg',
        title: 'The Godfather',
        subtitle: 'Película',
        content: 'La saga de una familia de la mafia italiana en América.'
      },
      {
        img: 'https://cdn-3.expansion.mx/dims4/default/b819de1/2147483647/strip/true/crop/1000x563+0+0/resize/1200x676!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fca%2F4d%2F2b7eb4bb427ba2fbf07f3fb09cbd%2Fmv5bmji5odkzndqynf5bml5banbnxkftztgwndq5mjyznzm._V1_.jpg',
        title: 'Game of Thrones',
        subtitle: 'Serie de TV',
        content: 'Las casas nobles de los Siete Reinos de Westeros luchan por el control del Trono de Hierro.'
      },
      {
        img: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2010/09/32013-inception-tendra-su-propio-videojuego.jpg?tf=1200x',
        title: 'Inception',
        subtitle: 'Película',
        content: 'Un ladrón profesional que roba información implantando sueños en la mente de las personas.'
      },
      {
        img: 'https://hips.hearstapps.com/hmg-prod/images/stranger-things-3-1562056202.jpg?resize=2048:*',
        title: 'Stranger Things',
        subtitle: 'Serie de TV',
        content: 'Un grupo de niños en la década de 1980 descubre fenómenos paranormales en su pequeña ciudad.'
      },
      {
        img: 'https://cdn.theatlantic.com/thumbor/hX0gnKVqMXPUorVGv2wiIIGfCKo=/21x12:1578x888/976x549/media/img/mt/2018/07/TDK/original.jpg',
        title: 'The Dark Knight',
        subtitle: 'Película',
        content: 'Batman se enfrenta a su enemigo más diabólico, el Joker.'
      },
      {
        img: 'https://i.blogs.es/2852d6/mandalorian-soical/450_1000.jpg',
        title: 'The Mandalorian',
        subtitle: 'Serie de TV',
        content: 'Un cazarrecompensas en el universo de Star Wars emprende una misión para proteger a un niño alienígena.'
      },
  ];

  constructor() { }

  ngOnInit() {}

}
