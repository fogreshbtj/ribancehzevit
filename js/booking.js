const wbpList = document.getElementById("wbp-list");

if (wbpList && typeof daftarWBP !== "undefined") {
  daftarWBP.forEach(nama => {
    const option = document.createElement("option");
    option.value = nama;
    wbpList.appendChild(option);
  });
}

function cekForm() {
  const nik = document.getElementById("nik").value.trim();
  const nama = document.getElementById("nama").value.trim();
  const gender = document.getElementById("gender").value.trim();
  const relasi = document.getElementById("relasi").value.trim();
  const wbp = document.getElementById("wbp").value.trim();

  const btn = document.getElementById("btn-daftar");

  btn.disabled = !(nik && nama && gender && relasi && wbp);
}

["nik", "nama", "gender", "relasi", "wbp"].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener("input", cekForm);
    el.addEventListener("change", cekForm);
  }
});

function booking() {
  const btn = document.getElementById("btn-daftar");

  if (btn.disabled) return;

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

  btn.disabled = true;
  btn.textContent = "Sudah Terdaftar";

  alert("Pendaftaran berhasil");
}
