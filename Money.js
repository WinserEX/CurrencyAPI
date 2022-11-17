//Native Js API Call

/* var requestURL = 'https://api.exchangerate.host/2020-04-04';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
//request.responseType = 'json';
request.send();

request.onload = function() {
  console.log("Success!!!");
  const data = JSON.parse(this.responseText);
  console.log(data.base)
  console.log(data)
}

request.onerror = function() {
  console.log("ERROR!!!");
  console.log(this);
} */

//DOM test

/* const p = document.createElement('P');

const container = document.body.querySelector("#target");

container.append(p);

p.innerHTML = "hello"; */

//Fetch

fetch("https://api.exchangerate.host/2020-04-04")
.then(res => {
    console.log("RESOLVED!", res);
    res.json().then((data) => console.log("JSON DONE", data));
})
.catch((e) => {
    console.log("ERROR!", e); 
})

