function voltar() {
  diasMostrados = document.getElementsByClassName('dia')
  data = diasMostrados[0].innerHTML.split('/')
  data = new Date(data[2], data[1]-1, data[0])
  data.setDate(data.getDate() - 2)
  console.log(data)
  for (let i in diasMostrados) {
    data.setDate(data.getDate() + 1)
    diasMostrados[i].innerHTML = data.toLocaleDateString('pt-br')
  }
}
function avancar () {
  diasMostrados = document.getElementsByClassName('dia')
  data = diasMostrados[0].innerHTML.split('/')
  data = new Date(data[2], data[1]-1, data[0])
  for (let i in diasMostrados) {
    data.setDate(data.getDate() + 1)
    diasMostrados[i].innerHTML = data.toLocaleDateString('pt-br')
  }
}