function booking() {
    let data = JSON.parse(localStorage.getItem("booking")) || [];

    let id = "ZV-" + Date.now();

    let newData = {
        id,
        nama: document.getElementById("nama").value,
        jam: document.getElementById("jam").value,
        status: "BOOKED"
    };

    data.push(newData);
    localStorage.setItem("booking", JSON.stringify(data));

    QRCode.toCanvas(document.getElementById("qr"), JSON.stringify(newData));

    alert("Booking berhasil!");
}