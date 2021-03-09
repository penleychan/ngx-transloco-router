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
  }
}
