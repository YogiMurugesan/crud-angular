import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [RouterOutlet,HttpClientModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-angular';
  users:any[]=[]

  constructor(private http: HttpClient){}
  ngOnInit(){
    this.http.get<any[]>('http://localhost:3000/users')
    .subscribe({
      next:(users:any[])=>{
        this.users=users;
      }
    });
  }
}
