// Using Filter Method:

let users = [
    { name: 'John', age: 25, occupation: 'gardener' },
    { name: 'Lenny', age: 51, occupation: 'programmer' },
    { name: 'Andrew', age: 43, occupation: 'teacher' },
    { name: 'Peter', age: 81, occupation: 'teacher' },
    { name: 'Anna', age: 47, occupation: 'programmer' },
    { name: 'Albert', age: 76, occupation: 'programmer' },
]

// Output:[ { name: 'Lenny', age: 51, occupation: 'programmer' }, { name: 'Anna', age: 47, occupation: 'programmer' },
    // { name: 'Albert', age: 76, occupation: 'programmer' },]
	
	
	
	let result = users.filter(function(e){
		if (e.occupation =='programmer'){
			return (e);
		}
	});
	document.write(JSON.stringify(result))

	
	// let result = users.filter(function(e){
	// 	return e.occupation.indexOf('programmer')>=0;
	// });
	// document.write(JSON.stringify(result))
	
	
	
	
	