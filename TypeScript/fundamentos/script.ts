
//TIPOS DE DATOS PRIMITIVOS EN TS
//implicito -> se produce la inferencia de tipo
let miString = "abc"; 
console.log(miString);

// INFERENCIA DE TIPOS
/*
    miVariable = "abc";
    console.log(miVariable);
    miVariable = 10; //INFIERE QUE SI PRIMERO PUSISTE STRING, NO PUEDES DESPUÉS OTRO TIPO DE DATO
*/

//Explícito
let miString2: string;
let number: number;
let booleano: boolean;

//declaración y asignación explícita -> no se usa tanto pero aveces se obliga

let miString3: string = "abc";
let number2: number = 10;
let booleano2: boolean = true;

//error, asignamos tipo pero no valor
//console.log(miString2);

console.log(miString3, number2, booleano2);


//UNIÓN DE TIPOS
let miId: string | number; //podemos guardar tanto texto como numeros
/* miId ="ABC";
miId = 10;
console.log(miId);*/

//TIPOS DE DATOS ESPECIALES
let miNull: null;
miNull = null;
console.log(miNull);

let miUndefinded:undefined;
console.log(miUndefinded);

let miUnkown: unknown; //existe pero no se usa, quita la funcionalidad de typescript
miUnkown='abc';
miUnkown=  20;
miUnkown= true;

let miAny: any; //existe pero no se usa, quita la funcionalidad de typescript
miAny='abc';
miAny=  20;
miAny= true;


//Arreglos
let arrNumeros = [1, 2, 3]; //implicito
let arrNumeros2 : Array<number>;
let arrNumeros3 : number[];
// arrNumeros2 = ["abc"]; -> ya definimos que era arreglo de numeros

let arrString : Array<string>;
let arrString2 : string[];

let arrAny : any[];

//inferencia

let arr = ["abc", 123, true, [], {}, function name(){}]; //infiere any

//tuplas -> tipo de array con un tamaño fijo y podemos definir sus tipos
let tupla: [string, number, boolean] //le digo que voy a esperar 3 elementos con su respectivo tipo de dato
tupla = ["abc", 555, true];
console.log(tupla);


// objetos
let miObject: object; //puede ser cualquier objeto, [] o {}
miObject = {}; //lo reconoce aunque esté vacío
console.log(miObject);

//objeto implicito -> no sabe qué datos va a recibir
let objPersona1: object;
objPersona1 = {};
objPersona1 = {
    nombre: "pepita",
    usuario: "pepita@bit.com",
    contrasenia: "abc"
};
console.log(objPersona1);


//objeto de forma explícita -> asignación de claves y tipo de dato
let objPersona2: {
    nombre: string;
    hijos: number | string;
    casado?: boolean; //valor opcional, si quiere se la pasa o no
    activo: boolean;
};

objPersona2 = {
    nombre: "brandon",
    hijos: 5,
    activo: true
};

console.log(objPersona2);


// enum -> grupos de constantes -> tienen dos valores permitidos number y string
//supongamos diferentes niveles de acceso
//Nombre empieza en mayúscula
//asigna por defecto numeros a cada constante
 enum CodigosPermisos {
    Administrador,
    Profesor,
    Estudiante,
    Acudiente
}
console.log(CodigosPermisos);
console.log(CodigosPermisos.Administrador); //acceso a mis ctes y su valor por defecto asignado

//En caso que yo quiera modificar los códigos de acceso asignados desde el valor de inicio
enum CodigosPermisos2 {
    Administrador = 100,
    Profesor,
    Estudiante,
    Acudiente
}
console.log(CodigosPermisos2);

//En caso que yo quiera modificar los códigos de acceso asignados a todos
enum CodigosPermisos3 {
    Administrador = 100,
    Profesor = 230,
    Estudiante = 500,
    Acudiente = 300
}
console.log(CodigosPermisos3);

//En caso que yo quiera modificar los códigos de acceso asignados a todos
enum CodigosPermisos4 {
    Administrador = "admin",
    Profesor = "prof",
    Estudiante = "estu",
    Acudiente = "acu"
}
console.log(CodigosPermisos4);