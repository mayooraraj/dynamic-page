import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './widget/atom/button/button.component';
import { CountryCardComponent } from './widget/molecule/country-card/country-card.component';
import { HeaderComponent } from './shared/header/header.component';
import { BxFirstpageComponent } from './layout/bx-firstpage/bx-firstpage.component';
import { BxCountryCardsComponent } from './widget/organism/bx-country-cards/bx-country-cards.component';
import { BxFooterComponent } from './shared/bx-footer/bx-footer.component';
import { BxSubscribeComponent } from './widget/molecule/bx-subscribe/bx-subscribe.component';
import { BxInputFieldComponent } from './widget/atom/bx-input-field/bx-input-field.component';
import { BxReactiveFormComponent } from './widget/molecule/bx-reactive-form/bx-reactive-form.component';
import { BxFooterBottomComponent } from './widget/molecule/bx-footer-bottom/bx-footer-bottom.component';
import { BxFooterTopComponent } from './widget/molecule/bx-footer-top/bx-footer-top.component';
import { BxFooterTopCardsComponent } from './widget/organism/bx-footer-top-cards/bx-footer-top-cards.component';
import { BxSection1Component } from './widget/organism/bx-section1/bx-section1.component';
import { BxBadgeComponent } from './widget/atom/bx-badge/bx-badge.component';
import { BxBadgesComponent } from './widget/molecule/bx-badges/bx-badges.component';
import { BxSection2Component } from './widget/organism/bx-section2/bx-section2.component';
import { BxSec2CardComponent } from './widget/molecule/bx-sec2-card/bx-sec2-card.component';
import { BxTextareaComponent } from './widget/atom/bx-textarea/bx-textarea.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BxFrstpageDisplayComponent } from './layout/bx-frstpage-display/bx-frstpage-display.component';
import { BxFileuploadComponent } from './widget/atom/bx-fileupload/bx-fileupload.component';
import { BxLabelComponent } from './widget/atom/bx-label/bx-label.component';
import { BxDropdownComponent } from './widget/atom/bx-dropdown/bx-dropdown.component';





@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CountryCardComponent,
    HeaderComponent,
    BxFirstpageComponent,
    BxCountryCardsComponent,
    BxFooterComponent,
    BxSubscribeComponent,
    BxInputFieldComponent,
    BxReactiveFormComponent,
    BxFooterBottomComponent,
    BxFooterTopComponent,
    BxFooterTopCardsComponent,
    BxSection1Component,
    BxBadgeComponent,
    BxBadgesComponent,
    BxSection2Component,
    BxSec2CardComponent,
    BxTextareaComponent,
    BxFrstpageDisplayComponent,
    BxFileuploadComponent,
    BxLabelComponent,
    BxDropdownComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
