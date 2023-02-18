const accordion = document.querySelector('.prices__option');
const accordItem = document.querySelectorAll('.prices__option-item');

accordion.addEventListener('click', isAccord);

function isAccord(e) {
	let accordSelect = e.target.closest('.arrow');
	if (e.target.classList.contains('prices__option-order')) {
		return (location.href = '#contacts');
	}
	if (
		accordSelect &&
		!accordSelect
			.closest('.prices__option-item')
			.classList.contains('prices__option-item_active')
	) {
		accordItem.forEach((item) => {
			item.classList.remove('prices__option-item_active');
		});
		e.target
			.closest('.prices__option-item')
			.classList.add('prices__option-item_active');
	} else if (accordSelect) {
		e.target
			.closest('.prices__option-item')
			.classList.remove('prices__option-item_active');
	}
}
