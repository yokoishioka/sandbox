import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-none-no-class',
  templateUrl: './none-no-class.component.html',
  styleUrls: ['./none-no-class.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoneNoClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
