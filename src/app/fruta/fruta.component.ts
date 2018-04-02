import {Component} from '@angular/core'; 

@Component ({
    selector: 'fruta',
    templateUrl:'./fruta.component.html'
})

export class FrutaComponent{
    public nombre_componente = 'Componente de fruta';
    public listado_fruta = 'Naranja,Mansana,Pera y sandia';

    public nombre:String = "David Valderrama";
    public edad:number = 26;
    public mayorDeEdad:boolean=true;
    public trabajos:Array<string> = ["Carpintero","Albaíl","Fontanero"];
    public Array1:Array<any> = ["Carpintero",44,"Fontanero"]
    public comodin = "cualquier cosa"
}