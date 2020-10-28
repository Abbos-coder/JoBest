let burger = document.querySelector(".navbar__burger");
function myFunc() {
	burger.addEventListener("click", function () {
		
      let navItem = document.querySelector(".navbar__item");
		navItem.classList.toggle("showMenu");
		
		burger.classList.toggle('active')
	});
}
myFunc();
