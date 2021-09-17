let users = [];

class Person {

	constructor(firstname,lastname,mobNumber){
		this.firstname=firstname;
		this.lastname=lastname;
		this.mobNumber=mobNumber;
	}
	fullName = (firstname, lastname) => { console.log (firstname,lastname) }
}
	
	
const createPerson = (firstname,lastname,mobNumber) => {

	return new Promise((resolve, reject) => {
	setTimeout(()=> {
		if(users.find(number=>number.mobNumber === mobNumber)){
			reject("Phone number is already exist");
		}
		else{
			obj = new Person(firstname,lastname,mobNumber);
			users.push(obj);
			resolve(obj.fullName(firstname, lastname));
	}
	}, 2000)
})
}
const main = () => {

	createPerson("sandesh","chavan",9421178545)
	.then(() => createPerson("aniket","patel",131453123))
	.catch((error) => console.log(error))

	.then(() => createPerson("sagar","gupta",9421178545))
	.catch((error) => console.log(error))
		
	.then(() => createPerson("akash","sahani",12845645))
	.catch((error) => console.log(error))

	.then(() => createPerson("akshay","pawar",5234533553))
	.catch((error) => console.log(error))

	.then(() => createPerson("akshay","rane",1345345345))
	.catch((error) => console.log(error))

	.then(() => createPerson("siddhesh","gharat",9421178545))
	.catch((error) => console.log(error))

	.then(() => createPerson("kiran","chavan",15454554))
	.catch((error) => console.log(error))

	.then(() => createPerson("pravin","chavan",9421178545))
	.catch((error) => console.log(error))

	.then(() => createPerson("chirag","chavan",24541244))
	.catch((error) => console.log(error))
}
main();