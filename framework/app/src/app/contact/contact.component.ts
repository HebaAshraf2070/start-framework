import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  change1: boolean = false;
  change2: boolean = false;
  change3: boolean = false;
  change4: boolean = false;

  func1(e: any) {
    e.target.value.length > 0 ? this.change1 = true : this.change1 = false;
  }

  func2(e: any) {
    e.target.value.length > 0 ? this.change2 = true : this.change2 = false;
  }
  func3(e: any) {
    e.target.value.length > 0 ? this.change3 = true : this.change3 = false;
  }
  func4(e: any) {
    e.target.value.length > 0 ? this.change4 = true : this.change4 = false;
  }

}
