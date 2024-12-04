hey();
function hey(){
    console.log("Hey!")
}

function hey(firstName){
    console.log("Hey: "+firstName);
}

const hey2 = function(firstName, message){
    console.log(`Hey _{firstName}: Message: _{message}`);
}
//return
const hey3 = function(firstName, message){
    return `Hey: _{firstName}: Message: _{message}`;
}
hey("Ian");
hey2("Ian", "You need an umbrella today");
onsole.log(hey3("Ian", "You will need sunglasses today"));
