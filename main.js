function mudaCorFundo() {
  let doc = document.querySelector('body')

  if (doc.className == 'claro') {
    doc.className = 'escuro'
  } else {
    doc.className = 'claro'
  }
}
