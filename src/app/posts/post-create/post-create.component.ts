import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  //Property
  newPost = "No Content";
  enteredValue = "";
  X = 0;

  onAddPost() {
    // console.dir(postInput);
    this.newPost = this.enteredValue;
  }

  constructor() { }

  ngOnInit() {
  }

}
