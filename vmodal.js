document.addEventListener("DOMContentLoaded", function(){
	const modal = document.querySelector(".modal");
	const previews = document.querySelectorAll(".vgallery video");
	const modalVid = document.querySelector(".overlay-vid");

	previews.forEach((preview) => {
		preview.addEventListener("click", (e) => {
			e.preventDefault();
			modalVid.innerHTML = "";

			var source = document.createElement('source');
		    source.src = `./videos/${preview.getAttribute("data-src")}`;
		    console.log(`Adding src: ${source.src}`);
		    source.type = 'video/mp4';
		    modalVid.appendChild(source);
		    modalVid.load();
		    modal.style.display = "block";
		})
	});


	modal.addEventListener("click", (e) => {
		if (e.target.classList.contains("modal")) {
			modal.style.display = "none";
		}
	});
});