import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserListService } from '../user-list.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'title', 'body']; // Specify columns to display
  dataSource = new MatTableDataSource<any>();
  count = 0;
  @ViewChild('paginator') paginator: MatPaginator;

  constructor(private userList: UserListService) {}
  ngOnInit() {
    this.loadPosts(1);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  loadPosts(page: number) {
    const itemsPerPage = this.paginator?.pageSize || 10; // Use default value if not set
    this.userList.getPosts(page, itemsPerPage).subscribe((data) => {
      this.dataSource.data = data;
    });
    // Load total posts count
    this.userList.getPostsCount().subscribe((data) => {
      console.log(data);
      const dataArray = Object.values(data);
      for (let item of dataArray) {
        this.count++;
      }
      console.log(this.count);
      console.log(this.paginator.length);
      this.paginator.length = this.count;
      console.log(this.paginator.length);
    });
  }


}
