const data = JSON.parse(localStorage.getItem("ticket"));

if (!data) {
  window.location.href = "booking.html";
}

document.getElementById("ticket-id").textContent = data.id;

document.getElementById("ticket-detail").innerHTML = `
  <div class="ticket-row"><span>NIK</span><strong>${data.nik}</strong></div>
  <div class="ticket-row"><span>Nama</span><strong>${data.nama}</strong></div>
  <div class="ticket-row"><span>Jenis Kelamin</span><strong>${data.gender}</strong></div>
  <div class="ticket-row"><span>Relasi</span><strong>${data.relasi}</strong></div>
  <div class="ticket-row"><span>Laki-Laki</span><strong>${data.pengikut.laki_laki}</strong></div>
  <div class="ticket-row"><span>Perempuan</span><strong>${data.pengikut.perempuan}</strong></div>
  <div class="ticket-row"><span>Anak-Anak</span><strong>${data.pengikut.anak}</strong></div>
  <div class="ticket-row"><span>Nama WBP</span><strong>${data.wbp}</strong></div>
`;

QRCode.toCanvas(document.getElementById("ticket-qr"), JSON.stringify(data), {
  width: 170
});
