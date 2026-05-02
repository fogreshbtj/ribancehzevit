const data = JSON.parse(localStorage.getItem("booking")) || [];
const hadir = data.filter(x => x.status === "HADIR");

document.getElementById("now").textContent = hadir.length ? hadir[0].id : "-";