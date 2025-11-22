const form = document.getElementById('formContato');

function restartAnimation(el, shakeClass) {
    el.classList.remove(shakeClass);
    void el.offsetWidth;
    el.classList.add(shakeClass);
}

form.addEventListener('submit', function (e) {
    let valido = true;

    this.querySelectorAll('.inputs').forEach(campo => {
        const id = campo.id;
        const errEl = document.getElementById('err-' + id);

        if (!campo.value.trim()) {
            valido = false;

            campo.classList.add('campo-erro');
            restartAnimation(campo, 'campo-shake');

            if (errEl) errEl.classList.add('show');

            setTimeout(() => {
                campo.classList.remove('campo-erro', 'campo-shake');
                if (errEl) errEl.classList.remove('show');
            }, 5000);
        }
    });

    if (!valido) {
        e.preventDefault();
        const firstInvalid = this.querySelector('.campo-erro');
        if (firstInvalid) firstInvalid.focus();
        return;
    }

    e.preventDefault();
    mostrarPopup();
    form.reset();
});


function mostrarPopup() {
    const pop = document.getElementById("popup-enviado");

    pop.style.display = "flex";

    setTimeout(() => {
        pop.style.display = "none";
    }, 2000);

    pop.addEventListener("click", () => {
        pop.style.display = "none";
    });
}
