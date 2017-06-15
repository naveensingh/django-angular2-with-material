import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule}   from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpModule, JsonpModule} from '@angular/http';
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
import {MoviesListComponent} from "./js/movies/as_list/movies.list.component";
import {MoviesService} from "./js/movies/app.movies.service";
import {MoviesCardComponent} from "./js/movies/as_card/movies.card.component";
import {LimitToPipe} from "./js/limitToPipe";
import {MovieDialog} from "./js/movies/movie.dialog.component";

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

    declarations: [LimitToPipe, AppComponent, MoviesListComponent, MoviesCardComponent, MovieDialog],
    entryComponents: [MovieDialog],
    bootstrap: [AppComponent],
    providers: [MoviesService]
})
export class EntertainmentAppModule {
}

platformBrowserDynamic().bootstrapModule(EntertainmentAppModule);
