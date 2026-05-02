let data = JSON.parse(localStorage.getItem("booking")) || [];

document.getElementById("total").innerText = data.length;
document.getElementById("hadir").innerText = data.filter(x => x.status === "HADIR").length;
document.getElementById("noshow").innerText = data.filter(x => x.status === "BOOKED").length;