function solve() {

    let genre = document.getElementById('genre')
    let name = document.getElementById('name')
    let author = document.getElementById('author')
    let date = document.getElementById('date')

    let addBtn = document.getElementById('add-btn').addEventListener('click', onClick)
    let divEl = document.querySelector('div .all-hits-container')
    // ili taka
    // let divEl=document.getElementsByClassName('all-hits-container')[0]

    function onClick(e) {
        e.preventDefault()
        if (genre.value !== '' && name.value !== '' && author.value !== '' && date.value !== '') {//&& date.value === Number){

            let div = document.createElement('div')
            div.classList.add('hits-info')

            let img = document.createElement('img')
            img.src = './static/img/img.png'
            div.appendChild(img)

            let h2 = document.createElement('h2')
            h2.textContent = `Genre: ${genre.value}`
            div.appendChild(h2)

            let h22 = document.createElement('h2')
            h22.textContent = `Name: ${name.value}`
            div.appendChild(h22)

            let h23 = document.createElement('h2')
            h23.textContent = `Author: ${author.value}`
            div.appendChild(h23)

            let h3 = document.createElement('h3')
            h3.textContent = `Date: ${date.value}`
            div.appendChild(h3)

            let saveBtn = document.createElement('button')
            saveBtn.className = 'save-btn'
            saveBtn.textContent = 'Save song'
            div.appendChild(saveBtn)

            let likeBtn = document.createElement('button')
            likeBtn.className = 'like-btn'
            likeBtn.textContent = 'Like song'
            div.appendChild(likeBtn)

            let deleteBtn = document.createElement('button')
            deleteBtn.className = 'delete-btn'
            deleteBtn.textContent = 'Delete'
            div.appendChild(deleteBtn)

            divEl.appendChild(div)

            genre.value = ''
            name.value = ''
            author.value = ''
            date.value = ''


            likeBtn.addEventListener('click', () => {

                let divv = document.getElementsByClassName('likes')[0]
                let likes = divv.children[0]
                let pEl = Array.from(divv.children[0].textContent).splice(-1)
                pEl = Number(pEl)
                pEl++
                likes.textContent = `Total Likes: ${pEl}`
                likeBtn.disabled = true
                //console.log(pEl);
            })
            saveBtn.addEventListener('click',()=>{
                let divSaved=document.getElementsByClassName('saved-container')[0]
                divSaved.appendChild(div)
                likeBtn.remove()
                saveBtn.remove()
            })
            deleteBtn.addEventListener('click',()=>{
                div.remove()
            })
        }
    }
}
