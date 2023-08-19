import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { BodyComponent } from './products/body.component';
import { SingleProductComponent } from './single-product/single-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: BannerComponent,
  },
  {
    path: 'products',
    component: BodyComponent,
  },
  {
    path: 'single-product/:id',
    component: SingleProductComponent,
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
