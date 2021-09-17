// First Method
function sum(...arg){
		let total = 0;
		for(const a of arg){
			total += a;
		}
		console.log(total);
		
	}
	sum(1,2,3,4);

// Second method 

function sum(){
	let x = 0;
	for(var i=0;i<arguments.length;i++){
		x = x+arguments[i];
	}
	return x;
}
console.log(sum(1,2,3,5));