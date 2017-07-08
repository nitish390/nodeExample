var num = 0;

var run = function(){
	num = num +1;
	console.log(num)
	run()
}

run()