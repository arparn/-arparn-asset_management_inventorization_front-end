import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { HomeComponent } from '@app/home/home.component';
import { PropertyDetailComponent } from '@app/property-detail/property-detail.component';
import { AddAssetComponent } from '@app/add-asset/add-asset.component';
import { ChangeAssetFormComponent } from '@app/change-asset-form/change-asset-form.component';
// import { AboutComponent } from '@app/about/about.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'property_detail/:id', component: PropertyDetailComponent },
    { path: 'add-asset', component: AddAssetComponent },
    { path: 'change-asset/:id', component: ChangeAssetFormComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
  ]),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
