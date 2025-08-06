var text1 = document.getElementById('text1')
var text2 = document.getElementById('text2')
var text3 = document.getElementById('text3')

/*---------------------------------------------------------------------------------------------------------------------------------------*/
function numero10(){
var n10 = Math.round(Math.random() * 10)
var numero_usuario10 = parseInt(document.getElementById('numero_usuario10').value)
if (isNaN(numero_usuario10)){
    alert('digite um número antes!')
}else if (n10 == numero_usuario10){
    text1.innerHTML = `acertou!`
}else if (numero_usuario10 >= (n10 - 2) && numero_usuario10 <= (n10 - 1) || numero_usuario10 >= (n10 + 1) && numero_usuario10 <= (n10 + 2)){
    text1.innerHTML = `Você passou perto! O número era ${n10}`
}
else{
    text1.innerHTML = `Você passou longe, o número era ${n10}`
}
}
/*---------------------------------------------------------------------------------------------------------------------------------------*/
function numero100(){
var n100 = Math.round(Math.random() * 100)
var numero_usuario100 = parseInt(document.getElementById('numero_usuario100').value)

if (isNaN(numero_usuario100)){
    alert('digite um número antes!')
}else if (n100 == numero_usuario100){
    text2.innerHTML = "acertou!"
}else if (numero_usuario100 >= (n100 - 10) && numero_usuario100 <= (n100 - 1) || numero_usuario100 >= (n100 + 1) && numero_usuario100 <= (n100 + 10)){
    text2.innerHTML = `Você passou perto! O número era ${n100}`
}else{
    text2.innerHTML = `Você passou longe, o número era ${n100}`
}
}
/*---------------------------------------------------------------------------------------------------------------------------------------*/
function numero1000(){
var n1000 = Math.round(Math.random() * 1000)
var numero_usuario1000 = parseInt(document.getElementById('numero_usuario1000').value)

if (isNaN(numero_usuario1000)){
    alert('digite um número antes!')
}
else if (n1000 == numero_usuario1000){
    text3.innerHTML = `acertou!`
}else if (numero_usuario1000 >= (n1000 - 50) && numero_usuario1000 <= (n1000 - 1) || numero_usuario1000 >= (n1000 + 1) && numero_usuario1000 <= (n1000 + 50)){
    text3.innerHTML = `Você passou perto! O número era ${n1000}`
}else{
    text3.innerHTML = `Você passou longe, o número era ${n1000}`
}
}
