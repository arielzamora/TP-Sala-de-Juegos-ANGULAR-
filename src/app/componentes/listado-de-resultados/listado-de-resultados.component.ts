
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
   this.ListarResultados();
 }

  ngOnInit() {

  }


  public ListarResultados()
  {

    this.databaseService.ListarResultados().subscribe(
      data => {
        this.resultados = data;
       // this.dataFiltros=this.listaPeliculas;
      },
      error => {
        console.log(error);
      }
    );
  }

  ver() {
    console.info(this.listado);
  }

}
