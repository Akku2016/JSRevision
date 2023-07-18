//switch syntax
/**switch(key) {
    case value:
        ...
        break;
        default:
            break;
}**/

const month =3
switch(month){
    case 1:
        console.log("hello jan");
        break;
    case 2:
        console.log("hello feb");
        break;
    case 3:
        console.log("hello mar");
        break;// if i will not give break fir ye april bhi show krega
    case 4:
            console.log("hello April");
            break;
     default:
        console.log("default case match");
        break;
}
 