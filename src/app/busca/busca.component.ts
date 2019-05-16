import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { BuscaService } from './busca.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {

  inputBusca: FormControl = new FormControl();

  resultadoBusca: any[] = [];
  constructor(private buscaService: BuscaService) { }

  ngOnInit() {
    this.inputBusca.valueChanges
      .subscribe(inputBusca => this.buscaService.buscarArtista(inputBusca)
      .subscribe(res => {
        if(res.status === 400){ return; }
        else{ this.resultadoBusca = res.artists.items}
      }));
  }

}
