window.addEventListener('load', solve);

function solve() {

    let typeOption = document.getElementById('type-product')
    let description = document.getElementById('description')
    let clientName = document.getElementById('client-name')
    let clientPhone = document.getElementById('client-phone')

    let sendBtn = document.querySelector('button').addEventListener('click', onClick)

    let section = document.getElementById('received-orders')
    let sectionOrders = document.getElementById('completed-orders')

    function onClick(e) {

        e.preventDefault()

        if (description.value !== '' && clientName.value !== '' && clientPhone.value !== '') {
            let divEl = document.createElement('div')
            divEl.classList.add('container')

            let h2 = document.createElement('h2')
            h2.textContent = `Product type for repair: ${typeOption.value}`
            divEl.appendChild(h2)

            let h3 = document.createElement('h3')
            h3.textContent = `Client information: ${clientName.value}, ${clientPhone.value}`
            divEl.appendChild(h3)

            let h4 = document.createElement('h4')
            h4.textContent = `Description of the problem: ${description.value}`
            divEl.appendChild(h4)

            let startBtn = document.createElement('button')
            startBtn.className = 'start-btn'
            startBtn.textContent = 'Start repair'
            divEl.appendChild(startBtn)

            let finishbtn = document.createElement('button')
            finishbtn.className = 'finish-btn'
            finishbtn.textContent = 'Finish repair'
            finishbtn.disabled = true
            divEl.appendChild(finishbtn)

            section.appendChild(divEl)

            description.value = ''
            clientName.value = ''
            clientPhone.value = ''

            startBtn.addEventListener('click', () => {
                startBtn.disabled = true
                finishbtn.disabled = false
            })

            finishbtn.addEventListener('click', Finish)

            function Finish(e) {
               /* let divElem = document.createElement('div')
                divElem.classList.add('container')
                let h2el = document.createElement('h2')
                h2el.textContent = h2.textContent
                divElem.appendChild(h2el)

                let h3el = document.createElement('h3')
                h3el.textContent = h3.textContent
                divElem.appendChild(h3el)

                let h4el = document.createElement('h4')
                h4el.textContent = h4.textContent
                divElem.appendChild(h4el)

                sectionOrders.appendChild(divElem)

                divEl.remove()*/                        // ili taka

                sectionOrders.appendChild(finishbtn.parentElement)
                startBtn.remove()
                finishbtn.remove()
                 
            }
               document.querySelector('.clear-btn').addEventListener('click', () => {
                  
                   let elem=Array.from(sectionOrders.querySelectorAll('.container'))
                 
                    for(let el of elem){
                        el.remove()
                    }
                })

           // }
        }
    }
}
