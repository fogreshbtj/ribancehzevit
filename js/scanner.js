let scanner = new Instascan.Scanner({
  video: document.getElementById('preview')
});

scanner.addListener('scan', function(content) {
  try {
    const data = JSON.parse(content);
    const bookings = JSON.parse(localStorage.getItem("booking")) || [];

    const found = bookings.find(x => x.id === data.id);

    if (found) {
      found.status = "HADIR";
      localStorage.setItem("booking", JSON.stringify(bookings));
      alert("QR valid. Pengunjung diterima.");
    } else {
      alert("Data tidak ditemukan.");
    }
  } catch (e) {
    alert("QR tidak valid.");
  }
});

Instascan.Camera.getCameras().then(function(cameras) {
  if (cameras.length > 0) {
    scanner.start(cameras[0]);
  } else {
    alert("Kamera tidak ditemukan.");
  }
});
