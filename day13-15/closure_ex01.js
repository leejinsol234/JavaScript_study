function Person(name,age){
	var _name = name;
	var _age = age;
	return {
		getName : function(){ return _name; },
		getAge : function() { return _age; },
		setAge : function(x) { _age = x; }
	};
}
var person = Person("Tom", 20);
console.log(person.getName()); //Tom
console.log(person.getAge()); //20
person.setAge(25);
console.log(person.getAge()); //25