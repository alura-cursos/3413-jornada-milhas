import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DepoimentosComponent } from "./depoimentos/depoimentos.component";
import { HomeComponent } from "./home.component";
import { PromocoesComponent } from "./promocoes/promocoes.component";
import { MaterialModule } from "src/app/core/material/material.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    DepoimentosComponent,
    HomeComponent,
    PromocoesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    DepoimentosComponent,
    HomeComponent,
    PromocoesComponent
  ]
})
export class HomeModule { }
