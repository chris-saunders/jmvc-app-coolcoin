steal("funcunit", function(){
	module("coolcoin test", { 
		setup: function(){
			S.open("//coolcoin/coolcoin.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.2!","welcome text");
	});
})