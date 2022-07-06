window.addEventListener("load", solve);

function solve() {


  let total = 0
  let diff = 0

  let make = document.getElementById('make')
  let model = document.getElementById('model')
  let year = document.getElementById('year')
  let type = document.getElementById('fuel')
  let originalPrice = document.getElementById('original-cost')
  let sellingPrice = document.getElementById('selling-price')

  let tbody = document.getElementById('table-body')
  let ul = document.getElementById('cars-list')
  let profit = document.getElementById('profit')

  document.getElementById('publish').addEventListener('click', onClick)

  function onClick(e) {
    e.preventDefault()

    if (make.value !== '' && model.value !== '' && year.value !== '' && type.value !== '' && originalPrice.value !== '' && sellingPrice.value !== '' && sellingPrice.value > originalPrice.value) {
      let trEl = document.createElement('tr')
      trEl.className = 'row'

      let td1 = document.createElement('td')
      td1.textContent = make.value
      trEl.appendChild(td1)

      let td2 = document.createElement('td')
      td2.textContent = model.value
      trEl.appendChild(td2)

      let td3 = document.createElement('td')
      td3.textContent = year.value
      trEl.appendChild(td3)

      let td4 = document.createElement('td')
      td4.textContent = type.value
      trEl.appendChild(td4)

      let td5 = document.createElement('td')
      td5.textContent = originalPrice.value
      trEl.appendChild(td5)

      let td6 = document.createElement('td')
      td6.textContent = sellingPrice.value
      trEl.appendChild(td6)

      let td7 = document.createElement('td')

      let editBtn = document.createElement('button')
      editBtn.textContent = 'Edit'
      editBtn.className = 'action-btn edit'
      td7.appendChild(editBtn)

      let sellBtn = document.createElement('button')
      sellBtn.textContent = 'Sell'
      sellBtn.className = 'action-btn sell'
      td7.appendChild(sellBtn)

      trEl.appendChild(td7)

      tbody.appendChild(trEl)

      make.value = ''
      model.value = ''
      year.value = ''
      type.value = ''
      originalPrice.value = ''
      sellingPrice.value = ''

      editBtn.addEventListener('click', () => {

        make.value = td1.textContent
        model.value = td2.textContent
        year.value = td3.textContent
        type.value = td4.textContent
        originalPrice.value = td5.textContent
        sellingPrice.value = td6.textContent

        trEl.remove()
      })

      sellBtn.addEventListener('click', () => {
        total = Number(td6.textContent) - Number(td5.textContent)

        let liEl = document.createElement('li')
        liEl.className = 'each-list'

        let span1 = document.createElement('span')
        span1.textContent = `${td1.textContent} ${td2.textContent}`
        liEl.appendChild(span1)

        let span2 = document.createElement('span')
        span2.textContent = `${td3.textContent}`
        liEl.appendChild(span2)

        let span3 = document.createElement('span')

        diff += total
        span3.textContent = Number(total)
        liEl.appendChild(span3)

        ul.appendChild(liEl)

        profit.textContent = `${diff.toFixed(2)}`
        profit.style.display = 'strong'

        trEl.remove()
      })
    }
  }

}
