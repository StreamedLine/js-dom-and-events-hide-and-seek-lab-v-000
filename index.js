function getFirstSelector(selector) {
	return document.querySelector(selector)
}

function nestedTarget() {
	return document.querySelector('#nested .target')
}

function deepestChild(node) { 
	let firstPass = false;
	if (!node) firstPass = true

	//get first node and set level deep to 0
	node = node || [document.querySelector('#grand-node'), 0];
	
	//base case
	if (node[0].children.length == 0) {
		return node;
	}

	let childArr = Array.from(node[0].children);
	//get array of deepest nodes
	childArr = childArr.map(child => deepestChild([child, Number(node[1]+1)]))

	//see which is deepest
	let result = childArr.reduce(function(deepest, child){
		return deepest[1] < child[1] ? child : deepest;
	}, childArr[0]);

	//Needs to return first element if done recursing
	if (firstPass) {
		return result[0];
	}	else {
		return result
	}
}

function increaseRankBy(n) {
	const lists = document.getElementsByClassName('ranked-list');

	Array.from(lists).forEach(function(list){
		Array.from(list.getElementsByTagName('li')).forEach(function(li) {
			li.innerHTML = Number(li.innerHTML) + n
		});
	});
}