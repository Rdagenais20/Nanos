var amounts = [0, 0, 0, 0, 0, 0, 0, 0];
var names = ['Raw Material', 'Refined Material', 'Research', 'Collectors', 'Smelters', 'Researchers', 'Builders', "Builders^2"];
var buttonText = ['Collect Raw Material', 'Smelt Refined Material', 'Generate Research', 'Build Collector', 'Build Smelter', 'Build Researcher', 'Build Builder', 'Build Builder^2']
var costs = [0, 1, 1, 10, 25, 50, 100, 1000];
var costResources = ['None', names[0], names[0], names[1], names[1], names[1], names[1], names[1]];

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
        document.getElementById(squish(names[i]) + "Text").innerHTML = names[i] + ": " + amounts[i];
        document.getElementById(squish(names[i]) + "Button").innerHTML = buttonText[i] +"\n(Cost: " + costs[i] + " " + costResources[i] + ")";
        if(costs[i] == 0){
            document.getElementById(squish(names[i]) + "Button").innerHTML = buttonText[i] +"\n(Cost: Free)";
        }
    }
}

function updateValues(){
    amounts[0] += amounts[3];
    if(amounts[0] >= amounts[4]){
        amounts[0] -= amounts[4];
        amounts[1] += amounts[4];
    }else if(amounts[0] < amounts[4]){
        amounts[1] += amounts[0];
        amounts[0] = 0;
    }
    if(amounts[0] >= amounts[5]){
        amounts[0] -= amounts[5];
        amounts[2] += amounts[5];
    }else if(amounts[0] < amounts[5]){
        amounts[2] += amounts[0];
        amounts[0] = 0; 
    }
    for(var i = 0; i < amounts[6]; i++){
        if(amounts[3] == amounts[4] * 2 && amounts[3] == amounts[5] * 2){
            if(amounts[1] >= costs[3] * 2){
                amounts[1] -= costs[3] * 2;
                amounts[3] += 2;
            }
        }else if(amounts[4] < amounts[3]/2 && amounts[4] == amounts[5]){
            if(amounts[1] >= costs[4]){
                amounts[1] -= costs[4];
                amounts[4] += 1;
            }
        }else if(amounts[5] < amounts[3]/2 && amounts[5] < amounts[4]){
            if(amounts[1] >= costs[5]){
                amounts[1] -= costs[5];
                amounts[5] += 1;
            }
        }else if(amounts[3] == (amounts[4] * 2) - 1 && amounts[3] == (amounts[5] * 2) - 1){
            if(amounts[1] >= costs[3]){
                amounts[1] -= costs[3];
                amounts[3] += 1;
            }
        }
    }
    for(i = 0; i < amounts[7]; i++){
        if(amounts[1] >= costs[6]){
            amounts[1] -= costs[6];
            amounts[6] += 1;
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
            if(amounts[0] >= 1){
                amounts[0] -= 1;
                amounts[2] += 1;
            }
            break;
        case 3:
            if(amounts[1] >= costs[3]){
                amounts[1] -= costs[3];
                amounts[3] += 1;
            }
            break;
        case 4:
            if(amounts[1] >= costs[4]){
                amounts[1] -= costs[4];
                amounts[4] += 1;
            }
            break;
        case 5:
            if(amounts[1] >= costs[5]){
                amounts[1] -= costs[5];
                amounts[5] += 1;
            }
            break;
        case 6:
            if(amounts[1] >= costs[6]){
                amounts[1] -= costs[6];
                amounts[6] += 1;
            }
            break;
        case 7:
            if(amounts[1] >= costs[7]){
                amounts[1] -= costs[7];
                amounts[7] += 1;
            }
            break;
    }
    updateText();
}

function devStart(){
    amounts[3] = 1;
    amounts[4] = 1;
    amounts[5] = 1;
    amounts[6] = 1;
}