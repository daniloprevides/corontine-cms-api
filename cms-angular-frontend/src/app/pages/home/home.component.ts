import { Component, OnInit } from "@angular/core";
import { DefaultElementsService } from "src/app/services/default-elements.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(
    private defaultElements: DefaultElementsService,
    private router: Router
  ) {
    const defaultPageName = this.defaultElements.getDefaultPage();
    this.router.navigate([defaultPageName]);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit() {}
}
