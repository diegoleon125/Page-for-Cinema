class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`
        <div id="page-overlay"></div>
        <aside id="page-menu">
            <ul>
                <li>
                    <a class="page-a" href="/EcoCine/peliculas">Películas</a>
                </li>
                <li>
                    <a class="page-a" href="/EcoCine/cines">Cines</a>
                </li>
                <li>
                    <a class="page-a" href="/EcoCine/dulceria">Dulcería</a>
                </li>
                <li>
                    <a class="page-a" href="/EcoCine/promociones">Promociones</a>
                </li>
                <li>
                    <a class="page-a" href="/EcoCine/contactanos">Contáctanos</a>
                </li>
            </ul>
        </aside>
        <div id="header-space"></div>
        <header>
            <button id="side-menu" class="page-btn icon">
                &#9776;
            </button>
            <a id="title-menu" class="page-a" href="/EcoCine">
                <span>Eco</span>Cine
            </a>
            <div id="page-dropdown">
                <button id="cart" class="page-btn icon">
                    <i class="fi fi-rr-shopping-cart"></i>
                </button>
                <ul>
                    <li>
                        <button class="page-a">Vaciar carrito</button>
                    </li>
                    <li>
                        <a class="page-a page-a-btn" href="/EcoCine/pagar">Procesar compra</a>
                    </li>
                </ul>
            </div>
        </header>
        `;

        const btn_menu = this.querySelector("#side-menu");
        const menu = this.querySelector("#page-menu");
        const overlay = this.querySelector("#page-overlay");
        const btn_cart = this.querySelector("#cart");

        btn_menu.onclick = () => {
            menu.classList.toggle("active");
            overlay.classList.toggle("active");
        };
        overlay.onclick = () => {
            menu.classList.toggle("active");
            overlay.classList.toggle("active");
        };
    }
}
class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`
        <footer>
            <a class="page-a" href="/EcoCine/acerca-de-nosotros">Acerca de nosotros</a>
            <a class="page-a" href="/EcoCine/contactanos">Contáctanos</a>
        </footer>
        `;
    }
}

customElements.define('custom-header',MyHeader);
customElements.define('custom-footer',MyFooter);
