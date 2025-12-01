import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-parametro',
  imports: [RouterModule],
  templateUrl: './parametro.html',
  styleUrl: './parametro.css',
})
export class Parametro implements OnInit {
  id: number=0;
  constructor(private route: ActivatedRoute) {}
  ngOnInit():void {
    const param = this.route.snapshot.paramMap.get('id');
    if(param){
      this.id = Number(param);
    }
    console.log('Parametro componente inicializado con id', this.id);
  }
}
