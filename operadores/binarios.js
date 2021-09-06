// in 
something in somethingItems

// Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro")
0 in arvores;                  // retorna true
3 in arvores;                  // retorna true
6 in arvores;                  // retorna false
"cedro" in arvores;            // retorna false (você deve especificar o numero do índice,
                               // não o valor naquele índice)
"length" in arvores;           // retorna true (length é uma propriedade de Array)

// Objetos predefinidos
"PI" in Math;                  // retorna true
var minhaString = new String("coral");
"length" in minhaString;       // retorna True

// Objetos personalizados
var meuCarro = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meuCarro;           // retorna true
"modelo" in meuCarro;          // retorna true


// instanceof
objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if(dia instanceof Date) {
    // code here
}