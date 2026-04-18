import { Component, signal } from '@angular/core';

import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [HelloComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly name = signal('Angular 20');
}
