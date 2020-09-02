import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'registers',
        loadChildren: () =>
          import('./registers/registers.module').then((m) => m.RegistersModule),
      },
      // {
      //   path: 'contact',
      //   canActivate: [AdminGuard],
      //   loadChildren: () =>
      //     import('./contact/contact.module').then((m) => m.ContactModule),
      // },
    ],
  },
  {
    path: 'panel',
    loadChildren: () =>
      import('./panel/panel.module').then((m) => m.PanelModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pagenotfound/pagenotfound.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
