import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-component',
    templateUrl: '/static/app/js/app.component.html?' + new Date()
})

export class AppComponent {
    filter = {};
    view_as: string = "list";

    viewAs(value: string) {
        this.view_as = value;
        console.log(value);
    }

    onChange(value) {
        console.log(this.filter);
    }
}