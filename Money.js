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

/* fetch("https://api.exchangerate.host/2020-04-04")
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
}) */

//Async
// const exchangeRate = async () => {
//   try {
//   const res = await fetch("https://api.exchangerate.host/convert?from=USD&to=EUR&amount=1000&places=2");
//   const data = await res.json();
//   console.log(`If we convert ${data.query.amount} ${data.query.from} to ${data.query.to}, the result is ${data.result} ${data.query.to}`);
//   const res2 = await fetch("https://api.exchangerate.host/convert?from=USD&to=EUR&amount=2000&places=2");
//   const data2 = await res2.json();
//   console.log(`If we convert ${data2.query.amount} ${data2.query.from} to ${data2.query.to}, the result is ${data2.result} ${data2.query.to}`);
//   }
//   catch (e) {
//     console.log("error!", e)
//   }
// };

// exchangeRate();

//Axios

// axios.get("https://api.exchangerate.host/convert?from=USD&to=EUR&amount=1000&places=2").then((res) => {
//     console.log("RESPONSE: ", res);
// })
// .catch((e) => {
//     console.log("ERROR ", e);
// })

const getExchangeRate = async (amt) => {
  try {
    const res = await axios.get(`https://api.exchangerate.host/convert?from=USD&to=EUR&amount=${amt}&places=2`);
    console.log(`If we convert ${res.data.query.amount} ${res.data.query.from} to ${res.data.query.to}, the result is ${res.data.result} ${res.data.query.to}`);
  }
  catch (e) {
    console.log("Error", e);
  }
};

getExchangeRate(5050);
