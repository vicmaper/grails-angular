import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
alumnos: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  	this.http.get('http://localhost:8080/enviar').subscribe(data => {
    this.alumnos = data;
  });
  }

}
