package com.angrails
import grails.rest.*
import grails.*
@Resource(uri='/Alumnos', formats=['json'])
class Alumnos {
	String correo
	String matricula
	String semestre
	String nivel
    String area
    static constraints = {
    	correo blank:false
    	matricula blank:false , unique:true
    	semestre blank:false
    	nivel nullable: true , blank:true
    }

    String toString(){
    	matricula
    }
}
