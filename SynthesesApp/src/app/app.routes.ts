import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { User } from '../models/User';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    {
        path: '',
        component: HeaderComponent,
        pathMatch: 'full'
    },

    {
        path: 'users', 
        component: UsersComponent,
        pathMatch: 'full'
    },

    {
        path: '**', 
        component: AboutComponent,
        pathMatch: 'full' 
    },
    
];
