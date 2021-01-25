document.addEventListener("DOMContentLoaded", function(){
	const modal = document.querySelector(".modal");
	const previews = document.querySelectorAll(".igallery img");
	const modalImg = document.querySelector(".overlay-img");

	previews.forEach((preview) => {
		preview.addEventListener("click", () => {
			modalImg.src = `./images/${preview.getAttribute("data-src")}`;
			modal.style.display = "flex";
		});
	});

	modal.addEventListener("click", (e) => {
		if (e.target.classList.contains("modal")) {
			modal.style.display = "none";
		}
	});
});