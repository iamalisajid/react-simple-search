import React from 'react';

const SearchList = ({meals}) => {
    return meals ? (
        <div>
            {meals.map((meal, index) => (
                <div key={index}>
                    <h1>{meal.strMeal}</h1>
                    <img src={meal.strMealThumb} alt="meal-thumbnail"/>
                </div>
            ))}
        </div>
    ) : (
        <p>Try searching for a meal</p>
    )
}

export default SearchList