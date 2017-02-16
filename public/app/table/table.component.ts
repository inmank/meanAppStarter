import {Component, Input, OnInit} from '@angular/core';
import {TableService} from "./table.service";

@Component({
  selector: 'my-table',
  templateUrl: "app/table/table.template.html",
  providers: [TableService]
})

export class TableComponent implements OnInit{

  @Input() heading: string[];
  @Input() tableType: string;

  constructor(private tableservice: TableService) {

  }
  courseDetails: any[];

  // courseDetails: any[] = [
  //   {
  //     id: "1",
  //     name: "Angular 2",
  //     descr: "Angualr 2 First look and More...",
  //     price: 0,
  //     author: "Admin"
  //   },
  //   {
  //     id: "2",
  //     name: "React",
  //     descr: "React basics...",
  //     price: 0,
  //     author: "Admin"
  //   }
  //]

  ngOnInit(): void {
      this.courseDetails = this.tableservice.getCourseDetails();
  }

}
