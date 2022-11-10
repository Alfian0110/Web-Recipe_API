class SearchBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:'open'});
    }
    connectedCallback(){
        this.render();
    }
    /**
     * @param {any} event
     */
    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }
    get value(){
        return this.shadowDOM.querySelector('#searchElement').value;
    }

    render(){
        this.shadowDOM.innerHTML=`
        <style>
        #searchElement{
            padding: 1.2rem;
            font-size: 1rem;
            border: none;
            border-radius: 10px;
        }
        #searchButtonElement{
            padding: 1.2rem;
            font-size: 1rem;
            border: none;
            border-radius: 10px;
            background: #EB6440;
            color: #EFF5F5;
        }
        </style>

            <input type="search" placeholder="Search Meal" id="searchElement">
            <button type="submit" id="searchButtonElement">SEARCH</button>
        `;
        this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}
customElements.define('search-bar', SearchBar);