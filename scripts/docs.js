//js coolcoin/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('coolcoin/coolcoin.html', {
		markdown : ['coolcoin']
	});
});