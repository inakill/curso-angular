import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activa: boolean = true): string {
    if (!activa) {
      return value;
    }
    const posiciones = value.split('');
    let result = '';
    posiciones.forEach(element => {
      result += '*';
    });

    return result;
  }

}
