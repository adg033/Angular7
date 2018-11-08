import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iam-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  lugar: string
  empresa: string

  constructor() { }

  ngOnInit() {
    this.lugar = 'Madrid'
    this.empresa = 'IAM'
  }

}