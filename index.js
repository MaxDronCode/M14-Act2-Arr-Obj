function proporcionarDades() {
  const estudiant = {
    nom: 'Joan',
    edat: 20,
    notes: {
      matematiques: 8,
      programacio: 9,
      fisica: 7,
    },
  }

  const coordenades = [12, 5, 8]

  const preus = [100, 200, 300, 400]

  const edats = [16, 21, 18, 24, 12, 30]

  const notes = [7, 9, 5, 10, 8]

  const descompte = 0.05

  const cotxe = {
    marca: 'Tesla',
    model: 'Model S',
    preu: 80000,
  }

  return { estudiant, coordenades, preus, edats, notes, descompte, cotxe }
}

function esborrarContingut(exercici) {
  let $sec = document.getElementById(exercici)
  $sec.innerHTML = ''
}

function aplicarEstils(element) {
  element.style.margin = '10px'
  element.style.padding = '10px'
  element.style.border = '1px solid black'
  element.style.borderRadius = '5px'
}

function obtenirPreuFinal(preu, descompte) {
  return preu - preu * descompte
}

function exercici1() {
  let { estudiant } = proporcionarDades()
  let { nom, edat, notes } = estudiant
  console.log(
    `El ${nom} té ${edat} anys i ha tret un ${notes.matematiques} a matemàtiques`
  )

  esborrarContingut('exercici1')

  let $sec1 = document.getElementById('exercici1')

  let $art1 = document.createElement('article')
  aplicarEstils($art1)

  let $titol = document.createElement('h3')
  $titol.textContent = 'Desestructuració:'

  let $desestrucImg = document.createElement('img')
  $desestrucImg.src = './img/desestructuracioObj.png'

  let $paragraf = document.createElement('p')
  $paragraf.textContent = `El ${nom} té ${edat} anys i ha tret un ${notes.matematiques} a matemàtiques`

  $art1.appendChild($titol)
  $art1.appendChild($desestrucImg)
  $art1.appendChild($paragraf)

  $sec1.appendChild($art1)
}

function exercici2() {
  let { coordenades } = proporcionarDades()
  const [x, y, z] = coordenades
  console.log(`Les coordenades són: x=${x}, y=${y}, z=${z}`)

  esborrarContingut('exercici2')

  let $sec2 = document.getElementById('exercici2')

  let $art2 = document.createElement('article')
  aplicarEstils($art2)

  let $titol = document.createElement('h3')
  $titol.textContent = 'Desestructuració:'

  let $desestrucImg = document.createElement('img')
  $desestrucImg.src = './img/desestructuracioArr.png'

  let $paragraf = document.createElement('p')
  $paragraf.textContent = `Les coordenades són: x=${x}, y=${y}, z=${z}`

  $art2.appendChild($titol)
  $art2.appendChild($desestrucImg)
  $art2.appendChild($paragraf)

  $sec2.appendChild($art2)
}

function exercici3() {
  let { preus } = proporcionarDades()
  let preusNous = preus.map((preu) => (preu * 1.1).toFixed(0))

  esborrarContingut('exercici3')

  let $img = document.createElement('img')
  $img.src = './img/preusNous.png'

  let $sec3 = document.getElementById('exercici3')
  let $art3 = document.createElement('article')
  aplicarEstils($art3)

  let $titulo = document.createElement('h3')
  $titulo.textContent = 'Map:'

  let $paragraf = document.createElement('p')
  $paragraf.textContent = `Preus originals: ${preus} | Preus nous: ${preusNous}`

  $art3.appendChild($img)
  $art3.appendChild($titulo)
  $art3.appendChild($paragraf)

  $sec3.appendChild($art3)
}

function exercici4() {
  let { edats } = proporcionarDades()
  let edatsFiltrades = edats.filter((edat) => edat >= 18)

  esborrarContingut('exercici4')

  let $sec4 = document.getElementById('exercici4')

  let $art4 = document.createElement('article')
  aplicarEstils($art4)

  let $titulo = document.createElement('h3')
  $titulo.textContent = 'Filter:'

  let $img = document.createElement('img')
  $img.src = './img/filter.png'

  let $paragraf = document.createElement('p')
  $paragraf.textContent = `Edats originals: ${edats} | Edats filtrades: ${edatsFiltrades}`

  $art4.appendChild($titulo)
  $art4.appendChild($img)
  $art4.appendChild($paragraf)

  $sec4.appendChild($art4)
}

function exercici5() {
  let { notes } = proporcionarDades()
  let mitjanaNotes = notes.reduce((acc, nota) => acc + nota) / notes.length

  esborrarContingut('exercici5')

  let $sec5 = document.getElementById('exercici5')

  let $art5 = document.createElement('article')
  aplicarEstils($art5)

  let $titulo = document.createElement('h3')
  $titulo.textContent = 'Reduce:'

  let $img = document.createElement('img')
  $img.src = './img/reduce.png'

  let $paragraf = document.createElement('p')
  $paragraf.textContent = `Notes: ${notes} | Mitjana: ${mitjanaNotes}`

  $art5.appendChild($titulo)
  $art5.appendChild($img)
  $art5.appendChild($paragraf)

  $sec5.appendChild($art5)
}

function exercici6(nom, preu, quantitat) {
  let { descompte } = proporcionarDades()
  let preuFinal = obtenirPreuFinal(preu, descompte)

  let producte = new Object()

  producte.nom = nom
  producte.preu = preuFinal
  producte.quantitat = quantitat

  $sec6 = document.getElementById('exercici6')

  let $art6 = document.createElement('article')
  aplicarEstils($art6)

  let $titulo = document.createElement('h3')
  $titulo.textContent = "Creació d'objectes:"

  let $img = document.createElement('img')
  $img.src = './img/creacioObjecte.png'

  let $paragraf = document.createElement('p')
  $paragraf.textContent = `{ nom: '${producte.nom}' , preu: ${producte.preu} , quantitat: ${producte.quantitat}}`

  $art6.appendChild($titulo)
  $art6.appendChild($img)
  $art6.appendChild($paragraf)

  $sec6.appendChild($art6)
}

function exercici7() {
  let { cotxe } = proporcionarDades()
  cotxe.any = 2023

  esborrarContingut('exercici7')

  let $sec7 = document.getElementById('exercici7')

  let $art7 = document.createElement('article')
  aplicarEstils($art7)

  let $titulo = document.createElement('h3')
  $titulo.textContent = 'Afegir propietats:'

  let $img = document.createElement('img')
  $img.src = './img/props.png'

  let $paragraf = document.createElement('p')
  $paragraf.textContent = `{ marca: '${cotxe.marca}' , model: '${cotxe.model}' , preu: ${cotxe.preu} , any: ${cotxe.any}}`

  $art7.appendChild($titulo)
  $art7.appendChild($img)
  $art7.appendChild($paragraf)

  $sec7.appendChild($art7)
}
