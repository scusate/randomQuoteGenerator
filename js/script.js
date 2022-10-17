var myQuotes = [
    '"I love not Man the less, but Nature more." <br><br> Lord Byron',
    '"Never, never, never give up." <br><br> Winston Churchill',
    '"I like to race, not to do laps alone." <br><br> Fernando Alonso', 
    '"That’s for all the kids out there who dream the impossible."<br><br> Lewis Hamilton', 
    '"We must learn to live together as brothers or perish together as fools." <br><br> Martin Luther King, Jr.', 
    '"Nature does not make mistakes. Right and wrong are human categories." <br><br> Frank Herbert', 
    '"Men, I am not ordering you to attack. I am ordering you to die." <br><br> Mustafa Kemal Ataturk', 
    '"Maybe I’ve always been more comfortable in chaos." <br><br> Florence Welch', 
    '"I don\'t know where I\'m going from here, but I promise it won\'t be boring." <br><br> David Bowie', 
    '"My mom always said life was like a box of chocolates. You never know what you\'re gonna get.." <br><br> Forrest Gump', 
    '"Now you\'re looking for the secret. But you won\'t find it because of course, you\'re not really looking. You don\'t really want to work it out. You want to be fooled." <br><br> Cutter/Prestige',
    '"Every fairy tale needs a good old-fashioned villain." <br><br> Jim Moriarty/Sherlock' ];


function nextQuote(){
  var randomQuote = Math.floor(Math.random() * (myQuotes.length));  
  document.getElementById('quotes').innerHTML = myQuotes[randomQuote];
  }