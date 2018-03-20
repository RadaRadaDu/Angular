import { NgModule } from '@angular/core';
import { ModuleWithProviders } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from './components/home/home.component';

const ROUTES: Routes = 
[
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
