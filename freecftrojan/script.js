function copyText(elementId) {
    var textArea = document.getElementById(elementId);
    textArea.select();
    textArea.setSelectionRange(0, 99999); // Untuk perangkat seluler

    // Salin teks di dalam field teks
    document.execCommand("copy");

    // Tampilkan pesan bahwa teks telah berhasil disalin
    var message = document.getElementById("message-" + elementId);
    if (message) {
        message.innerText = "Teks berhasil disalin!";
    }
}
