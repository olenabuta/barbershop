var mapPopup = document.querySelector(".modal-map"); /*шукаємо модальне вікно з мапою*/
var mapLink = document.querySelectorAll(".contacts-map"); /*шукаємо кнопку кліку щоб вспливло вікно з мапою*/
var mapClose = mapPopup.querySelector(".modal-close");

for (var i = 0; i < mapLink.length; i++) {
	mapLink[i].addEventListener("click", function(evt) {
		evt.preventDefault();
		mapPopup.classList.add("modal-show");
	});
}

mapClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
});
