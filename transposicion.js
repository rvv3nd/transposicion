function verificaClave(clave){

    /*Funcion que verifica la validez de una clave
    la validez consiste en que la clave tenga 
    una unica vez cada letra o caracter */

    var aux = [] 
    for(letra of clave){
        if(aux.includes(letra)) return false
        aux.push(letra)
    }
    return true
}

function undraw(){
    OutputMatriz.value = ""
    OutputResultado.value = ""
}

function draw(matriz,rows,columns,key,array){
    /* Función que crea la matriz en el html */
    undraw()
    const matrizOutput = document.getElementById("OutputMatriz")
    var tabla = document.createElement("table")
    var tblBody = document.createElement("tbody")

    let hrK = document.createElement("tr");

        for (var j = 0; j < key.length; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(key[j]);
            celda.appendChild(textoCelda);
            hrK.appendChild(celda);
        }
    tblBody.appendChild(hrK);

    let hrI = document.createElement("tr");

        for (var j = 0; j < array.length; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(array[j]);
            celda.appendChild(textoCelda);
            hrI.appendChild(celda);
        }
    tblBody.appendChild(hrI);



    for (var i = 0; i < rows; i++) {
        // Crea las hileras de la tabla
        let hilera = document.createElement("tr");

        for (var j = 0; j < columns; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(matriz[i][j]);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    }
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    matrizOutput.appendChild(tabla);
}


function getMatrix(clave,textoPlano){
    /*Función que dada la clave y el texto plano
    obtienen una matriz resultado que tiene el texto plano
    ordenado conforme a la clave y, en caso de existir,
    llenando los espacios en blanco con guiones bajos */

    const rows = Math.ceil(textoPlano.length/clave.length)
    const columns = clave.length
    var resultado = new Array(rows)
    var k = 0
    for (let i=0; i< resultado.length;i++){
        resultado[i] = new Array(columns)
    }
    for(let i=0;i<rows;i++){
        for(let j=0;j<columns;j++){
            if(k<textoPlano.length){
                resultado[i][j] = textoPlano[k++]
            }else{
                resultado[i][j] = "_"
            }
        }
    }
    return resultado
}

function getIndiceMenor(array){
    var i = 0
    var menor = i
    for (i=1;i<array.length;i++){
        if(array[i]<array[menor]){
            menor = i
        }
    }
    return menor
}

function getIndices(clave){
    /* Función que resibe la clave y busca cada elemento de esta 
    en el array de caracteres ascci y los devuelve */
    const ascii = [
        "␀","␁","␂", "␃","␄",
        "␅","␆", "␇", "␈", "␉",
        "␊", "␋",  "␌",  "␍", "␎",
        "␏", "␐", "␑", "␒","␓",    
        "␔","␕", "␖", "␗","␘",
        "␙", "␚", "␛", "␜", "␝",
        "␞", "␟",  "␡", 
        " ",  "!",   "\"", "#",    
        "$",  "%",   "&",   "'",  "(",    
        ")",  "*",   "+",   ",",  "-",    
        ".",  "/",   "0",   "1",  "2",    
        "3",  "4",   "5",   "6",  "7",    
        "8",  "9",   ":",   ";",  "<",    
        "=",  ">",   "?",   "@",  "A",    
        "B",  "C",   "D",   "E",  "F",    
        "G",  "H",   "I",   "J",  "K",    
        "L",  "M",   "N",   "O",  "P",    
        "Q",  "R",   "S",   "T",  "U",    
        "V",  "W",   "X",   "Y",  "Z",    
        "[",  "\\",  "]",   "^",  "_",    
        "`",  "a",   "b",   "c",  "d",    
        "e",  "f",   "g",   "h",  "i",    
        "j",  "k",   "l",   "m",  "n",    
        "o",  "p",   "q",   "r",  "s",    
        "t",  "u",   "v",   "w",  "x",    
        "y",  "z",   "{",   "|",  "}",    
        "~",         "Ç",   "ü",  "é",
        "â",  "ä",   "à",   "å",  "ç",
        "ê",  "ë",   "è",   "ï",  "î",
        "ì",  "Ä",   "Å",   "É",  "æ",
        "Æ",  "ô",   "ö",   "ò",  "û",
        "ù",  "ÿ",   "Ö",   "Ü",  "ø",
        "£",  "Ø",   "×",   "ƒ",  "á",    
        "í",  "ó",   "ú",   "ñ",  "Ñ",   
        "ª",  "º",   "¿",   "®",  "¬",    
        "½",  "¼",   "¡",   "«",  "»",    
        "░",  "▒",   "▓",   "│",  "┤",
        "Á",  "Â",   "À",   "©",  "╣",
        "║",  "╗",   "╝",   "¢",  "¥",
        "┐",  "└",   "┴",   "┬",  "├",    
        "─",  "┼",   "ã",   "Ã",  "╚",
        "╔",  "╩",   "╦",   "╠",  "═",
        "╬",  "¤",   "ð",   "Ð",  "Ê",
        "Ë",  "È",   "ı",   "Í",  "Î",
        "Ï",  "┘",   "┌",   "█",  "▄",
        "¦",  "Ì",   "▀",   "Ó",  "ß",
        "Ô",  "Ò",   "õ",   "Õ",  "µ",
        "þ",  "Þ",   "Ú",   "Û",  "Ù",
        "ý",  "Ý",   "¯",   "´",  "≡",
        "±",  "‗",   "¾",   "¶",  "§",
        "÷",  "¸",   "°",   "¨",  "·",
        "¹",  "³",   "²",   "■",  " "
    ]
    var resultado = []
    for (letra of clave){
        resultado.push(ascii.indexOf(letra))
    }
    return resultado
}

function codifica(clave,textoPlano){
    const rows = Math.ceil(textoPlano.length/clave.length)
    const columns = clave.length
    var matrix = getMatrix(clave,textoPlano)
    var indices = getIndices(clave)
    // console.log(clave)
    // console.log(indices)
    console.log(matrix)
    draw(matrix,rows,columns,clave,indices)
    var idxMenor 
    var textoCodificado = ""
    for(let i=0;i<clave.length;i++){
        idxMenor = getIndiceMenor(indices)
        indices[idxMenor] = 257
        for(let j=0;j<rows;j++){
            textoCodificado += matrix[j][idxMenor]
        }
    }
    console.log(textoCodificado)
    return textoCodificado
}

function getMatrixCodificada(clave,textoCodificado){
    const rows = Math.ceil(textoCodificado.length/clave.length)
    const columns = clave.length
    //se crea la matriz
    var mtx = []
    for(let x=0;x<rows;x++){
        mtx[x] = []
        for(let y=0;y<columns;y++){
            mtx[x][y] = ""
        }
    }

    const claveOrdenada = clave.split("").sort()
    textoCodificado = textoCodificado.split("")
    
    for(element of clave){
        var idx = clave.indexOf(claveOrdenada.shift())
        for(let i=0;i<rows;i++){
            mtx[i][idx] = textoCodificado.shift()
        }
    }

    return mtx

}

function decodifica(clave,textoCodificado){
    const rows = Math.ceil(textoCodificado.length/clave.length)
    const indices = getIndices(clave)
    const matriz = getMatrixCodificada(clave,textoCodificado)
    var textoDecodificado = ""
    draw(matriz,rows,clave.length,clave,indices)
    for(let i=0;i<rows;i++){
        for(let j=0;j<clave.length;j++){
            if(matriz[i][j]!='_') {textoDecodificado += matriz[i][j]}
        }
    }
    return textoDecodificado
}


function getCodifica(){
    const clave = document.getElementById("InputKey").value;
    undraw()
    if(verificaClave(clave)){
        const textoPlano = document.getElementById("InputTxtPlano").value
        var resultado = codifica(clave,textoPlano)
        resultado = resultado.split("")
        for (let i=0; i<resultado.length;i++){
            if (resultado[i] === " "){
                resultado[i] = String.fromCharCode(160)
            }
        }
        for (let i=0; i<resultado.length;i++){
            OutputResultado.value += resultado[i]
        }

    }else{
        alert("Tu clave no debe contener caracteres repetidos")
    }
}

function getDecodifica(){
    undraw()
    const clave = document.getElementById("InputKey").value;
    if(verificaClave(clave)){
        const textoCodificado = document.getElementById("InputTxtCodificado").value
        const resultado = decodifica(clave,textoCodificado)

        OutputResultado.value = resultado
    }else{
        alert("Tu clave no debe contener caracteres repetidos")
    }
}