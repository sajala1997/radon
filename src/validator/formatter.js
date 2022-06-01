const trim = function() {
    let text = "       Sajala Soni!        ";
    let result = text.trim();
    console.log(result)
}

const changetoLowerCase = function() {
    let text = "Hi My nAMe iS SajAlA SONi";
    let result = text.toLowerCase();
    console.log(result)
}

const changetoUpperCase = function() {
    let text = "i am backend developer trainee at functionup";
    let result = text.toUpperCase();
    console.log(result)
}



module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changetoUpperCase = changetoUpperCase
