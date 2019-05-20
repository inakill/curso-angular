import { Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{
    
    mostrar = true;
    
    frase: any = {
        mensaje: "Eres un fistro diodenarl",
        autor: "Chiquito de la calzada"
    }

    personajes: string[] = ['Diodeno', 'Sesuarl', 'no puedor'];
}