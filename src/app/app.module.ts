import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CheckboxBoxComponent } from './checkbox-box/checkbox-box.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MovieComponent } from './movie-list/movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { AiControlComponent } from './ai-control/ai-control.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PopMoviesComponent } from './pages/pop-movies/pop-movies.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { GenreSelectorComponent } from './genre-selector/genre-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxBoxComponent,
    AiControlComponent,
    HeaderComponent,
    MovieListComponent,
    MovieComponent,
    AboutComponent,
    PopMoviesComponent,
    GenreSelectorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatExpansionModule,
    RouterModule.forRoot([
      { path: '', component: PopMoviesComponent },
      { path: 'about', component: AboutComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
