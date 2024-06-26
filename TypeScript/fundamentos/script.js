//TIPOS DE DATOS PRIMITIVOS EN TS
//implicito -> se produce la inferencia de tipo
var miString = "abc";
console.log(miString);
// INFERENCIA DE TIPOS
/*
    miVariable = "abc";
    console.log(miVariable);
    miVariable = 10; //INFIERE QUE SI PRIMERO PUSISTE STRING, NO PUEDES DESPUÉS OTRO TIPO DE DATO
*/
//Explícito
var miString2;
var number;
var booleano;
//declaración y asignación explícita -> no se usa tanto pero aveces se obliga
var miString3 = "abc";
var number2 = 10;
var booleano2 = true;
//error, asignamos tipo pero no valor
//console.log(miString2);
console.log(miString3, number2, booleano2);
//UNIÓN DE TIPOS
var miId; //podemos guardar tanto texto como numeros
/* miId ="ABC";
miId = 10;
console.log(miId);*/
//TIPOS DE DATOS ESPECIALES
var miNull;
miNull = null;
console.log(miNull);
var miUndefinded;
console.log(miUndefinded);
var miUnkown; //existe pero no se usa, quita la funcionalidad de typescript
miUnkown = 'abc';
miUnkown = 20;
miUnkown = true;
var miAny; //existe pero no se usa, quita la funcionalidad de typescript
miAny = 'abc';
miAny = 20;
miAny = true;
//Arreglos
var arrNumeros = [1, 2, 3]; //implicito
var arrNumeros2;
var arrNumeros3;
// arrNumeros2 = ["abc"]; -> ya definimos que era arreglo de numeros
var arrString;
var arrString2;
var arrAny;
//inferencia
var arr = ["abc", 123, true, [], {}, function name() { }]; //infiere any
//tuplas -> tipo de array con un tamaño fijo y podemos definir sus tipos
var tupla; //le digo que voy a esperar 3 elementos con su respectivo tipo de dato
tupla = ["abc", 555, true];
console.log(tupla);
// objetos
var miObject; //puede ser cualquier objeto, [] o {}
miObject = {}; //lo reconoce aunque esté vacío
console.log(miObject);
//objeto implicito -> no sabe qué datos va a recibir
var objPersona1;
objPersona1 = {};
objPersona1 = {
    nombre: "pepita",
    usuario: "pepita@bit.com",
    contrasenia: "abc"
};
console.log(objPersona1);
//objeto de forma explícita -> asignación de claves y tipo de dato
var objPersona2;
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
var CodigosPermisos;
(function (CodigosPermisos) {
    CodigosPermisos[CodigosPermisos["Administrador"] = 0] = "Administrador";
    CodigosPermisos[CodigosPermisos["Profesor"] = 1] = "Profesor";
    CodigosPermisos[CodigosPermisos["Estudiante"] = 2] = "Estudiante";
    CodigosPermisos[CodigosPermisos["Acudiente"] = 3] = "Acudiente";
})(CodigosPermisos || (CodigosPermisos = {}));
console.log(CodigosPermisos);
console.log(CodigosPermisos.Administrador); //acceso a mis ctes y su valor por defecto asignado
//En caso que yo quiera modificar los códigos de acceso asignados desde el valor de inicio
var CodigosPermisos2;
(function (CodigosPermisos2) {
    CodigosPermisos2[CodigosPermisos2["Administrador"] = 100] = "Administrador";
    CodigosPermisos2[CodigosPermisos2["Profesor"] = 101] = "Profesor";
    CodigosPermisos2[CodigosPermisos2["Estudiante"] = 102] = "Estudiante";
    CodigosPermisos2[CodigosPermisos2["Acudiente"] = 103] = "Acudiente";
})(CodigosPermisos2 || (CodigosPermisos2 = {}));
console.log(CodigosPermisos2);
//En caso que yo quiera modificar los códigos de acceso asignados a todos
var CodigosPermisos3;
(function (CodigosPermisos3) {
    CodigosPermisos3[CodigosPermisos3["Administrador"] = 100] = "Administrador";
    CodigosPermisos3[CodigosPermisos3["Profesor"] = 230] = "Profesor";
    CodigosPermisos3[CodigosPermisos3["Estudiante"] = 500] = "Estudiante";
    CodigosPermisos3[CodigosPermisos3["Acudiente"] = 300] = "Acudiente";
})(CodigosPermisos3 || (CodigosPermisos3 = {}));
console.log(CodigosPermisos3);
//En caso que yo quiera modificar los códigos de acceso asignados a todos
var CodigosPermisos4;
(function (CodigosPermisos4) {
    CodigosPermisos4["Administrador"] = "admin";
    CodigosPermisos4["Profesor"] = "prof";
    CodigosPermisos4["Estudiante"] = "estu";
    CodigosPermisos4["Acudiente"] = "acu";
})(CodigosPermisos4 || (CodigosPermisos4 = {}));
console.log(CodigosPermisos4);
var miEstudiante;
miEstudiante = {
    nombre: "juanito",
    hijos: 0,
    activo: true
};
console.log(miEstudiante);
//asignamos la interface a nuestra variable, y debe cumplir con lo definido
//las interfaces sólo se pueden usar con objetos
var miProfesor;
miProfesor = {
    id: 1,
    nombre: 'jirafales',
    curso: 'angular',
    activo: true
};
console.log(miProfesor);
// FUNCIONES
var retornado;
//Declaración clásica
function miFuncion1() {
    console.log("soy función 1");
}
retornado = miFuncion1();
console.log(retornado);
//Fn flecha
var miFuncion2 = function () {
    console.log("soy función 2");
};
retornado = miFuncion2();
console.log(retornado);
//Entonces si no quiero que retorne nada, sólo se ejecute
//explicitamente digo que no hay return
function miFuncion3() {
    console.log("soy función 3");
}
miFuncion3();
//Si queremos que retorne, debemos decir qué nos va a retornar
function miFuncion4() {
    return "soy función 4";
}
retornado = miFuncion4();
console.log(retornado);
//recibir parámetros -> supongamos una suma
function miFuncion5(num1, num2) {
    return num1 * num2;
}
retornado = miFuncion5(4, 5);
console.log(retornado);
