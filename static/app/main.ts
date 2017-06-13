import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule}   from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpModule, JsonpModule} from '@angular/http';
import {MoviesModule} from "./js/movies/movies.module";
import {AppComponent} from './js/app.component';
import {
    CdkDataTableModule,
    FullscreenOverlayContainer,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    OverlayContainer
} from '@angular/material';
import {MoviesComponent} from "./js/movies/movies.component";
import {MoviesService} from "./js/movies/app.movies.service";

/**
 * NgModule that includes all Material modules that are required to serve
 * the Plunker.
 */
@NgModule({
    exports: [
        MdAutocompleteModule,
        MdButtonModule,
        MdButtonToggleModule,
        MdCardModule,
        MdCheckboxModule,
        MdChipsModule,
        MdDatepickerModule,
        MdDialogModule,
        MdExpansionModule,
        MdGridListModule,
        MdIconModule,
        MdInputModule,
        MdListModule,
        MdMenuModule,
        MdCoreModule,
        MdProgressBarModule,
        MdProgressSpinnerModule,
        MdRadioModule,
        MdRippleModule,
        MdSelectModule,
        MdSidenavModule,
        MdSlideToggleModule,
        MdSliderModule,
        MdSnackBarModule,
        MdTabsModule,
        MdToolbarModule,
        MdTooltipModule,
        MdNativeDateModule,
        CdkDataTableModule,
    ]
})
export class EntertainmentMaterialModule {
}

@NgModule({

    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        EntertainmentMaterialModule,
        BrowserAnimationsModule
    ],

    declarations: [AppComponent, MoviesComponent],
    bootstrap: [AppComponent],
    providers: [MoviesService]
})
export class EntertainmentAppModule {
}

platformBrowserDynamic().bootstrapModule(EntertainmentAppModule);

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */