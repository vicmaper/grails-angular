import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators/catchError';
import { _throw } from 'rxjs/observable/throw';

@Component({
  selector: 'app-alumnos-create',
  templateUrl: './alumnos-create.component.html',
  styleUrls: ['./alumnos-create.component.css']
})
export class AlumnosCreateComponent implements OnInit {

  alumnos = {};
  
  lista:string[]=["Bachillerato","Licenciatura","Maestria", "Doctorado"];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }


  saveAlumnos() {

    this.http.post('http://localhost:8080/enviar/save', this.alumnos)
      .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/alumnos-details/', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}