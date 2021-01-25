document.addEventListener("DOMContentLoaded", function(){
	const rootElement = document.documentElement;
	const bttButton = document.querySelector(".btt-button");

	bttButton.addEventListener("click", () => {
		rootElement.scrollTo({
			top: 0,
			behavior: "smooth"
		})
	});

	document.addEventListener("scroll", () => {
		var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
		if ((rootElement.scrollTop / scrollTotal ) > 0.25) {
		    bttButton.style.display = "block";
		} else {
		    bttButton.style.display = "none";
		}
	})
});