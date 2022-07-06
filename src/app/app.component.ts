import { Component, OnInit ,ViewChild} from '@angular/core';
import { ApiService } from './services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SearchBox';

  
  //total number of fields
  displayedColumns: string[] = ['id', 'title', 'thumbnailUrl'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _api: ApiService){

  }
  ngOnInit(): void {
    this.getAllData();
  }

  //calling and subscribing api
  getAllData(){
    this._api.fetchdata().subscribe({
      next:(res)=>{
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("Error while fetching data");
      }
    })
  }
  

  
  // filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();



    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
  
}

