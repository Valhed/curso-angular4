import {Component} from '@angular/core';

import {Empleado} from './empleado';

@Component({
    selector: 'app-empleado-tag',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent {
    public title = 'Componente Empleado';
    public empleado: Empleado;
    public trabajadores: Array<Empleado>;
    public trabajador_externo: boolean;
    public color: string;
    public color_seleccionado: string;

    constructor() {
        this.empleado = new Empleado('David Valderrama', 26, 'cocinero', true);
        this.trabajadores = [
            new Empleado('David Valderrama', 26, 'cocinero', true),
            new Empleado('David Lopez', 27, 'Chef', true),
            new Empleado('Gorge Valderrama', 36, 'ayudante de cocina', true)
        ];
        this.trabajador_externo = false;
        this.color = 'green';
        this.color_seleccionado = '#ccc';
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarExterno(valor) {
        this.trabajador_externo = valor;
    }
    logColorSeleccionado() {
        console.log(this.color_seleccionado);
    }
}
