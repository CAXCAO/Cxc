function checkCode() {

const correctCode = "1101FT";

const inputElement = document.getElementById("codeInput");

const message Element = document.getElementById("message");

if (inputElement.value.toUpperCase() === correctCode) {

message Element.textContent = "Código correto! Redirecionando...";

messageElement.style.color = "#2ecc71"; //Verde para sucesso

// Você pode adicionar um pequeno

atraso antes de redirecionar

setTimeout(() => {

window.location.href =

"https://www.tiktok.com/"; // Substitua pelo link do TikTok que você quer

}, 2000); // Redireciona após 2 segundos } else {

message Element.textContent = "Código incorreto. Tente novamente!";

message Element.style.color = "#e74c3c"; //Vermelho para erro

inputElement.value = ""; // Limpa o campo de input } }

//Opcional: Adicionar um listener para a tecla

Enter no campo de input document.getElementById("codeInput").ad dEventListener("keypress", function(event) {

if (event.key === "Enter") {

event.preventDefault(); // Previne o comportamento padrão do Enter (que pode ser enviar um formulário)

checkCode();
}
});