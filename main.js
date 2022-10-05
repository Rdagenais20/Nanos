var amounts = [0, 0, 0, 0];
var names = ['Raw Material', 'Refined Material', 'Collectors', 'Smelters'];

function onLoad(){
    updateText();
}

function squish(input){
    var output = "";
    var split = input.split(" ");
    split[0] = split[0].toLowerCase();
    for(var i = 0; i < split.length; i++){
        output += split[i];
    }
    return output;
}

function updateText(){
    for(var i = 0; i < names.length; i++){
        document.getElementById(squish(names[i]) + "Text").innerHTML = names[i] + ": " + amounts[i]
    }
}