import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './demo1.html',
  selector: 'app-demo-1',
})
export class DemoComponent {
  name = signal('Chao');
  age = signal(15);

  updateName() {
    this.name.set('Eddie');
    // oh, update the dom, make sure they are seeing the new name.
  }
}

// zone.js
// test first commit
