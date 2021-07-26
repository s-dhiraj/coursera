(function(){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
    //loop through all the names
    for (var indx in names) {
      var firstLetter = names[indx].charAt(0).toLowerCase(); 
  
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[indx]);
      } else {
        helloSpeaker.speak(names[indx]);
      }
    }
  
  })();