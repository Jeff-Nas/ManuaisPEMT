document.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.getElementById('navbar-container');

    fetch('/responsive-navbar/navbar.html')
        .then(res => res.text())
        .then(html => {
            navbarContainer.innerHTML = html;

            // ✅ Agora que o HTML foi inserido, podemos acessar os elementos
            const btMenu = document.getElementById('btnMenu');
            const menu = document.querySelector(".mobile-menu");
            const icon = document.querySelector('.btnIcon');

            if (btMenu && menu && icon) {
                btMenu.addEventListener('click', () => {
                    const isOpen = menu.classList.toggle("open");

                    document.body.classList.toggle('no-scroll', isOpen)

                    icon.classList.add("animate");

                    setTimeout(() => {
                        icon.src = isOpen
                            ? "/responsive-navbar/assets/svg/close_white_36dp.svg"
                            : "/responsive-navbar/assets/svg/menu_white_36dp.svg";
                        icon.classList.remove("animate");
                    }, 150);
                });
            } else {
                console.warn("⚠️ Elementos da navbar não foram encontrados.");
            }
        })
        .catch(error => {
            console.error("Erro ao carregar a navbar:", error);
        });
});


