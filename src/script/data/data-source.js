const API_URL='https://www.themealdb.com/api/json/v1/1/search.php?s=';

class DataSource {
    static searchMeal(keyword) {
        return fetch (`${API_URL}${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.meals) {
                return Promise.resolve(responseJson.meals);
            } else {
                return Promise.reject(`${keyword} is not found`)
            }
        })
    }
}
export default DataSource;