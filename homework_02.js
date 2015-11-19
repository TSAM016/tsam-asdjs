//Esercizio 1. Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un
// valore negativo.
function sumAll(array){
    somma = 0;

    array.every(function(n){
                    if(n % 2 == 0){
                        somma += n;
                        return true;
                    }
                    else{
                        return false;
                    }
                })
    return somma;
}

//Per Tiziano
function ex_1_F(array){
    return sumAll(array);
}
//Esercizio 2. Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari

function sumOdd(n){
    function buildArray(n){
            array = [];
    
            for(i = 0; i < n; i++){
                array[i] = i;
            }

        return array;
    }
    newArray = buildArray(n).map(function(x){ return x*2+1});
    return newArray.reduce(function(acc,x){  return x + acc},0);
}



//per Tiziano
function ex_2_F(n){
    return sumOdd(n);
}


//Esercizio 3. Dato un array di 10 elementi, calcolarne la media

function average(myarray){
    return myarray.reduce(function(acc, x){ 
        return x + acc},0)/myarray.length;
    
}

//Per Tiziano

function ex_3_F(myarray){
    return average(myarray);
}

/*Esercizio 4. Dato un intervallo [a, b] con a e b due interi positivi, 
restituire la somma di tutti i numeri compresi all’interno dell’intervallo, 
estremi inclusi. Nel caso che b fosse minore di a, calcolare la somma nell’intervallo [b,a]*/


function sumIntervall(a,b){
    if(b < a){
        c = b;
        b = a;
        a = c;
    }
   function generateArray(a,b){
        array = [];
        cont = 0;
        
        for(i=a; i <= b; i++){
            array[cont] = i;
            cont++;
        }
        return array;
    }
    return generateArray(a,b).reduce(function(acc, x){ 
        return x + acc;});
}

//per Tiziano
function ex_4_F(a,b){
    return sumIntervall(a,b);
}

//Esercizio 5. Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, 
//tramite l’utilizzo del solo operatore somma.

function mul(a,b){
    function generateArray(a, b){
        array = [];

        for(i = 0; i < b; i++){
        array[i] = a;
        }
        return array;
    }
    return generateArray(a,b).reduce(function(acc, x){return x + acc},0)

}
//Per Tiziano
function ex_5_F(a,b){
    return mul(a,b);
}

// Esercizio 7. Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero,
// tramite l’utilizzo dei soli operatori somma,
// sottrazione e della funzione mult.

function powe(a,b){
    function generateArray(a, b){
        array = [];
        
        for(i = 0; i < b-1; i++){
        array[i] = a;
        }
        return array;
    }
    return generateArray(a,b).reduce(function(acc,x){ 
        return mul(a,acc)}, a);
}

function ex_7_F(a,b){
    return powe(a,b);
}


//Esercizio 11. Data una lista di interi A, si riordini gli elementi della 
//lista in modo tale che tutti gli elementi dispari precedano nello stesso ordine tutti gli elementi pari.

function rearrange(array){
    pair = array.filter(function (x){ return x % 2 == 0})
    odd = array.filter(function (x){ return x % 2 != 0})
    return odd.concat(pair);
}
 //per Tiziano

 function ex_11_F(array){
    return rearrange(array);
 }

 //////////////////////////////////////////