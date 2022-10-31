import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch: 'full'},
  {path: 'home' , component:HomeComponent},
  {path: 'products' , component:ProductsComponent},
  {path: 'about' , component:AboutComponent},
  {path: 'contactus' , component:ContactusComponent},
  {path: 'blogs' , component:BlogsComponent},
  {path: 'certifications' , component:CertificationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
