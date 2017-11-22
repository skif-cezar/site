class User {
    constructor(_fname, _lname, _age, _emile, _url) {
        this.fname = _fname;
        this.lname = _lname;
        this.age = _age;
        this.emile = _emile;
        this.url = _url;
    }

    toString() {
        return "First Name: " + this.fname + "<br>" + "Last Name: " + this.lname + "<br>" + "Age: " + this.age + "<br>" +
                "Emile: " + this.emile + " " + "<br><img src='"+this.url+"'>";
    }
}

    var arrUser = [];
    function btnSendClick(){
    let data = { };
    data.fname = document.getElementById("fname").value;
    data.lname = document.getElementById("lname").value;
    data.age = document.getElementById("age").value;
    data.emile = document.getElementById("emile").value;
    data.url = document.getElementById("url").value;

    if(data.fname !=" " && data.lname !=" " && data.url != " " && data.emile != " " && data.age > 0
    && data.age < 155) {
        arrUser.push(new User(data.fname, data.lname, data.age, data.emile, data.url));
    } else {
        console.log("Error");
    }
}

function btnViewClick(){
    clearPage();
    let body = document.body;
    let contects = "<div>\n";
    for (let i = 0; i< arrUser.length; i++){
        contects += "<p>" + (i+1) + ":" + arrUser[i].toString();
    }

    contects += "</div>";

    body.innerHTML = contects;

}
function clearPage(){
    document.body.innerHTML = "";
}