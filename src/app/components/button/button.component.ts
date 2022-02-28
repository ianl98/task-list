//llama a Input para permitir manejar parametros desde el template
//llama a Ouput y Event emiter para emitir un evento en la salida
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  //llamando a la instancia Input y creando las dos variables que se utilizan en header component como parametro al llamar a button component
  @Input() text: string = "";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }

}
