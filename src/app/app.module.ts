import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServersComponent } from './header/servers/servers.component';
import { ServerComponent } from './server/server.component';
import { StructualDirectivesComponent } from './structual-directives/structual-directives.component';
import { NgIfDirComponent } from './structual-directives/ng-if-dir/ng-if-dir.component';
import { NgforDirComponent } from './structual-directives/ngfor-dir/ngfor-dir.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { FormsModule } from '@angular/forms';
import { InputDecoComponent } from './input-deco/input-deco.component';
import { StdInfoComponent } from './std-info/std-info.component';
import { StdFormComponent } from './std-info/std-form/std-form.component';
import { StdTableComponent } from './std-info/std-table/std-table.component';


@NgModule({
  declarations: [
    AppComponent,
    
    ServersComponent,
    ServerComponent,
    StructualDirectivesComponent,
    NgIfDirComponent,
    NgforDirComponent,
    AttributeDirectivesComponent,
    InputDecoComponent,
    StdInfoComponent,
    StdFormComponent,
    StdTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
