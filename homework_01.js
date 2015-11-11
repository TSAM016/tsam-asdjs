//Esercizio 1 Iterativo
array1 = [1,2,3,4,5,6,7,8,-9,10];

function sumTillNeg(myarray){
    somma = 0;
    if (myarray.length == 0){
        return 0;
    } else {
        for(i=0;i < myarray.length;i++){
            if(myarray[i] >= 0){
                somma += myarray[i];
            } else {
                return somma;
            }
        }
    }
    return somma;
}

function ex_1_I(myarray){
    return sumTillNeg(myarray);
}
console.log(ex_1_I(array1));

//Esercizio 1 Ricorsivo
function sumTillNegR(myarray){
    if (myarray.length == 0){
        return 0;
    } else {
        if(myarray[0] >= 0){
            return myarray[0] + sumTillNegR(myarray.slice(1));
        } else {
            return 0;
        }
    }
}

function ex_1_R(myarray){
    return sumTillNegR(myarray);
}
console.log(ex_1_R(array1));


//Esercizio 2 Iterativo

function sumOdd(n){
    sumodd = 0;
    if(n < 0){
        return 0;
    } else {
        for(i = 0;i <= n;i++){
            if(i % 2 != 0){
                sumodd += i;
            };
        }
        return sumodd;
    }
}

function ex_2_I(n){
    return sumOdd(n);
}
console.log(ex_2_I(10));

//Esercizio 2 Ricorsivo
function sumOddR(n){
    if (n < 0){
        return 0;
    } else {
          if(n%2 !=0){
            return n + sumOddR(n - 1);
        } else {
            return 0 + sumOddR(n - 1);
            }
    }
}

function ex_2_R(n){
    return sumOddR(n);
}
console.log(ex_2_R(10));


//Esercizio 3 Iterativo (l'array di riferimento è
//quello dell'Esercizio 1)

function average(array){
    somm = 0;
    if(array.length == 0){
        return 0;
    } else {
        for(i = 0;i < array.length;i++){
            somm += array[i];
        }
    return somm / array.length;
    }
}

function ex_3_I(array){
    return average(array);
}
console.log(ex_3_I(array1));

//Esercizio 3 Ricorsivo (l'array di riferimento è
//quello dell'Esercizio 1)
function sumAll(array){
    if(array.length == 0){
        return 0;
    } else {
        return array[0] + sumAll(array.slice(1))
    }
}

function ex_3_R(array){
    return sumAll(array) / array.length;
}
console.log(ex_3_R(array1));


//Esercizio 4 Iterativo

function sumInterval(a,b){
    sumint = 0;
    sumint2 = 0;
    if(a < b){
        for(;b >= a;b--){
            sumint += b;
            }
    } else {
        for(;a >= b;a--){
            sumint2 += a;
            }
    }
    return sumint;
    return sumint2;
}
function ex_4_I(a,b){
    return sumInterval(a,b);
}
console.log(ex_4_I(3,5));
console.log(ex_4_I(5,3));

//Esercizio 4 Ricorsivo
function sumIntervalR(a,b){
    if(a < b){
        if(a == b){
            return a;
        } else
            return b + sumIntervalR(a,(b-1));
    } else {
        if (a == b){
            return b;
        } else {
            return a + sumIntervalR((a-1),b);
        }
    }
}
function ex_4_R(a,b){
    return sumIntervalR(a,b);
}
console.log(ex_4_R(3,5));
console.log(ex_4_R(5,3));


//Esercizio 5 Iterativo

function mult(a,b){
    summ = 0;
    for(;b > 0;b--){
        summ += a;
    }
    return summ;
}
function ex_5_I(a,b){
    return mult(a,b);
}
console.log(mult(2,3));

//Esercizio 5 Ricorsivo
function multR(a,b){
    if(a >= 0 && b > 0){
        return a + multR(a,(b - 1));
    } else {
        return 0;
    }
}
function ex_5_R(a,b){
    return multR(a,b);
}
console.log(ex_5_R(2,3));


//Esercizio 6 Iterativo

function div(a,b){
    q = 0;
    r = 0;
    while(a - b >= 0){
        a -= b;
        q++;
    }
return "Quoziente: "+ q +" Resto: "+ a;
}
function ex_6_I(a,b){
    return div(a,b);
}
console.log(ex_6_I(5,3));

//Esercizio 6 Ricorsivo
function divR(a,b){
    if(a >= b){
        return parseInt(1 + divR((a - b),b));
    } else {
        console.log("Resto: " + a);
        return 0;
    }
}
function ex_6_R(a,b){
    return divR(a,b);
}
console.log(ex_6_R(5,3));


//Esercizio 7 Iterativo
function pow(a,b){
    potenza=0;
    for(b;b>1;b--) potenza+=multR(a,a);
    return potenza;
}
function ex_7_I(a,b){
    return pow(a,b);
}
console.log(ex_7_I(2,3));

//Esercizio 7 Ricorsivo
function powR(a,b){
    if(b == 0){
        return 1;
    } else {
        return (multR(a,powR(a,(b - 1))));
    }
}
function ex_7_R(a,b){
    return powR(a,b);
}
console.log(ex_7_R(2,3));


//Esercizio 8 Iterativo
function matriceI(n){
   a=[];
   cont=0;
   for(x=0;x<n;x++){
       a[x]=[];
       for (y=0;y<n;y++){
           a[x][y]=cont;
           cont++;
       }
   }
   return a;
}
function ex_8_I(n1){
    return matriceI(n1);
}
console.log(ex_8_I(5));

//Esercizio 8 Ricorsivo
function matriceR(x,n,contatore){
    if(n>1){
        if(n%x!=0){
         return contatore + "," + matriceR(x,n-1,contatore+1);
        } else {
            return "\n" + contatore + "," + matriceR(x,n-1,contatore+1);
        }
    } else {
        return contatore;
        }

}
function ex_8_R(n){
    return matriceR(n,n*n,1);
}
console.log(ex_8_R(5));


//Esercizio 9 Iterativo
A = [2,5,8];
function inverti(array){
    b = [];
    for(i=0;i < array.length;i++){
        b[i]= array[(array.length -1) - i];
        }
    return b
}
function ex_9_I(array){
    return inverti(array);
}
console.log(ex_9_I(A));

//Esercizio 9 Ricorsivo
function invertiR(myarray){
    if(myarray.length>1){
        return myarray[myarray.length-1] + "," + invertiR(myarray.slice(0,myarray.length-1));
    } else {
        return  myarray[0];
    }
}
function ex_9_R(array){
    return invertiR(array);
}
console.log(ex_9_R(A));


//Esercizio 10 Iterativo
function replicate(a,b){
   arrayb=[];
   for (i=0;i<b;i++)
       arrayb[i]=a;
   return arrayb;
}
function ex_10_I(a,b){
    return replicate(a,b);
}
console.log(ex_10_I(3,4));

//Esercizio 10 Ricorsivo
array = [];

function replicateR(a,n){
    cont = 0;
    if(n > 0){
        array[cont] = a;
        cont++;
        replicateR(a, n-1);
    }
    return array;
}
function ex_10_R(a,n){
    return replicateR(a,n);
}
console.log(ex_10_R(3,4));


//Esercizio 11 Iterativo
function riordina(myarray){
    pari = [];
    dispari = [];
    for(i=0;i < myarray.length;i++){
        if(myarray[i] % 2 == 0){
         pari[pari.length] = myarray[i];
        } else { 
            dispari[dispari.length] = myarray[i];
        }
    }
    return dispari.concat(pari);
}
function ex_11_I(myarray){
    return riordina(myarray);
}
console.log(ex_11_I([2,5,1,8]));


//Esercizio 11 Ricorsivo
function riordinaR(a){
    var nOdds = 0;
    for(var i=0;i<a.length;i++){
        if(a[i]%2!=0)
            nOdds++;
    }
    return orderOdds(a,nOdds,new Array(a.length),0);
}
function orderOdds(a,freePosForEven,b,i){
    if(a.length==0)
        return b;
    if(a[0]%2!=0){
        b[i]=a.shift();
        return orderOdds(a,freePosForEven,b,++i);    
    }  
    else{
        b[freePosForEven]=a.shift();
        return orderOdds(a,freePosForEven+1,b,i);
    }
}
function ex_11_R(a){
    return riordinaR(a);
}
console.log(ex_11_R([2,5,1,8]));