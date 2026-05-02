const data = JSON.parse(localStorage.getItem("ticket"));

if (!data) {
  window.location.href = "booking.html";
}

document.getElementById("ticket-id").textContent = data.id;

document.getElementById("ticket-detail").innerHTML = `
  <div><strong>NIK:</strong> ${data.nik}</div>
  <div><strong>Nama Pengunjung:</strong> ${data.nama}</div>
  <div><strong>Jenis Kelamin:</strong> ${data.gender}</div>
  <div><strong>Relasi:</strong> ${data.relasi}</div>
  <div><strong>Pengikut Laki-Laki:</strong> ${data.pengikut.laki_laki}</div>
  <div><strong>Pengikut Perempuan:</strong> ${data.pengikut.perempuan}</div>
  <div><strong>Pengikut Anak-Anak:</strong> ${data.pengikut.anak}</div>
  <div><strong>Nama WBP:</strong> ${data.wbp}</div>
`;

QRCode.toCanvas(
  document.getElementById("ticket-qr"),
  JSON.stringify(data)
);