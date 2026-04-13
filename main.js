class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`
        <header>
            <button id="side-menu" class="hf-btn">|||</button>
            <a class="hf-a" href="index.html">Titulo interesante</a>
            <button id="cart" class="hf-btn">cart</button>
        </header>
        `;
    }
}
class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`
        <footer>
            <a class="hf-a" href="about-us.html">Acerca de</a>
            Pie de pagina
            <a class="hf-a" href="contact.html">Contacto</a>
        </footer>
        `;
    }
}

customElements.define('custom-header',MyHeader);
customElements.define('custom-footer',MyFooter);