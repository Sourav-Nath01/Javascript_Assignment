//Question-1
/*
function checktriangle(x,y,z){
    if(x==y && y==z){
        console.log("Equilateral Triangle");
    }
    else if(x == y || y == z || z == x){
        console.log("Isosceles Triangle");
    }
    else{
        console.log("Scalene Triangle");
    }
}
let x,y,z;
x=8,y=7,z=9;
checktriangle(x,y,z);
*/
//Question-2
/*
function findgrade(grade){
    var newgrade=grade/10;
    var g=Math.round(newgrade);
    if(grade%10!=0){
        g=g-1;
    }
    console.log(g);
    switch(g){
        case 10:
            console.log('grade=S');
            break;
        case 9:
            console.log('grade=A');
            break;
        
        case 8:
            console.log(`grade=B`);
            break;
        
        case 7:
            console.log(`grade=C`);
            break;
            
        case 6:
            console.log(`grade=C`);
            break;
        
        case 5:
            console.log(`grade=D`);
            break;
            
        case 4:
            console.log(`grade=E`);
            break;
        default:
            console.log('Student has failed');
}
}
let grade=80;
findgrade(grade);
*/
//Question-3
/*
let sum=0;
for(let i=1;i<=10;i++){
    if(i%3==0 || i%5==0){
        sum+=i;
    }
}
console.log(sum);
*/
//Question-4
/*
function find_factorial(x){
    let fact=1;
    for(let i=1;i<=x;i++){
        fact=fact*i;
    }
    return fact;
}
function is_prime(y){
    let flag=1;
    for(let i=2;i<y;i++){
        if(y%i==0){
            flag=0;
        }
    }
    return flag;
}
function find_fact_of_prime(x,y){
    for(let i=x;i<=y;i++){
        if(is_prime(i)){
            console.log(find_factorial(i));
        }
    }
}
let start,end;
start=1,end=10;
find_fact_of_prime(start,end);
*/