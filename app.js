const shareBtn = document.querySelector('.footer__share-icon')
const modalBox = document.querySelector('.share__modal')
const modalArrow = document.querySelector('.bottom-arrow')

shareBtn.addEventListener('click', showModal)

function showModal() {
	const isHidden = window.getComputedStyle(modalBox).opacity === '0'

	if (isHidden) {
		modalBox.style.opacity = '1'
		modalBox.style.visibility = 'visible'
		modalBox.style.opacity = '1'
	} else {
		modalBox.style.opacity = '0'
		modalBox.style.visibility = 'hidden'
		modalBox.style.opacity = '0'
	}
}
