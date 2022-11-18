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
.then((res) => {
    console.log("RESOLVED!", res);
    return res.json();
})
.then((data) => {
    console.log(data);
    return fetch("https://api.exchangerate.host/convert?from=USD&to=EUR&amount=1000&places=2");
})
.then((res) => {
  console.log("Second request resolved!!!");
  return res.json();
})
.then((data) => {
  console.log(data)
    console.log(`If we convert ${data.query.amount} ${data.query.from} to ${data.query.to}, the result is ${data.result} ${data.query.to}`);

})
.catch((e) => {
    console.log("ERROR!", e); 
})

