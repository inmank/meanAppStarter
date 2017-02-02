import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-title',
  templateUrl: "app/title/title.template.html",
})
export class TitleComponent implements OnInit { 

  @Input() titleName: string;

  ngOnInit() {
    console.log(this.titleName);
  }
}
