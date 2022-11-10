class AppBar extends HTMLElement{
    constructor(){
        super();
        this.ShadowDOM = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.ShadowDOM.innerHTML=`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host{
            font-size: 2.5rem;
            text-align: center;
        }
        h2{
            padding: 2rem;
        }
        </style>
        
        <h2>WEB RECIPE</h2>
        `
    }
}
customElements.define('app-bar', AppBar);