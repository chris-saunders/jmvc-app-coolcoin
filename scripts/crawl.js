// load('coolcoin/scripts/crawl.js')

load('steal/rhino/rhino.js')

steal('steal/html/crawl', function(){
  steal.html.crawl("coolcoin/coolcoin.html","coolcoin/out")
});
