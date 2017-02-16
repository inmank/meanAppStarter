import { Component } from '@angular/core';

@Component({
    selector: 'my-nav',
    templateUrl: "app/navigation/nav.template.html",
})

export class NavigationComponent {

  courseTableHeading: string[] = ["Id", "Name", "Description", "Price-mod", "Author"];


}
