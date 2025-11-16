// Validasi Form Kontak
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const pesan = document.getElementById("pesan").value.trim();

        if (!nama || !email || !pesan) {
            alert("Harap isi semua kolom terlebih dahulu!");
            return;
        }

        const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Format email tidak valid!");
            return;
        }

        alert(`Terima kasih, ${nama}! Pesanmu telah terkirim 😊`);
        form.reset();
    });
}