import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { ItemsComponent } from '../pages/items/items.component';
import { PortafolioComponent } from '../pages/portafolio/portafolio.component';
import { SearchComponent } from '../pages/search/search.component';

const app_routes: Routes = [
    {path: '', component:PortafolioComponent },
    {path: 'about', component:AboutComponent},
    {path: 'items/:id', component:ItemsComponent},
    {path: 'search/:termino:', component:SearchComponent},
    {path: '**' , pathMatch: 'full', redirectTo: ''}
    
];


@NgModule({
    imports: [
        RouterModule.forRoot ( app_routes, { useHash: true} )
    ],
    exports: [
        RouterModule  
    ]

})
export class AppRoutingModule {

}