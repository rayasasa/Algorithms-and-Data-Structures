//Convert string to lower case and strip special characters and spaces
function clean(str){
    str = str.toLowerCase();
    str = str.replace(/[^a-z]/g, "");
    return str;
}

//check if the values are an exact match for TASK 0
function exactMatch(x,y){
    return clean(x) == clean(y);
}

//check if the values are a substring or similar for TASK 1,2,3
function partialMatch(x,y){
    x = clean(x)
    y = clean(y)
      
    var smaller = '';
    var bigger = '';
    if (x.length > y.length){
        smaller = y;
        bigger = x;
    } else {
        smaller = x;
        bigger = y;
    }
      
    var similarity = 0;
    for(var i=0; i<smaller.length; i++){
        if(smaller[i]==bigger[i]){
          similarity += 1;
          continue;
        }
        else{
          break;
        }
    }
    return (similarity > 0);
}

//Find the best pair using partial match and distance from table for TASK 2,3
function lookUpTableMatch(name,list){
    var pairings = [];
    for(var idx in list){
      if (partialMatch(list[idx][3],list[idx][4])){
        pairings.push(idx)
      }
    }
    
    var maxscore = 0
    var maxidx = 0
    // if multiple pairings are returned find best pair using the distance
    // Assuming here that greater distance is the better similarity score
    if(pairings.length > 1){
      for (var idx=0; idx<pairings.length; idx++){
        if(list[idx][2] > maxscore){
          maxscore = list[idx][2];
          maxidx = idx;
        }
      }
      return([list[maxidx][0], list[maxidx][1]])
    }
    else{
      return([list[pairings[0]][0], list[pairings[0]][1]])
    }
}
//Find pairs when its exact match - Task 0
function findPairs0(left,right){
    let pairings = [];
    for(var keyL in left){
        for(var keyR in right){
            if(exactMatch(left[keyL],right[keyR]))
                pairings.push([keyL,keyR]);
        }
    }
    console.log("Exact Match pairings are :")
    console.log(pairings);
}
//Find pairs when its partial match - Task 1
function findPairs1(left,right){
    let pairings = [];
    for(var keyL in left){
        for(var keyR in right){
            if(partialMatch(left[keyL],right[keyR]))
                pairings.push([keyL,keyR]);
        }
    }
    console.log("Partial Match pairings are :")
    console.log(pairings);
}
function findPairs2(left,right){
    var final_pairs = [];
    //for each value in the left create a sub array of related pairings
    for(var keyL in left){
        var subArray = [];
        for(var i = 0; i < lookupTable.length; i++){
          if(keyL == lookupTable[i][0]){
            subArray.push(lookupTable[i])
          }
        }
        //pass the subarray and the value to the lookUpTableMatch
        final_pairs.push(lookUpTableMatch(left[keyL],subArray));
    }
    console.log("The pairings using lookup table are :")
    console.log(final_pairs)
}

//Data for TASk O
var left = {
    1: 'AT&T',
    2: 'Verizon'
}
var right = {
    8:'Verizon',
    9:'AT&T'
}
findPairs0(left,right);

//Data for TASK 1
left = {
    1: 'AT&T Mobility LLC',
    2: 'Verizon'
}
right = {
    8:'Verizon Wireless',
    9:'AT&T'
}
findPairs1(left,right);

//Data for TASK 2,3
left = {
    1: 'AT&T Mobility LLC',
    2: 'Verizon',
    3: 'T-Mobile US, Inc.',
    4: 'Boost Mobile',
    5: 'Blaze Wireless'
};
right = {
    8: 'Verizon Wireless',
    9: 'AT&T',
    10: 'T MobileU, Inc.',
    11: 'B Mobile US, Inc.',
    12: 'Blz Wrlss'
}; 
var lookupTable = [[3, 11, 0.8823529411764706, 'T-Mobile US, Inc.', 'B Mobile US, Inc.'],
    [3, 10, 0.875, 'T-Mobile US, Inc.', 'T MobileU, Inc.'],
    [5, 12, 0.782608695652174, 'Blaze Wireless', 'Blz Wrlss'],
    [5, 8, 0.6666666666666666, 'Blaze Wireless', 'Verizon Wireless'],
    [2, 8, 0.6086956521739131, 'Verizon', 'Verizon Wireless'],
    [4, 11, 0.5517241379310345, 'Boost Mobile', 'B Mobile US, Inc.'],
    [4, 10, 0.5185185185185185, 'Boost Mobile', 'T MobileU, Inc.'],
    [1, 10, 0.5, 'AT&T Mobility LLC', 'T MobileU, Inc.'],
    [1, 11, 0.4117647058823529, 'AT&T Mobility LLC', 'B Mobile US, Inc.'],
    [1, 9, 0.38095238095238093, 'AT&T Mobility LLC', 'AT&T'],
    [4, 8, 0.35714285714285715, 'Boost Mobile', 'Verizon Wireless'],
    [5, 11, 0.3225806451612903, 'Blaze Wireless', 'B Mobile US, Inc.'],
    [4, 12, 0.2857142857142857, 'Boost Mobile', 'Blz Wrlss'],
    [5, 10, 0.27586206896551724, 'Blaze Wireless', 'T MobileU, Inc.'],
    [3, 8, 0.24242424242424243, 'T-Mobile US, Inc.', 'Verizon Wireless'],
    [1, 8, 0.18181818181818182, 'AT&T Mobility LLC', 'Verizon Wireless'],
    [2, 10, 0.18181818181818182, 'Verizon', 'T MobileU, Inc.'],
    [2, 11, 0.16666666666666666, 'Verizon', 'B Mobile US, Inc.'],
    [1, 12, 0.15384615384615385, 'AT&T Mobility LLC', 'Blz Wrlss'],
    [3, 12, 0.15384615384615385, 'T-Mobile US, Inc.', 'Blz Wrlss'],
    [2, 12, 0.125, 'Verizon', 'Blz Wrlss'],
    [3, 9, 0.09523809523809523, 'T-Mobile US, Inc.', 'AT&T'],
    [2, 9, 0.0, 'Verizon', 'AT&T'],
    [4, 9, 0.0, 'Boost Mobile', 'AT&T'],
    [5, 9, 0.0, 'Blaze Wireless', 'AT&T']];
findPairs2(left,right)