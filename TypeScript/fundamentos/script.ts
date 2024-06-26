
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


//Permiten compartir tipos entre variables y objetos
//ALIAS
//definimos un nombre personalizado como tipo de dato
type NombreEstudiante = string;
type HijosEstudiante = number;
type ActivoEstudiante = boolean;

//definimos nuestros propios tipos de datos
type Estudiante = {
    nombre: NombreEstudiante;
    hijos:HijosEstudiante;
    activo: ActivoEstudiante;
}

let miEstudiante: Estudiante;

miEstudiante = {
    nombre: "juanito",
    hijos: 0,
    activo: true
}

console.log(miEstudiante);

//INTERFACES
interface Profesor {
    id: number;
    nombre: string;
    curso: string;
    activo: boolean;
}

//asignamos la interface a nuestra variable, y debe cumplir con lo definido
//las interfaces sólo se pueden usar con objetos
let miProfesor: Profesor;

miProfesor = {
    id: 1,
    nombre:'jirafales',
    curso:'angular',
    activo: true
}

console.log(miProfesor);


// FUNCIONES

let retornado: any;

//Declaración clásica
function miFuncion1() {
    console.log("soy función 1");
}

retornado = miFuncion1();
console.log(retornado);

//Fn flecha
const miFuncion2 = () => {
    console.log("soy función 2");
}

retornado = miFuncion2();
console.log(retornado);

//Entonces si no quiero que retorne nada, sólo se ejecute
//explicitamente digo que no hay return
function miFuncion3() : void {
    console.log("soy función 3");
}
miFuncion3();

//Si queremos que retorne, debemos decir qué nos va a retornar
function miFuncion4() : string {
    return "soy función 4";
}
retornado = miFuncion4();
console.log(retornado);


//recibir parámetros -> supongamos una suma
function miFuncion5(num1:number , num2: number) : number {
    return num1 * num2;
}
retornado = miFuncion5(4, 5);
console.log(retornado);

