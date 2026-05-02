let data = JSON.parse(localStorage.getItem("booking")) || [];

let hadir = data.filter(x => x.status === "HADIR");

document.getElementById("now").innerText = hadir.length ? hadir[0].id : "-";