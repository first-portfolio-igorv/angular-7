import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public blogs!:any;
  public title!:string;
  public text!:string;
  public author!:string;
  public saveCheck=false;
  public id!:number;
  constructor(private blogService:ServiceService) { }
  clear(){
    this.text="";
    this.title="";
    this.author="";
  }
  addBlog(){
    if(this.text && this.title && this.author){
    let blog={
      title:this.title,
      text:this.text,
      author:this.author
    }
    this.blogService.addBlog(blog).subscribe(() =>{
      this.getBlogs();
      this.clear();
    })
    }
    else{
      alert("Введіть тект в усі поля")
    }
  }
  saveBlog(){
    let blog={
      title:this.title,
      text:this.text,
      author:this.author
    }
    this.blogService.saveBlog(blog,this.id).subscribe(()=>{
      this.clear();
      this.getBlogs();
      this.saveCheck=false;
    })
  }
  edit(info:any){
    this.title=info.title;
    this.text=info.text;
    this.author=info.author;
    this.id=info.id;
    this.saveCheck=true
  }
  getBlogs(){
    this.blogService.getBlog().subscribe(blog =>{
      this.blogs=blog;
      this.blogService.blogs=blog;
    })
  }
  deleteBlog(index:number){
    this.blogService.deleteBlog(index).subscribe(()=>{
      this.getBlogs();
    })
  }
  ngOnInit(): void {
    this.getBlogs()
  }

}
