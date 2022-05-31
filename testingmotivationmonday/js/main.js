// Setting iframe on click of the button
document.querySelector("#clickMe").addEventListener("click", getRandomURL)

// Inputting randomized URL from the server to iframe
async function getRandomURL(){

  // Pulling data from server API
  const res = await fetch(`/api`);
  const data = await res.json();
  
  // Displaying JSON in console
  console.log(data);

  // Adding randomized URL to the src attribute of the iframe
  document.querySelector("#inputIframe").setAttribute("src", data.randomURL);
  
}