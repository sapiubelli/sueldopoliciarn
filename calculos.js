function fnc_ver() {


var combo = document.getElementById("jerarquia");
var selected = combo.options[combo.selectedIndex].text;
document.getElementById("0_tujerarquia").innerHTML = selected;
document.getElementById("0_tujerarquia2").innerHTML = selected;
 
 
 
 
 

document.getElementById("punto3").value = parseFloat(document.getElementById("punto").value) +
( parseFloat(document.getElementById("punto").value) * parseFloat(document.getElementById("punto2").value) / 100 )
;



//*****************************************//
//*****************************************//
//ASIGNACION CARGO/GRADO
//*****************************************//
//*****************************************//

//TU JERARQUIA
var c0_1 = document.getElementById("jerarquia").value * document.getElementById("punto3").value;
document.getElementById("0_1").innerHTML = (c0_1).toFixed(2);

//SUBOFICIALES				
document.getElementById("1_1").innerHTML = (20 * document.getElementById("punto3").value).toFixed(2);
document.getElementById("2_1").innerHTML = (25 * document.getElementById("punto3").value).toFixed(2);
document.getElementById("3_1").innerHTML = (30 * document.getElementById("punto3").value).toFixed(2);
document.getElementById("4_1").innerHTML = (35 * document.getElementById("punto3").value).toFixed(2);
document.getElementById("5_1").innerHTML = (45 * document.getElementById("punto3").value).toFixed(2);
document.getElementById("6_1").innerHTML = (50 * document.getElementById("punto3").value).toFixed(2);
document.getElementById("7_1").innerHTML = (60 * document.getElementById("punto3").value).toFixed(2);
document.getElementById("8_1").innerHTML = (65 * document.getElementById("punto3").value).toFixed(2);

//OFICIALES
document.getElementById("9_1").innerHTML = (30 * document.getElementById("punto3").value).toFixed(2);
document.getElementById("10_1").innerHTML = (35 * document.getElementById("punto3").value).toFixed(2);
document.getElementById("11_1").innerHTML = (45 * document.getElementById("punto3").value).toFixed(2);
document.getElementById("12_1").innerHTML = (55 * document.getElementById("punto3").value).toFixed(2);
document.getElementById("13_1").innerHTML = (75 * document.getElementById("punto3").value).toFixed(2);
document.getElementById("14_1").innerHTML = (85 * document.getElementById("punto3").value).toFixed(2);
document.getElementById("15_1").innerHTML = (100 * document.getElementById("punto3").value).toFixed(2);
document.getElementById("16_1").innerHTML = (110 * document.getElementById("punto3").value).toFixed(2);
document.getElementById("17_1").innerHTML = (120 * document.getElementById("punto3").value).toFixed(2);

//SUBJEFE / JEFE
document.getElementById("18_1").innerHTML = (parseFloat(document.getElementById("17_1").innerHTML * 5 / 100) + parseFloat(document.getElementById("17_1").innerHTML)).toFixed(2);
document.getElementById("19_1").innerHTML = (parseFloat(document.getElementById("17_1").innerHTML * 10 / 100) + parseFloat(document.getElementById("17_1").innerHTML)).toFixed(2);



//*****************************************//
//*****************************************//
// ANTIGUEDAD
//*****************************************//
//*****************************************//

//TU JERARQUIA
var c0_6 = document.getElementById("0_1").innerHTML * document.getElementById("p_antiguedad").value / 100 * document.getElementById("antiguedad").value;
document.getElementById("0_6").innerHTML = (c0_6).toFixed(2);

//SUBOFICIALES				 
document.getElementById("1_6").innerHTML = (document.getElementById("1_1").innerHTML * document.getElementById("p_antiguedad").value / 100 * document.getElementById("1_antiguedad").value).toFixed(2);
document.getElementById("2_6").innerHTML = (document.getElementById("2_1").innerHTML * document.getElementById("p_antiguedad").value / 100 * document.getElementById("2_antiguedad").value).toFixed(2);
document.getElementById("3_6").innerHTML = (document.getElementById("3_1").innerHTML * document.getElementById("p_antiguedad").value / 100 * document.getElementById("3_antiguedad").value).toFixed(2);
document.getElementById("4_6").innerHTML = (document.getElementById("4_1").innerHTML * document.getElementById("p_antiguedad").value / 100 * document.getElementById("4_antiguedad").value).toFixed(2);
document.getElementById("5_6").innerHTML = (document.getElementById("5_1").innerHTML * document.getElementById("p_antiguedad").value / 100 * document.getElementById("5_antiguedad").value).toFixed(2);
document.getElementById("6_6").innerHTML = (document.getElementById("6_1").innerHTML * document.getElementById("p_antiguedad").value / 100 * document.getElementById("6_antiguedad").value).toFixed(2);
document.getElementById("7_6").innerHTML = (document.getElementById("7_1").innerHTML * document.getElementById("p_antiguedad").value / 100 * document.getElementById("7_antiguedad").value).toFixed(2);
document.getElementById("8_6").innerHTML = (document.getElementById("8_1").innerHTML * document.getElementById("p_antiguedad").value / 100 * document.getElementById("8_antiguedad").value).toFixed(2);

//OFICIALES
document.getElementById("9_6").innerHTML = (document.getElementById("9_1").innerHTML * document.getElementById("p_antiguedad").value / 100 * document.getElementById("9_antiguedad").value).toFixed(2);
document.getElementById("10_6").innerHTML = (document.getElementById("10_1").innerHTML * document.getElementById("p_antiguedad").value / 100 * document.getElementById("10_antiguedad").value).toFixed(2);
document.getElementById("11_6").innerHTML = (document.getElementById("11_1").innerHTML * document.getElementById("p_antiguedad").value / 100 * document.getElementById("11_antiguedad").value).toFixed(2);
document.getElementById("12_6").innerHTML = (document.getElementById("12_1").innerHTML * document.getElementById("p_antiguedad").value / 100 * document.getElementById("12_antiguedad").value).toFixed(2);
document.getElementById("13_6").innerHTML = (document.getElementById("13_1").innerHTML * document.getElementById("p_antiguedad").value / 100 * document.getElementById("13_antiguedad").value).toFixed(2);
document.getElementById("14_6").innerHTML = (document.getElementById("14_1").innerHTML * document.getElementById("p_antiguedad").value / 100 * document.getElementById("14_antiguedad").value).toFixed(2);
document.getElementById("15_6").innerHTML = (document.getElementById("15_1").innerHTML * document.getElementById("p_antiguedad").value / 100 * document.getElementById("15_antiguedad").value).toFixed(2);
document.getElementById("16_6").innerHTML = (document.getElementById("16_1").innerHTML * document.getElementById("p_antiguedad").value / 100 * document.getElementById("16_antiguedad").value).toFixed(2);
document.getElementById("17_6").innerHTML = (document.getElementById("17_1").innerHTML * document.getElementById("p_antiguedad").value / 100 * document.getElementById("17_antiguedad").value).toFixed(2);

//SUBJEFE / JEFE
document.getElementById("18_6").innerHTML = (document.getElementById("18_1").innerHTML * document.getElementById("p_antiguedad").value / 100 * document.getElementById("18_antiguedad").value).toFixed(2);
document.getElementById("19_6").innerHTML = (document.getElementById("19_1").innerHTML * document.getElementById("p_antiguedad").value / 100 * document.getElementById("19_antiguedad").value).toFixed(2);




//*****************************************//
//*****************************************//
//TITULO
//*****************************************//
//*****************************************//

//TU JERARQUIA
var c0_7 = document.getElementById("0_1").innerHTML * document.getElementById("titulo").value / 100;
document.getElementById("0_7").innerHTML = (c0_7).toFixed(2);
 

//SUBOFICIALES				 
document.getElementById("1_7").innerHTML = (document.getElementById("1_1").innerHTML * document.getElementById("titulo").value / 100).toFixed(2);
document.getElementById("2_7").innerHTML = (document.getElementById("2_1").innerHTML * document.getElementById("titulo").value / 100).toFixed(2);
document.getElementById("3_7").innerHTML = (document.getElementById("3_1").innerHTML * document.getElementById("titulo").value / 100).toFixed(2);
document.getElementById("4_7").innerHTML = (document.getElementById("4_1").innerHTML * document.getElementById("titulo").value / 100).toFixed(2);
document.getElementById("5_7").innerHTML = (document.getElementById("5_1").innerHTML * document.getElementById("titulo").value / 100).toFixed(2);
document.getElementById("6_7").innerHTML = (document.getElementById("6_1").innerHTML * document.getElementById("titulo").value / 100).toFixed(2);
document.getElementById("7_7").innerHTML = (document.getElementById("7_1").innerHTML * document.getElementById("titulo").value / 100).toFixed(2);
document.getElementById("8_7").innerHTML = (document.getElementById("8_1").innerHTML * document.getElementById("titulo").value / 100).toFixed(2);

//OFICIALES
document.getElementById("9_7").innerHTML = (document.getElementById("9_1").innerHTML * document.getElementById("titulo").value / 100).toFixed(2);
document.getElementById("10_7").innerHTML = (document.getElementById("10_1").innerHTML * document.getElementById("titulo").value / 100).toFixed(2);
document.getElementById("11_7").innerHTML = (document.getElementById("11_1").innerHTML * document.getElementById("titulo").value / 100).toFixed(2);
document.getElementById("12_7").innerHTML = (document.getElementById("12_1").innerHTML * document.getElementById("titulo").value / 100).toFixed(2);
document.getElementById("13_7").innerHTML = (document.getElementById("13_1").innerHTML * document.getElementById("titulo").value / 100).toFixed(2);
document.getElementById("14_7").innerHTML = (document.getElementById("14_1").innerHTML * document.getElementById("titulo").value / 100).toFixed(2);
document.getElementById("15_7").innerHTML = (document.getElementById("15_1").innerHTML * document.getElementById("titulo").value / 100).toFixed(2);
document.getElementById("16_7").innerHTML = (document.getElementById("16_1").innerHTML * document.getElementById("titulo").value / 100).toFixed(2);
document.getElementById("17_7").innerHTML = (document.getElementById("17_1").innerHTML * document.getElementById("titulo").value / 100).toFixed(2);

//SUBJEFE / JEFE
document.getElementById("18_7").innerHTML = (document.getElementById("18_1").innerHTML * document.getElementById("titulo").value / 100).toFixed(2);
document.getElementById("19_7").innerHTML = (document.getElementById("19_1").innerHTML * document.getElementById("titulo").value / 100).toFixed(2);



//*****************************************//
//*****************************************//
//DEDICACION EXCLUSIVA
//*****************************************//
//*****************************************//

//TU JERARQUIA
if(document.getElementById("jerarquia").value >= 45){
var c0_8 = document.getElementById("p_dedicacion").value * document.getElementById("8_1").innerHTML / 100;
}else{
var c0_8 = document.getElementById("p_dedicacion").value * document.getElementById("4_1").innerHTML / 100;	
}
document.getElementById("0_8").innerHTML = (c0_8).toFixed(2);

//SUBOFICIALES				 
document.getElementById("1_8").innerHTML = (document.getElementById("p_dedicacion").value * document.getElementById("4_1").innerHTML / 100).toFixed(2);
document.getElementById("2_8").innerHTML = (document.getElementById("p_dedicacion").value * document.getElementById("4_1").innerHTML / 100).toFixed(2);
document.getElementById("3_8").innerHTML = (document.getElementById("p_dedicacion").value * document.getElementById("4_1").innerHTML / 100).toFixed(2);
document.getElementById("4_8").innerHTML = (document.getElementById("p_dedicacion").value * document.getElementById("4_1").innerHTML / 100).toFixed(2);
document.getElementById("5_8").innerHTML = (document.getElementById("p_dedicacion").value * document.getElementById("8_1").innerHTML / 100).toFixed(2);
document.getElementById("6_8").innerHTML = (document.getElementById("p_dedicacion").value * document.getElementById("8_1").innerHTML / 100).toFixed(2);
document.getElementById("7_8").innerHTML = (document.getElementById("p_dedicacion").value * document.getElementById("8_1").innerHTML / 100).toFixed(2);
document.getElementById("8_8").innerHTML = (document.getElementById("p_dedicacion").value * document.getElementById("8_1").innerHTML / 100).toFixed(2);

//OFICIALES
document.getElementById("9_8").innerHTML = (document.getElementById("p_dedicacion").value * document.getElementById("12_1").innerHTML / 100).toFixed(2);
document.getElementById("10_8").innerHTML = (document.getElementById("p_dedicacion").value * document.getElementById("12_1").innerHTML / 100).toFixed(2);
document.getElementById("11_8").innerHTML = (document.getElementById("p_dedicacion").value * document.getElementById("12_1").innerHTML / 100).toFixed(2);
document.getElementById("12_8").innerHTML = (document.getElementById("p_dedicacion").value * document.getElementById("12_1").innerHTML / 100).toFixed(2);
document.getElementById("13_8").innerHTML = (document.getElementById("p_dedicacion").value * document.getElementById("14_1").innerHTML / 100).toFixed(2);
document.getElementById("14_8").innerHTML = (document.getElementById("p_dedicacion").value * document.getElementById("14_1").innerHTML / 100).toFixed(2);
document.getElementById("15_8").innerHTML = (document.getElementById("p_dedicacion").value * document.getElementById("17_1").innerHTML / 100).toFixed(2);
document.getElementById("16_8").innerHTML = (document.getElementById("p_dedicacion").value * document.getElementById("17_1").innerHTML / 100).toFixed(2);
document.getElementById("17_8").innerHTML = (document.getElementById("p_dedicacion").value * document.getElementById("17_1").innerHTML / 100).toFixed(2);

//SUBJEFE / JEFE
document.getElementById("18_8").innerHTML = (document.getElementById("p_dedicacion").value * document.getElementById("17_1").innerHTML / 100).toFixed(2);
document.getElementById("19_8").innerHTML = (document.getElementById("p_dedicacion").value * document.getElementById("17_1").innerHTML / 100).toFixed(2);





//*****************************************//
//*****************************************//
//RIESGO PROFESIONAL
//*****************************************//
//*****************************************//

//TU JERARQUIA
if(document.getElementById("jerarquia").value >= 45){
var c0_57 = document.getElementById("p_riesgo").value * document.getElementById("8_1").innerHTML / 100;
}else{
var c0_57 = document.getElementById("p_riesgo").value * document.getElementById("4_1").innerHTML / 100;
}
document.getElementById("0_57").innerHTML = (c0_57).toFixed(2);

//SUBOFICIALES				 
document.getElementById("1_57").innerHTML = (document.getElementById("p_riesgo").value * document.getElementById("4_1").innerHTML / 100).toFixed(2);
document.getElementById("2_57").innerHTML = (document.getElementById("p_riesgo").value * document.getElementById("4_1").innerHTML / 100).toFixed(2);
document.getElementById("3_57").innerHTML = (document.getElementById("p_riesgo").value * document.getElementById("4_1").innerHTML / 100).toFixed(2);
document.getElementById("4_57").innerHTML = (document.getElementById("p_riesgo").value * document.getElementById("4_1").innerHTML / 100).toFixed(2);
document.getElementById("5_57").innerHTML = (document.getElementById("p_riesgo").value * document.getElementById("8_1").innerHTML / 100).toFixed(2);
document.getElementById("6_57").innerHTML = (document.getElementById("p_riesgo").value * document.getElementById("8_1").innerHTML / 100).toFixed(2);
document.getElementById("7_57").innerHTML = (document.getElementById("p_riesgo").value * document.getElementById("8_1").innerHTML / 100).toFixed(2);
document.getElementById("8_57").innerHTML = (document.getElementById("p_riesgo").value * document.getElementById("8_1").innerHTML / 100).toFixed(2);

//OFICIALES
document.getElementById("9_57").innerHTML = (document.getElementById("p_riesgo").value * document.getElementById("12_1").innerHTML / 100).toFixed(2);
document.getElementById("10_57").innerHTML = (document.getElementById("p_riesgo").value * document.getElementById("12_1").innerHTML / 100).toFixed(2);
document.getElementById("11_57").innerHTML = (document.getElementById("p_riesgo").value * document.getElementById("12_1").innerHTML / 100).toFixed(2);
document.getElementById("12_57").innerHTML = (document.getElementById("p_riesgo").value * document.getElementById("12_1").innerHTML / 100).toFixed(2);
document.getElementById("13_57").innerHTML = (document.getElementById("p_riesgo").value * document.getElementById("14_1").innerHTML / 100).toFixed(2);
document.getElementById("14_57").innerHTML = (document.getElementById("p_riesgo").value * document.getElementById("14_1").innerHTML / 100).toFixed(2);
document.getElementById("15_57").innerHTML = (document.getElementById("p_riesgo").value * document.getElementById("17_1").innerHTML / 100).toFixed(2);
document.getElementById("16_57").innerHTML = (document.getElementById("p_riesgo").value * document.getElementById("17_1").innerHTML / 100).toFixed(2);
document.getElementById("17_57").innerHTML = (document.getElementById("p_riesgo").value * document.getElementById("17_1").innerHTML / 100).toFixed(2);

//SUBJEFE / JEFE
document.getElementById("18_57").innerHTML = (document.getElementById("p_riesgo").value * document.getElementById("17_1").innerHTML / 100).toFixed(2);
document.getElementById("19_57").innerHTML = (document.getElementById("p_riesgo").value * document.getElementById("17_1").innerHTML / 100).toFixed(2);





//*****************************************//
//*****************************************//
// EXTENSION HORARIA
//*****************************************//
//*****************************************//

//TU JERARQUIA
var c0_76 = c0_1 * document.getElementById("p_extension").value / 100;
document.getElementById("0_76").innerHTML = (c0_76).toFixed(2);

//SUBOFICIALES				 
document.getElementById("1_76").innerHTML = (document.getElementById("1_1").innerHTML * document.getElementById("p_extension").value / 100 ).toFixed(2);
document.getElementById("2_76").innerHTML = (document.getElementById("2_1").innerHTML * document.getElementById("p_extension").value / 100 ).toFixed(2);
document.getElementById("3_76").innerHTML = (document.getElementById("3_1").innerHTML * document.getElementById("p_extension").value / 100 ).toFixed(2);
document.getElementById("4_76").innerHTML = (document.getElementById("4_1").innerHTML * document.getElementById("p_extension").value / 100 ).toFixed(2);
document.getElementById("5_76").innerHTML = (document.getElementById("5_1").innerHTML * document.getElementById("p_extension").value / 100 ).toFixed(2);
document.getElementById("6_76").innerHTML = (document.getElementById("6_1").innerHTML * document.getElementById("p_extension").value / 100 ).toFixed(2);
document.getElementById("7_76").innerHTML = (document.getElementById("7_1").innerHTML * document.getElementById("p_extension").value / 100 ).toFixed(2);
document.getElementById("8_76").innerHTML = (document.getElementById("8_1").innerHTML * document.getElementById("p_extension").value / 100 ).toFixed(2);
//OFICIALES
document.getElementById("9_76").innerHTML = (document.getElementById("9_1").innerHTML * document.getElementById("p_extension").value / 100 ).toFixed(2);
document.getElementById("10_76").innerHTML = (document.getElementById("10_1").innerHTML * document.getElementById("p_extension").value / 100 ).toFixed(2);
document.getElementById("11_76").innerHTML = (document.getElementById("11_1").innerHTML * document.getElementById("p_extension").value / 100 ).toFixed(2);
document.getElementById("12_76").innerHTML = (document.getElementById("12_1").innerHTML * document.getElementById("p_extension").value / 100 ).toFixed(2);
document.getElementById("13_76").innerHTML = (document.getElementById("13_1").innerHTML * document.getElementById("p_extension").value / 100 ).toFixed(2);
document.getElementById("14_76").innerHTML = (document.getElementById("14_1").innerHTML * document.getElementById("p_extension").value / 100 ).toFixed(2);
document.getElementById("15_76").innerHTML = (document.getElementById("15_1").innerHTML * document.getElementById("p_extension").value / 100 ).toFixed(2);
document.getElementById("16_76").innerHTML = (document.getElementById("16_1").innerHTML * document.getElementById("p_extension").value / 100 ).toFixed(2);
document.getElementById("17_76").innerHTML = (document.getElementById("17_1").innerHTML * document.getElementById("p_extension").value / 100 ).toFixed(2);

//SUBJEFE / JEFE
document.getElementById("18_76").innerHTML = (document.getElementById("18_1").innerHTML * document.getElementById("p_extension").value / 100 ).toFixed(2);
document.getElementById("19_76").innerHTML = (document.getElementById("19_1").innerHTML * document.getElementById("p_extension").value / 100 ).toFixed(2);



//*****************************************//
//*****************************************//
// BONIFICACION VIVIENDA
//*****************************************//
//*****************************************//

if(document.getElementById("vivienda").value == 1){

//TU JERARQUIA
var c0_42 = document.getElementById("4_1").innerHTML * document.getElementById("p_vivienda").value / 100;
document.getElementById("0_42").innerHTML = (c0_42).toFixed(2);


//SUBOFICIALES				 
document.getElementById("1_42").innerHTML = (document.getElementById("4_1").innerHTML * document.getElementById("p_vivienda").value / 100 ).toFixed(2);
document.getElementById("2_42").innerHTML = (document.getElementById("4_1").innerHTML * document.getElementById("p_vivienda").value / 100 ).toFixed(2);
document.getElementById("3_42").innerHTML = (document.getElementById("4_1").innerHTML * document.getElementById("p_vivienda").value / 100 ).toFixed(2);
document.getElementById("4_42").innerHTML = (document.getElementById("4_1").innerHTML * document.getElementById("p_vivienda").value / 100 ).toFixed(2);
document.getElementById("5_42").innerHTML = (document.getElementById("8_1").innerHTML * document.getElementById("p_vivienda").value / 100 ).toFixed(2);
document.getElementById("6_42").innerHTML = (document.getElementById("8_1").innerHTML * document.getElementById("p_vivienda").value / 100 ).toFixed(2);
document.getElementById("7_42").innerHTML = (document.getElementById("8_1").innerHTML * document.getElementById("p_vivienda").value / 100 ).toFixed(2);
document.getElementById("8_42").innerHTML = (document.getElementById("8_1").innerHTML * document.getElementById("p_vivienda").value / 100 ).toFixed(2);
//OFICIALES
document.getElementById("9_42").innerHTML = (document.getElementById("12_1").innerHTML * document.getElementById("p_vivienda").value / 100 ).toFixed(2);
document.getElementById("10_42").innerHTML = (document.getElementById("12_1").innerHTML * document.getElementById("p_vivienda").value / 100 ).toFixed(2);
document.getElementById("11_42").innerHTML = (document.getElementById("12_1").innerHTML * document.getElementById("p_vivienda").value / 100 ).toFixed(2);
document.getElementById("12_42").innerHTML = (document.getElementById("12_1").innerHTML * document.getElementById("p_vivienda").value / 100 ).toFixed(2);
document.getElementById("13_42").innerHTML = (document.getElementById("14_1").innerHTML * document.getElementById("p_vivienda").value / 100 ).toFixed(2);
document.getElementById("14_42").innerHTML = (document.getElementById("14_1").innerHTML * document.getElementById("p_vivienda").value / 100 ).toFixed(2);
document.getElementById("15_42").innerHTML = (document.getElementById("17_1").innerHTML * document.getElementById("p_vivienda").value / 100 ).toFixed(2);
document.getElementById("16_42").innerHTML = (document.getElementById("17_1").innerHTML * document.getElementById("p_vivienda").value / 100 ).toFixed(2);
document.getElementById("17_42").innerHTML = (document.getElementById("17_1").innerHTML * document.getElementById("p_vivienda").value / 100 ).toFixed(2);

//SUBJEFE / JEFE
document.getElementById("18_42").innerHTML = (document.getElementById("17_1").innerHTML * document.getElementById("p_vivienda").value / 100 ).toFixed(2);
document.getElementById("19_42").innerHTML = (document.getElementById("17_1").innerHTML * document.getElementById("p_vivienda").value / 100 ).toFixed(2);



} else {
//TU JERARQUIA
var c0_42 = 0;
document.getElementById("0_42").innerHTML = (c0_42).toFixed(2);


//SUBOFICIALES				 
document.getElementById("1_42").innerHTML = 0;
document.getElementById("2_42").innerHTML = 0;
document.getElementById("3_42").innerHTML = 0;
document.getElementById("4_42").innerHTML = 0;
document.getElementById("5_42").innerHTML = 0;
document.getElementById("6_42").innerHTML = 0;
document.getElementById("7_42").innerHTML = 0;
document.getElementById("8_42").innerHTML = 0;
document.getElementById("9_42").innerHTML = 0;
document.getElementById("10_42").innerHTML = 0;
document.getElementById("11_42").innerHTML = 0;
document.getElementById("12_42").innerHTML = 0;
document.getElementById("13_42").innerHTML = 0;
document.getElementById("14_42").innerHTML = 0;
document.getElementById("15_42").innerHTML = 0;
document.getElementById("16_42").innerHTML = 0;
document.getElementById("17_42").innerHTML = 0;

//SUBJEFE / JEFE
document.getElementById("18_42").innerHTML = 0;
document.getElementById("19_42").innerHTML = 0;
	
	
}



//*****************************************//
//*****************************************//
// COMP SEG REMUNERA
//*****************************************//
//*****************************************//

//TU JERARQUIA
if(document.getElementById("jerarquia").value >= 45){
var c0_53 = 6000;
}else{
var c0_53 = 7200;	
}
document.getElementById("0_53").innerHTML = (c0_53).toFixed(2);



//*****************************************//
//*****************************************//
// SUMA REMUNERATIVA POLICIAL
//*****************************************//
//*****************************************//

//TU JERARQUIA
var c0_81 = 0;
switch ( parseInt(document.getElementById("jerarquia").value) ) {
  case 20:
    c0_81 = 49000;
    break;
  case 25:
    c0_81 = 47000;
    break;
  case 30:
    c0_81 = 45000;
    break;
  case 35:
    c0_81 = 42000;
    break;
  case 45:
    c0_81 = 41998;
    break;
  case 50:
    c0_81 = 41998;
    break;	
  case 60:
    c0_81 = 41998;
    break;	
  case 65:
    c0_81 = 41998;
    break;			
  default:
    c0_81 = 0;
    break;
}
document.getElementById("0_81").innerHTML = (c0_81).toFixed(2);

//*****************************************//
//*****************************************//
// FUERZA DE SEGURIDAD
//*****************************************//
//*****************************************//

//TU JERARQUIA
var c0_86 = c0_1 * document.getElementById("p_fuerza").value / 100;
document.getElementById("0_86").innerHTML = (c0_86).toFixed(2);


//SUBOFICIALES				 
document.getElementById("1_86").innerHTML = (document.getElementById("1_1").innerHTML * document.getElementById("p_fuerza").value / 100 ).toFixed(2);
document.getElementById("2_86").innerHTML = (document.getElementById("2_1").innerHTML * document.getElementById("p_fuerza").value / 100 ).toFixed(2);
document.getElementById("3_86").innerHTML = (document.getElementById("3_1").innerHTML * document.getElementById("p_fuerza").value / 100 ).toFixed(2);
document.getElementById("4_86").innerHTML = (document.getElementById("4_1").innerHTML * document.getElementById("p_fuerza").value / 100 ).toFixed(2);
document.getElementById("5_86").innerHTML = (document.getElementById("5_1").innerHTML * document.getElementById("p_fuerza").value / 100 ).toFixed(2);
document.getElementById("6_86").innerHTML = (document.getElementById("6_1").innerHTML * document.getElementById("p_fuerza").value / 100 ).toFixed(2);

document.getElementById("7_86").innerHTML = (document.getElementById("7_1").innerHTML * document.getElementById("p_fuerza").value / 100 ).toFixed(2);
document.getElementById("8_86").innerHTML = (document.getElementById("8_1").innerHTML * document.getElementById("p_fuerza").value / 100 ).toFixed(2);
//OFICIALES
document.getElementById("9_86").innerHTML = (document.getElementById("9_1").innerHTML * document.getElementById("p_fuerza").value / 100 ).toFixed(2);
document.getElementById("10_86").innerHTML = (document.getElementById("10_1").innerHTML * document.getElementById("p_fuerza").value / 100 ).toFixed(2);
document.getElementById("11_86").innerHTML = (document.getElementById("11_1").innerHTML * document.getElementById("p_fuerza").value / 100 ).toFixed(2);
document.getElementById("12_86").innerHTML = (document.getElementById("12_1").innerHTML * document.getElementById("p_fuerza").value / 100 ).toFixed(2);
document.getElementById("13_86").innerHTML = (document.getElementById("13_1").innerHTML * document.getElementById("p_fuerza").value / 100 ).toFixed(2);
document.getElementById("14_86").innerHTML = (document.getElementById("14_1").innerHTML * document.getElementById("p_fuerza").value / 100 ).toFixed(2);
document.getElementById("15_86").innerHTML = (document.getElementById("15_1").innerHTML * document.getElementById("p_fuerza").value / 100 ).toFixed(2);
document.getElementById("16_86").innerHTML = (document.getElementById("16_1").innerHTML * document.getElementById("p_fuerza").value / 100 ).toFixed(2);
document.getElementById("17_86").innerHTML = (document.getElementById("17_1").innerHTML * document.getElementById("p_fuerza").value / 100 ).toFixed(2);

//SUBJEFE / JEFE
document.getElementById("18_86").innerHTML = (document.getElementById("18_1").innerHTML * document.getElementById("p_fuerza").value / 100 ).toFixed(2);
document.getElementById("19_86").innerHTML = (document.getElementById("19_1").innerHTML * document.getElementById("p_fuerza").value / 100 ).toFixed(2);





//*****************************************//
//*****************************************//
// ADIC. REMUN. DCTO. 1700/03
//*****************************************//
//*****************************************//

//TU JERARQUIA
if(document.getElementById("jerarquia").value >= 45){
var c0_115 = 223.36;
}else{
var c0_115 = 0;	
}
document.getElementById("0_115").innerHTML = (c0_115).toFixed(2);




//*****************************************//
//*****************************************//
// ZONA DESFAVORABLE
//*****************************************//
//*****************************************//

//TU JERARQUIA
var c0_190 = (c0_1 + c0_6 + c0_7 + c0_8 + c0_42 + c0_53 + c0_57 + c0_86) * document.getElementById("p_zona").value / 100;
document.getElementById("0_190").innerHTML = (c0_190).toFixed(2);


//SUBOFICIALES				 
document.getElementById("1_190").innerHTML = ((
parseInt(document.getElementById("1_1").innerHTML) + 
parseInt(document.getElementById("1_6").innerHTML) + 
parseInt(document.getElementById("1_7").innerHTML) + 
parseInt(document.getElementById("1_8").innerHTML) + 
parseInt(document.getElementById("1_53").innerHTML) + 
parseInt(document.getElementById("1_57").innerHTML) + 
parseInt(document.getElementById("1_86").innerHTML)
) * document.getElementById("p_zona").value / 100).toFixed(2);

document.getElementById("2_190").innerHTML = ((
parseInt(document.getElementById("2_1").innerHTML) + 
parseInt(document.getElementById("2_6").innerHTML) + 
parseInt(document.getElementById("2_7").innerHTML) + 
parseInt(document.getElementById("2_8").innerHTML) + 
parseInt(document.getElementById("2_53").innerHTML) + 
parseInt(document.getElementById("2_57").innerHTML) + 
parseInt(document.getElementById("2_86").innerHTML)
) * document.getElementById("p_zona").value / 100).toFixed(2);


document.getElementById("3_190").innerHTML = ((
parseInt(document.getElementById("3_1").innerHTML) + 
parseInt(document.getElementById("3_6").innerHTML) + 
parseInt(document.getElementById("3_7").innerHTML) + 
parseInt(document.getElementById("3_8").innerHTML) + 
parseInt(document.getElementById("3_53").innerHTML) + 
parseInt(document.getElementById("3_57").innerHTML) + 
parseInt(document.getElementById("3_86").innerHTML)
) * document.getElementById("p_zona").value / 100).toFixed(2);


document.getElementById("4_190").innerHTML = ((
parseInt(document.getElementById("4_1").innerHTML) + 
parseInt(document.getElementById("4_6").innerHTML) + 
parseInt(document.getElementById("4_7").innerHTML) + 
parseInt(document.getElementById("4_8").innerHTML) + 
parseInt(document.getElementById("4_53").innerHTML) + 
parseInt(document.getElementById("4_57").innerHTML) + 
parseInt(document.getElementById("4_86").innerHTML)
) * document.getElementById("p_zona").value / 100).toFixed(2);


document.getElementById("5_190").innerHTML = ((
parseInt(document.getElementById("5_1").innerHTML) + 
parseInt(document.getElementById("5_6").innerHTML) + 
parseInt(document.getElementById("5_7").innerHTML) + 
parseInt(document.getElementById("5_8").innerHTML) + 
parseInt(document.getElementById("5_53").innerHTML) + 
parseInt(document.getElementById("5_57").innerHTML) + 
parseInt(document.getElementById("5_86").innerHTML)
) * document.getElementById("p_zona").value / 100).toFixed(2);


document.getElementById("6_190").innerHTML = ((
parseInt(document.getElementById("6_1").innerHTML) + 
parseInt(document.getElementById("6_6").innerHTML) + 
parseInt(document.getElementById("6_7").innerHTML) + 
parseInt(document.getElementById("6_8").innerHTML) + 
parseInt(document.getElementById("6_53").innerHTML) + 
parseInt(document.getElementById("6_57").innerHTML) + 
parseInt(document.getElementById("6_86").innerHTML)
) * document.getElementById("p_zona").value / 100).toFixed(2);


document.getElementById("7_190").innerHTML = ((
parseInt(document.getElementById("7_1").innerHTML) + 
parseInt(document.getElementById("7_6").innerHTML) + 
parseInt(document.getElementById("7_7").innerHTML) + 
parseInt(document.getElementById("7_8").innerHTML) + 
parseInt(document.getElementById("7_53").innerHTML) + 
parseInt(document.getElementById("7_57").innerHTML) + 
parseInt(document.getElementById("7_86").innerHTML)
) * document.getElementById("p_zona").value / 100).toFixed(2);


document.getElementById("8_190").innerHTML = ((
parseInt(document.getElementById("8_1").innerHTML) + 
parseInt(document.getElementById("8_6").innerHTML) + 
parseInt(document.getElementById("8_7").innerHTML) + 
parseInt(document.getElementById("8_8").innerHTML) + 
parseInt(document.getElementById("8_53").innerHTML) + 
parseInt(document.getElementById("8_57").innerHTML) + 
parseInt(document.getElementById("8_86").innerHTML)
) * document.getElementById("p_zona").value / 100).toFixed(2);


//OFICIALES
document.getElementById("9_190").innerHTML = ((
parseInt(document.getElementById("9_1").innerHTML) + 
parseInt(document.getElementById("9_6").innerHTML) + 
parseInt(document.getElementById("9_7").innerHTML) + 
parseInt(document.getElementById("9_8").innerHTML) + 
parseInt(document.getElementById("9_53").innerHTML) + 
parseInt(document.getElementById("9_57").innerHTML) + 
parseInt(document.getElementById("9_86").innerHTML)
) * document.getElementById("p_zona").value / 100).toFixed(2);


document.getElementById("10_190").innerHTML = ((
parseInt(document.getElementById("10_1").innerHTML) + 
parseInt(document.getElementById("10_6").innerHTML) + 
parseInt(document.getElementById("10_7").innerHTML) + 
parseInt(document.getElementById("10_8").innerHTML) + 
parseInt(document.getElementById("10_53").innerHTML) + 
parseInt(document.getElementById("10_57").innerHTML) + 
parseInt(document.getElementById("10_86").innerHTML)
) * document.getElementById("p_zona").value / 100).toFixed(2);


document.getElementById("11_190").innerHTML = ((
parseInt(document.getElementById("11_1").innerHTML) + 
parseInt(document.getElementById("11_6").innerHTML) + 
parseInt(document.getElementById("11_7").innerHTML) + 
parseInt(document.getElementById("11_8").innerHTML) + 
parseInt(document.getElementById("11_53").innerHTML) + 
parseInt(document.getElementById("11_57").innerHTML) + 
parseInt(document.getElementById("11_86").innerHTML)
) * document.getElementById("p_zona").value / 100).toFixed(2);


document.getElementById("12_190").innerHTML = ((
parseInt(document.getElementById("12_1").innerHTML) + 
parseInt(document.getElementById("12_6").innerHTML) + 
parseInt(document.getElementById("12_7").innerHTML) + 
parseInt(document.getElementById("12_8").innerHTML) + 
parseInt(document.getElementById("12_53").innerHTML) + 
parseInt(document.getElementById("12_57").innerHTML) + 
parseInt(document.getElementById("12_86").innerHTML)
) * document.getElementById("p_zona").value / 100).toFixed(2);


document.getElementById("13_190").innerHTML = ((
parseInt(document.getElementById("13_1").innerHTML) + 
parseInt(document.getElementById("13_6").innerHTML) + 
parseInt(document.getElementById("13_7").innerHTML) + 
parseInt(document.getElementById("13_8").innerHTML) + 
parseInt(document.getElementById("13_53").innerHTML) + 
parseInt(document.getElementById("13_57").innerHTML) + 
parseInt(document.getElementById("13_86").innerHTML)
) * document.getElementById("p_zona").value / 100).toFixed(2);


document.getElementById("14_190").innerHTML = ((
parseInt(document.getElementById("14_1").innerHTML) + 
parseInt(document.getElementById("14_6").innerHTML) + 
parseInt(document.getElementById("14_7").innerHTML) + 
parseInt(document.getElementById("14_8").innerHTML) + 
parseInt(document.getElementById("14_53").innerHTML) + 
parseInt(document.getElementById("14_57").innerHTML) + 
parseInt(document.getElementById("14_86").innerHTML)
) * document.getElementById("p_zona").value / 100).toFixed(2);


document.getElementById("15_190").innerHTML = ((
parseInt(document.getElementById("15_1").innerHTML) + 
parseInt(document.getElementById("15_6").innerHTML) + 
parseInt(document.getElementById("15_7").innerHTML) + 
parseInt(document.getElementById("15_8").innerHTML) + 
parseInt(document.getElementById("15_53").innerHTML) + 
parseInt(document.getElementById("15_57").innerHTML) + 
parseInt(document.getElementById("15_86").innerHTML)
) * document.getElementById("p_zona").value / 100).toFixed(2);


document.getElementById("16_190").innerHTML = ((
parseInt(document.getElementById("16_1").innerHTML) + 
parseInt(document.getElementById("16_6").innerHTML) + 
parseInt(document.getElementById("16_7").innerHTML) + 
parseInt(document.getElementById("16_8").innerHTML) + 
parseInt(document.getElementById("16_53").innerHTML) + 
parseInt(document.getElementById("16_57").innerHTML) + 
parseInt(document.getElementById("16_86").innerHTML)
) * document.getElementById("p_zona").value / 100).toFixed(2);


document.getElementById("17_190").innerHTML = ((
parseInt(document.getElementById("17_1").innerHTML) + 
parseInt(document.getElementById("17_6").innerHTML) + 
parseInt(document.getElementById("17_7").innerHTML) + 
parseInt(document.getElementById("17_8").innerHTML) + 
parseInt(document.getElementById("17_53").innerHTML) + 
parseInt(document.getElementById("17_57").innerHTML) + 
parseInt(document.getElementById("17_86").innerHTML)
) * document.getElementById("p_zona").value / 100).toFixed(2);


//SUBJEFE / JEFE
document.getElementById("18_190").innerHTML = ((
parseInt(document.getElementById("18_1").innerHTML) + 
parseInt(document.getElementById("18_6").innerHTML) + 
parseInt(document.getElementById("18_7").innerHTML) + 
parseInt(document.getElementById("18_8").innerHTML) + 
parseInt(document.getElementById("18_53").innerHTML) + 
parseInt(document.getElementById("18_57").innerHTML) + 
parseInt(document.getElementById("18_86").innerHTML)
) * document.getElementById("p_zona").value / 100).toFixed(2);


document.getElementById("19_190").innerHTML = ((
parseInt(document.getElementById("19_1").innerHTML) + 
parseInt(document.getElementById("19_6").innerHTML) + 
parseInt(document.getElementById("19_7").innerHTML) + 
parseInt(document.getElementById("19_8").innerHTML) + 
parseInt(document.getElementById("19_53").innerHTML) + 
parseInt(document.getElementById("19_57").innerHTML) + 
parseInt(document.getElementById("19_86").innerHTML)
) * document.getElementById("p_zona").value / 100).toFixed(2);





//*****************************************//
//*****************************************//
// BONIF. POLICIA
//*****************************************//
//*****************************************//

//TU JERARQUIA
var c0_80 = (c0_1 + c0_6 + c0_7 + c0_8 + c0_57 + c0_76 + c0_42 + c0_190) * 31 / 100;
document.getElementById("0_80").innerHTML = (c0_80).toFixed(2);

 
//SUBOFICIALES				 
document.getElementById("1_80").innerHTML = 
((
parseInt(document.getElementById("1_1").innerHTML) + 
parseInt(document.getElementById("1_6").innerHTML) + 
parseInt(document.getElementById("1_7").innerHTML) + 
parseInt(document.getElementById("1_8").innerHTML) + 
parseInt(document.getElementById("1_57").innerHTML) + 
parseInt(document.getElementById("1_76").innerHTML) + 
parseInt(document.getElementById("1_42").innerHTML) + 
parseInt(document.getElementById("1_190").innerHTML)
) * 31 / 100 ).toFixed(2);

document.getElementById("2_80").innerHTML = 
((
parseInt(document.getElementById("2_1").innerHTML) + 
parseInt(document.getElementById("2_6").innerHTML) + 
parseInt(document.getElementById("2_7").innerHTML) + 
parseInt(document.getElementById("2_8").innerHTML) + 
parseInt(document.getElementById("2_57").innerHTML) + 
parseInt(document.getElementById("2_76").innerHTML) + 
parseInt(document.getElementById("2_42").innerHTML) + 
parseInt(document.getElementById("2_190").innerHTML)
) * 31 / 100 ).toFixed(2);

document.getElementById("3_80").innerHTML = 
((
parseInt(document.getElementById("3_1").innerHTML) + 
parseInt(document.getElementById("3_6").innerHTML) + 
parseInt(document.getElementById("3_7").innerHTML) + 
parseInt(document.getElementById("3_8").innerHTML) + 
parseInt(document.getElementById("3_57").innerHTML) + 
parseInt(document.getElementById("3_76").innerHTML) + 
parseInt(document.getElementById("3_42").innerHTML) + 
parseInt(document.getElementById("3_190").innerHTML)
) * 31 / 100 ).toFixed(2);

document.getElementById("4_80").innerHTML = 
((
parseInt(document.getElementById("4_1").innerHTML) + 
parseInt(document.getElementById("4_6").innerHTML) + 
parseInt(document.getElementById("4_7").innerHTML) + 
parseInt(document.getElementById("4_8").innerHTML) + 
parseInt(document.getElementById("4_57").innerHTML) + 
parseInt(document.getElementById("4_76").innerHTML) + 
parseInt(document.getElementById("4_42").innerHTML) + 
parseInt(document.getElementById("4_190").innerHTML)
) * 31 / 100 ).toFixed(2);

document.getElementById("5_80").innerHTML = 
((
parseInt(document.getElementById("5_1").innerHTML) + 
parseInt(document.getElementById("5_6").innerHTML) + 
parseInt(document.getElementById("5_7").innerHTML) + 
parseInt(document.getElementById("5_8").innerHTML) + 
parseInt(document.getElementById("5_57").innerHTML) + 
parseInt(document.getElementById("5_76").innerHTML) + 
parseInt(document.getElementById("5_42").innerHTML) + 
parseInt(document.getElementById("5_190").innerHTML)
) * 31 / 100 ).toFixed(2);

document.getElementById("6_80").innerHTML = 
((
parseInt(document.getElementById("6_1").innerHTML) + 
parseInt(document.getElementById("6_6").innerHTML) + 
parseInt(document.getElementById("6_7").innerHTML) + 
parseInt(document.getElementById("6_8").innerHTML) + 
parseInt(document.getElementById("6_57").innerHTML) + 
parseInt(document.getElementById("6_76").innerHTML) + 
parseInt(document.getElementById("6_42").innerHTML) + 
parseInt(document.getElementById("6_190").innerHTML)
) * 31 / 100 ).toFixed(2);

document.getElementById("7_80").innerHTML = 
((
parseInt(document.getElementById("7_1").innerHTML) + 
parseInt(document.getElementById("7_6").innerHTML) + 
parseInt(document.getElementById("7_7").innerHTML) + 
parseInt(document.getElementById("7_8").innerHTML) + 
parseInt(document.getElementById("7_57").innerHTML) + 
parseInt(document.getElementById("7_76").innerHTML) + 
parseInt(document.getElementById("7_42").innerHTML) + 
parseInt(document.getElementById("7_190").innerHTML)
) * 31 / 100 ).toFixed(2);

document.getElementById("8_80").innerHTML = 
((
parseInt(document.getElementById("8_1").innerHTML) + 
parseInt(document.getElementById("8_6").innerHTML) + 
parseInt(document.getElementById("8_7").innerHTML) + 
parseInt(document.getElementById("8_8").innerHTML) + 
parseInt(document.getElementById("8_57").innerHTML) + 
parseInt(document.getElementById("8_76").innerHTML) + 
parseInt(document.getElementById("8_42").innerHTML) + 
parseInt(document.getElementById("8_190").innerHTML)
) * 31 / 100 ).toFixed(2);

//OFICIALES
document.getElementById("9_80").innerHTML = 
((
parseInt(document.getElementById("9_1").innerHTML) + 
parseInt(document.getElementById("9_6").innerHTML) + 
parseInt(document.getElementById("9_7").innerHTML) + 
parseInt(document.getElementById("9_8").innerHTML) + 
parseInt(document.getElementById("9_57").innerHTML) + 
parseInt(document.getElementById("9_76").innerHTML) + 
parseInt(document.getElementById("9_42").innerHTML) + 
parseInt(document.getElementById("9_190").innerHTML)
) * 31 / 100 ).toFixed(2);

document.getElementById("10_80").innerHTML = 
((
parseInt(document.getElementById("10_1").innerHTML) + 
parseInt(document.getElementById("10_6").innerHTML) + 
parseInt(document.getElementById("10_7").innerHTML) + 
parseInt(document.getElementById("10_8").innerHTML) + 
parseInt(document.getElementById("10_57").innerHTML) + 
parseInt(document.getElementById("10_76").innerHTML) + 
parseInt(document.getElementById("10_42").innerHTML) + 
parseInt(document.getElementById("10_190").innerHTML)
) * 31 / 100 ).toFixed(2);

document.getElementById("11_80").innerHTML = 
((
parseInt(document.getElementById("11_1").innerHTML) + 
parseInt(document.getElementById("11_6").innerHTML) + 
parseInt(document.getElementById("11_7").innerHTML) + 
parseInt(document.getElementById("11_8").innerHTML) + 
parseInt(document.getElementById("11_57").innerHTML) + 
parseInt(document.getElementById("11_76").innerHTML) + 
parseInt(document.getElementById("11_42").innerHTML) + 
parseInt(document.getElementById("11_190").innerHTML)
) * 31 / 100 ).toFixed(2);

document.getElementById("12_80").innerHTML = 
((
parseInt(document.getElementById("12_1").innerHTML) + 
parseInt(document.getElementById("12_6").innerHTML) + 
parseInt(document.getElementById("12_7").innerHTML) + 
parseInt(document.getElementById("12_8").innerHTML) + 
parseInt(document.getElementById("12_57").innerHTML) + 
parseInt(document.getElementById("12_76").innerHTML) + 
parseInt(document.getElementById("12_42").innerHTML) + 
parseInt(document.getElementById("12_190").innerHTML)
) * 31 / 100 ).toFixed(2);

document.getElementById("13_80").innerHTML = 
((
parseInt(document.getElementById("13_1").innerHTML) + 
parseInt(document.getElementById("13_6").innerHTML) + 
parseInt(document.getElementById("13_7").innerHTML) + 
parseInt(document.getElementById("13_8").innerHTML) + 
parseInt(document.getElementById("13_57").innerHTML) + 
parseInt(document.getElementById("13_76").innerHTML) + 
parseInt(document.getElementById("13_42").innerHTML) + 
parseInt(document.getElementById("13_190").innerHTML)
) * 31 / 100 ).toFixed(2);

document.getElementById("14_80").innerHTML = 
((
parseInt(document.getElementById("14_1").innerHTML) + 
parseInt(document.getElementById("14_6").innerHTML) + 
parseInt(document.getElementById("14_7").innerHTML) + 
parseInt(document.getElementById("14_8").innerHTML) + 
parseInt(document.getElementById("14_57").innerHTML) + 
parseInt(document.getElementById("14_76").innerHTML) + 
parseInt(document.getElementById("14_42").innerHTML) + 
parseInt(document.getElementById("14_190").innerHTML)
) * 31 / 100 ).toFixed(2);

document.getElementById("15_80").innerHTML = 
((
parseInt(document.getElementById("15_1").innerHTML) + 
parseInt(document.getElementById("15_6").innerHTML) + 
parseInt(document.getElementById("15_7").innerHTML) + 
parseInt(document.getElementById("15_8").innerHTML) + 
parseInt(document.getElementById("15_57").innerHTML) + 
parseInt(document.getElementById("15_76").innerHTML) + 
parseInt(document.getElementById("15_42").innerHTML) + 
parseInt(document.getElementById("15_190").innerHTML)
) * 31 / 100 ).toFixed(2);

document.getElementById("16_80").innerHTML = 
((
parseInt(document.getElementById("16_1").innerHTML) + 
parseInt(document.getElementById("16_6").innerHTML) + 
parseInt(document.getElementById("16_7").innerHTML) + 
parseInt(document.getElementById("16_8").innerHTML) + 
parseInt(document.getElementById("16_57").innerHTML) + 
parseInt(document.getElementById("16_76").innerHTML) + 
parseInt(document.getElementById("16_42").innerHTML) + 
parseInt(document.getElementById("16_190").innerHTML)
) * 31 / 100 ).toFixed(2);

document.getElementById("17_80").innerHTML = 
((
parseInt(document.getElementById("17_1").innerHTML) + 
parseInt(document.getElementById("17_6").innerHTML) + 
parseInt(document.getElementById("17_7").innerHTML) + 
parseInt(document.getElementById("17_8").innerHTML) + 
parseInt(document.getElementById("17_57").innerHTML) + 
parseInt(document.getElementById("17_76").innerHTML) + 
parseInt(document.getElementById("17_42").innerHTML) + 
parseInt(document.getElementById("17_190").innerHTML)
) * 31 / 100 ).toFixed(2);

//SUBJEFE / JEFE
document.getElementById("18_80").innerHTML = 
((
parseInt(document.getElementById("18_1").innerHTML) + 
parseInt(document.getElementById("18_6").innerHTML) + 
parseInt(document.getElementById("18_7").innerHTML) + 
parseInt(document.getElementById("18_8").innerHTML) + 
parseInt(document.getElementById("18_57").innerHTML) + 
parseInt(document.getElementById("18_76").innerHTML) + 
parseInt(document.getElementById("18_42").innerHTML) + 
parseInt(document.getElementById("18_190").innerHTML)
) * 31 / 100 ).toFixed(2);

document.getElementById("19_80").innerHTML = 
((
parseInt(document.getElementById("19_1").innerHTML) + 
parseInt(document.getElementById("19_6").innerHTML) + 
parseInt(document.getElementById("19_7").innerHTML) + 
parseInt(document.getElementById("19_8").innerHTML) + 
parseInt(document.getElementById("19_57").innerHTML) + 
parseInt(document.getElementById("19_76").innerHTML) + 
parseInt(document.getElementById("19_42").innerHTML) + 
parseInt(document.getElementById("19_190").innerHTML)
) * 31 / 100 ).toFixed(2);



//*****************************************//
//*****************************************//
// TOTAL REMUNERATIVO
//*****************************************//
//*****************************************//

//TU JERARQUIA
var c0_tr = c0_1 + c0_6 + c0_7 + c0_8 + c0_53 + c0_57 + c0_76 + c0_42 + c0_80+ c0_81+ c0_86+ c0_115+ c0_190;
document.getElementById("0_tr").innerHTML = (c0_tr).toFixed(2);


//SUBOFICIALES				 
document.getElementById("1_tr").innerHTML = ( 
parseFloat(document.getElementById("1_1").innerHTML) + 
parseFloat(document.getElementById("1_6").innerHTML) + 
parseFloat(document.getElementById("1_7").innerHTML) + 
parseFloat(document.getElementById("1_8").innerHTML) + 
parseFloat(document.getElementById("1_53").innerHTML) + 
parseFloat(document.getElementById("1_57").innerHTML) + 
parseFloat(document.getElementById("1_76").innerHTML) + 
parseFloat(document.getElementById("1_42").innerHTML) + 
parseFloat(document.getElementById("1_80").innerHTML) + 
parseFloat(document.getElementById("1_81").innerHTML) + 
parseFloat(document.getElementById("1_86").innerHTML) + 
parseFloat(document.getElementById("1_115").innerHTML) + 
parseFloat(document.getElementById("1_190").innerHTML) 
).toFixed(2);

document.getElementById("2_tr").innerHTML = ( 
parseFloat(document.getElementById("2_1").innerHTML) + 
parseFloat(document.getElementById("2_6").innerHTML) + 
parseFloat(document.getElementById("2_7").innerHTML) + 
parseFloat(document.getElementById("2_8").innerHTML) + 
parseFloat(document.getElementById("2_53").innerHTML) + 
parseFloat(document.getElementById("2_57").innerHTML) + 
parseFloat(document.getElementById("2_76").innerHTML) + 
parseFloat(document.getElementById("2_42").innerHTML) + 
parseFloat(document.getElementById("2_80").innerHTML) + 
parseFloat(document.getElementById("2_81").innerHTML) + 
parseFloat(document.getElementById("2_86").innerHTML) + 
parseFloat(document.getElementById("2_115").innerHTML) + 
parseFloat(document.getElementById("2_190").innerHTML) 
).toFixed(2);

document.getElementById("2_tr").innerHTML = ( 
parseFloat(document.getElementById("2_1").innerHTML) + 
parseFloat(document.getElementById("2_6").innerHTML) + 
parseFloat(document.getElementById("2_7").innerHTML) + 
parseFloat(document.getElementById("2_8").innerHTML) + 
parseFloat(document.getElementById("2_53").innerHTML) + 
parseFloat(document.getElementById("2_57").innerHTML) + 
parseFloat(document.getElementById("2_76").innerHTML) + 
parseFloat(document.getElementById("2_42").innerHTML) + 
parseFloat(document.getElementById("2_80").innerHTML) + 
parseFloat(document.getElementById("2_81").innerHTML) + 
parseFloat(document.getElementById("2_86").innerHTML) + 
parseFloat(document.getElementById("2_115").innerHTML) + 
parseFloat(document.getElementById("2_190").innerHTML) 
).toFixed(2);

document.getElementById("3_tr").innerHTML = ( 
parseFloat(document.getElementById("3_1").innerHTML) + 
parseFloat(document.getElementById("3_6").innerHTML) + 
parseFloat(document.getElementById("3_7").innerHTML) + 
parseFloat(document.getElementById("3_8").innerHTML) + 
parseFloat(document.getElementById("3_53").innerHTML) + 
parseFloat(document.getElementById("3_57").innerHTML) + 
parseFloat(document.getElementById("3_76").innerHTML) + 
parseFloat(document.getElementById("3_42").innerHTML) + 
parseFloat(document.getElementById("3_80").innerHTML) + 
parseFloat(document.getElementById("3_81").innerHTML) + 
parseFloat(document.getElementById("3_86").innerHTML) + 
parseFloat(document.getElementById("3_115").innerHTML) + 
parseFloat(document.getElementById("3_190").innerHTML) 
).toFixed(2);

document.getElementById("4_tr").innerHTML = ( 
parseFloat(document.getElementById("4_1").innerHTML) + 
parseFloat(document.getElementById("4_6").innerHTML) + 
parseFloat(document.getElementById("4_7").innerHTML) + 
parseFloat(document.getElementById("4_8").innerHTML) + 
parseFloat(document.getElementById("4_53").innerHTML) + 
parseFloat(document.getElementById("4_57").innerHTML) + 
parseFloat(document.getElementById("4_76").innerHTML) + 
parseFloat(document.getElementById("4_42").innerHTML) + 
parseFloat(document.getElementById("4_80").innerHTML) + 
parseFloat(document.getElementById("4_81").innerHTML) + 
parseFloat(document.getElementById("4_86").innerHTML) + 
parseFloat(document.getElementById("4_115").innerHTML) + 
parseFloat(document.getElementById("4_190").innerHTML) 
).toFixed(2);

document.getElementById("5_tr").innerHTML = ( 
parseFloat(document.getElementById("5_1").innerHTML) + 
parseFloat(document.getElementById("5_6").innerHTML) + 
parseFloat(document.getElementById("5_7").innerHTML) + 
parseFloat(document.getElementById("5_8").innerHTML) + 
parseFloat(document.getElementById("5_53").innerHTML) + 
parseFloat(document.getElementById("5_57").innerHTML) + 
parseFloat(document.getElementById("5_76").innerHTML) + 
parseFloat(document.getElementById("5_42").innerHTML) + 
parseFloat(document.getElementById("5_80").innerHTML) + 
parseFloat(document.getElementById("5_81").innerHTML) + 
parseFloat(document.getElementById("5_86").innerHTML) + 
parseFloat(document.getElementById("5_115").innerHTML) + 
parseFloat(document.getElementById("5_190").innerHTML) 
).toFixed(2);

document.getElementById("6_tr").innerHTML = ( 
parseFloat(document.getElementById("6_1").innerHTML) + 
parseFloat(document.getElementById("6_6").innerHTML) + 
parseFloat(document.getElementById("6_7").innerHTML) + 
parseFloat(document.getElementById("6_8").innerHTML) + 
parseFloat(document.getElementById("6_53").innerHTML) + 
parseFloat(document.getElementById("6_57").innerHTML) + 
parseFloat(document.getElementById("6_76").innerHTML) + 
parseFloat(document.getElementById("6_42").innerHTML) + 
parseFloat(document.getElementById("6_80").innerHTML) + 
parseFloat(document.getElementById("6_81").innerHTML) + 
parseFloat(document.getElementById("6_86").innerHTML) + 
parseFloat(document.getElementById("6_115").innerHTML) + 
parseFloat(document.getElementById("6_190").innerHTML) 
).toFixed(2);


document.getElementById("7_tr").innerHTML = ( 
parseFloat(document.getElementById("7_1").innerHTML) + 
parseFloat(document.getElementById("7_6").innerHTML) + 
parseFloat(document.getElementById("7_7").innerHTML) + 
parseFloat(document.getElementById("7_8").innerHTML) + 
parseFloat(document.getElementById("7_53").innerHTML) + 
parseFloat(document.getElementById("7_57").innerHTML) + 
parseFloat(document.getElementById("7_76").innerHTML) + 
parseFloat(document.getElementById("7_42").innerHTML) + 
parseFloat(document.getElementById("7_80").innerHTML) + 
parseFloat(document.getElementById("7_81").innerHTML) + 
parseFloat(document.getElementById("7_86").innerHTML) + 
parseFloat(document.getElementById("7_115").innerHTML) + 
parseFloat(document.getElementById("7_190").innerHTML) 
).toFixed(2);


document.getElementById("8_tr").innerHTML = ( 
parseFloat(document.getElementById("8_1").innerHTML) + 
parseFloat(document.getElementById("8_6").innerHTML) + 
parseFloat(document.getElementById("8_7").innerHTML) + 
parseFloat(document.getElementById("8_8").innerHTML) + 
parseFloat(document.getElementById("8_53").innerHTML) + 
parseFloat(document.getElementById("8_57").innerHTML) + 
parseFloat(document.getElementById("8_76").innerHTML) + 
parseFloat(document.getElementById("8_42").innerHTML) + 
parseFloat(document.getElementById("8_80").innerHTML) + 
parseFloat(document.getElementById("8_81").innerHTML) + 
parseFloat(document.getElementById("8_86").innerHTML) + 
parseFloat(document.getElementById("8_115").innerHTML) + 
parseFloat(document.getElementById("8_190").innerHTML) 
).toFixed(2);

//OFICIALES

document.getElementById("9_tr").innerHTML = ( 
parseFloat(document.getElementById("9_1").innerHTML) + 
parseFloat(document.getElementById("9_6").innerHTML) + 
parseFloat(document.getElementById("9_7").innerHTML) + 
parseFloat(document.getElementById("9_8").innerHTML) + 
parseFloat(document.getElementById("9_53").innerHTML) + 
parseFloat(document.getElementById("9_57").innerHTML) + 
parseFloat(document.getElementById("9_76").innerHTML) + 
parseFloat(document.getElementById("9_42").innerHTML) + 
parseFloat(document.getElementById("9_80").innerHTML) + 
parseFloat(document.getElementById("9_81").innerHTML) + 
parseFloat(document.getElementById("9_86").innerHTML) + 
parseFloat(document.getElementById("9_115").innerHTML) + 
parseFloat(document.getElementById("9_190").innerHTML) 
).toFixed(2);


document.getElementById("10_tr").innerHTML = ( 
parseFloat(document.getElementById("10_1").innerHTML) + 
parseFloat(document.getElementById("10_6").innerHTML) + 
parseFloat(document.getElementById("10_7").innerHTML) + 
parseFloat(document.getElementById("10_8").innerHTML) + 
parseFloat(document.getElementById("10_53").innerHTML) + 
parseFloat(document.getElementById("10_57").innerHTML) + 
parseFloat(document.getElementById("10_76").innerHTML) + 
parseFloat(document.getElementById("10_42").innerHTML) + 
parseFloat(document.getElementById("10_80").innerHTML) + 
parseFloat(document.getElementById("10_81").innerHTML) + 
parseFloat(document.getElementById("10_86").innerHTML) + 
parseFloat(document.getElementById("10_115").innerHTML) + 
parseFloat(document.getElementById("10_190").innerHTML) 
).toFixed(2);


document.getElementById("11_tr").innerHTML = ( 
parseFloat(document.getElementById("11_1").innerHTML) + 
parseFloat(document.getElementById("11_6").innerHTML) + 
parseFloat(document.getElementById("11_7").innerHTML) + 
parseFloat(document.getElementById("11_8").innerHTML) + 
parseFloat(document.getElementById("11_53").innerHTML) + 
parseFloat(document.getElementById("11_57").innerHTML) + 
parseFloat(document.getElementById("11_76").innerHTML) + 
parseFloat(document.getElementById("11_42").innerHTML) + 
parseFloat(document.getElementById("11_80").innerHTML) + 
parseFloat(document.getElementById("11_81").innerHTML) + 
parseFloat(document.getElementById("11_86").innerHTML) + 
parseFloat(document.getElementById("11_115").innerHTML) + 
parseFloat(document.getElementById("11_190").innerHTML) 
).toFixed(2);


document.getElementById("12_tr").innerHTML = ( 
parseFloat(document.getElementById("12_1").innerHTML) + 
parseFloat(document.getElementById("12_6").innerHTML) + 
parseFloat(document.getElementById("12_7").innerHTML) + 
parseFloat(document.getElementById("12_8").innerHTML) + 
parseFloat(document.getElementById("12_53").innerHTML) + 
parseFloat(document.getElementById("12_57").innerHTML) + 
parseFloat(document.getElementById("12_76").innerHTML) + 
parseFloat(document.getElementById("12_42").innerHTML) + 
parseFloat(document.getElementById("12_80").innerHTML) + 
parseFloat(document.getElementById("12_81").innerHTML) + 
parseFloat(document.getElementById("12_86").innerHTML) + 
parseFloat(document.getElementById("12_115").innerHTML) + 
parseFloat(document.getElementById("12_190").innerHTML) 
).toFixed(2);

document.getElementById("13_tr").innerHTML = ( 
parseFloat(document.getElementById("13_1").innerHTML) + 
parseFloat(document.getElementById("13_6").innerHTML) + 
parseFloat(document.getElementById("13_7").innerHTML) + 
parseFloat(document.getElementById("13_8").innerHTML) + 
parseFloat(document.getElementById("13_53").innerHTML) + 
parseFloat(document.getElementById("13_57").innerHTML) + 
parseFloat(document.getElementById("13_76").innerHTML) + 
parseFloat(document.getElementById("13_42").innerHTML) + 
parseFloat(document.getElementById("13_80").innerHTML) + 
parseFloat(document.getElementById("13_81").innerHTML) + 
parseFloat(document.getElementById("13_86").innerHTML) + 
parseFloat(document.getElementById("13_115").innerHTML) + 
parseFloat(document.getElementById("13_190").innerHTML) 
).toFixed(2);


document.getElementById("14_tr").innerHTML = ( 
parseFloat(document.getElementById("14_1").innerHTML) + 
parseFloat(document.getElementById("14_6").innerHTML) + 
parseFloat(document.getElementById("14_7").innerHTML) + 
parseFloat(document.getElementById("14_8").innerHTML) + 
parseFloat(document.getElementById("14_53").innerHTML) + 
parseFloat(document.getElementById("14_57").innerHTML) + 
parseFloat(document.getElementById("14_76").innerHTML) + 
parseFloat(document.getElementById("14_42").innerHTML) + 
parseFloat(document.getElementById("14_80").innerHTML) + 
parseFloat(document.getElementById("14_81").innerHTML) + 
parseFloat(document.getElementById("14_86").innerHTML) + 
parseFloat(document.getElementById("14_115").innerHTML) + 
parseFloat(document.getElementById("14_190").innerHTML) 
).toFixed(2);


document.getElementById("15_tr").innerHTML = ( 
parseFloat(document.getElementById("15_1").innerHTML) + 
parseFloat(document.getElementById("15_6").innerHTML) + 
parseFloat(document.getElementById("15_7").innerHTML) + 
parseFloat(document.getElementById("15_8").innerHTML) + 
parseFloat(document.getElementById("15_53").innerHTML) + 
parseFloat(document.getElementById("15_57").innerHTML) + 
parseFloat(document.getElementById("15_76").innerHTML) + 
parseFloat(document.getElementById("15_42").innerHTML) + 
parseFloat(document.getElementById("15_80").innerHTML) + 
parseFloat(document.getElementById("15_81").innerHTML) + 
parseFloat(document.getElementById("15_86").innerHTML) + 
parseFloat(document.getElementById("15_115").innerHTML) + 
parseFloat(document.getElementById("15_190").innerHTML) 
).toFixed(2);

document.getElementById("16_tr").innerHTML = ( 
parseFloat(document.getElementById("16_1").innerHTML) + 
parseFloat(document.getElementById("16_6").innerHTML) + 
parseFloat(document.getElementById("16_7").innerHTML) + 
parseFloat(document.getElementById("16_8").innerHTML) + 
parseFloat(document.getElementById("16_53").innerHTML) + 
parseFloat(document.getElementById("16_57").innerHTML) + 
parseFloat(document.getElementById("16_76").innerHTML) + 
parseFloat(document.getElementById("16_42").innerHTML) + 
parseFloat(document.getElementById("16_80").innerHTML) + 
parseFloat(document.getElementById("16_81").innerHTML) + 
parseFloat(document.getElementById("16_86").innerHTML) + 
parseFloat(document.getElementById("16_115").innerHTML) + 
parseFloat(document.getElementById("16_190").innerHTML) 
).toFixed(2);


document.getElementById("17_tr").innerHTML = ( 
parseFloat(document.getElementById("17_1").innerHTML) + 
parseFloat(document.getElementById("17_6").innerHTML) + 
parseFloat(document.getElementById("17_7").innerHTML) + 
parseFloat(document.getElementById("17_8").innerHTML) + 
parseFloat(document.getElementById("17_53").innerHTML) + 
parseFloat(document.getElementById("17_57").innerHTML) + 
parseFloat(document.getElementById("17_76").innerHTML) + 
parseFloat(document.getElementById("17_42").innerHTML) + 
parseFloat(document.getElementById("17_80").innerHTML) + 
parseFloat(document.getElementById("17_81").innerHTML) + 
parseFloat(document.getElementById("17_86").innerHTML) + 
parseFloat(document.getElementById("17_115").innerHTML) + 
parseFloat(document.getElementById("17_190").innerHTML) 
).toFixed(2);

document.getElementById("18_tr").innerHTML = ( 
parseFloat(document.getElementById("18_1").innerHTML) + 
parseFloat(document.getElementById("18_6").innerHTML) + 
parseFloat(document.getElementById("18_7").innerHTML) + 
parseFloat(document.getElementById("18_8").innerHTML) + 
parseFloat(document.getElementById("18_53").innerHTML) + 
parseFloat(document.getElementById("18_57").innerHTML) + 
parseFloat(document.getElementById("18_76").innerHTML) + 
parseFloat(document.getElementById("18_42").innerHTML) + 
parseFloat(document.getElementById("18_80").innerHTML) + 
parseFloat(document.getElementById("18_81").innerHTML) + 
parseFloat(document.getElementById("18_86").innerHTML) + 
parseFloat(document.getElementById("18_115").innerHTML) + 
parseFloat(document.getElementById("18_190").innerHTML) 
).toFixed(2);

document.getElementById("19_tr").innerHTML = ( 
parseFloat(document.getElementById("19_1").innerHTML) + 
parseFloat(document.getElementById("19_6").innerHTML) + 
parseFloat(document.getElementById("19_7").innerHTML) + 
parseFloat(document.getElementById("19_8").innerHTML) + 
parseFloat(document.getElementById("19_53").innerHTML) + 
parseFloat(document.getElementById("19_57").innerHTML) + 
parseFloat(document.getElementById("19_76").innerHTML) + 
parseFloat(document.getElementById("19_42").innerHTML) + 
parseFloat(document.getElementById("19_80").innerHTML) + 
parseFloat(document.getElementById("19_81").innerHTML) + 
parseFloat(document.getElementById("19_86").innerHTML) + 
parseFloat(document.getElementById("19_115").innerHTML) + 
parseFloat(document.getElementById("19_190").innerHTML) 
).toFixed(2);


//*****************************************//
//*****************************************//
// HIJOS
//*****************************************//
//*****************************************//

//TU JERARQUIA
document.getElementById("0_201").innerHTML = (document.getElementById("p_hijos").value * document.getElementById("c_hijos").value).toFixed(2);

//SUBOFICIALES				 
document.getElementById("1_201").innerHTML = (document.getElementById("p_hijos").value * document.getElementById("c_hijos").value).toFixed(2);
document.getElementById("2_201").innerHTML = (document.getElementById("p_hijos").value * document.getElementById("c_hijos").value).toFixed(2);
document.getElementById("3_201").innerHTML = (document.getElementById("p_hijos").value * document.getElementById("c_hijos").value).toFixed(2);
document.getElementById("4_201").innerHTML = (document.getElementById("p_hijos").value * document.getElementById("c_hijos").value).toFixed(2);
document.getElementById("5_201").innerHTML = (document.getElementById("p_hijos").value * document.getElementById("c_hijos").value).toFixed(2);
document.getElementById("6_201").innerHTML = (document.getElementById("p_hijos").value * document.getElementById("c_hijos").value).toFixed(2);
document.getElementById("7_201").innerHTML = (document.getElementById("p_hijos").value * document.getElementById("c_hijos").value).toFixed(2);
document.getElementById("8_201").innerHTML = (document.getElementById("p_hijos").value * document.getElementById("c_hijos").value).toFixed(2);
//OFICIALES
document.getElementById("9_201").innerHTML = (document.getElementById("p_hijos").value * document.getElementById("c_hijos").value).toFixed(2);
document.getElementById("10_201").innerHTML = (document.getElementById("p_hijos").value * document.getElementById("c_hijos").value).toFixed(2);
document.getElementById("11_201").innerHTML = (document.getElementById("p_hijos").value * document.getElementById("c_hijos").value).toFixed(2);
document.getElementById("12_201").innerHTML = (document.getElementById("p_hijos").value * document.getElementById("c_hijos").value).toFixed(2);
document.getElementById("13_201").innerHTML = (document.getElementById("p_hijos").value * document.getElementById("c_hijos").value).toFixed(2);
document.getElementById("14_201").innerHTML = (document.getElementById("p_hijos").value * document.getElementById("c_hijos").value).toFixed(2);
document.getElementById("15_201").innerHTML = (document.getElementById("p_hijos").value * document.getElementById("c_hijos").value).toFixed(2);
document.getElementById("16_201").innerHTML = (document.getElementById("p_hijos").value * document.getElementById("c_hijos").value).toFixed(2);
document.getElementById("17_201").innerHTML = (document.getElementById("p_hijos").value * document.getElementById("c_hijos").value).toFixed(2);

//SUBJEFE / JEFE
document.getElementById("18_201").innerHTML = (document.getElementById("p_hijos").value * document.getElementById("c_hijos").value).toFixed(2);
document.getElementById("19_201").innerHTML = (document.getElementById("p_hijos").value * document.getElementById("c_hijos").value).toFixed(2);



//*****************************************//
//*****************************************//
//SUMA NO REMUNERA SEGURI
//*****************************************//
//*****************************************//

//TU JERARQUIA
var c0_366 = 0;
document.getElementById("0_366").innerHTML = (c0_366).toFixed(2);

//*****************************************//
//*****************************************//
//DECRETO 1142/11
//*****************************************//
//*****************************************//

//TU JERARQUIA
var c0_368 = 1545.4;
document.getElementById("0_368").innerHTML = (c0_368).toFixed(2);



//***************************************************************************************************************************//
//***************************************************************************************************************************//
//DESCUENTOS
//***************************************************************************************************************************//
//***************************************************************************************************************************//



//*****************************************//
//*****************************************//
//IPROSS. AP.PERS.
//*****************************************//
//*****************************************//

//TU JERARQUIA
var c0_400 = document.getElementById("p_ipross").value * c0_tr / 100;
document.getElementById("0_400").innerHTML = (c0_400).toFixed(2);


//SUBOFICIALES				 
document.getElementById("1_400").innerHTML = (document.getElementById("p_ipross").value * document.getElementById("1_tr").innerHTML / 100).toFixed(2);
document.getElementById("2_400").innerHTML = (document.getElementById("p_ipross").value * document.getElementById("2_tr").innerHTML / 100).toFixed(2);
document.getElementById("3_400").innerHTML = (document.getElementById("p_ipross").value * document.getElementById("3_tr").innerHTML / 100).toFixed(2);
document.getElementById("4_400").innerHTML = (document.getElementById("p_ipross").value * document.getElementById("4_tr").innerHTML / 100).toFixed(2);
document.getElementById("5_400").innerHTML = (document.getElementById("p_ipross").value * document.getElementById("5_tr").innerHTML / 100).toFixed(2);
document.getElementById("6_400").innerHTML = (document.getElementById("p_ipross").value * document.getElementById("6_tr").innerHTML / 100).toFixed(2);
document.getElementById("7_400").innerHTML = (document.getElementById("p_ipross").value * document.getElementById("7_tr").innerHTML / 100).toFixed(2);
document.getElementById("8_400").innerHTML = (document.getElementById("p_ipross").value * document.getElementById("8_tr").innerHTML / 100).toFixed(2);

//OFICIALES
document.getElementById("9_400").innerHTML = (document.getElementById("p_ipross").value * document.getElementById("9_tr").innerHTML / 100).toFixed(2);
document.getElementById("10_400").innerHTML = (document.getElementById("p_ipross").value * document.getElementById("10_tr").innerHTML / 100).toFixed(2);
document.getElementById("11_400").innerHTML = (document.getElementById("p_ipross").value * document.getElementById("11_tr").innerHTML / 100).toFixed(2);
document.getElementById("12_400").innerHTML = (document.getElementById("p_ipross").value * document.getElementById("12_tr").innerHTML / 100).toFixed(2);
document.getElementById("13_400").innerHTML = (document.getElementById("p_ipross").value * document.getElementById("13_tr").innerHTML / 100).toFixed(2);
document.getElementById("14_400").innerHTML = (document.getElementById("p_ipross").value * document.getElementById("14_tr").innerHTML / 100).toFixed(2);
document.getElementById("15_400").innerHTML = (document.getElementById("p_ipross").value * document.getElementById("15_tr").innerHTML / 100).toFixed(2);
document.getElementById("16_400").innerHTML = (document.getElementById("p_ipross").value * document.getElementById("16_tr").innerHTML / 100).toFixed(2);
document.getElementById("17_400").innerHTML = (document.getElementById("p_ipross").value * document.getElementById("17_tr").innerHTML / 100).toFixed(2);

//SUBJEFE / JEFE
document.getElementById("18_400").innerHTML = (document.getElementById("p_ipross").value * document.getElementById("18_tr").innerHTML / 100).toFixed(2);
document.getElementById("19_400").innerHTML = (document.getElementById("p_ipross").value * document.getElementById("19_tr").innerHTML / 100).toFixed(2);


//*****************************************//
//*****************************************//
//AP.PERS.PREV.POLICIA
//*****************************************//
//*****************************************//

//TU JERARQUIA
var c0_406 = document.getElementById("p_appersprevpol").value * c0_tr / 100;
document.getElementById("0_406").innerHTML = (c0_406).toFixed(2);


//SUBOFICIALES				 
document.getElementById("1_406").innerHTML = (document.getElementById("p_appersprevpol").value * document.getElementById("1_tr").innerHTML / 100).toFixed(2);
document.getElementById("2_406").innerHTML = (document.getElementById("p_appersprevpol").value * document.getElementById("2_tr").innerHTML / 100).toFixed(2);
document.getElementById("3_406").innerHTML = (document.getElementById("p_appersprevpol").value * document.getElementById("3_tr").innerHTML / 100).toFixed(2);
document.getElementById("4_406").innerHTML = (document.getElementById("p_appersprevpol").value * document.getElementById("4_tr").innerHTML / 100).toFixed(2);
document.getElementById("5_406").innerHTML = (document.getElementById("p_appersprevpol").value * document.getElementById("5_tr").innerHTML / 100).toFixed(2);
document.getElementById("6_406").innerHTML = (document.getElementById("p_appersprevpol").value * document.getElementById("6_tr").innerHTML / 100).toFixed(2);
document.getElementById("7_406").innerHTML = (document.getElementById("p_appersprevpol").value * document.getElementById("7_tr").innerHTML / 100).toFixed(2);
document.getElementById("8_406").innerHTML = (document.getElementById("p_appersprevpol").value * document.getElementById("8_tr").innerHTML / 100).toFixed(2);

//OFICIALES
document.getElementById("9_406").innerHTML = (document.getElementById("p_appersprevpol").value * document.getElementById("9_tr").innerHTML / 100).toFixed(2);
document.getElementById("10_406").innerHTML = (document.getElementById("p_appersprevpol").value * document.getElementById("10_tr").innerHTML / 100).toFixed(2);
document.getElementById("11_406").innerHTML = (document.getElementById("p_appersprevpol").value * document.getElementById("11_tr").innerHTML / 100).toFixed(2);
document.getElementById("12_406").innerHTML = (document.getElementById("p_appersprevpol").value * document.getElementById("12_tr").innerHTML / 100).toFixed(2);
document.getElementById("13_406").innerHTML = (document.getElementById("p_appersprevpol").value * document.getElementById("13_tr").innerHTML / 100).toFixed(2);
document.getElementById("14_406").innerHTML = (document.getElementById("p_appersprevpol").value * document.getElementById("14_tr").innerHTML / 100).toFixed(2);
document.getElementById("15_406").innerHTML = (document.getElementById("p_appersprevpol").value * document.getElementById("15_tr").innerHTML / 100).toFixed(2);
document.getElementById("16_406").innerHTML = (document.getElementById("p_appersprevpol").value * document.getElementById("16_tr").innerHTML / 100).toFixed(2);
document.getElementById("17_406").innerHTML = (document.getElementById("p_appersprevpol").value * document.getElementById("17_tr").innerHTML / 100).toFixed(2);

//SUBJEFE / JEFE
document.getElementById("18_406").innerHTML = (document.getElementById("p_appersprevpol").value * document.getElementById("18_tr").innerHTML / 100).toFixed(2);
document.getElementById("19_406").innerHTML = (document.getElementById("p_appersprevpol").value * document.getElementById("19_tr").innerHTML / 100).toFixed(2);


//*****************************************//
//*****************************************//
//IAPS SEGURO OBLIG.
//*****************************************//
//*****************************************//

//TU JERARQUIA
var c0_414 = 1246.2;
document.getElementById("0_414").innerHTML = (c0_414).toFixed(2);



//*****************************************//
//*****************************************//
// CUOTA ALIMENTARIA %
//*****************************************//
//*****************************************//

//TU JERARQUIA
var c0_424 = (c0_tr + c0_366 + c0_368 - c0_400 - c0_406 - c0_414) * document.getElementById("c_cuota").value / 100;
document.getElementById("0_424").innerHTML = (c0_424).toFixed(2);
 

//SUBOFICIALES				 
document.getElementById("1_424").innerHTML = ( 
(
parseFloat(document.getElementById("1_tr").innerHTML) + 
parseFloat(document.getElementById("1_366").innerHTML) + 
parseFloat(document.getElementById("1_368").innerHTML) - 
parseFloat(document.getElementById("1_400").innerHTML) - 
parseFloat(document.getElementById("1_406").innerHTML) - 
parseFloat(document.getElementById("1_414").innerHTML)
) * document.getElementById("c_cuota").value / 100 
).toFixed(2);

			 
document.getElementById("2_424").innerHTML = ( 
(
parseFloat(document.getElementById("2_tr").innerHTML) + 
parseFloat(document.getElementById("2_366").innerHTML) + 
parseFloat(document.getElementById("2_368").innerHTML) - 
parseFloat(document.getElementById("2_400").innerHTML) - 
parseFloat(document.getElementById("2_406").innerHTML) - 
parseFloat(document.getElementById("2_414").innerHTML)
) * document.getElementById("c_cuota").value / 100 
).toFixed(2);


document.getElementById("3_424").innerHTML = ( 
(
parseFloat(document.getElementById("3_tr").innerHTML) + 
parseFloat(document.getElementById("3_366").innerHTML) + 
parseFloat(document.getElementById("3_368").innerHTML) - 
parseFloat(document.getElementById("3_400").innerHTML) - 
parseFloat(document.getElementById("3_406").innerHTML) - 
parseFloat(document.getElementById("3_414").innerHTML)
) * document.getElementById("c_cuota").value / 100 
).toFixed(2);

document.getElementById("4_424").innerHTML = ( 
(
parseFloat(document.getElementById("4_tr").innerHTML) + 
parseFloat(document.getElementById("4_366").innerHTML) + 
parseFloat(document.getElementById("4_368").innerHTML) - 
parseFloat(document.getElementById("4_400").innerHTML) - 
parseFloat(document.getElementById("4_406").innerHTML) - 
parseFloat(document.getElementById("4_414").innerHTML)
) * document.getElementById("c_cuota").value / 100 
).toFixed(2);

document.getElementById("5_424").innerHTML = ( 
(
parseFloat(document.getElementById("5_tr").innerHTML) + 
parseFloat(document.getElementById("5_366").innerHTML) + 
parseFloat(document.getElementById("5_368").innerHTML) - 
parseFloat(document.getElementById("5_400").innerHTML) - 
parseFloat(document.getElementById("5_406").innerHTML) - 
parseFloat(document.getElementById("5_414").innerHTML)
) * document.getElementById("c_cuota").value / 100 
).toFixed(2);

document.getElementById("6_424").innerHTML = ( 
(
parseFloat(document.getElementById("6_tr").innerHTML) + 
parseFloat(document.getElementById("6_366").innerHTML) + 
parseFloat(document.getElementById("6_368").innerHTML) - 
parseFloat(document.getElementById("6_400").innerHTML) - 
parseFloat(document.getElementById("6_406").innerHTML) - 
parseFloat(document.getElementById("6_414").innerHTML)
) * document.getElementById("c_cuota").value / 100 
).toFixed(2);

document.getElementById("7_424").innerHTML = ( 
(
parseFloat(document.getElementById("7_tr").innerHTML) + 
parseFloat(document.getElementById("7_366").innerHTML) + 
parseFloat(document.getElementById("7_368").innerHTML) - 
parseFloat(document.getElementById("7_400").innerHTML) - 
parseFloat(document.getElementById("7_406").innerHTML) - 
parseFloat(document.getElementById("7_414").innerHTML)
) * document.getElementById("c_cuota").value / 100 
).toFixed(2);

document.getElementById("8_424").innerHTML = ( 
(
parseFloat(document.getElementById("8_tr").innerHTML) + 
parseFloat(document.getElementById("8_366").innerHTML) + 
parseFloat(document.getElementById("8_368").innerHTML) - 
parseFloat(document.getElementById("8_400").innerHTML) - 
parseFloat(document.getElementById("8_406").innerHTML) - 
parseFloat(document.getElementById("8_414").innerHTML)
) * document.getElementById("c_cuota").value / 100 
).toFixed(2);

document.getElementById("9_424").innerHTML = ( 
(
parseFloat(document.getElementById("9_tr").innerHTML) + 
parseFloat(document.getElementById("9_366").innerHTML) + 
parseFloat(document.getElementById("9_368").innerHTML) - 
parseFloat(document.getElementById("9_400").innerHTML) - 
parseFloat(document.getElementById("9_406").innerHTML) - 
parseFloat(document.getElementById("9_414").innerHTML)
) * document.getElementById("c_cuota").value / 100 
).toFixed(2);

document.getElementById("10_424").innerHTML = ( 
(
parseFloat(document.getElementById("10_tr").innerHTML) + 
parseFloat(document.getElementById("10_366").innerHTML) + 
parseFloat(document.getElementById("10_368").innerHTML) - 
parseFloat(document.getElementById("10_400").innerHTML) - 
parseFloat(document.getElementById("10_406").innerHTML) - 
parseFloat(document.getElementById("10_414").innerHTML)
) * document.getElementById("c_cuota").value / 100 
).toFixed(2);

document.getElementById("11_424").innerHTML = ( 
(
parseFloat(document.getElementById("11_tr").innerHTML) + 
parseFloat(document.getElementById("11_366").innerHTML) + 
parseFloat(document.getElementById("11_368").innerHTML) - 
parseFloat(document.getElementById("11_400").innerHTML) - 
parseFloat(document.getElementById("11_406").innerHTML) - 
parseFloat(document.getElementById("11_414").innerHTML)
) * document.getElementById("c_cuota").value / 100 
).toFixed(2);

document.getElementById("12_424").innerHTML = ( 
(
parseFloat(document.getElementById("12_tr").innerHTML) + 
parseFloat(document.getElementById("12_366").innerHTML) + 
parseFloat(document.getElementById("12_368").innerHTML) - 
parseFloat(document.getElementById("12_400").innerHTML) - 
parseFloat(document.getElementById("12_406").innerHTML) - 
parseFloat(document.getElementById("12_414").innerHTML)
) * document.getElementById("c_cuota").value / 100 
).toFixed(2);

document.getElementById("13_424").innerHTML = ( 
(
parseFloat(document.getElementById("13_tr").innerHTML) + 
parseFloat(document.getElementById("13_366").innerHTML) + 
parseFloat(document.getElementById("13_368").innerHTML) - 
parseFloat(document.getElementById("13_400").innerHTML) - 
parseFloat(document.getElementById("13_406").innerHTML) - 
parseFloat(document.getElementById("13_414").innerHTML)
) * document.getElementById("c_cuota").value / 100 
).toFixed(2);

document.getElementById("14_424").innerHTML = ( 
(
parseFloat(document.getElementById("14_tr").innerHTML) + 
parseFloat(document.getElementById("14_366").innerHTML) + 
parseFloat(document.getElementById("14_368").innerHTML) - 
parseFloat(document.getElementById("14_400").innerHTML) - 
parseFloat(document.getElementById("14_406").innerHTML) - 
parseFloat(document.getElementById("14_414").innerHTML)
) * document.getElementById("c_cuota").value / 100 
).toFixed(2);

document.getElementById("15_424").innerHTML = ( 
(
parseFloat(document.getElementById("15_tr").innerHTML) + 
parseFloat(document.getElementById("15_366").innerHTML) + 
parseFloat(document.getElementById("15_368").innerHTML) - 
parseFloat(document.getElementById("15_400").innerHTML) - 
parseFloat(document.getElementById("15_406").innerHTML) - 
parseFloat(document.getElementById("15_414").innerHTML)
) * document.getElementById("c_cuota").value / 100 
).toFixed(2);

document.getElementById("16_424").innerHTML = ( 
(
parseFloat(document.getElementById("16_tr").innerHTML) + 
parseFloat(document.getElementById("16_366").innerHTML) + 
parseFloat(document.getElementById("16_368").innerHTML) - 
parseFloat(document.getElementById("16_400").innerHTML) - 
parseFloat(document.getElementById("16_406").innerHTML) - 
parseFloat(document.getElementById("16_414").innerHTML)
) * document.getElementById("c_cuota").value / 100 
).toFixed(2);


document.getElementById("17_424").innerHTML = ( 
(
parseFloat(document.getElementById("17_tr").innerHTML) + 
parseFloat(document.getElementById("17_366").innerHTML) + 
parseFloat(document.getElementById("17_368").innerHTML) - 
parseFloat(document.getElementById("17_400").innerHTML) - 
parseFloat(document.getElementById("17_406").innerHTML) - 
parseFloat(document.getElementById("17_414").innerHTML)
) * document.getElementById("c_cuota").value / 100 
).toFixed(2);

document.getElementById("18_424").innerHTML = ( 
(
parseFloat(document.getElementById("18_tr").innerHTML) + 
parseFloat(document.getElementById("18_366").innerHTML) + 
parseFloat(document.getElementById("18_368").innerHTML) - 
parseFloat(document.getElementById("18_400").innerHTML) - 
parseFloat(document.getElementById("18_406").innerHTML) - 
parseFloat(document.getElementById("18_414").innerHTML)
) * document.getElementById("c_cuota").value / 100 
).toFixed(2);


document.getElementById("19_424").innerHTML = ( 
(
parseFloat(document.getElementById("19_tr").innerHTML) + 
parseFloat(document.getElementById("19_366").innerHTML) + 
parseFloat(document.getElementById("19_368").innerHTML) - 
parseFloat(document.getElementById("19_400").innerHTML) - 
parseFloat(document.getElementById("19_406").innerHTML) - 
parseFloat(document.getElementById("19_414").innerHTML)
) * document.getElementById("c_cuota").value / 100 
).toFixed(2);





//*****************************************//
//*****************************************//
// TOTAL CON APORTES
//*****************************************//
//*****************************************//

//TU JERARQUIA
document.getElementById("0_ta").innerHTML = document.getElementById("0_tr").innerHTML;

//SUBOFICIALES				 
document.getElementById("1_ta").innerHTML = document.getElementById("1_tr").innerHTML;
document.getElementById("2_ta").innerHTML = document.getElementById("2_tr").innerHTML;
document.getElementById("3_ta").innerHTML = document.getElementById("3_tr").innerHTML;
document.getElementById("4_ta").innerHTML = document.getElementById("4_tr").innerHTML;
document.getElementById("5_ta").innerHTML = document.getElementById("5_tr").innerHTML;
document.getElementById("6_ta").innerHTML = document.getElementById("6_tr").innerHTML;
document.getElementById("7_ta").innerHTML = document.getElementById("7_tr").innerHTML;
document.getElementById("8_ta").innerHTML = document.getElementById("8_tr").innerHTML;

document.getElementById("9_ta").innerHTML = document.getElementById("9_tr").innerHTML;
document.getElementById("10_ta").innerHTML = document.getElementById("10_tr").innerHTML;
document.getElementById("11_ta").innerHTML = document.getElementById("11_tr").innerHTML;
document.getElementById("12_ta").innerHTML = document.getElementById("12_tr").innerHTML;
document.getElementById("13_ta").innerHTML = document.getElementById("13_tr").innerHTML;
document.getElementById("14_ta").innerHTML = document.getElementById("14_tr").innerHTML;
document.getElementById("15_ta").innerHTML = document.getElementById("15_tr").innerHTML;
document.getElementById("16_ta").innerHTML = document.getElementById("16_tr").innerHTML;
document.getElementById("17_ta").innerHTML = document.getElementById("17_tr").innerHTML;

document.getElementById("18_ta").innerHTML = document.getElementById("18_tr").innerHTML;
document.getElementById("19_ta").innerHTML = document.getElementById("19_tr").innerHTML;




//*****************************************//
//*****************************************//
// TOTAL SIN APORTES
//*****************************************//
//*****************************************//


//TU JERARQUIA
document.getElementById("0_tsa").innerHTML =
parseFloat(document.getElementById("0_310").innerHTML) + 
parseFloat(document.getElementById("0_312").innerHTML) + 
parseFloat(document.getElementById("0_366").innerHTML) + 
parseFloat(document.getElementById("0_368").innerHTML);

//SUBOFICIALES				 
document.getElementById("1_tsa").innerHTML =
parseFloat(document.getElementById("1_310").innerHTML) + 
parseFloat(document.getElementById("1_312").innerHTML) + 
parseFloat(document.getElementById("1_366").innerHTML) + 
parseFloat(document.getElementById("1_368").innerHTML);

document.getElementById("2_tsa").innerHTML =
parseFloat(document.getElementById("2_310").innerHTML) + 
parseFloat(document.getElementById("2_312").innerHTML) + 
parseFloat(document.getElementById("2_366").innerHTML) + 
parseFloat(document.getElementById("2_368").innerHTML);

document.getElementById("3_tsa").innerHTML =
parseFloat(document.getElementById("3_310").innerHTML) + 
parseFloat(document.getElementById("3_312").innerHTML) + 
parseFloat(document.getElementById("3_366").innerHTML) + 
parseFloat(document.getElementById("3_368").innerHTML);

document.getElementById("4_tsa").innerHTML =
parseFloat(document.getElementById("4_310").innerHTML) + 
parseFloat(document.getElementById("4_312").innerHTML) + 
parseFloat(document.getElementById("4_366").innerHTML) + 
parseFloat(document.getElementById("4_368").innerHTML);

document.getElementById("5_tsa").innerHTML =
parseFloat(document.getElementById("5_310").innerHTML) + 
parseFloat(document.getElementById("5_312").innerHTML) + 
parseFloat(document.getElementById("5_366").innerHTML) + 
parseFloat(document.getElementById("5_368").innerHTML);

document.getElementById("6_tsa").innerHTML =
parseFloat(document.getElementById("6_310").innerHTML) + 
parseFloat(document.getElementById("6_312").innerHTML) + 
parseFloat(document.getElementById("6_366").innerHTML) + 
parseFloat(document.getElementById("6_368").innerHTML);

document.getElementById("7_tsa").innerHTML =
parseFloat(document.getElementById("7_310").innerHTML) + 
parseFloat(document.getElementById("7_312").innerHTML) + 
parseFloat(document.getElementById("7_366").innerHTML) + 
parseFloat(document.getElementById("7_368").innerHTML);

document.getElementById("8_tsa").innerHTML =
parseFloat(document.getElementById("8_310").innerHTML) + 
parseFloat(document.getElementById("8_312").innerHTML) + 
parseFloat(document.getElementById("8_366").innerHTML) + 
parseFloat(document.getElementById("8_368").innerHTML);

document.getElementById("9_tsa").innerHTML =
parseFloat(document.getElementById("9_310").innerHTML) + 
parseFloat(document.getElementById("9_312").innerHTML) + 
parseFloat(document.getElementById("9_366").innerHTML) + 
parseFloat(document.getElementById("9_368").innerHTML);

document.getElementById("10_tsa").innerHTML =
parseFloat(document.getElementById("10_310").innerHTML) + 
parseFloat(document.getElementById("10_312").innerHTML) + 
parseFloat(document.getElementById("10_366").innerHTML) + 
parseFloat(document.getElementById("10_368").innerHTML);

document.getElementById("11_tsa").innerHTML =
parseFloat(document.getElementById("11_310").innerHTML) + 
parseFloat(document.getElementById("11_312").innerHTML) + 
parseFloat(document.getElementById("11_366").innerHTML) + 
parseFloat(document.getElementById("11_368").innerHTML);

document.getElementById("12_tsa").innerHTML =
parseFloat(document.getElementById("12_310").innerHTML) + 
parseFloat(document.getElementById("12_312").innerHTML) + 
parseFloat(document.getElementById("12_366").innerHTML) + 
parseFloat(document.getElementById("12_368").innerHTML);

document.getElementById("13_tsa").innerHTML =
parseFloat(document.getElementById("13_310").innerHTML) + 
parseFloat(document.getElementById("13_312").innerHTML) + 
parseFloat(document.getElementById("13_366").innerHTML) + 
parseFloat(document.getElementById("13_368").innerHTML);

document.getElementById("14_tsa").innerHTML =
parseFloat(document.getElementById("14_310").innerHTML) + 
parseFloat(document.getElementById("14_312").innerHTML) + 
parseFloat(document.getElementById("14_366").innerHTML) + 
parseFloat(document.getElementById("14_368").innerHTML);

document.getElementById("15_tsa").innerHTML =
parseFloat(document.getElementById("15_310").innerHTML) + 
parseFloat(document.getElementById("15_312").innerHTML) + 
parseFloat(document.getElementById("15_366").innerHTML) + 
parseFloat(document.getElementById("15_368").innerHTML);

document.getElementById("16_tsa").innerHTML =
parseFloat(document.getElementById("16_310").innerHTML) + 
parseFloat(document.getElementById("16_312").innerHTML) + 
parseFloat(document.getElementById("16_366").innerHTML) + 
parseFloat(document.getElementById("16_368").innerHTML);

document.getElementById("17_tsa").innerHTML =
parseFloat(document.getElementById("17_310").innerHTML) + 
parseFloat(document.getElementById("17_312").innerHTML) + 
parseFloat(document.getElementById("17_366").innerHTML) + 
parseFloat(document.getElementById("17_368").innerHTML);

document.getElementById("18_tsa").innerHTML =
parseFloat(document.getElementById("18_310").innerHTML) + 
parseFloat(document.getElementById("18_312").innerHTML) + 
parseFloat(document.getElementById("18_366").innerHTML) + 
parseFloat(document.getElementById("18_368").innerHTML);

document.getElementById("19_tsa").innerHTML =
parseFloat(document.getElementById("19_310").innerHTML) + 
parseFloat(document.getElementById("19_312").innerHTML) + 
parseFloat(document.getElementById("19_366").innerHTML) + 
parseFloat(document.getElementById("19_368").innerHTML);




//*****************************************//
//*****************************************//
// DESCUENTOS
//*****************************************//
//*****************************************//

//TU JERARQUIA
document.getElementById("0_des").innerHTML =(
parseFloat(document.getElementById("0_400").innerHTML) + 
parseFloat(document.getElementById("0_406").innerHTML) + 
parseFloat(document.getElementById("0_414").innerHTML) + 
parseFloat(document.getElementById("0_424").innerHTML)
).toFixed(2);

//SUBOFICIALES				 
document.getElementById("1_des").innerHTML =(
parseFloat(document.getElementById("1_400").innerHTML) + 
parseFloat(document.getElementById("1_406").innerHTML) + 
parseFloat(document.getElementById("1_414").innerHTML) + 
parseFloat(document.getElementById("1_424").innerHTML)
).toFixed(2);

document.getElementById("2_des").innerHTML =(
parseFloat(document.getElementById("2_400").innerHTML) + 
parseFloat(document.getElementById("2_406").innerHTML) + 
parseFloat(document.getElementById("2_414").innerHTML) + 
parseFloat(document.getElementById("2_424").innerHTML)
).toFixed(2);

document.getElementById("3_des").innerHTML =(
parseFloat(document.getElementById("3_400").innerHTML) + 
parseFloat(document.getElementById("3_406").innerHTML) + 
parseFloat(document.getElementById("3_414").innerHTML) + 
parseFloat(document.getElementById("3_424").innerHTML)
).toFixed(2);

document.getElementById("4_des").innerHTML =(
parseFloat(document.getElementById("4_400").innerHTML) + 
parseFloat(document.getElementById("4_406").innerHTML) + 
parseFloat(document.getElementById("4_414").innerHTML) + 
parseFloat(document.getElementById("4_424").innerHTML)
).toFixed(2);

document.getElementById("5_des").innerHTML =(
parseFloat(document.getElementById("5_400").innerHTML) + 
parseFloat(document.getElementById("5_406").innerHTML) + 
parseFloat(document.getElementById("5_414").innerHTML) + 
parseFloat(document.getElementById("5_424").innerHTML)
).toFixed(2);

document.getElementById("6_des").innerHTML =(
parseFloat(document.getElementById("6_400").innerHTML) + 
parseFloat(document.getElementById("6_406").innerHTML) + 
parseFloat(document.getElementById("6_414").innerHTML) + 
parseFloat(document.getElementById("6_424").innerHTML)
).toFixed(2);

document.getElementById("7_des").innerHTML =(
parseFloat(document.getElementById("7_400").innerHTML) + 
parseFloat(document.getElementById("7_406").innerHTML) + 
parseFloat(document.getElementById("7_414").innerHTML) + 
parseFloat(document.getElementById("7_424").innerHTML)
).toFixed(2);

document.getElementById("8_des").innerHTML =(
parseFloat(document.getElementById("8_400").innerHTML) + 
parseFloat(document.getElementById("8_406").innerHTML) + 
parseFloat(document.getElementById("8_414").innerHTML) + 
parseFloat(document.getElementById("8_424").innerHTML)
).toFixed(2);

document.getElementById("9_des").innerHTML =(
parseFloat(document.getElementById("9_400").innerHTML) + 
parseFloat(document.getElementById("9_406").innerHTML) + 
parseFloat(document.getElementById("9_414").innerHTML) + 
parseFloat(document.getElementById("9_424").innerHTML)
).toFixed(2);

document.getElementById("10_des").innerHTML =(
parseFloat(document.getElementById("10_400").innerHTML) + 
parseFloat(document.getElementById("10_406").innerHTML) + 
parseFloat(document.getElementById("10_414").innerHTML) + 
parseFloat(document.getElementById("10_424").innerHTML)
).toFixed(2);


document.getElementById("11_des").innerHTML =(
parseFloat(document.getElementById("11_400").innerHTML) + 
parseFloat(document.getElementById("11_406").innerHTML) + 
parseFloat(document.getElementById("11_414").innerHTML) + 
parseFloat(document.getElementById("11_424").innerHTML)
).toFixed(2);

document.getElementById("12_des").innerHTML =(
parseFloat(document.getElementById("12_400").innerHTML) + 
parseFloat(document.getElementById("12_406").innerHTML) + 
parseFloat(document.getElementById("12_414").innerHTML) + 
parseFloat(document.getElementById("12_424").innerHTML)
).toFixed(2);

document.getElementById("13_des").innerHTML =(
parseFloat(document.getElementById("13_400").innerHTML) + 
parseFloat(document.getElementById("13_406").innerHTML) + 
parseFloat(document.getElementById("13_414").innerHTML) + 
parseFloat(document.getElementById("13_424").innerHTML)
).toFixed(2);

document.getElementById("14_des").innerHTML =(
parseFloat(document.getElementById("14_400").innerHTML) + 
parseFloat(document.getElementById("14_406").innerHTML) + 
parseFloat(document.getElementById("14_414").innerHTML) + 
parseFloat(document.getElementById("14_424").innerHTML)
).toFixed(2);

document.getElementById("15_des").innerHTML =(
parseFloat(document.getElementById("15_400").innerHTML) + 
parseFloat(document.getElementById("15_406").innerHTML) + 
parseFloat(document.getElementById("15_414").innerHTML) + 
parseFloat(document.getElementById("15_424").innerHTML)
).toFixed(2);

document.getElementById("16_des").innerHTML =(
parseFloat(document.getElementById("16_400").innerHTML) + 
parseFloat(document.getElementById("16_406").innerHTML) + 
parseFloat(document.getElementById("16_414").innerHTML) + 
parseFloat(document.getElementById("16_424").innerHTML)
).toFixed(2);

document.getElementById("17_des").innerHTML =(
parseFloat(document.getElementById("17_400").innerHTML) + 
parseFloat(document.getElementById("17_406").innerHTML) + 
parseFloat(document.getElementById("17_414").innerHTML) + 
parseFloat(document.getElementById("17_424").innerHTML)
).toFixed(2);

document.getElementById("18_des").innerHTML =(
parseFloat(document.getElementById("18_400").innerHTML) + 
parseFloat(document.getElementById("18_406").innerHTML) + 
parseFloat(document.getElementById("18_414").innerHTML) + 
parseFloat(document.getElementById("18_424").innerHTML)
).toFixed(2);

document.getElementById("19_des").innerHTML =(
parseFloat(document.getElementById("19_400").innerHTML) + 
parseFloat(document.getElementById("19_406").innerHTML) + 
parseFloat(document.getElementById("19_414").innerHTML) + 
parseFloat(document.getElementById("19_424").innerHTML)
).toFixed(2);




//*****************************************//
//*****************************************//
// SALARIO FAMILIAR
//*****************************************//
//*****************************************//

//TU JERARQUIA
document.getElementById("0_sal").innerHTML = document.getElementById("0_201").innerHTML;

//SUBOFICIALES				 
document.getElementById("1_sal").innerHTML = document.getElementById("1_201").innerHTML;
document.getElementById("2_sal").innerHTML = document.getElementById("2_201").innerHTML;
document.getElementById("3_sal").innerHTML = document.getElementById("3_201").innerHTML;
document.getElementById("4_sal").innerHTML = document.getElementById("4_201").innerHTML;
document.getElementById("5_sal").innerHTML = document.getElementById("5_201").innerHTML;
document.getElementById("6_sal").innerHTML = document.getElementById("6_201").innerHTML;
document.getElementById("7_sal").innerHTML = document.getElementById("7_201").innerHTML;
document.getElementById("8_sal").innerHTML = document.getElementById("8_201").innerHTML;

document.getElementById("9_sal").innerHTML = document.getElementById("9_201").innerHTML;
document.getElementById("10_sal").innerHTML = document.getElementById("10_201").innerHTML;
document.getElementById("11_sal").innerHTML = document.getElementById("11_201").innerHTML;
document.getElementById("12_sal").innerHTML = document.getElementById("12_201").innerHTML;
document.getElementById("13_sal").innerHTML = document.getElementById("13_201").innerHTML;
document.getElementById("14_sal").innerHTML = document.getElementById("14_201").innerHTML;
document.getElementById("15_sal").innerHTML = document.getElementById("15_201").innerHTML;
document.getElementById("16_sal").innerHTML = document.getElementById("16_201").innerHTML;
document.getElementById("17_sal").innerHTML = document.getElementById("17_201").innerHTML;

document.getElementById("18_sal").innerHTML = document.getElementById("18_201").innerHTML;
document.getElementById("19_sal").innerHTML = document.getElementById("19_201").innerHTML;



//*****************************************//
//*****************************************//
// NETO A COBRAR
//*****************************************//
//*****************************************//

//TU JERARQUIA
document.getElementById("0_neto").innerHTML = (
parseFloat(document.getElementById("0_ta").innerHTML) + 
parseFloat(document.getElementById("0_sal").innerHTML) + 
parseFloat(document.getElementById("0_tsa").innerHTML) - 
parseFloat(document.getElementById("0_des").innerHTML)
).toFixed(2);

//TU JERARQUIA
document.getElementById("0_neto2").innerHTML = "SUELDO A COBRAR: " + document.getElementById("0_neto").innerHTML;




//SUBOFICIALES				 
document.getElementById("1_neto").innerHTML =(
parseFloat(document.getElementById("1_ta").innerHTML) + 
parseFloat(document.getElementById("1_sal").innerHTML) + 
parseFloat(document.getElementById("1_tsa").innerHTML) - 
parseFloat(document.getElementById("1_des").innerHTML)
).toFixed(2);

document.getElementById("2_neto").innerHTML =(
parseFloat(document.getElementById("2_ta").innerHTML) + 
parseFloat(document.getElementById("2_sal").innerHTML) + 
parseFloat(document.getElementById("2_tsa").innerHTML) - 
parseFloat(document.getElementById("2_des").innerHTML)
).toFixed(2);


document.getElementById("3_neto").innerHTML =(
parseFloat(document.getElementById("3_ta").innerHTML) + 
parseFloat(document.getElementById("3_sal").innerHTML) + 
parseFloat(document.getElementById("3_tsa").innerHTML) - 
parseFloat(document.getElementById("3_des").innerHTML)
).toFixed(2);


document.getElementById("4_neto").innerHTML =(
parseFloat(document.getElementById("4_ta").innerHTML) + 
parseFloat(document.getElementById("4_sal").innerHTML) + 
parseFloat(document.getElementById("4_tsa").innerHTML) - 
parseFloat(document.getElementById("4_des").innerHTML)
).toFixed(2);


document.getElementById("5_neto").innerHTML =(
parseFloat(document.getElementById("5_ta").innerHTML) + 
parseFloat(document.getElementById("5_sal").innerHTML) + 
parseFloat(document.getElementById("5_tsa").innerHTML) - 
parseFloat(document.getElementById("5_des").innerHTML)
).toFixed(2);


document.getElementById("6_neto").innerHTML =(
parseFloat(document.getElementById("6_ta").innerHTML) + 
parseFloat(document.getElementById("6_sal").innerHTML) + 
parseFloat(document.getElementById("6_tsa").innerHTML) - 
parseFloat(document.getElementById("6_des").innerHTML)
).toFixed(2);


document.getElementById("7_neto").innerHTML =(
parseFloat(document.getElementById("7_ta").innerHTML) + 
parseFloat(document.getElementById("7_sal").innerHTML) + 
parseFloat(document.getElementById("7_tsa").innerHTML) - 
parseFloat(document.getElementById("7_des").innerHTML)
).toFixed(2);


document.getElementById("8_neto").innerHTML =(
parseFloat(document.getElementById("8_ta").innerHTML) + 
parseFloat(document.getElementById("8_sal").innerHTML) + 
parseFloat(document.getElementById("8_tsa").innerHTML) - 
parseFloat(document.getElementById("8_des").innerHTML)
).toFixed(2);


document.getElementById("9_neto").innerHTML =(
parseFloat(document.getElementById("9_ta").innerHTML) + 
parseFloat(document.getElementById("9_sal").innerHTML) + 
parseFloat(document.getElementById("9_tsa").innerHTML) - 
parseFloat(document.getElementById("9_des").innerHTML)
).toFixed(2);


document.getElementById("10_neto").innerHTML =(
parseFloat(document.getElementById("10_ta").innerHTML) + 
parseFloat(document.getElementById("10_sal").innerHTML) + 
parseFloat(document.getElementById("10_tsa").innerHTML) - 
parseFloat(document.getElementById("10_des").innerHTML)
).toFixed(2);


document.getElementById("11_neto").innerHTML =(
parseFloat(document.getElementById("11_ta").innerHTML) + 
parseFloat(document.getElementById("11_sal").innerHTML) + 
parseFloat(document.getElementById("11_tsa").innerHTML) - 
parseFloat(document.getElementById("11_des").innerHTML)
).toFixed(2);


document.getElementById("12_neto").innerHTML =(
parseFloat(document.getElementById("12_ta").innerHTML) + 
parseFloat(document.getElementById("12_sal").innerHTML) + 
parseFloat(document.getElementById("12_tsa").innerHTML) - 
parseFloat(document.getElementById("12_des").innerHTML)
).toFixed(2);


document.getElementById("13_neto").innerHTML =(
parseFloat(document.getElementById("13_ta").innerHTML) + 
parseFloat(document.getElementById("13_sal").innerHTML) + 
parseFloat(document.getElementById("13_tsa").innerHTML) - 
parseFloat(document.getElementById("13_des").innerHTML)
).toFixed(2);


document.getElementById("14_neto").innerHTML =(
parseFloat(document.getElementById("14_ta").innerHTML) + 
parseFloat(document.getElementById("14_sal").innerHTML) + 
parseFloat(document.getElementById("14_tsa").innerHTML) - 
parseFloat(document.getElementById("14_des").innerHTML)
).toFixed(2);


document.getElementById("15_neto").innerHTML =(
parseFloat(document.getElementById("15_ta").innerHTML) + 
parseFloat(document.getElementById("15_sal").innerHTML) + 
parseFloat(document.getElementById("15_tsa").innerHTML) - 
parseFloat(document.getElementById("15_des").innerHTML)
).toFixed(2);


document.getElementById("16_neto").innerHTML =(
parseFloat(document.getElementById("16_ta").innerHTML) + 
parseFloat(document.getElementById("16_sal").innerHTML) + 
parseFloat(document.getElementById("16_tsa").innerHTML) - 
parseFloat(document.getElementById("16_des").innerHTML)
).toFixed(2);


document.getElementById("17_neto").innerHTML =(
parseFloat(document.getElementById("17_ta").innerHTML) + 
parseFloat(document.getElementById("17_sal").innerHTML) + 
parseFloat(document.getElementById("17_tsa").innerHTML) - 
parseFloat(document.getElementById("17_des").innerHTML)
).toFixed(2);


document.getElementById("18_neto").innerHTML =(
parseFloat(document.getElementById("18_ta").innerHTML) + 
parseFloat(document.getElementById("18_sal").innerHTML) + 
parseFloat(document.getElementById("18_tsa").innerHTML) - 
parseFloat(document.getElementById("18_des").innerHTML)
).toFixed(2);


document.getElementById("19_neto").innerHTML =(
parseFloat(document.getElementById("19_ta").innerHTML) + 
parseFloat(document.getElementById("19_sal").innerHTML) + 
parseFloat(document.getElementById("19_tsa").innerHTML) - 
parseFloat(document.getElementById("19_des").innerHTML)
).toFixed(2);







}