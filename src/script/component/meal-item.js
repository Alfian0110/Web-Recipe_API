class Mealitem extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:'open'})
    }
    
    set meal(meal){
        this._meal = meal;
        this.render();
    }
    render(){
        this.shadowDOM.innerHTML=`
        <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            #cardMeal{
                margin-top: 30px;
                text-align: center;
                padding: 30px;
                background: #497174;
                border-radius: 15px;
                max-width: 800px;
                box-shadow: 2px 4px 7px 0 rgba(0, 0, 0, 0.12);
            }
            .nameCard{
                font-size: 1.5rem;
                color: #EFF5F5;
            }
            img{
                border-radius: 10px;
                max-width : 350px;
            }
            .catCard{
                font-size: 1rem;
                margin: 0.8rem;
            }
            .instCard{
                padding: 20px;
                margin: 0.9rem;
                background: #D6E4E5;
                border-radius: 10px;
                text-align: justify;
            }
        </style>


        <div id="cardMeal">
            <div id="cardImg">
                <img src="${this._meal.strMealThumb}" alt="meal image">
            </div>
            <div id="cardDesc">
                <h3 class="nameCard">${this._meal.strMeal}</h3>
                <p class="catCard"> category : ${this._meal.strCategory}</p>
                <p class="instCard">instruction: ${this._meal.strInstructions}</p>
            </div>
        </div>
        `;
    }
}
customElements.define('meal-item', Mealitem);