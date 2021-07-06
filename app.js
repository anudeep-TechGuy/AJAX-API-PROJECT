console.log('Inside the app');

//Creating the request

var req = new XMLHttpRequest();
var url = "https://api.chucknorris.io/jokes/random";
req.open('GET', url);
req.send();
console.log(req.readyState);

req.onreadystatechange = function () {
    console.log(req.readyState);
    if (req.readyState === 4) {
        console.log(req.status);
        var str = req.responseText;
        console.log(typeof (str));
        var obj = JSON.parse(str); //This will parse the string into JSON
        console.clear();
        console.log(obj);
        console.log(obj.value);

    }
}

