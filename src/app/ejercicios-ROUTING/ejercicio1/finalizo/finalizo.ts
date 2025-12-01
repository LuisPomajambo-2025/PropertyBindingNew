import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-finalizo',
  imports: [RouterModule],
  templateUrl: './finalizo.html',
  styleUrl: './finalizo.css',
})
export class Finalizo implements OnInit {
  id: number=0;
  constructor(private route: ActivatedRoute) {}
  ngOnInit():void {
    const param = this.route.snapshot.paramMap.get('id');
    if(param){
      this.id = Number(param);
    }
    console.log('Parametro componente finalizo inicializado con id', this.id);
  }
}