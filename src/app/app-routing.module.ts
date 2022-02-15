import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  // {
  //   path: 'dashboard',
  //   component:DashComponent,
  //   children: [
  //     {
  //       path: 'home',
  //       component: HomeComponent,
  //       outlet: 'route1'
  //     },
  //     {
  //       path: 'dashboard/profile',
  //       component: ProfileComponent,
  //       outlet: 'route1'
  //     }
  //   ]
  // },
  
  
  
  // {
  //   path: 'home',
  //   component:HomeComponent,
    
  // },
  // {
  //   path: 'profile',
  //   component:ProfileComponent,
  // },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '',
    redirectTo: '/admin/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
