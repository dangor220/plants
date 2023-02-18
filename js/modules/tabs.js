const tab = document.querySelector('.service__tabs');
const tabs = document.querySelectorAll('.service__tab');

tab.addEventListener('click', clickTabs);

let count = 0;
let selectTabs = [];

function clickTabs(e) {
	let selectTab = e.target.closest('.service__tab');
	let tabText = selectTab.textContent.toLowerCase();

	if (!selectTab.classList.contains('service__tab_active') && count !== 2) {
		selectTab.classList.add('service__tab_active');
		selectTabs.push(tabText);
		++count;
	} else if (selectTab.classList.contains('service__tab_active')) {
		selectTab.classList.remove('service__tab_active');
		selectTabs.splice(selectTabs.indexOf(tabText), 1);
		--count;
	}

	setBlure(selectTabs);
}

function setBlure(tabList) {
	const tabItems = document.querySelectorAll('.service__item');

	tabItems.forEach((item) => {
		item.classList.remove('service__item_blure');
	});

	if (tabList.length) {
		tabItems.forEach((elem) => {
			if (!tabList.includes(elem.dataset.tab)) {
				elem.classList.add('service__item_blure');
			}
		});
	}
}
