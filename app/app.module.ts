import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavPointsComponent } from './nav-points/nav-points.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { ImagesPageComponent } from './images-page/images-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { BigImageComponent } from './big-image/big-image.component';

@NgModule({
  declarations: [
    AppComponent,
    NavPointsComponent,
    WelcomePageComponent,
    SkillsPageComponent,
    ImagesPageComponent,
    ContactsPageComponent,
    ImagePreviewComponent,
    BigImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
