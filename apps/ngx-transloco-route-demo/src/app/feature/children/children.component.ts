import { Component, OnInit } from '@angular/core';
import {TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  constructor(private translocoService: TranslocoService) { }

  ngOnInit(): void {
    this.translocoService.load('en').subscribe((t) => console.log('child', t));
  }
}
