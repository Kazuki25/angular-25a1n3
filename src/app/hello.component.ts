import { Component, input } from '@angular/core';

@Component({
  selector: 'hello',
  standalone: true,
  template: `<h1>Hello {{ name() }}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent {
  readonly name = input.required<string>();
}
