import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { AdminComponent } from './admin/admin.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';

const appRoutes: Routes = [
{
  path: '',
  component: EntryListComponent
},
{
  path: 'entries',
  component: EntryListComponent
},
{
  path: 'reports',
  component: ReportsComponent
},
{
  path: 'admin',
  component: AdminComponent
},
{
  path: 'movies',
  component: EntryListComponent
},
{
  path: 'games',
  component: EntryListComponent
},
{
  path: 'shows',
  component: EntryListComponent
},
{
  path: 'albums',
  component: EntryListComponent
},
{
  path: 'details/:id',
  component: EntryDetailsComponent
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
