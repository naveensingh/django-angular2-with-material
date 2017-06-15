import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-component',
    templateUrl: '/static/app/js/app.component.html?' + new Date()
})

export class AppComponent {
    view_as: string = "cards";

    viewAs(value: string) {
        this.view_as = value;
    }
}