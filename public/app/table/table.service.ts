import {Injectable} from "@angular/core";

@Injectable()
export class TableService {

  getCourseDetails() : any[] {

    let data = [
      {
        id: "1",
        name: "Angular 2-1",
        descr: "Angualr 2 First look and More...",
        price: 0,
        author: "Admin"
      },
      {
        id: "2",
        name: "React",
        descr: "React basics...",
        price: 0,
        author: "Admin"
      }
    ]

    return data;
  }
}
