import { Component } from '@angular/core';

@Component({
    template: `
    <div class="jumbotron text-center">
        <h1>404 Not found</h1>
        <p>You may be lost. Follow the breadcrumbs back <a routerLink="/">home</a>.</p>
    </div>
        `,
    styles: [``]
})
export class NotFoundComponent {
}