import { ThrowStmt } from '@angular/compiler';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent implements OnInit {

  constructor(
    private router: Router,
    private elementRef: ElementRef) { 

    }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgb(34, 32, 32)' 
  }

  abrirDallol(): void{
    this.router.navigate(['/dallol'])
  }
  abrirFairbanks(): void{
    this.router.navigate(['/fairbanks'])
  }
  abrirLondon(): void{
    this.router.navigate(['/london'])
  }
  abrirRecife(): void{
    this.router.navigate(['/recife'])
  }
  abrirVancouver(): void{
    this.router.navigate(['/vancouver'])
  }
  abrirYakutsk(): void{
    this.router.navigate(['/yakutsk'])
  }


}
