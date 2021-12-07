import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AneProficiencyListComponent } from './ane-proficiency-list/ane-proficiency-list.component';
import { AneNuclearFamilyComponent } from './ane-nuclear-family/ane-nuclear-family.component';

@NgModule({
  declarations: [
    AppComponent,
    AneProficiencyListComponent,
    AneNuclearFamilyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
