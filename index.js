// Code your solution in this file!
function distanceFromHqInBlocks(location){
    let numStreets = 42;
    if (location> numStreets){
        let dif = location - numStreets
        return dif;
    } else if (numStreets >location){
        let dif = numStreets - location
        return dif;
    }
}

function distanceFromHqInFeet(location){
    let distanceInFeet = distanceFromHqInBlocks(location)*264
    return distanceInFeet;

}

function distanceTravelledInFeet(start, destination){
    if(start >destination ){
        let dif1 = (start - destination) * 264;
        return dif1;
    }else if(destination >start){
        let dif1 = (destination - start)*264
        return dif1;
    }
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if(distance <= 400){
        let fare =0
        return fare;
    }
    else if((distance > 400) && (distance <= 2000)){
        let fare = (distance - 400) * 0.02;
        return fare;
    }
    else if((distance > 2000) && (distance <= 2500)){
        return 25;
    }
    else if(distance > 2500){
        return('cannot travel that far');
    }
}

