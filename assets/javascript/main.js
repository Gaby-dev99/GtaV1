var contador = document.getElementById("contador");

function actualizarContador() {
    if (!contador) return; // AGREGA ESTA LÍNEA
    var fechaLanzamiento = new Date("November 19, 2026 00:00:00").getTime();
    var fechaActual = new Date().getTime();
    var diferencia = fechaLanzamiento - fechaActual;
    if (diferencia <= 0) {
        contador.textContent = "Ya disponible";
        return;
    }
    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    var minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    contador.textContent = dias + " dias, " + horas + " horas, " + minutos + " minutos";
}

actualizarContador();
setInterval(actualizarContador, 60000);

var videoCaja = document.querySelector(".video-youtube");

if (window.location.protocol === "file:" && videoCaja) {
  videoCaja.innerHTML = "<div class=\"aviso-video\"><h3>Trailer oficial</h3><p>YouTube bloquea algunos videos incrustados cuando la pagina se abre con doble clic. Para verlo dentro de la pagina usa Live Server, o abre el trailer directo en YouTube.</p><a class=\"boton\" href=\"https://www.youtube.com/watch?v=VQRLujxTm3c\" target=\"_blank\" rel=\"noopener\">Ver en YouTube</a></div>";
}
// SCROLL COVER EFFECT
var scrollCover = document.querySelector(".scroll-cover");
var scrollLogo = document.querySelector(".scroll-cover-logo");
var hero = document.querySelector(".hero");

function actualizarCover() {
    var heroHeight = hero.offsetHeight;
    var scrollY = window.pageYOffset;
    var progress = Math.min(scrollY / (heroHeight * 0.75), 1);

    scrollCover.style.opacity = progress;

    if (progress > 0.4) {
        var logoProgress = (progress - 0.4) / 0.6;
        scrollLogo.style.opacity = logoProgress;
        scrollLogo.style.transform = "scale(" + (0.92 + 0.08 * logoProgress) + ")";
    } else {
        scrollLogo.style.opacity = 0;
        scrollLogo.style.transform = "scale(0.92)";
    }

    scrollCover.style.pointerEvents = progress >= 1 ? "auto" : "none";

    // Ocultar al salir del hero
    if (window.pageYOffset > hero.offsetHeight) {
        scrollCover.style.display = "none";
    } else {
        scrollCover.style.display = "flex";
    }
}

window.addEventListener("scroll", actualizarCover, { passive: true });