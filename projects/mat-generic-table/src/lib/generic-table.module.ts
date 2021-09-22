import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { SimpleGenericTableComponent } from './simple-generic-table/simple-generic-table.component';
import { PaginatedGenericTableComponent } from './paginated-generic-table/paginated-generic-table.component';

/**
 * @credit JamesDepret
 *
 * https://github.com/JamesDepret/angular-generic-mat-table/blob/master/src/app/app.component.html
 * https://stackblitz.com/edit/angular-generic-mat-table
 */

@NgModule( {
    declarations: [SimpleGenericTableComponent, PaginatedGenericTableComponent],
    exports: [SimpleGenericTableComponent, PaginatedGenericTableComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatIconModule,
        MatPaginatorModule,
        MatSelectModule,
        MatSortModule,
        MatTableModule,
        MatMenuModule
    ]
} )
export class GenericTableModule
{
}
