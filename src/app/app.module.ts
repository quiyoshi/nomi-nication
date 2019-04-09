import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { SlidetoggleComponent } from "./slidetoggle/slidetoggle.component";
import { AuthComponent } from "./auth/auth.component";
import { Put_tableComponent } from "./put_table/put_table.component";

@NgModule({
  declarations: [
    AppComponent,
    SlidetoggleComponent,
    AuthComponent,
    Put_tableComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
