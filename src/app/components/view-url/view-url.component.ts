import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-url',
  templateUrl: './view-url.component.html',
  styleUrls: ['./view-url.component.scss']
})
export class ViewUrlComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }

}
