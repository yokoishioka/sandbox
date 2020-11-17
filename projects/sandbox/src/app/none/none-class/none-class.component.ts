import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-none-class',
  templateUrl: './none-class.component.html',
  styleUrls: ['./none-class.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoneClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
