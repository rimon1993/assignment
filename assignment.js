
//1.feetToMile
function feetToMile(feet){

    var mile = feet / 5280;
    return mile;
}

var result = feetToMile(1000);
console.log(result);


//2.woodCalculator

function woodCalculator(chair, table, bed){
    
    totalInstalment = chair * 1 + table * 3 + bed * 5;
    return totalInstalment ;
}

var totalResult = woodCalculator (2, 2, 3);
console.log(totalResult);

//3.brickCalculator



//4.tinyFriends

function tinyFriends (namefriends){

    var numberOfFriend = namefriends[0];
    for(var i = 0; i < namefriends.length; i++){
        var currentFriends = namefriends[i];
        var newFriends = namefriends[i].length
        if( newFriends < numberOfFriend.length ){
            numberOfFriend = currentFriends;
        }
    }
      return numberOfFriend;
}

var smallFriendName = tinyFriends (['rimon','rani', 'robin', 'ruhul amin', 'shoel', 'razaul']);
console.log (smallFriendName);