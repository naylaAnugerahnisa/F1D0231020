document.getElementById("formPemesanan").addEventListener("submit", function (event) {
    const nama = document.getElementById("nama").value.trim();
    const tanggal = document.getElementById("tanggal").value;
    const nomor = document.getElementById("nomor_telepon").value.trim();
    const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked');
    const produk = document.getElementById("produk").value;
    const jumlah = document.getElementById("jumlah").value;

    let pesan = "";

    if (nama === "") pesan += "• Nama harus diisi.\n";
    if (tanggal === "") pesan += "• Tanggal harus dipilih.\n";
    if (nomor === "") pesan += "• Nomor telepon harus diisi.\n";
    if (!jenisKelamin) pesan += "• Jenis kelamin harus dipilih.\n";
    if (produk === "") pesan += "• Produk harus dipilih.\n";
    if (jumlah === "" || jumlah < 1) pesan += "• Jumlah pesanan harus diisi dan minimal 1.\n";

    if (pesan !== "") {
        event.preventDefault(); // Menghentikan submit form
        alert("Mohon lengkapi data berikut:\n" + pesan);
    } else {
        alert("Pesanan berhasil dikirim. Terima kasih!");
    }
});
