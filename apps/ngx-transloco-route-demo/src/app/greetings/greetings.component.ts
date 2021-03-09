import { Component, OnInit } from '@angular/core';
import {TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'penleychan-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {

  constructor(private translocoService: TranslocoService) { }

  ngOnInit(): void {
    this.translocoService.load('en').subscribe((t) => console.log('app', t));
  }

}
