import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-no-class',
  templateUrl: './shadow-no-class.component.html',
  styleUrls: ['./shadow-no-class.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowNoClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
