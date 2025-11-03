// let angka1 = document.getElementById("angka1")
// let angka2 = document.getElementById("angka2")

// function tambah(){
//     let hasil = parseInt(angka1.value) + parseInt(angka2.value);
//     alert("hasil ="+hasil)
// }
// function kurang(){
//     let hasil = parseInt(angka1.value) - parseInt(angka2.value);
//     alert("hasil ="+hasil)
// }
// function kali(){
//     let hasil = parseInt(angka1.value) * parseInt(angka2.value);
//     alert("hasil ="+hasil)
// }
// function bagi(){
//     let hasil = parseInt(angka1.value) / parseInt(angka2.value);
//     alert("hasil ="+hasil)
// }

// let btnTambah = document.getElementById("tambah");
// btnTambah.onclick = tambah;
// let btnKurang = document.getElementById("kurang");
// btnKurang.onclick = kurang;
// let btnKali = document.getElementById("kali");
// btnKali.onclick = kali;
// let btnBagi = document.getElementById("bagi");
// btnBagi.onclick = bagi;

let angka1 = document.getElementById("angka1")
let angka2 = document.getElementById("angka2")
let tambah = document.getElementById("tambah")
let textHasil = document.getElementById("hasil")

function penjumlahan() {
    let a = parseInt(angka1.value);
    let b = parseInt(angka2.value);

    let hasil = a + b;
    textHasil.innerHTML = "hasil = " + hasil;
}
function perkalian() {
    let a = parseInt(angka1.value);
    let b = parseInt(angka2.value);

    let hasil = a * b;
    textHasil.innerHTML = "hasil = " + hasil;
}
function pembagian() {
    let a = parseInt(angka1.value);
    let b = parseInt(angka2.value);

    let hasil = a / b;
    textHasil.innerHTML = "hasil = " + hasil;
}
function pengurangan() {
    let a = parseInt(angka1.value);
    let b = parseInt(angka2.value);

    let hasil = a - b;
    textHasil.innerHTML = "hasil = " + hasil;
}
tambah.onclick = penjumlahan
kali.onclick = perkalian
bagi.onclick = pembagian
kurang.onclick = pengurangan