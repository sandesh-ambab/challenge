// First Method
const sum = (...arg) => {
		let total = 0;
		for(const a of arg){
			total += a;
		}
		return total;
		
	}
console.log(sum(1,2,3,4));

// Second method 

const sum = (...args) => {
	let x = 0;
	for(let i = 0; i < args.length; i++){
		x = x + args[i];
	}
	return x;
}
console.log(sum(1,2,3,5));