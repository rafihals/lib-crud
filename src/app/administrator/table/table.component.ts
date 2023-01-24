import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableDataSource, TableItem } from './table-datasource';
import {AutofillMonitor} from '@angular/cdk/text-field';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddComponent } from '../dialog-add/dialog-add.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})


export class TableComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableItem>;
  dataSource: TableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'symbol'];

  constructor(
    private _autofill: AutofillMonitor,
    public dialog: MatDialog,
    ) {
    this.dataSource = new TableDataSource();
  }

  openDialog(){
    this.dialog.open(DialogAddComponent,
    //   {
    //   width:'350px'
    // }
    )
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
