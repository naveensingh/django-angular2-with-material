import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-component',
    templateUrl: '/static/app/js/app.component.html?' + new Date()
})

export class AppComponent {
    filter = {};

    onChange(value) {
        console.log(this.filter);
    }
}