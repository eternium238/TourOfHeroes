import { NgModel } from "@angular/forms";
import { AppModule } from "./app.module";
import { ServerModule } from "@angular/platform-server";
import { AppComponent } from "./app.component";
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        AppModule,
        ServerModule
    ],
    bootstrap: [AppComponent],
})
export class AppServerModule {}