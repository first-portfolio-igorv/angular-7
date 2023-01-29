import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public blogs=this.blogServise.blogs;
  constructor(private blogServise:ServiceService) { }
  getBlogs(){
    this.blogServise.getBlog().subscribe(blog =>{
      this.blogs=blog;
      this.blogServise.blogs=blog;
    })
  }
  ngOnInit(): void {
    this.getBlogs()
  }

}
