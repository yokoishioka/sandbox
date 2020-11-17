import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-class',
  templateUrl: './shadow-class.component.html',
  styleUrls: ['./shadow-class.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
