<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>SUELDOS POLICIA RIO NEGRO</title>
</head>



<style>
.table, th, td {
font-family: arial;
font-size:10px;
height:10px;
}
</style>



<script>

</script>

<!–– 
*****************************************
*****************************************
CALCULOS
*****************************************
*****************************************
––>
<script src="calculos.js"></script>


 

<body>
<p><strong>SUELDO DE PERSONAL DE SEGURIDAD</strong></p>
<table width="400" border="1" cellpadding="0" cellspacing="0">
  <tr>
    <td scope="col">Punto policial:</td>
    <th align="left" scope="col"><input type="text" id="punto" value="434.2676667"></th>
  </tr>
  <tr>
    <td scope="row">Titulo</td>
    <td align="left">

<select name="titulo" id="titulo" value="0">
  <option value="0">SIN SECUNDARIO</option>
  <option value="4">SECUNDARIO (3 años)</option>
  <option value="7.5">SECUNDARIO (5 años)</option>
  <option value="10">UNIVERSITARIO (1 a 3 años)</option>
  <option value="15">UNIVERSITARIO (4 años)</option>
  <option value="25">UNIVERSITARIO (5 años o mas)</option>  
</select>
    
    </td>
  </tr>
  <tr>
    <td scope="row">Cantidad de hijos: </td>
    <td align="left"><input type="number" id="c_hijos" value="0" min="0" max="10" style="width:60px" onkeydown="return false" /></td>
  </tr>
  <tr>
    <td scope="row">Cuota alimentaria</td>
    <td align="left"><input type="number" id="c_cuota" value="0" min="0" max="50" style="width:60px" onkeydown="return false" />
      %, en caso no de tener dejar cero</td>
  </tr>
  <tr>
    <td scope="row">Contrato alquiler</td>
    <td align="left">
    
<select name="vivienda" id="vivienda" value="0" style="width:60px">
  <option value="0">NO</option>
  <option value="1">SI</option>
</select> 
* para bonificacion por vivienda

    
    </td>
  </tr>
</table>

<p>
<button onclick="fnc_ver()">VER CAMBIOS</button>
</p>
<table border="1" cellpadding="0" cellspacing="0">
  <tr align="center">
    <td scope="col">&nbsp;</td>
    <td scope="col">&nbsp;</td>
    <td scope="col">&nbsp;</td>
    <td scope="col">&nbsp;</td>
    <td scope="col">TROPA POLICIAL</td>
    <td colspan="3" scope="col">SUBOFICIALES SUBALTERNOS</td>
    <td colspan="4" scope="col">SUBOFICIALES SUPERIORES</td>
    <td bgcolor="#000000" scope="col">&nbsp;</td>
    <td colspan="4" scope="col">OFICIALES SUBALTERNOS</td>
    <td colspan="2" scope="col">OFICIALES JEFES</td>
    <td colspan="3" scope="col">OFICIALES SUPERIORES</td>
    <td bgcolor="#000000" scope="col">&nbsp;</td>
    <td scope="col">&nbsp;</td>
    <td scope="col">&nbsp;</td>
  </tr>
  <tr bgcolor="#A4A4A4">
    <td scope="col"><strong>DESCRIPCION</strong></td>
    <td scope="col"><strong>% / VALOR</strong></td>
    <td scope="col"><strong>ITEM</strong></td>
    <td scope="col"><strong>REMUNERATIVO</strong></td>
    <td scope="col"><strong>AGENTE</strong></td>
    <td scope="col"><strong>CABO</strong></td>
    <td scope="col"><strong>CABO 1°</strong></td>
    <td scope="col"><strong>SARGENTO</strong></td>
    <td scope="col"><strong>SGTO. 1°</strong></td>
    <td scope="col"><strong>SGTO. AYTE.</strong></td>
    <td scope="col"><strong>SUBOF. PPPAL</strong></td>
    <td scope="col"><strong>SUBOF. MYR</strong></td>
    <td bgcolor="#000000" scope="col"><strong>----</strong></td>
    <td scope="col"><strong>OF. AYUDANTE</strong></td>
    <td scope="col"><strong>OF. SUBINSP.</strong></td>
    <td scope="col"><strong>OF. INSP.</strong></td>
    <td scope="col"><strong>OF. PPAL</strong></td>
    <td scope="col"><strong>SUBCRIO.</strong></td>
    <td scope="col"><strong>COMISARIO</strong></td>
    <td scope="col"><strong>CRIO. INSP.</strong></td>
    <td scope="col"><strong>CRIO. MYR</strong></td>
    <td scope="col"><strong>CRIO. GRAL</strong></td>
    <td bgcolor="#000000" scope="col"><strong>----</strong></td>
    <td scope="col"><strong>SUBJEFE</strong></td>
    <td scope="col"><strong>JEFE POLICIA</strong></td>
  </tr>
  <tr bgcolor="#D6D6D6">
    <td scope="row">Años</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td>&nbsp;</td>
    <td><input type="number" id="1_antiguedad" min="1" max="35" value="1" onKeyDown="return false"></td>
    <td><input type="number" id="2_antiguedad" min="3" max="35" value="3" onkeydown="return false" /></td>
    <td><input type="number" id="3_antiguedad" min="7" max="35" value="7" onkeydown="return false" /></td>
    <td><input type="number" id="4_antiguedad" min="10" max="35" value="10" onkeydown="return false" /></td>
    <td><input type="number" id="5_antiguedad" min="15" max="35" value="15" onkeydown="return false" /></td>
    <td><input type="number" id="6_antiguedad" min="19" max="35" value="19" onkeydown="return false" /></td>
    <td><input type="number" id="7_antiguedad" min="23" max="35" value="23" onkeydown="return false" /></td>
    <td><input type="number" id="8_antiguedad" min="25" max="35" value="25" onkeydown="return false" /></td>
    <td bgcolor="#000000">&nbsp;</td>
    <td><input type="number" id="9_antiguedad" min="2" max="35" value="2" onkeydown="return false" /></td>
    <td><input type="number" id="10_antiguedad" min="5" max="35" value="5" onkeydown="return false" /></td>
    <td><input type="number" id="11_antiguedad" min="8" max="35" value="8" onkeydown="return false" /></td>
    <td><input type="number" id="12_antiguedad" min="12" max="35" value="12" onkeydown="return false" /></td>
    <td><input type="number" id="13_antiguedad" min="17" max="35" value="17" onkeydown="return false" /></td>
    <td><input type="number" id="14_antiguedad" min="22" max="35" value="22" onkeydown="return false" /></td>
    <td><input type="number" id="15_antiguedad" min="27" max="35" value="27" onkeydown="return false" /></td>
    <td><input type="number" id="16_antiguedad" min="30" max="35" value="30" onkeydown="return false" /></td>
    <td><input type="number" id="17_antiguedad" min="33" max="35" value="33" onkeydown="return false" /></td>
    <td bgcolor="#000000">&nbsp;</td>
    <td><input type="number" id="18_antiguedad" min="33" max="35" value="33" onkeydown="return false" /></td>
    <td><input type="number" id="19_antiguedad" min="1" max="35" value="33" onkeydown="return false" /></td>
  </tr>
  <tr>
    <td height="56" scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">1</td>
    <td>ASIG. CARGO/GRADO</td>
    <td><p id="1_1"></p></td>
    <td><p id="2_1"></p></td>
    <td><p id="3_1"></p></td>
    <td><p id="4_1"></p></td>
    <td><p id="5_1"></p></td>
    <td><p id="6_1"></p></td>
    <td><p id="7_1"></p></td>
    <td><p id="8_1"></p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_1"></p></td>
    <td><p id="10_1"></p></td>
    <td><p id="11_1"></p></td>
    <td><p id="12_1"></p></td>
    <td><p id="13_1"></p></td>
    <td><p id="14_1"></p></td>
    <td><p id="15_1"></p></td>
    <td><p id="16_1"></p></td>
    <td><p id="17_1"></p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="18_1"></p></td>
    <td><p id="19_1"></p></td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row"><input type="number" id="p_antiguedad" value="1" min="1" max="150" style="width:60px" onKeyDown="return false" />
    </td>
    <td scope="row">6</td>
    <td>ANTIGUEDAD</td>
    <td><p id="1_6"></p></td>
    <td><p id="2_6"></p></td>
    <td><p id="3_6"></p></td>
    <td><p id="4_6"></p></td>
    <td><p id="5_6"></p></td>
    <td><p id="6_6"></p></td>
    <td><p id="7_6"></p></td>
    <td><p id="8_6"></p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_6"></p></td>
    <td><p id="10_6"></p></td>
    <td><p id="11_6"></p></td>
    <td><p id="12_6"></p></td>
    <td><p id="13_6"></p></td>
    <td><p id="14_6"></p></td>
    <td><p id="15_6"></p></td>
    <td><p id="16_6"></p></td>
    <td><p id="17_6"></p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="18_6"></p></td>
    <td><p id="19_6"></p></td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">7</td>
    <td>TITULO</td>
    <td><p id="1_7"></p></td>
    <td><p id="2_7"></p></td>
    <td><p id="3_7"></p></td>
    <td><p id="4_7"></p></td>
    <td><p id="5_7"></p></td>
    <td><p id="6_7"></p></td>
    <td><p id="7_7"></p></td>
    <td><p id="8_7"></p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_7"></p></td>
    <td><p id="10_7"></p></td>
    <td><p id="11_7"></p></td>
    <td><p id="12_7"></p></td>
    <td><p id="13_7"></p></td>
    <td><p id="14_7"></p></td>
    <td><p id="15_7"></p></td>
    <td><p id="16_7"></p></td>
    <td><p id="17_7"></p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="18_7"></p></td>
    <td><p id="19_7"></p></td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row"><input type="number" id="p_dedicacion" value="20" min="20" max="150" style="width:60px" onkeydown="return false" /></td>
    <td scope="row">8</td>
    <td>DEDICACION EXCLUSIVA</td>
    <td><p id="1_8"></p></td>
    <td><p id="2_8"></p></td>
    <td><p id="3_8"></p></td>
    <td><p id="4_8"></p></td>
    <td><p id="5_8"></p></td>
    <td><p id="6_8"></p></td>
    <td><p id="7_8"></p></td>
    <td><p id="8_8"></p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_8"></p></td>
    <td><p id="10_8"></p></td>
    <td><p id="11_8"></p></td>
    <td><p id="12_8"></p></td>
    <td><p id="13_8"></p></td>
    <td><p id="14_8"></p></td>
    <td><p id="15_8"></p></td>
    <td><p id="16_8"></p></td>
    <td><p id="17_8"></p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="18_8"></p></td>
    <td><p id="19_8"></p></td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row"><input type="number" id="p_vivienda" value="40" min="40" max="250" style="width:60px" onkeydown="return false" /></td>
    <td scope="row">42</td>
    <td>BONIF.VIVIENDA</td>
    <td><p id="1_42"></p></td>
    <td><p id="2_42"></p></td>
    <td><p id="3_42"></p></td>
    <td><p id="4_42"></p></td>
    <td><p id="5_42"></p></td>
    <td><p id="6_42"></p></td>
    <td><p id="7_42"></p></td>
    <td><p id="8_42"></p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_42"></p></td>
    <td><p id="10_42"></p></td>
    <td><p id="11_42"></p></td>
    <td><p id="12_42"></p></td>
    <td><p id="13_42"></p></td>
    <td><p id="14_42"></p></td>
    <td><p id="15_42"></p></td>
    <td><p id="16_42"></p></td>
    <td><p id="17_42"></p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="18_42"></p></td>
    <td><p id="19_42"></p></td>
  </tr>
  <tr>
    <td scope="row">suma fija</td>
    <td scope="row"><p>&nbsp;</p></td>
    <td scope="row">53</td>
    <td>COMPENSAC SEGU REMUNERA</td>
    <td><p id="1_53">7200</p></td>
    <td><p id="2_53">7200</p></td>
    <td><p id="3_53">7200</p></td>
    <td><p id="4_53">7200</p></td>
    <td><p id="5_53">6000</p></td>
    <td><p id="6_53">6000</p></td>
    <td><p id="7_53">6000</p></td>
    <td><p id="8_53">6000</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_53">5300</p></td>
    <td><p id="10_53">5300</p></td>
    <td><p id="11_53">5300</p></td>
    <td><p id="12_53">5300</p></td>
    <td><p id="13_53">5300</p></td>
    <td><p id="14_53">6500</p></td>
    <td><p id="15_53">5000</p></td>
    <td><p id="16_53">5000</p></td>
    <td><p id="17_53">5000</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="18_53">5000</p></td>
    <td><p id="19_53">5000</p></td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row"><input type="number" id="p_riesgo" value="30" min="30" max="150" style="width:60px" onkeydown="return false" /></td>
    <td scope="row">57</td>
    <td>RIESGO PROFESIONAL</td>
    <td><p id="1_57"></p></td>
    <td><p id="2_57"></p></td>
    <td><p id="3_57"></p></td>
    <td><p id="4_57"></p></td>
    <td><p id="5_57"></p></td>
    <td><p id="6_57"></p></td>
    <td><p id="7_57"></p></td>
    <td><p id="8_57"></p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_57"></p></td>
    <td><p id="10_57"></p></td>
    <td><p id="11_57"></p></td>
    <td><p id="12_57"></p></td>
    <td><p id="13_57"></p></td>
    <td><p id="14_57"></p></td>
    <td><p id="15_57"></p></td>
    <td><p id="16_57"></p></td>
    <td><p id="17_57"></p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="18_57"></p></td>
    <td><p id="19_57"></p></td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row"><input type="number" id="p_extension" value="60" min="60" max="250" style="width:60px" onkeydown="return false" /></td>
    <td scope="row">76</td>
    <td>EXTENSION HORARIA</td>
    <td><p id="1_76"></p></td>
    <td><p id="2_76"></p></td>
    <td><p id="3_76"></p></td>
    <td><p id="4_76"></p></td>
    <td><p id="5_76"></p></td>
    <td><p id="6_76"></p></td>
    <td><p id="7_76"></p></td>
    <td><p id="8_76"></p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_76"></p></td>
    <td><p id="10_76"></p></td>
    <td><p id="11_76"></p></td>
    <td><p id="12_76"></p></td>
    <td><p id="13_76"></p></td>
    <td><p id="14_76"></p></td>
    <td><p id="15_76"></p></td>
    <td><p id="16_76"></p></td>
    <td><p id="17_76"></p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="18_76"></p></td>
    <td><p id="19_76"></p></td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">80</td>
    <td>BONIF. POLICIA</td>
    <td><p id="1_80">0</p></td>
    <td><p id="2_80">0</p></td>
    <td><p id="3_80">0</p></td>
    <td><p id="4_80">0</p></td>
    <td><p id="5_80">0</p></td>
    <td><p id="6_80">0</p></td>
    <td><p id="7_80">0</p></td>
    <td><p id="8_80">0</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_80">0</p></td>
    <td><p id="10_80">0</p></td>
    <td><p id="11_80">0</p></td>
    <td><p id="12_80">0</p></td>
    <td><p id="13_80">0</p></td>
    <td><p id="14_80">0</p></td>
    <td><p id="15_80">0</p></td>
    <td><p id="16_80">0</p></td>
    <td><p id="17_80">0</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="18_80">0</p></td>
    <td><p id="19_80">0</p></td>
  </tr>
  <tr>
    <td scope="row">suma fija</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">81</td>
    <td>SUMA REMUNERATIVA POLICIAL</td>
    <td><p id="1_81">
    49000
    </p></td>
    <td><p id="2_81">47000</p></td>
    <td><p id="3_81">45000</p></td>
    <td><p id="4_81">42000</p></td>
    <td><p id="5_81">41998</p></td>
    <td><p id="6_81">41998</p></td>
    <td><p id="7_81">41998</p></td>
    <td><p id="8_81">41998</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_81">0</p></td>
    <td><p id="10_81">35000</p></td>
    <td><p id="11_81">0</p></td>
    <td><p id="12_81">0</p></td>
    <td><p id="13_81">0</p></td>
    <td><p id="14_81">0</p></td>
    <td><p id="15_81">0</p></td>
    <td><p id="16_81">0</p></td>
    <td><p id="17_81">0</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="18_81">0</p></td>
    <td><p id="19_81">0</p></td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row"><input type="number" id="p_fuerza" value="40" min="40" max="250" style="width:60px" onkeydown="return false" /></td>
    <td scope="row">86</td>
    <td>FUERZA DE SEGURIDAD</td>
    <td><p id="1_86">0</p></td>
    <td><p id="2_86">0</p></td>
    <td><p id="3_86">0</p></td>
    <td><p id="4_86">0</p></td>
    <td><p id="5_86">0</p></td>
    <td><p id="6_86">0</p></td>
    <td><p id="7_86">0</p></td>
    <td><p id="8_86">0</p></td>
    <td bgcolor="#000000">&nbsp;</td>
    <td><p id="9_86">0</p></td>
    <td><p id="10_86">0</p></td>
    <td><p id="11_86">0</p></td>
    <td><p id="12_86">0</p></td>
    <td><p id="13_86">0</p></td>
    <td><p id="14_86">0</p></td>
    <td><p id="15_86">0</p></td>
    <td><p id="16_86">0</p></td>
    <td><p id="17_86">0</p></td>
    <td bgcolor="#000000">&nbsp;</td>
    <td><p id="18_86">0</p></td>
    <td><p id="19_86">0</p></td>
  </tr>
  <tr>
    <td height="32" scope="row">suma fija</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">115</td>
    <td>ADIC. REMUN. DCTO. 1700/03</td>
    <td bgcolor="#D6D6D6"><p id="1_115">0</p></td>
    <td bgcolor="#D6D6D6"><p id="2_115">0</p></td>
    <td bgcolor="#D6D6D6"><p id="3_115">0</p></td>
    <td bgcolor="#D6D6D6"><p id="4_115">0</p></td>
    <td bgcolor="#D6D6D6"><p id="5_115">0</p></td>
    <td><p id="6_115">223,36</p></td>
    <td><p id="7_115">223,36</p></td>
    <td><p id="8_115">223,36</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_115">0</p></td>
    <td><p id="10_115">0</p></td>
    <td><p id="11_115">0</p></td>
    <td><p id="12_115">0</p></td>
    <td><p id="13_115">0</p></td>
    <td><p id="14_115">0</p></td>
    <td><p id="15_115">0</p></td>
    <td><p id="16_115">0</p></td>
    <td><p id="17_115">0</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="18_115">0</p></td>
    <td><p id="19_115">0</p></td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row"><input type="number" id="p_zona" value="40" min="40" max="250" style="width:60px" onkeydown="return false" /></td>
    <td scope="row">190</td>
    <td>ZONA DESFAVORABLE</td>
    <td><p id="1_190"></p></td>
    <td><p id="2_190"></p></td>
    <td><p id="3_190"></p></td>
    <td><p id="4_190"></p></td>
    <td><p id="5_190"></p></td>
    <td><p id="6_190"></p></td>
    <td><p id="7_190"></p></td>
    <td><p id="8_190"></p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_190"></p></td>
    <td><p id="10_190"></p></td>
    <td><p id="11_190"></p></td>
    <td><p id="12_190"></p></td>
    <td><p id="13_190"></p></td>
    <td><p id="14_190"></p></td>
    <td><p id="15_190"></p></td>
    <td><p id="16_190"></p></td>
    <td><p id="17_190"></p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="18_190"></p></td>
    <td><p id="19_190"></p></td>
  </tr>
  <tr bgcolor="#D6D6D6" style="display:none">
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td><strong>TOTAL REMUNERATIVOS</strong></td>
    <td><p id="1_tr"></p></td>
    <td><p id="2_tr"></p></td>
    <td><p id="3_tr"></p></td>
    <td><p id="4_tr"></p></td>
    <td><p id="5_tr"></p></td>
    <td><p id="6_tr"></p></td>
    <td><p id="7_tr"></p></td>
    <td><p id="8_tr"></p></td>
    <td bgcolor="#000000"><strong>----</strong></td>
    <td><p id="9_tr"></p></td>
    <td><p id="10_tr"></p></td>
    <td><p id="11_tr"></p></td>
    <td><p id="12_tr"></p></td>
    <td><p id="13_tr"></p></td>
    <td><p id="14_tr"></p></td>
    <td><p id="15_tr"></p></td>
    <td><p id="16_tr"></p></td>
    <td><p id="17_tr"></p></td>
    <td bgcolor="#000000"><strong>----</strong></td>
    <td><p id="18_tr"></p></td>
    <td><p id="19_tr"></p></td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td bgcolor="#000000">----</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td bgcolor="#000000">----</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td scope="row">suma fija</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">310</td>
    <td>INDUMENTARIA</td>
    <td><p id="1_310">2311,5</p></td>
    <td><p id="2_310">2311,5</p></td>
    <td><p id="3_310">2311,5</p></td>
    <td><p id="4_310">2311,5</p></td>
    <td><p id="5_310">2311,5</p></td>
    <td><p id="6_310">2311,5</p></td>
    <td><p id="7_310">2311,5</p></td>
    <td><p id="8_310">2311,5</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_310">2311,5</p></td>
    <td><p id="10_310">2311,5</p></td>
    <td><p id="11_310">2311,5</p></td>
    <td><p id="12_310">2311,5</p></td>
    <td><p id="13_310">2311,5</p></td>
    <td><p id="14_310">2311,5</p></td>
    <td><p id="15_310">2311,5</p></td>
    <td><p id="16_310">2311,5</p></td>
    <td><p id="17_310">2311,5</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="18_310">2311,5</p></td>
    <td><p id="19_310">2311,5</p></td>
  </tr>
  <tr>
    <td scope="row">suma fija</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">312</td>
    <td>PRESENTISMO</td>
    <td><p id="1_312">2010</p></td>
    <td><p id="2_312">2010</p></td>
    <td><p id="3_312">2010</p></td>
    <td><p id="4_312">2010</p></td>
    <td><p id="5_312">2010</p></td>
    <td><p id="6_312">2010</p></td>
    <td><p id="7_312">2010</p></td>
    <td><p id="8_312">2010</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_312">2010</p></td>
    <td><p id="10_312">2010</p></td>
    <td><p id="11_312">2010</p></td>
    <td><p id="12_312">2010</p></td>
    <td><p id="13_312">2010</p></td>
    <td><p id="14_312">2010</p></td>
    <td><p id="15_312">2010</p></td>
    <td><p id="16_312">2010</p></td>
    <td><p id="17_312">2010</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="18_312">2010</p></td>
    <td><p id="19_312">2010</p></td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">366</td>
    <td>SUMA NO REMUNERA SEGURI</td>
    <td><p id="1_366">0</p></td>
    <td><p id="2_366">0</p></td>
    <td><p id="3_366">0</p></td>
    <td><p id="4_366">0</p></td>
    <td><p id="5_366">0</p></td>
    <td><p id="6_366">0</p></td>
    <td><p id="7_366">0</p></td>
    <td><p id="8_366">0</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_366">0</p></td>
    <td><p id="10_366">0</p></td>
    <td><p id="11_366">0</p></td>
    <td><p id="12_366">0</p></td>
    <td><p id="13_366">0</p></td>
    <td><p id="14_366">0</p></td>
    <td><p id="15_366">0</p></td>
    <td><p id="16_366">0</p></td>
    <td><p id="17_366">0</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="18_366">0</p></td>
    <td><p id="19_366">0</p></td>
  </tr>
  <tr>
    <td scope="row">suma fija</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">368</td>
    <td>DECRETO 1142/11</td>
    <td><p id="1_368">1545,4</p></td>
    <td><p id="2_368">1545,4</p></td>
    <td><p id="3_368">1545,4</p></td>
    <td><p id="4_368">1545,4</p></td>
    <td><p id="5_368">1545,4</p></td>
    <td><p id="6_368">1545,4</p></td>
    <td><p id="7_368">1545,4</p></td>
    <td><p id="8_368">1545,4</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_368">1545,4</p></td>
    <td><p id="10_368">1545,4</p></td>
    <td><p id="11_368">1545,4</p></td>
    <td><p id="12_368">1545,4</p></td>
    <td><p id="13_368">1545,4</p></td>
    <td><p id="14_368">1545,4</p></td>
    <td><p id="15_368">1545,4</p></td>
    <td><p id="16_368">1545,4</p></td>
    <td><p id="17_368">1545,4</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="18_368">1545,4</p></td>
    <td><p id="19_368">1545,4</p></td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td bgcolor="#000000">----</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td bgcolor="#000000">----</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row"><input type="number" id="p_hijos" value="1500" min="1500" max="10000" style="width:60px" onkeydown="return false" /></td>
    <td scope="row">201</td>
    <td>HIJOS</td>
    	<td><p id="1_201"></p></td>
    <td><p id="2_201"></p></td>
    <td><p id="3_201"></p></td>
    <td><p id="4_201"></p></td>
    <td><p id="5_201"></p></td>
    <td><p id="6_201"></p></td>
    <td><p id="7_201"></p></td>
    <td><p id="8_201"></p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_201"></p></td>
    <td><p id="10_201"></p></td>
    <td><p id="11_201"></p></td>
    <td><p id="12_201"></p></td>
    <td><p id="13_201"></p></td>
    <td><p id="14_201"></p></td>
    <td><p id="15_201"></p></td>
    <td><p id="16_201"></p></td>
    <td><p id="17_201"></p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="18_201"></p></td>
    <td><p id="19_201"></p></td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">207</td>
    <td>AYUDA ESCOLAR</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td bgcolor="#000000">----</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td bgcolor="#000000">----</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td bgcolor="#000000">----</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td bgcolor="#000000">----</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row"><input type="number" id="p_ipross" value="4" min="4" max="10" style="width:60px" onkeydown="return false" /></td>
    <td scope="row">400</td>
    <td>IPROSS. AP.PERS.</td>
    <td><p id="1_400">0</p></td>
    <td><p id="2_400">0</p></td>
    <td><p id="3_400">0</p></td>
    <td><p id="4_400">0</p></td>
    <td><p id="5_400">0</p></td>
    <td><p id="6_400">0</p></td>
    <td><p id="7_400">0</p></td>
    <td><p id="8_400">0</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_400">0</p></td>
    <td><p id="10_400">0</p></td>
    <td><p id="11_400">0</p></td>
    <td><p id="12_400">0</p></td>
    <td><p id="13_400">0</p></td>
    <td><p id="14_400">0</p></td>
    <td><p id="15_400">0</p></td>
    <td><p id="16_400">0</p></td>
    <td><p id="17_400">0</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="18_400">0</p></td>
    <td><p id="19_400">0</p></td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row"><input type="number" id="p_appersprevpol" value="13" min="13" max="50" style="width:60px" onkeydown="return false" /></td>
    <td scope="row">406</td>
    <td>AP.PERS.PREV.POLICIA</td>
    <td><p id="1_406">0</p></td>
    <td><p id="2_406">0</p></td>
    <td><p id="3_406">0</p></td>
    <td><p id="4_406">0</p></td>
    <td><p id="5_406">0</p></td>
    <td><p id="6_406">0</p></td>
    <td><p id="7_406">0</p></td>
    <td><p id="8_406">0</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_406">0</p></td>
    <td><p id="10_406">0</p></td>
    <td><p id="11_406">0</p></td>
    <td><p id="12_406">0</p></td>
    <td><p id="13_406">0</p></td>
    <td><p id="14_406">0</p></td>
    <td><p id="15_406">0</p></td>
    <td><p id="16_406">0</p></td>
    <td><p id="17_406">0</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="18_406">0</p></td>
    <td><p id="19_406">0</p></td>
  </tr>
  <tr>
    <td scope="row">suma fija</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">407</td>
    <td>UCP DIF.MAY.SUELDO</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td bgcolor="#000000">----</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td bgcolor="#000000">----</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td scope="row">suma fija</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">414</td>
    <td>IAPS SEGURO OBLIG.</td>
    <td><p id="1_414">1246,2</p></td>
    <td><p id="2_414">1246,2</p></td>
    <td><p id="3_414">1246,2</p></td>
    <td><p id="4_414">1246,2</p></td>
    <td><p id="5_414">1246,2</p></td>
    <td><p id="6_414">1246,2</p></td>
    <td><p id="7_414">1246,2</p></td>
    <td><p id="8_414">1246,2</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_414">1246,2</p></td>
    <td><p id="10_414">1246,2</p></td>
    <td><p id="11_414">1246,2</p></td>
    <td><p id="12_414">1246,2</p></td>
    <td><p id="13_414">1246,2</p></td>
    <td><p id="14_414">1246,2</p></td>
    <td><p id="15_414">1246,2</p></td>
    <td><p id="16_414">1246,2</p></td>
    <td><p id="17_414">1246,2</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="18_414">1246,2</p></td>
    <td><p id="19_414">1246,2</p></td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">424</td>
    <td>CTA.ALIMENTARIA 424</td>
    <td><p id="1_424">0</p></td>
    <td><p id="2_424">0</p></td>
    <td><p id="3_424">0</p></td>
    <td><p id="4_424">0</p></td>
    <td><p id="5_424">0</p></td>
    <td><p id="6_424">0</p></td>
    <td><p id="7_424">0</p></td>
    <td><p id="8_424">0</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_424">0</p></td>
    <td><p id="10_424">0</p></td>
    <td><p id="11_424">0</p></td>
    <td><p id="12_424">0</p></td>
    <td><p id="13_424">0</p></td>
    <td><p id="14_424">0</p></td>
    <td><p id="15_424">0</p></td>
    <td><p id="16_424">0</p></td>
    <td><p id="17_424">0</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="18_424">0</p></td>
    <td><p id="19_424">0</p></td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td bgcolor="#000000">----</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td bgcolor="#000000">----</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td>TOTAL CON APORTES</td>
    <td><p id="1_ta">0</p></td>
    <td><p id="2_ta">0</p></td>
    <td><p id="3_ta">0</p></td>
    <td><p id="4_ta">0</p></td>
    <td><p id="5_ta">0</p></td>
    <td><p id="6_ta">0</p></td>
    <td><p id="7_ta">0</p></td>
    <td><p id="8_ta">0</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_ta">0</p></td>
    <td><p id="10_ta">0</p></td>
    <td><p id="11_ta">0</p></td>
    <td><p id="12_ta">0</p></td>
    <td><p id="13_ta">0</p></td>
    <td><p id="14_ta">0</p></td>
    <td><p id="15_ta">0</p></td>
    <td><p id="16_ta">0</p></td>
    <td><p id="17_ta">0</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="18_ta">0</p></td>
    <td><p id="19_ta">0</p></td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td>TOTAL SIN APORTES</td>
    <td><p id="1_tsa">0</p></td>
    <td><p id="2_tsa">0</p></td>
    <td><p id="3_tsa">0</p></td>
    <td><p id="4_tsa">0</p></td>
    <td><p id="5_tsa">0</p></td>
    <td><p id="6_tsa">0</p></td>
    <td><p id="7_tsa">0</p></td>
    <td><p id="8_tsa">0</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_tsa">0</p></td>
    <td><p id="10_tsa">0</p></td>
    <td><p id="11_tsa">0</p></td>
    <td><p id="12_tsa">0</p></td>
    <td><p id="13_tsa">0</p></td>
    <td><p id="14_tsa">0</p></td>
    <td><p id="15_tsa">0</p></td>
    <td><p id="16_tsa">0</p></td>
    <td><p id="17_tsa">0</p></td>
    <td bgcolor="#000000">----</td>
	<td><p id="18_tsa">0</p></td>
	<td><p id="19_tsa">0</p></td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td>SALARIO FAMILIAR</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td bgcolor="#000000">----</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td bgcolor="#000000">----</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td>DESCUENTOS</td>
    <td><p id="1_des">0</p></td>
    <td><p id="2_des">0</p></td>
    <td><p id="3_des">0</p></td>
    <td><p id="4_des">0</p></td>
    <td><p id="5_des">0</p></td>
    <td><p id="6_des">0</p></td>
    <td><p id="7_des">0</p></td>
    <td><p id="8_des">0</p></td>
    <td bgcolor="#000000">----</td>
    <td><p id="9_des">0</p></td>
    <td><p id="10_des">0</p></td>
    <td><p id="11_des">0</p></td>
    <td><p id="12_des">0</p></td>
    <td><p id="13_des">0</p></td>
    <td><p id="14_des">0</p></td>
    <td><p id="15_des">0</p></td>
    <td><p id="16_des">0</p></td>
    <td><p id="17_des">0</p></td>
    <td bgcolor="#000000">----</td>
	<td><p id="18_des">0</p></td>
	<td><p id="19_des">0</p></td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td bgcolor="#000000">----</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td bgcolor="#000000">----</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr bgcolor="#66FF66">
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td><strong>NETO A COBRAR</strong></td>
    <td><p id="1_neto"><strong>0</strong></p></td>
    <td><p id="2_neto"><strong>0</strong></p></td>
    <td><p id="3_neto"><strong>0</strong></p></td>
    <td><p id="4_neto"><strong>0</strong></p></td>
    <td><p id="5_neto"><strong>0</strong></p></td>
    <td><p id="6_neto"><strong>0</strong></p></td>
    <td><p id="7_neto"><strong>0</strong></p></td>
    <td><p id="8_neto"><strong>0</strong></p></td>
    <td><strong>----</strong></td>
    <td><p id="9_neto"><strong>0</strong></p></td>
    <td><p id="10_neto"><strong>0</strong></p></td>
    <td><p id="11_neto"><strong>0</strong></p></td>
    <td><p id="12_neto"><strong>0</strong></p></td>
    <td><p id="13_neto"><strong>0</strong></p></td>
    <td><p id="14_neto"><strong>0</strong></p></td>
    <td><p id="15_neto"><strong>0</strong></p></td>
    <td><p id="16_neto"><strong>0</strong></p></td>
    <td><p id="17_neto"><strong>0</strong></p></td>
    <td><strong>----</strong></td>
    <td><p id="18_neto"><strong>0</strong></p></td>
    <td><p id="19_neto"><strong>0</strong></p></td>
  </tr>
  <tr>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td scope="row">&nbsp;</td>
    <td>VALES ALIMENTARIOS</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td bgcolor="#000000">----</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td bgcolor="#000000">----</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
</table>







</body>
</html>
