const wbpList = document.getElementById("wbp-list");

if (wbpList && typeof daftarWBP !== "undefined") {
  daftarWBP.forEach(nama => {
    const option = document.createElement("option");
    option.value = nama;
    wbpList.appendChild(option);
  });
}

function booking() {
  const data = JSON.parse(localStorage.getItem("booking")) || [];

  const newData = {
    id: "ZV-" + Date.now(),
    nama: document.getElementById("nama").value,
    nik: document.getElementById("nik").value,
    wbp: document.getElementById("wbp").value,
    status: "BOOKED"
  };

  data.push(newData);
  localStorage.setItem("booking", JSON.stringify(data));

  QRCode.toCanvas(
    document.getElementById("qr"),
    JSON.stringify(newData)
  );

  alert("Pendaftaran berhasil");
}
