import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Portofolio } from './portofolio/portofolio';
import { Contact } from './contact/contact';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
    {path:" ", redirectTo:'home', pathMatch:'full'},
    {path:"home",component:Home, title:'Home component'},
    {path:'about',component:About, title:'about'},
    {path:'portfolio', component:Portofolio, title:'portfolio'},
    {path:'contact',component:Contact, title:'contact'},
    {path:'**',component:Notfound, title:'notfound'}
];
