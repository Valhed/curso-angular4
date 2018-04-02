import {Component} from '@angular/core';

@Component ({
    selector: 'app-fruta',
    templateUrl: './fruta.component.html'
})

export class FrutaComponent {
    public nombre_componente = 'Componente de fruta';
    public listado_fruta = 'Naranja,Mansana,Pera y sandia';

    public nombre;
    public edad;
    public mayorDeEdad;
    public trabajos: Array<string>;
    public Array1: Array<any>;
    public comodin;

    constructor() {
        this.nombre = 'David Valderrama';
        this.edad = 17;
        this.mayorDeEdad = true;
        this.comodin = 'cualquier cosa';
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.cambiarNombre();
        this.cambiarEdad(55);
        console.log(this.nombre);
        console.log(this.edad);

        // Variables y alcance
        // tslint:disable-next-line:prefer-const
        let uno = 8;
        const dos = 15;

        if (uno === 8) {
            // tslint:disable-next-line:no-shadowed-variable
            const uno = 3;
            // tslint:disable-next-line:prefer-const
            // tslint:disable-next-line:no-shadowed-variable
            const dos = 88;
            console.log('dentro de if ' + uno);
        }
        console.log('fuera de if ' + uno);
    }
    holaMundo(nombre) {
        this.nombre = 'Juan Lopez';
        alert('Hola Mundo ' + nombre);
    }
    cambiarNombre() {
       this.nombre = 'Juan Lopez';
    }
    cambiarEdad(edad) {
        this.edad = edad;
     }
}

