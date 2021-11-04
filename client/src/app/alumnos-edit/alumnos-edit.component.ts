import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alumnos-edit',
  templateUrl: './alumnos-edit.component.html',
  styleUrls: ['./alumnos-edit.component.css']
})
export class AlumnosEditComponent implements OnInit {

  alumnos = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAlumnos(this.route.snapshot.params['id']);
  }

  getAlumnos(id) {
    this.http.get('http://localhost:8181/alumnos/'+id).subscribe(data => {
      this.alumnos = data;
    });
  }

  updateAlumnos(id) {
    this.http.put('http://localhost:8181/alumnos/'+id, this.alumnos)
      .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/alumnos-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}