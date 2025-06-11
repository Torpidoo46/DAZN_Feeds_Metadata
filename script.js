const region = this.value;
const url = `https://dazn-proxy-server.onrender.com/api/region/${region}`;

const container = document.getElementById("metadata-container");
container.innerText = "Loading...";

try {
  const response = await fetch(url);
  const data = await response.json();
  container.innerText = JSON.stringify(data, null, 2);
} catch (err) {
  container.innerText = "Error fetching data: " + err.message;
}
