(function () {
	var store = {
		nextId: 1,
		cache: {},
		//Withi add(), we first check to see if an id property has been added to 
		//the function, and if so, we assume that functions has already been 
		//processed and we ignore it .Otherwise we assign an id property to 
		//the function
		add: function (fn) {
			if (!fn.id) {
				fn.id = store.nextId ++;
				//The !! construct is a simple way of turing any JavaScript expression
				// intp its Boolean equialent. For example !!"hello" ==== true and 
				//  !! 0 === false. 
				return !!(store.cache[fn.id] = fn)
			};
		}
	};
	function ninja () {};
	assert(store.add(ninja), "Function was safely added.");
	assert(!store.add(ninja), "But it was only added once.");


	function isPrime(value) {
		// We start by checking to see if the anwsers property
		// that we'll use as a cache has been created, and if not
		// we create it.
		// The creation of this initially empty object will only 
		//occur on the first time cll to the function
		if (!isPrime.answers) {
			isPrime.answers = {};
		}
		// Then we check to see if the answer for the passed value
		// has already been cached in answers.
		if (isPrime.answers[value] !== null) {
			return isPrime.answers[value];
		}
		var prime = value != 1;
		for (var i = 2; i < value; i++) {
			if (value % i == 0) {
				prime = false;
				return;
			}
		}
		return isPrime.answers[value] = prime;
	}
	assert(isPrime(5), "5 is prime!");
	assert(isPrime.answers[5], "The answers was cached");

	function getElements(name) {
		if (!getElements.cache) {
			getElements.cache = {};
		};
		return getElements.cache[name] =
			getElements.cache[name] ||
			document.getElementsByTagName(name);
	}

	function merge(root) {
		for (var i = 1; i < argumenst.length; i++) {
			for (var key in argumenst[i]) {
				root[key] = argumenst[i][key];
			}
		}
		return root;
	}

	var merged = merge({
		name: "shawn"
	},{
		city: "Chengdu"
	});

