
const search = document.getElementById('search');
const submit = document.getElementById('submit');
const mealsEl = document.getElementById('meals');
const resultHeading = document.getElementById('result-heading');
const single_mealEl = document.getElementById('single-meal');


// //json data
// const data =[
//     {
//         search: 'salad',
//         localJsonUrl:'./data/salad.json' ,
//     },
//     {
//         search: 'fish',
//         localJsonUrl:'./data/fish.json' ,
//     },
//     {
//         search: 'chicken',
//         localJsonUrl:'./data/chicken.json' ,
//     }
// ]

function getLocalURL(search){
    return data.filter((term) => term.search === search);
}

//搜索餐點並從API獲取
function searchM(e){
    e.preventDefault();

    //清除單餐
    single_mealEl.innerHTML='';

    //獲取搜索詞
    const term = search.value;

    //檢查是否為空
    if (term.trim()){
        fetch(`https://chicken-coop.p.rapidapi.com/games?title=${term}`, 
        {
        method : "GET",
        headers : 
                {
                "x-rapidapi-host": "chicken-coop.p.rapidapi.com"
                ,
                "x-rapidapi-key": "f758ba2c80msh1fab6129913860ap1b5b3bjsn75881f59ce69"
                },
            
        })
        .then(data => data.json())
        .then (response => {
            console.log(response);
        resultHeading.innerHTML = `<h2>Search Results for '${term}':</h2>`;        
        if (response.result === null) {         
             resultHeading.innerHTML =            
             '<p>The are no search results. Try again!</p>';        
            } else {          
                mealsEl.innerHTML = response.result           
                .map(              
                    meal => `              
                    <div class="meal">  
                    <h3>${meal.platform}</h3>
                        <h6>${meal.title}</h6>  
                    <div class="meal-info" data-mealID ="${meal.title}">       
                        <h3>${meal.platform}</h3>
                        <h5><br>${meal.title}</h5>                
                        </div>              
                    </div>            
                     `            
                )          
                     .join('');        
                    }      
        })
        .catch(err => {
        console.log(err);
        }) ;

        
/* <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />                  */
                        // <div class="meal-info" data-mealID="${meal.idMeal}"> 
        // fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        // resultHeading.innerHTML = `<h2>Search Results for '${term}':</h2>`;        
        // if (data.meals === null) {         
        //      resultHeading.innerHTML =            
        //      '<p>The are no search results. Try again!</p>';        
        //     } else {          
        //         mealsEl.innerHTML = data.meals            
        //         .map(              
        //             meal => `              
        //             <div class="meal">             
        //                 <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />                 
                        // <div class="meal-info" data-mealID="${meal.idMeal}">                    
                        //     <h5> ${meal.strMeal} </h5>                
                        // </div>              
        //             </div>            
        //              `            
        //         )          
        //              .join('');        
        //             }      
        //         }); 
                
                
                


        // Clear search text    
        search.value = '';
    } else {
        alert('Please enter a search term')
    }

}

// Fetch meal by ID




const getMealById = (mealID) => {
    fetch(`https://chicken-coop.p.rapidapi.com/games?title=${mealID}`, 
        {
        method : "GET",
        headers : 
                {
                "x-rapidapi-host": "chicken-coop.p.rapidapi.com"
                ,
                "x-rapidapi-key": "f758ba2c80msh1fab6129913860ap1b5b3bjsn75881f59ce69"
                },
            
        })
    .then((res) => res.json())
    .then((data) => {
        console.log('data2',data.result);
        const platform = data.result[0].platform;
        const title = data.result[0].title;
        addMealToDOM(platform,title);
    });
};

// Add meal to DOM
function addMealToDOM (platform,title) {
    const ingredients = [];

    // console.log('ingredients', ingredients);
    single_mealEl.innerHTML = `

    <div class="single-meal-info text-center">  
     <h3>Platform : ${platform}</h3>
     <h5><br>Title : ${title}</h5>      
    </div>
    
    `;
    };


    // Event Listeners
    submit.addEventListener('submit', searchM);

    mealsEl.addEventListener('click', (e) => {
        // console.log('e.path', e.path);
        const mealInfo = e.path.find(item => {
        console.log('mealEl', item);
        if (item.classList.contains('meal-info')) {
        // console.log('item', item);
        return item;
        } else {
        return false;
        }
        });
        // console.log('mealInfo', mealInfo);
if (mealInfo) {
    const mealID = mealInfo.getAttribute('data-mealid');
    console.log('mealid', mealID);
    getMealById(mealID);
}
        });


