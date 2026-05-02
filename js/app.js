const data = JSON.parse(localStorage.getItem("booking")) || [];

document.getElementById("total").textContent = data.length;
document.getElementById("hadir").textContent = data.filter(x => x.status === "HADIR").length;
document.getElementById("noshow").textContent = data.filter(x => x.status === "BOOKED").length;