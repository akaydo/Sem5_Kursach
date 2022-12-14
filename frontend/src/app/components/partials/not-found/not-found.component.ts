import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  @Input()
  visible = false;
  @Input()
  notFoundMessage = "Ничего не найдено";
  @Input()
  resetLinkText = "Сбросить";
  @Input()
  resetLinkRoute = "/";
  constructor() { }

  ngOnInit(): void {
  }

}
