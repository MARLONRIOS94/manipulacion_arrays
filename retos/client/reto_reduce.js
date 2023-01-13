const items = [1, 3, 2, 4, 5, 1, 2,7, 8, 10, 9, 6, 7, 5, 3, 8, 1, 4, 5];

const rta  = items.reduce((sum, item) => {
    if(item>=1 && item<=6){
        sum["1-5"] += 1;
    }else if(item>6 && item<=8){
        sum["6-8"] += 1;
    }else{
        sum["9-10"] += 1;
    }
    return sum;

}, {
    "1-5":0,
    "6-8":0,
    "9-10":0,
});

console.log(rta);