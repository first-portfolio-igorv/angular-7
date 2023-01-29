import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public url=environment.backend;
  public api={blogs:`${this.url}/blogs`}
  public blogs:any;
  addBlog(blog:any){
    return this.http.post(this.api.blogs, blog)
  }
  getBlog(){
    return this.http.get(this.api.blogs)
  }
  deleteBlog(index:number){
    return this.http.delete(`${this.api.blogs}/${index}`)
  }
  saveBlog(blog:any,index:number){
    return this.http.patch(`${this.api.blogs}/${index}`,blog)
  }
  constructor(private http:HttpClient) { }
}
