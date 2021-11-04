import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alumnos-details',
  templateUrl: './alumnos-details.component.html',
  styleUrls: ['./alumnos-details.component.css']
})
export class AlumnosDetailsComponent implements OnInit {

  alumnos = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getAlumnosDetails(this.route.snapshot.params['id']);
  }

  getAlumnosDetails(id) {
    this.http.get('http://localhost:8080/enviar/'+id).subscribe(data => {
      this.alumnos = data;
    });
  }

  deleteAlumnos(id) {
  this.http.delete('http://localhost:8080/enviar/'+id)
    .subscribe(res => {
        this.router.navigate(['/alumnos']);
      }, (err) => {
        console.log(err);
      }
    );
}

}