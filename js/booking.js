const wbpList = document.getElementById("wbp-list");
const btnDaftar = document.getElementById("btn-daftar");

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

  const nikValid = /^\d{16}$/.test(nik);

  if (!btnDaftar) return;

  btnDaftar.disabled = !(nikValid && nama && gender && relasi && wbp);
}

["nik", "nama", "gender", "relasi", "wbp"].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener("input", cekForm);
    el.addEventListener("change", cekForm);
  }
});

function showToast(message, type = "error") {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.className = `toast show ${type}`;

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.className = "toast";
  }, 2200);
}

function booking() {
  const nik = document.getElementById("nik").value.trim();
  const nama = document.getElementById("nama").value.trim();
  const gender = document.getElementById("gender").value.trim();
  const relasi = document.getElementById("relasi").value.trim();
  const wbp = document.getElementById("wbp").value.trim();

  if (nik && !/^\d{16}$/.test(nik)) {
    showToast("NIK Belum Lengkap");
    return;
  }

  if (!nik || !nama || !gender || !relasi || !wbp) {
    showToast("Mohon Lengkapi Data");
    return;
  }

  const data = JSON.parse(localStorage.getItem("booking")) || [];

  const newData = {
    id: "ZV-" + Date.now(),
    nik,
    nama,
    gender,
    relasi,
    pengikut: {
      laki_laki: document.getElementById("ikut_l").value || "0",
      perempuan: document.getElementById("ikut_p").value || "0",
      anak: document.getElementById("ikut_a").value || "0"
    },
    wbp,
    status: "BOOKED"
  };

  data.push(newData);

  localStorage.setItem("booking", JSON.stringify(data));
  localStorage.setItem("ticket", JSON.stringify(newData));

  window.location.href = "ticket.html";
}

cekForm();
