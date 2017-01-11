var btn = document.createElement("button")
btn.textContent = "おすとばくはつする"
btn.setAttribute("class", "chr-ext")
btn.addEventListener("click", () => {
    alert("くろーむえくすてんしょん")
})

var body = document.getElementsByTagName("body")
body[0].appendChild(btn)