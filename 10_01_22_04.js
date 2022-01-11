let a = 0;
let b = 1;
let n;
let s;
for (n=1;;n++){
    a += b;
    b += a;
    if (a%5===0){
        alert("Số Fibonacci đầu tiên chia hết cho 5 là: " + a)
        break;
    }else if (b%5===0){
        alert("Số Fibonacci đầu tiên chia hết cho 5 là: " + b)
        break;
    }
}


