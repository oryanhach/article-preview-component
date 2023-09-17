'use strict'

const shareBtn = document.querySelector('.share-btn-container')
const shareBtnClicked = document.querySelector('.share-btn-container-clicked')

shareBtn.addEventListener('click', () => {
	shareBtn.style.display = 'none'
	shareBtnClicked.style.display = 'flex'
})

shareBtnClicked.addEventListener('click', () => {
	shareBtn.style.display = 'flex'
	shareBtnClicked.style.display = 'none'
})
