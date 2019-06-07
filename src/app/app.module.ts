import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatTableModule } from '@angular/material';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListService } from './services/list.service';
import { ListModel } from './models/list.model';

@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [ListService, ListModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
