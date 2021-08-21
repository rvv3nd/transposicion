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
    var matrix = getMatrix(clave,textoPlano)
    var indices = getIndices(clave)
    // console.log(clave)
    // console.log(indices)
    console.log(matrix)
    var idxMenor 
    var textoCodificado = ""
    for(let i=0;i<clave.length;i++){
        idxMenor = getIndiceMenor(indices)
        indices[idxMenor] = 257
        for(let j=0;j<rows;j++){
            textoCodificado += matrix[j][idxMenor]
        }
    }
    return textoCodificado
}

function getMatrixCodificada(clave,textoCodificado){
    const rows = Math.ceil(textoCodificado.length/clave.length)
    const columns = clave.length
    var resultado = new Array(rows)
    var k = 0
    var i = 0
    for (i=0; i< resultado.length;i++){
        resultado[i] = new Array(columns)
    }
    i=0
    while(i<rows){
        for(let j=0;j<columns;j++){
            resultado[i][j] = textoCodificado[k++]
            resultado[i+1][j] = textoCodificado[k++] 
        }
        i += 2
    }
    return resultado
}

function decodifica(clave,textoCodificado){
    const rows = Math.ceil(textoCodificado.length/clave.length)
    const claveOrdenada = clave.split("").sort()
    var matrix = getMatrixCodificada(claveOrdenada,textoCodificado)
    var textoDecodificado = ""
    var temp =
    console.log(matrix)
    for (let i=0;i<rows;i++){
        for (letra of clave){
            temp = matrix[i][claveOrdenada.indexOf(letra)]
            if(temp!="_"){
                textoDecodificado += temp 
            }
        }
    }
    return textoDecodificado
}


// const columns = clave.length
// const rows = Math.round(textoCodificado.length/clave.length)
// var matrix = new Array(rows)
// for (let i=0; i< matrix.length;i++){
//     matrix[i] = new Array(columns)
// }
// var resultado = ""
// let j = 0
// textoCodificado = textoCodificado.split("")
// for(let i=0;i<columns;i++){
//     matrix[j][i] = textoCodificado.shift()
//     matrix[j++][i] = textoCodificado.shift()
// }
// console.log(matrix)