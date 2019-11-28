import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre = 'Iñakill';

  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  pi = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Mayor',
      numero: '1'
    }
  };

  valorDePromesa = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Data OK'), 3500);
  });

  fecha = new Date();

  nombre2 = 'inakill bensonSeÑora longJohnson';

  domYoutube = 'https://www.youtube.com/embed/';
  video = 'OAq3bIqL5sg';

  activar = true;
}
