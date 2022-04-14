const notReverse = (array) =>{
    return array.sort((a,b) => a-b);
}

let arr = [0,4,5,3,8,0,2,9];
notReverse(arr);