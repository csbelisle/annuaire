class xLink extends HTMLElement {
  static css = `
    div {
      margin-right: 1em;
    }
    a {
      text-decoration: none;
      color: black;
      padding-block: 1px 3px;
      padding-inline: 6px;
      margin-left: -6px;
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
      color: white;
      background-color: green;
    }

    .change:after {
      content: "changé";
      color: white;
      background-color: red;
    }
  `;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
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
class xButton extends HTMLElement {
  static css = `
    a {
      display: inline-block;
      width: fit-content;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: bold;
      font-stretch: -0.1em;
      font-size: 0.85rem;
      font-family: sans-serif;
      color: darkblue;
      border: 2px solid darkblue;
      border-radius: 8px;
      padding: 0.4rem 0.6rem;
      margin-inline: .15rem;
      background-color: rgba(144, 144, 248, 0.2);
      &:hover {
        background-color: rgba(248, 144, 144, 0.2);
        border-color: darkred;
        color: darkred !important;
        scale: 1.05;
      }
      &:visited {
        color: darkblue;
      }
    }
  `;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const url = this.getAttribute("href");
    const nom = this.innerHTML;
    this.shadowRoot.innerHTML = `
      <style>${xButton.css}</style>
      <a href="${url}">${nom}</a>
    `;
  }
}
customElements.define("x-link", xLink);
customElements.define("x-button", xButton);
