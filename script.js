//test script
console.log('skrip uye');

//script

alert("Selamat Berhitung, Teman-Teman!");
const display = document.getElementById('display');
const noMultiOpr = ['+', '-', '*', '/', '.'];

//menampilkan operator dan angka - dan membatasi penggunaan operator <=1
function appendToDisplay (input) {

//mencegah operator diawal - dan memberi message di browser
    if(display.value === "" && noMultiOpr.includes(input)) {
        alert("Kamu mau ngapain nempatin operator diawal?");
        return; 
    }

//mencegah operator di input berkali-kali setelah angka - dan memberi message di browser
    if(noMultiOpr.includes(input) && noMultiOpr.includes(display.value.slice(-1))) {
        alert("Woi-Woi-Woi, Operator Lu cuman bisa 1, kaga bisa banyak-banyak!");
        return;
    }

    display.value += input;
}

//mengahapus semua inputan dalam display
function clearDisplay() {
    display.value = "";
}

//menghapus 1 digit dalam display
function deleteLast() {
    display.value = display.value.slice(0,-1);
}

//ketika sama dengan dipencet ('eval' merubah value menjadi expression)
function calculate() {
    display.value = eval(display.value);
}