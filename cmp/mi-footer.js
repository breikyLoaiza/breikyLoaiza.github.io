class MiFooter extends HTMLElement {​​

  connectedCallback() {​​

    this.innerHTML = /* html */

      `Copyright &copy; Loaiza Sebastian Jose Luis`;

 }​​}​​

customElements.define("mi-footer", MiFooter);
