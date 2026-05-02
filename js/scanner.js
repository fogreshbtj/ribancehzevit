function scan() {
  try {
    const data = JSON.parse(document.getElementById("input").value);
    const bookings = JSON.parse(localStorage.getItem("booking")) || [];

    const found = bookings.find(x => x.id === data.id);

    if (found) {
      found.status = "HADIR";
      localStorage.setItem("booking", JSON.stringify(bookings));
      alert("QR valid");
    } else {
      alert("Data tidak ditemukan");
    }
  } catch (e) {
    alert("Format data tidak valid");
  }
}