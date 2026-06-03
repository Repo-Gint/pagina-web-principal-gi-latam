fetch('/components/navbar.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('navbar-container').innerHTML = html;

        const btn = document.querySelector('.mobile-menu-btn');
        const menu = document.querySelector('.mobile-menu');

        if (btn && menu) {
            btn.addEventListener('click', () => {
                menu.classList.toggle('active');
            });
        }

        window.addEventListener('pageshow', () => {
            const menu = document.querySelector('.mobile-menu');
            if (menu) {
                menu.classList.remove('active');
            }

            document.querySelectorAll('.mobile-submenu').forEach(el => {
                el.classList.remove('active');
            });
        });

        document.addEventListener('click', function (e) {
            const link = e.target.closest('.dropdown-toggle');
            if (!link) return;

            e.preventDefault();

            const parent = link.closest('.mobile-submenu');
            if (parent) {
                parent.classList.toggle('active');
            }
        });

        document.addEventListener("DOMContentLoaded", function () {
    const acordeonItems = document.querySelectorAll(".item-acordeon");

    acordeonItems.forEach(item => {
        const boton = item.querySelector(".encabezado-acordeon");

        boton.addEventListener("click", () => {

            const estaActivo = item.classList.contains("activo");

            acordeonItems.forEach(i => i.classList.remove("activo"));

            if (!estaActivo) {
                item.classList.add("activo");
            }
        });
    });
});

function toggleMobileDropdown(element, event) {
    event.preventDefault(); 
    
    const parentLi = element.parentElement;
    
    parentLi.classList.toggle('active');
    
    const subMenu = parentLi.querySelector('.sub-menu');
    if (subMenu) {
        subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
    }
}

    })
    .catch(err => console.log("Error navbar:", err));