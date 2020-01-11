import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: '<div>' +
              '<h1>{{pageTitle}}</h1>' +
              '<span>My first component</span>' +
              '<pm-products></pm-products>' +
            '</div> '
})

export class AppComponent {
  pageTitle = 'Acme Product Management';
}
