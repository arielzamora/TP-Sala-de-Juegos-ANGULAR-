
import { Component, OnInit , Input, EventEmitter} from '@angular/core';
import { DatabaseService } from '../../servicios/database.service';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
 @Input()
 listado: Array<any>;


 public resultados : Object;

 constructor(private databaseService : DatabaseService) {
   this.resultados = databaseService.ListarResultados();
   console.log(this.resultados);  
 }

  ngOnInit() {

  }

  ver() {
    console.info(this.listado);
  }

}
