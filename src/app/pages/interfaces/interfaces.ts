//get, put, delete
export interface Iusuarios {
    id: number;
    nombre: string;
    apellido: string;
    correo: string;
    password: string;
    sede: string;
}
//post
export interface Iusuario {
    nombre: string;
    apellido: string;
    correo: string;
    password: string;
    sede: string;
    isactive: boolean
}

export interface Users {
    id: number,
    nombre: string;
    password: string;
    correo: string;
    sede: string;
    isactive: boolean
}