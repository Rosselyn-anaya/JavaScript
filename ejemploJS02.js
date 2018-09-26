

//declaracion
function resultado(){
 // referencia elemento html del documento
 var Inputnum1 =document.getElementById("num1");
 var Inputnum2= document.getElementById("num2");
 
 var elementoH2=document.getElementById("resultado");

//parseando string a int
num1=parseInt(Inputnum1.value);
num2=parseInt(Inputnum2.value);

 //asignamos el valor de la suma
 //al contenido de html del elemento h2
 elementoH2.innerHTML="La suma es: "+(num1+num2);

 
}

