var amounts = [0, 0, 0, 0, 0, 0];
var names = ['Raw Material', 'Refined Material', 'Collectors', 'Smelters', 'Builders', "Builders^2"];

function onLoad(){
    updateText();
    setInterval(updateValues, 1000);
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

function updateValues(){
    amounts[0] += amounts[2];
    if(amounts[0] >= amounts[3]){
        amounts[0] -= amounts[3];
        amounts[1] += amounts[3];
    }else if(amounts[0] < amounts[3]){
        amounts[1] += amounts[0];
        amounts[0] = 0;
    }
    for(var i = 0; i < amounts[4]; i++){
        if(amounts[2] == amounts[3]){
            if(amounts[1] >= 10){
                amounts[1] -= 10;
                amounts[2] += 1;
            }
        }else if(amounts[2] > amounts[3]){
            if(amounts[1] >= 25){
                amounts[1] -= 25;
                amounts[3] += 1;
            }
        }
    }
    for(i = 0; i < amounts[5]; i++){
        if(amounts[1] >= 100){
            amounts[1] -= 100;
            amounts[4] += 1;
        }
    }
    updateText();
}

function onClick(buttonNum){
    switch(buttonNum){
        case 0:
            amounts[0] += 1;
            break;
        case 1:
            if(amounts[0] >= 1){
                amounts[0] -= 1;
                amounts[1] += 1;
            }
            break;
        case 2:
            if(amounts[1] >= 10){
                amounts[1] -= 10;
                amounts[2] += 1;
            }
            break;
        case 3:
            if(amounts[1] >= 25){
                amounts[1] -= 25;
                amounts[3] += 1;
            }
            break;
        case 4:
            if(amounts[1] >= 100){
                amounts[1] -= 100;
                amounts[4] += 1;
            }
            break;
        case 5:
            if(amounts[1] >= 1000){
                amounts[1] -= 1000;
                amounts[5] += 1;
            }
            break;
    }
    updateText();
}

function devStart(){
    amounts[2] = 1;
    amounts[3] = 1;
    amounts[4] = 1;
}