import qr from 'qr-image'

$(".btn").click(function () {
    var enteredLink = $('#input-link').val();
    codeGenerator(enteredLink);
});

function codeGenerator(enteredLink) {
    fileName = enteredLink.replace(/^https?:\/\//, "");
    var qrImg = qr.image(fileName);
    qrImg.pipe(createWriteStream(`/qr_codes/${fileName}.png`));
    $(".code-image").attr('src', `/qr_codes/${fileName}.png`);
}
