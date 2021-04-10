import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  name: string = "Beny DZIENGUE";
  level: string = "B3-ASI";
  constructor() { }

  ngOnInit(): void {
  }

}
