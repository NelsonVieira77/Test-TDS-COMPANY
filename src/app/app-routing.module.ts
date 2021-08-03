import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DallolComponent } from './dallol/dallol.component';
import { FairbanksComponent } from './fairbanks/fairbanks.component';
import { LondonComponent } from './london/london.component';
import { RecifeComponent } from './recife/recife.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { VancouverComponent } from './vancouver/vancouver.component';
import { YakutskComponent } from './yakutsk/yakutsk.component';


const routes: Routes = [

    {
      path: '',
      component: TelaInicialComponent,
      pathMatch: 'full'
    },
    {
      path: 'dallol',
      component: DallolComponent,
      pathMatch: 'full'
    },
    {
      path: 'fairbanks',
      component: FairbanksComponent,
      pathMatch: 'full'
    },
    {
      path: 'london',
      component: LondonComponent,
      pathMatch: 'full'
    },
    {
      path: 'recife',
      component: RecifeComponent,
      pathMatch: 'full'
    },
    {
      path: 'vancouver',
      component: VancouverComponent,
      pathMatch: 'full'
    },
    {
      path: 'yakutsk',
      component: YakutskComponent,
      pathMatch: 'full'
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
