const members = [
  { name: 'Peter Quill', id: 'peter' },
  { name: 'Gamora Titan', id: 'gamora' },
  { name: 'Drax o Destruidor', id: 'drax' },
  { name: 'Mantis', id: 'mantis' },
  { name: 'Rocket Raccoon', id: 'rocket' },
  { name: 'I am Groot', id: 'groot' },
]
let activeMember = 0;
const images = document.getElementById("image");
const menu = document.getElementById("menu");
const nav = document.getElementById("navigation");
const nameText = document.getElementById("member")

function changeStatus() {
  const prev = document.getElementById("button-prev");
  const contador = activeMember == 0;
  prev.disabled = contador;

  const next = document.getElementById("button-next");
  const contadorFinal = activeMember == members.length - 1;
  next.disabled = contadorFinal
}
function changeMember(memberId) {
  activeMember = memberId
  const member = members[activeMember];


  console.log(activeMember, member);

  images.style.transform = `translateY(${-100 * activeMember}vh)`;
  nameText.classList = member.id
  changeName(member.name)


  changeStatus()
}
function navigatorMember(direction) {
  changeMember(activeMember + direction)


}
function changeMenu() {
  menu.classList.toggle('active');
  nav.classList.toggle('active')
}
function setMember(memberId) {
  changeMember(memberId)
}