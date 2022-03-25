var x= 10;
var a= 29;+x
{
	let x= 143;
	document.write(x);
}

var result= x + a;
console.log(result);

const pq = 22;
console.log(pq);
const arr= [1,4,6,8];
console.log(arr);
// Data types
console.log(typeof arr);
// functons
function sleep(time){
	console.log(time + ' was sleeping time');
}
sleep('11pm');
sleep('12am');
sleep('09pm');
const car = {
	companyName:'Toyota',
	carModel: 'Prado',
	carColour: 'Black',
	carNumber: 'Dhaka-Metro-GHO-110934',
	cepacity: '7 Sites and 50kg weight \n',
	carDriver: 'Mr. Jony Ahmed',
	carStart: function (){
		console.log('Car is started by '+ car.carDriver);
	},
	destinetion: function (){
		console.log('Dhaka To Rajshahi');
	},
	
};
console.log('The Name Of Car \n', car.companyName);
console.log('The Name Of Model', car.carModel);
console.log('The Reg. No Of Car', car.carNumber);
car.destinetion();
car.carStart();
let str = "Please locate where 'locate' occurs!";
console.log(str.search("occurs"));