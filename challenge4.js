let users = [];

class Person {

	constructor(firstname,lastname,mobNumber){
		this.firstname=firstname;
		this.lastname=lastname;
		this.mobNumber=mobNumber;
	}
	fullName = (firstname, lastname) => { 
		return (`${firstname} ${lastname}`)
	}
}
	
	
const createPerson = (firstname,lastname,mobNumber) => {

	return new Promise((resolve, reject) => {
	setTimeout(()=> {
		if(users.find(user=>user.mobNumber === mobNumber)){
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
	.then(values => console.log(values))
	.catch((error) => console.log(error))

	createPerson("aniket","patel",131453123)
	.then(values => console.log(values))
	.catch((error) => console.log(error))

	createPerson("sagar","gupta",9421178545)
	.then(values => console.log(values))
	.catch((error) => console.log(error))

	createPerson("akash","sahani",12845645)
	.then((value) => console.log(value))
	.catch((error) => console.log(error))

	createPerson("akshay","pawar",5234533553)
	.then((value) => console.log(value))
	.catch((error) => console.log(error))

	createPerson("akshay","rane",1345345345)
	.then((value) => console.log(value))
	.catch((error) => console.log(error))

	createPerson("siddhesh","gharat",9421178545)
	.then((value) => console.log(value))
	.catch((error) => console.log(error))

	createPerson("kiran","chavan",15454554)
	.then((value) => console.log(value))
	.catch((error) => console.log(error))

	createPerson("pravin","chavan",9421178545)
	.then((value) => console.log(value))
	.catch((error) => console.log(error))

	createPerson("chirag","chavan",24541244)
	.then((value) => console.log(value))
	.catch((error) => console.log(error))

}
main();
