// Write your solution here!
  let cats = ["Milo" ,"Otis" ,"Garfield"];

  function destructivelyAppendCat() {
    cats.push("Ralph");
    return cats
  }

   function destructivelyPrependCat() {
    cats.unshift("Bob");
    return cats
   }



   function destructivelyRemoveLastCat() {
    cats.pop();
    return cats
   }
 
    function destructivelyRemoveFirstCat() {
        cats.shift();
        return cats;
    }

    function appendCat() {
        return[...cats,"Broom"]; 
    }

    function prependCat() {
        return["Arnold",...cats];
    }

    function removeLastCat() {
        return cats.slice(0, cats.length -1) 
    }

    function removeFirstCat() {
        return cats.slice(1)
    }
        
    