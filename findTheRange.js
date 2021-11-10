/*using Javascript, print the smallest
  and largest numbers in the array*/

const array1 = [1, 4, 11, 2, 37, -4];

//sort array by ascending order
array1.sort(function(a, b){return a-b});

//console.log(array1);

//first item in array is smallest, print it
console.log(array1[0]);
//console.log(array1.length);

//loop to last item in array and print
for(var i = 0; i < array1.length + 1; i++){
    if(i === array1.length){
	console.log(array1[i - 1]);
    }
}
