import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {  RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { ListComponent } from './list/list.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TableComponent } from './table/table.component';
import { MatSortModule } from '@angular/material/sort';
import {TextFieldModule} from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogAddComponent } from './dialog-add/dialog-add.component';


const routes : Routes = [
  {
    path: '', component: MainComponent,
    children:[
      {
        path:'',
        redirectTo: '/admin/home',
        pathMatch: 'full',
      },
      {
        path:'home',component:TableComponent
      },
      {
        path:'list',component:ListComponent
      },
      {
        path:'settings',component:SettingsComponent
      },
      {
        path:'log-out',component:LogoutComponent
      },
    ]
  }
]

@NgModule({
  declarations: [
    MainComponent,
    SettingsComponent,
    ListComponent,
    LogoutComponent,
    TableComponent,
    DialogAddComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    TextFieldModule,
    MatInputModule,
    MatDialogModule,
    
  ]
})
export class AdministratorModule { }
