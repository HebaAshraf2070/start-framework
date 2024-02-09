import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: "", redirectTo: "about", pathMatch: "full" },
  { path: "about", component: AboutComponent, title: "app/about page" },
  { path: "portfolio", component: PortfolioComponent, title: "app/portfolio page" },
  { path: "contact", component: ContactComponent, title: "app/contact page" },
  { path: "**", component: ErrorComponent, title: "app/error page" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
