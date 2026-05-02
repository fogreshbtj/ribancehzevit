function scan() {
    let input = document.getElementById("input").value;
    let data = JSON.parse(input);

    let bookings = JSON.parse(localStorage.getItem("booking")) || [];

    let found = bookings.find(x => x.id === data.id);

    if(found){
        found.status = "HADIR";
        localStorage.setItem("booking", JSON.stringify(bookings));
        alert("VALID ✅");
    } else {
        alert("TIDAK VALID ❌");
    }
}