import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-emulated-no-class',
  templateUrl: './emulated-no-class.component.html',
  styleUrls: ['./emulated-no-class.component.scss']
})
export class EmulatedNoClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
