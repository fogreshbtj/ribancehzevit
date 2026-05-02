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
  nik: document.getElementById("nik").value,
  nama: document.getElementById("nama").value,
  gender: document.getElementById("gender").value,
  relasi: document.getElementById("relasi").value,
  pengikut: {
    laki_laki: document.getElementById("ikut_l").value,
    perempuan: document.getElementById("ikut_p").value,
    anak: document.getElementById("ikut_a").value
  },
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
