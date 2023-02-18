const contact = document.querySelector('.list');

const cityInfo = {
	'Canandaigua, NY': ['+1 585 393 0001', '151 Charlotte Street'],
	'New York City': ['+1 212 456 0002', '9 East 91st Street'],
	'Yonkers, NY': ['+1 914 678 0003', '511 Warburton Ave'],
	'Sherrill, NY': ['+1 315 908 0004', '14 WEST Noyes BLVD'],
};

contact.addEventListener('click', selectCity);

function selectCity(e) {
	let selectedCity = e.target.textContent;

	if (e.target.closest('.arrow')) {
		e.target.closest('.list').classList.toggle('list_active');

		if (
			document.querySelector('.contacts__adresses') &&
			!document.querySelector('.contacts__adresses_hide')
		) {
			document
				.querySelector('.contacts__adresses')
				.classList.add('contacts__adresses_hide');
		} else if (document.querySelector('.contacts__adresses_hide')) {
			let contactAdress = document.querySelector('.contacts__adresses');
			setTimeout(() => {
				contactAdress.classList.remove('contacts__adresses_hide');
				contactAdress.classList.add('contacts__adresses_show');
			}, 500);
			setTimeout(() => {
				contactAdress.classList.remove('contacts__adresses_show');
			}, 300);
		}

    if (window.innerWidth <= 380 && document.querySelector('.contacts__image') && !document.querySelector('.contacts__image_hide')) {
      document.querySelector('.contacts__image').classList.add('contacts__image_hide');
    } else if (document.querySelector('.contacts__image_hide')) {
      setTimeout(() => {document.querySelector('.contacts__image').classList.remove('contacts__image_hide');}, 300)
      
    } 
	}

	if (e.target.closest('.list__city')) {
    document.querySelector('.list__header').classList.add('list__header_selected');
    if (document.querySelector('.list__header_selected') && window.innerWidth <= 380 && document.querySelector('.contacts__image')) {
      document.querySelector('.contacts__image').remove();
    }
		document.querySelector('.list__header span').textContent = selectedCity;
		e.target.closest('.list').classList.remove('list_active');

		if (document.querySelector('.contacts__adresses')) {
			document.querySelector('.contacts__adresses').remove();
		}

		showWindow(selectedCity);
	}
}

function showWindow(city) {
	const adressesElement = `
  <div class="contacts__adresses">
    <ul class="contacts__adresses-list">
      <li class="contacts__adresses-item"><span class="contacts__adresses-item_title">City:</span> <span class="contacts__adresses-item_descr">${city}<span></li>
      <li class="contacts__adresses-item"><span class="contacts__adresses-item_title">Phone:</span> <span class="contacts__adresses-item_descr">${
				cityInfo[city][0]
			}<span></li> 
      <li class="contacts__adresses-item"><span class="contacts__adresses-item_title">Office adress:</span> <span class="contacts__adresses-item_descr">${
				cityInfo[city][1]
			}</span></li> 
    </ul>
    <a href="tel: ${cityInfo[city][0]
			.split(' ')
			.join('')}" class="button button__adress">Call us</a>
  </div>
`;
	setTimeout(() => {
		document
			.querySelector('.contacts__content')
			.insertAdjacentHTML('beforeend', adressesElement);
	}, 400);
}
