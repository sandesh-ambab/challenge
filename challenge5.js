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
		if(users.some(number=>number.mobNumber === mobNumber)){
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
const main = async() => {

	try {
		await createPerson("sandesh","chavan",9421178545)
	}
	catch (error){
		console.log(error)
	}

	try {
		await createPerson("aniket","patel",131453123)
	}
	catch (error){
		console.log(error)
	}

	try {
		await createPerson("sagar","gupta",9421178545)
	}
	catch (error){
		console.log(error)
	}
		
	try {
		await createPerson("akash","sahani",12845645)
	}
	catch (error){
		console.log(error)
	}

	try {
		await createPerson("akshay","pawar",5234533553)
	}
	catch (error){
		console.log(error)
	}

	try {
		await createPerson("akshay","rane",1345345345)
	}
	catch (error){
		console.log(error)
	}

	try {
		await createPerson("siddhesh","gharat",9421178545)
	}
	catch (error){
		console.log(error)
	}

	try {
		await createPerson("kiran","chavan",15454554)
	}
	catch (error){
		console.log(error)
	}

	try {
		await createPerson("pravin","chavan",9421178545)
	}
	catch (error){
		console.log(error)
	}

	try {
		await createPerson("chirag","chavan",24541244)
	}
	catch (error){
		console.log(error)
	}
}
main();
