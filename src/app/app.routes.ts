import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { RestaurantItemsComponent } from './pages/restaurant-items/restaurant-items.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'foodCategory',
        component: CategoriesComponent
    },
    {
        path: 'restaurant-items',
        component: RestaurantItemsComponent
    },
    {
        path: 'create-order',
        component: CreateOrderComponent
    },

];

