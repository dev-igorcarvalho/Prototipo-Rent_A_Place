// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { AppComponent } from './app.component';
import { SplashComponent } from './componentes/splash/splash.component';
import { AplicacaoComponent } from './componentes/aplicacao/aplicacao.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ApresentacaoComponent } from './componentes/apresentacao/apresentacao.component';
import { LocaisComponent } from './componentes/locais/locais.component';
import { LocalComponent } from './componentes/locais/local/local.component';
import { HomeComponent } from './componentes/home/home.component';
import { SearchComponent } from './componentes/search/search.component';
import { ResultComponent } from './componentes/search/result/result.component';
import { FiltersComponent } from './componentes/search/filters/filters.component';
import { FiltersPlusComponent } from './componentes/search/filters-plus/filters-plus.component';
import { DetalhesComponent } from './componentes/detalhes/detalhes.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';

//external libraries
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CheckoutComponent } from './componentes/checkout/checkout.component';
import { DetailsComponent } from './componentes/checkout/details/details.component';
import { PaymentComponent } from './componentes/checkout/payment/payment.component';
import { ExtrasComponent } from './componentes/checkout/extras/extras.component';
import { CadastroLocalComponent } from './componentes/cadastro-local/cadastro-local.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { ExperienciaComponent } from './componentes/experiencias/experiencia/experiencia.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'search', component: SearchComponent },
  {path: 'place/:id', component: DetalhesComponent },
  {path: 'checkout/:id', component: CheckoutComponent },
  {path: 'signup', component: CadastroComponent },
  {path: 'register', component: CadastroLocalComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    AplicacaoComponent,
    NavbarComponent,
    ApresentacaoComponent,
    LocaisComponent,
    LocalComponent,
    HomeComponent,
    SearchComponent,
    ResultComponent,
    FiltersComponent,
    FiltersPlusComponent,
    DetalhesComponent,
    CadastroComponent,
    SidebarComponent,
    CheckoutComponent,
    DetailsComponent,
    PaymentComponent,
    ExtrasComponent,
    CadastroLocalComponent,
    ExperienciasComponent,
    ExperienciaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
