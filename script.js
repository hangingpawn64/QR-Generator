console.log("js is loaded");
function generate() {
  console.log("i'm inside generate()");
  document.getElementById("qrcode").innerHTML = "";
  var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: document.getElementById("link").value,
    width: 128,
    height: 128,
  });
}
