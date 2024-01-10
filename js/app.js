const closeBtn = document.querySelector('.close-modal')
const cancelBtn = document.querySelector('.btn-cancel')
const modal = document.querySelector('.modal-background')
const openBtn = document.querySelector('.open-modal')

openBtn.addEventListener('click', () => {
    modal.classList.add('show-modal')
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})

cancelBtn.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})

// ====== upvote and downvote ======
const upvoteBtn = document.querySelectorAll('.upvote')
const downvoteBtn = document.querySelectorAll('.downvote')

upvoteBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        let count = parseInt(btn.nextElementSibling.textContent)
        count++
        btn.nextElementSibling.textContent = count
    })
})

downvoteBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        let count = parseInt(btn.previousElementSibling.textContent)
        if (count > 0) count--
        btn.previousElementSibling.textContent = count
    })
})
