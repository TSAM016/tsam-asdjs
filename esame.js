function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}



/* 
 * START Esercizio Stack 
 */


 var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

 function evaluateExpr(callback) {
 	return callback(_0xd10d[0]);
 }

/* END Esercizio Stack */


var A = initialArray();


 																				
/*Esercizio Ricorsione (15 punti)																				 
Dato l’array A creato dalla funzione initialArray() sviluppare un algoritmo ricorsivo non di coda in javascript che restituisca il numero di elementi presenti in A che corrispondono 	 
al valore 5070.																																												 
*/

function search(array){ 
	if(array.length == 0){ 
		return 0; 
	} else { 
		if(array[0] == 5070){ 
			return 1 + search(array.slice(1)); 
		} else {
			return 0 + search(array.slice(1));
		}
	} 
}

/* 																				
Esercizio filter/map/reduce (15 punti)

Dato l’array A creato dalla funzione initialArray() sviluppare un algoritmo in javascript che restituisca la radice quadrata della somma dei quadrati dei soli elementi positivi (>= 0) pari.
Si implementi l’agoritmo utilizzando almeno una volta tutti i seguenti metodi dell’oggetto Array: filter, map e reduce.																		 																								 
*/

function sqrtSumPowP(array){
	return Math.sqrt(
		array.filter(x => x % 2 == 0 && x>=0)
		.map(a => a * a)
		.reduce((tot, x) => tot + x, 0));
}


/* 																				
Tree (15 punti)

Si implementi un albero binario di ricerca in javascript e si inseriscano gli elementi contenuti nell’array A[0..n-1], ottenuto da initialArray(), nell’ordine dall’indice 0 all’indice n-1.
Si calcoli, mediante l’implementazione di un algoritmo ricorsivo, il valore massimo all’interno dell’albero.																	 																								 
*/

function Node(value, leftNode, rightNode) {
	this.item = value;
	this.left = leftNode;
	this.right = rightNode;
}

function BST() {
	this.root = null;
}

BST.prototype.addNode = function(currentNode, e) {
	if (e < currentNode.item) {
		if (currentNode.left == null) {
			currentNode.left = new Node(e, null, null);
		} else {
			this.addNode(currentNode.left, e);
		}
	} else {
		if (currentNode.right == null) {
			currentNode.right = new Node(e, null, null);
		} else {
			this.addNode(currentNode.right, e);
		}
	}
}


BST.prototype.add = function(e) {
	if (this.root == null) {
		this.root = new Node(e, null, null);
	} else {
		this.addNode(this.root, e);
	}

}


var tree = new BST();

for (i = 0; i < (A.length-1); i++) {
	tree.add(A[i]);
}


function find () {
	return this.maxvalue(tree.root);
}

function maxvalue (currentNode) {
	if (currentNode.right == null) {
		return currentNode.item;
	} else {
		return maxvalue(currentNode.right);
	}
}

/*
Esercizio Stack (25 punti)

Si implementi una funzione in javascript che implementi l’algoritmo che valuta il valore di un’espressione “fully parentherized”, ovvero un’espressione in cui ogni singola operazione 
è all’interno di parentesi. 

Esempio di chiamata:
evaluateExpression(“( ( 2 + 3) * 4 )”).

Si noti che ogni elemento dell’espressione è seguito da uno spazio.
*/

function Stack(){
    this.array = [];
}

Stack.prototype.push = function (e){this.array.push(e);}
Stack.prototype.pop = function (){return this.array.pop();}
Stack.prototype.peek = function (){return this.array[this.array.length -1];}
Stack.prototype.isEmpty = function (){return this.array.length == 0;}

function calcola(b){
    var v = new Stack();
    var s = new Stack();
    var operator = 0;
    var newArray = b.split(" ");
    for(var i = 0; i < newArray.length; i++){
        switch(newArray[i]){
            case '(':
                s.push('(');
                break;
            case '+':
                s.push('+');
                break;
            case '-':
                s.push('-');
                break;
            case '*':
                s.push('*');
                break;
            case '/':
                s.push('/');
                break;
            case ')':
                var one = parseInt(v.pop());
                var two = parseInt(v.pop());
                var operator = s.pop();
                s.pop()
                switch(operator){
                    case '+':
                        v.push(two + one);
                    break;
                    case '-':
                       v.push(two - one);
                     break;
                     case '*':
                        v.push(two * one);
                    break;
                    case '/':
                        v.push(two / one);
                    break;
                }
                break;
            default:
                v.push(newArray[i]);
            break;
        }
    }
    return v.pop();
}

console.log(search(A));
console.log(sqrtSumPowP(A));
console.log(find(A));
console.log(evaluateExpr(calcola));
