//Componentes:
//"Son pequeñas clases que cumplen una tarea especifica: menu, aside, demás paginas/subpaginas, footer..."
//tienen un pequeño "decorador" (constructor) especifico

//Directivas estructurales:
//ngIf (muestra lo que esté a true)
//ngFor

//ONLINE IDE: STACKBLITZ
//https://stackblitz.com/edit/angular-9arkn7?file=src%2Fapp%2Fapp.component.ts


/* CREANDO ENTORNO LOCAL:
---------------------------
ng new my-app - Genera una aplicación nueva con todos los paquetes definidos en el package.json
ng serve -o (servidor local en 4200 y -o abre el navegador)
ng g c components/footer - Generate component


ESTRUCTURA DE UN PROYECTO:
--------------------------
e2e -> pruebas e2e (pruebas automaticas)
node_modules -> paquetes de node. Depende de package.json
src -> codigo fuente
    app -> aplicacion de angular
        app.component -> es el primer componente que carga angular
            <app-root></app-root>
        .css -> aplica al fichero html del mismo nombre
        .spec.ts -> son pruebas automaticas
        app.module.ts -> constructor NgModule
    assets -> recursos estaticos
    environments ->
        .ts ->
        .prod.ts ->
    ...    

.editorConfig -> conf. del editor
.gitIgnore
angular.json -> Assets, Styles, Scripts
package-lock.json -> no se modifica manualmente
package.json -> Se crea de forma automatica, especifica las dependencias necesarias en produccion.
README.md -> github...
tsconfig.json -> Configuracion de typescript, estandar de ecmascript... etc.
tslint.json -> fichero de reglas de tslint.


BOOTSTRAP 4
------------
getBootstrap.com y copiar css (y js)




*/