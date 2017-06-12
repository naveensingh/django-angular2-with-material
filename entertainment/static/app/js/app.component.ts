import {Component} from '@angular/core';
import {Http} from '@angular/http'
import {bootstrap} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'material-app',
  templateUrl: '/static/app/js/app.component.html'
})
export class AppComponent {
  
  private version: any;
  
  constructor(http: Http) {
    // Display the currently used Material 2 version.
    this.version = http
      .get('https://api.github.com/repos/angular/material2-builds/commits/HEAD')
      .map(res => res.json())
  }
  
}

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */