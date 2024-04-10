class xLink extends HTMLElement {
    static css = `
    div {
      margin-right: 1em;
      padding: 0;
    }
    a {
      text-decoration: none;
      color: black;
      padding-block: 1px 3px;
      padding-inline: 6px;
      font-weight: 500;
      border: 2px solid transparent;
      &:hover {
        color: oklch(27.12% 0.19 264);
        background-color: oklch(75% 0.19 264);
        border-radius: 999px;
        border-color: black;
      }
    }
    .comment {
      font-style: italic;
    }
    .nouveau:after, .change:after {
      border-radius: 3px;
      margin-left: .2rem;
      padding-inline: .3rem;
      font-size: .8rem;
      font-weight: bold;
    }

    .nouveau:after {
      content: "nouveau";
      color: #fff;
      background-color: green;
    }

    .change:after {
      content: "chang\xe9";
      color: #fff;
      background-color: red;
    }
  `;
    constructor(){
        super();
        this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        const url = this.getAttribute("href");
        const nom = this.innerHTML;
        const comment = this.getAttribute("comment") || "";
        const status = this.getAttribute("status") || "";
        this.shadowRoot.innerHTML = `
      <style>${xLink.css}</style>
      <div class="${status}">
        <a href="${url}" target="_blank">${nom}</a>
        <span class="comment">${comment}</span>
      </div>
    `;
    }
}
customElements.define("x-link", xLink);

