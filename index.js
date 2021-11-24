   class Room {
    constructor(name) {
      this._name = name;
      this._description ="";
      this._linkedRooms = {};
      this._character = "";
      this._item="";
      }
  
    get name() {
      return this._name;
    }
  
    get description() {
      return this._description;
    }
  
    get character() {
      return this._character;
    }
    get item (){
      return this._item;
    }
    
    
  
    set name(value) {
        
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this.name = value;
    }
  
    set description(value) {
      if (value.length < 4) {
        alert("description is too short.");
        return;
      }
      this._description = value;
    }
  
    set character(value) {
      this._character = value;
    }
    set item(value){
      this._item = value ;
    }
    

    describe() {
      return "You are in the " + this.name + " you can see " + this.description;
    }
    
    linkRoom(direction, roomToLink) {
      this._linkedRooms[direction] = roomToLink;
    }
    //linkItem(item) {
        //this._linkedItem(item) = item;
      //}

    getDetails() {
      const entries = Object.entries(this._linkedRooms);
      let details = []
      for (const [direction, room] of entries) {
        let text = " The " + room._name + " is to the " + direction;
        details.push(text);
      }
      return details;
    }
  
    move(direction) {
      if (direction in this._linkedRooms) {
        return this._linkedRooms[direction];
      } else {
        alert("You can't go that way",);
        alert(this.name)
        return this;
      }
    }
  }


  
  //class Item {
    //constructor(name) {
      //this._name = name;
        //this._description = "";
        //this._conversation = "";
        //this._linkedRooms = {};
        //this._linkedItem ="";
    //}
    //set name(value) {
      //if (value.length < 4) {
        //alert("Try another thing");
        //return;
      //}
      //this._name = value;
    //}
  
    //set description(value) {
      //if (value.length < 4) {
        //alert("Decription is too short.");
       //return;
      //}
      //this._description = value;
    //}
  
    //set conversation(value) {
      //if (value.length < 4) {
        //alert("try something else");
        //return;
      //}
      //this._conversation = value;
    //}

    //get name() {
      //return this._name;
    //}
  
    //get description() {
      //return this._description;
    //}
    //get conversation() {
      //return this._conversation;
    //}
    

    //describe() {
     // return "The " + this._name + " is " + this._description;
    //}
    //converse() {
     // return this._name + " says " + "'" + this._conversation + "'";
    //}
    //linkRoom(direction, roomToLink) {
      //this._linkedRooms[direction] = roomToLink;
    //}
  //}
  class Item{
    constructor(name,description){
      this._name=name;
      this._description=description;
      
    }
    get description (){
      return this._description;
    }
  }
  
  class Character {
    constructor(name) {
      this._name = name;
        this._description = "";
      this._conversation = "";
    }
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
    set description(value) {
      if (value.length < 4) {
        alert("Decription is too short.");
       return;
      }
      this._description = value;
    }
  
    set conversation(value) {
      if (value.length < 4) {
        alert("conversation is too short.");
        return;
      }
      this._conversation = value;
    }
    get name() {
      return this._name;
    }
  
    get description() {
      return this._description;
    }
  
    get conversation() {
      return this._conversation;
    }
    
    describe() {
      return "Just as you move towards it...a " + this._name + " startles you !!" + this._name + " is " + this._description;
    }
  
    converse() {
      return this._name + " says " + "'" + this._conversation + "'";
      
    }
    linkItem(item){
      this.linkedItem=item;
      return this.linkedItem;
    }
  }
  
  //class Friend extends Character {
    //constructor(name) {
      //super(name);
      //this._weakness= "";
    //}
  
    //set weakness(value) {
      //if (value.length < 4) {
        //alert("Decription is too short.");
       // return;
      //}
      //this._weakness = value;
    //}
  
    
     //linkItem(item) {
         //this._inkedItem = item;
         //return this;
      //if (item = this._linkedItem){
       //return true;
      //} else {
        //return false;
      //}
    //}
  

  
  //create the indiviual room objects and add their descriptions
  const Kitchen = new Room("kitchen");
  Kitchen.description = "copper pots hanging from the stone hearth.A cauldron is bubbling away on hot charcoal.It smells sweet.You want to open the door to the pantry .";
  const Parlour = new Room("grand Parlor");
  Parlour.description = "a large room which is dark ,smelly and dominated by timber.";
  const Library = new Room("Library room");
  Library.description = "bookshelves that span from floor to ceiling.You are drawn to a particular book. ";
  const Hall = new Room("Great hall");
  Hall.description = "that the place is full of historical artifacts. walls are adorned with tapestries and embroideries.This is the centre of the house.";
  const Bedroom = new Room("Bedroom");
  Bedroom.description = " a carved four-poster bed with velvet drapes.The room is dark with very little light coming through the lattice windows.";
  
  //link the rooms together
  
  
  Parlour.linkRoom("north", Bedroom);
  Parlour.linkRoom("east", Hall);
  Library.linkRoom("west", Hall);
  Library.linkRoom("east",Kitchen);
  Hall.linkRoom("east", Library);
  Hall.linkRoom("west", Parlour);
  Hall.linkRoom("north",Kitchen);
  Bedroom.linkRoom("south",Parlour);
  Kitchen.linkRoom("south",Hall);
  
  
  // characters
  const Spirit = new Character("witch");
  Spirit.conversation = "none enters without my permission";
  Spirit.description = "guarding this door";
  //Spirit.pronoun = "she";
  //Spirit.linkedItem = "wants the magic ring";
  
  //item 
 const spellBook = new Character("spellbook");
 spellBook.description="flashing litup magical words out of its pages.";
 spellBook.conversation="Where smoke and water meet ,Where the smells grow sweet,To find all you seek,There is the utter east !!";
 
 //const ring = new Character(" magic ring ");
 //ring.description="turns the witch into smoke";
 

 //Spirit.character= ring;
  //  characters to rooms
  Kitchen.character = Spirit ;
  
  Library.character = spellBook ;



  //let help = document.querySelector("#help")

  //function faceWitch(){
      //let text;
     // let Spirit = prompt ("Read from the spellbook","spell");
//if (Spirit == null||Spirit ==""){
  //text="you win,you can enter Narnis!";
  //}else{
      //text="you loose";
    //}
  //}

  
  
  function displayRoomInfo(room) {
    let occupantMsg = ""
    if (room.character === "") {
      occupantMsg = ""
      
    } else {
      occupantMsg = room.character.describe() + ". " + room.character.converse()
    
    }
    
    
    //if(room.item === ""){
      //occupantMsg=""
    //}else{
      //occupantMsg=room.item.describe()+"."+room.item.converse()
    //}
  
    textContent = "<p>" + room.describe() + "</p>" + "<p>" +
      occupantMsg + "</p>" + "<p>" + room.getDetails() + "</p>";
  
    document.getElementById("textarea").innerHTML = textContent;
    document.getElementById("buttonarea").innerHTML = '><input type="text" id="usertext" />';
    document.getElementById("usertext").focus();
    //document.querySelector("#help").focus();
  }

  
  
  function startGame() {
    //set and display start room
    currentRoom = Hall
    displayRoomInfo(currentRoom);
  
  
  
    //handle commands
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        command = document.getElementById("usertext").value;
        const directions = ["north", "south", "east", "west"];
        if (command=="talk"|| command=="help"){
          prompt ("Read from the spell book","a magical spell");
          alert ("you win! Enter Narnia");
          }

       if (directions.includes(command.toLowerCase())) {
          currentRoom = currentRoom.move(command)
          displayRoomInfo(currentRoom);
        } else {
          document.getElementById("usertext").value = ""
          alert(" now try something else")
          
        }
        document.getElementById("usertext").value = ""
      }
    });
  }
  
  