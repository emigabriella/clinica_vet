export class mascota{
  n_dueno: string = "";
  direccion : string = "";
  numero : number = 0;
  correo : string = "";
  n_mascota : string = "";
  tipo_mascota : string = "";
  edad : number = 0;
  raza : string = "";

 constructor(
    n_dueno: string,
    direccion : string,
    numero : number,
    correo : string,
    n_mascota : string,
    tipo_mascota : string,
    edad : number,
    raza : string,
  ){
    this.n_dueno = n_dueno;
    this.direccion = direccion;
    this.numero = numero;
    this.correo = correo;
    this.n_mascota = n_mascota;
    this.tipo_mascota = tipo_mascota;
    this.edad = edad;
    this.raza = raza;
  }
}
