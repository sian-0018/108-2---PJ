
const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const addBtn = document.getElementById('add-btn');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
// const userInputs = addMovieModal.getElementsByTagName('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');
const DD = document.getElementById('dd');
const listRoot = document.getElementById('movie-list');


const movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove('visible');
};

const deleteMovieHandler = movieId => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.i === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 0);
  // const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
  // listRoot.removeChild(listRoot.children[movieIndex]);
  closeMovieDeletionModal();
  updateUI();
};

const startDeleteMovieHandler = movieId => {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();

  const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
  let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

  confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

  // confirmDeletionButton.removeEventListener('click', deleteMovieHandler.bind(null, movieId)); // will not work :(
    
  cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal);

  cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    'click',
    deleteMovieHandler.bind(null, movieId)
  );
};

const main = document.getElementById("movie-list");

const renderNewMovieElement = (i, title, imageUrl, rating, aa) => {
  main.innerHTML = `<div class="card  text-center mb-4">
  <a href="./Unconventional Calculator.html">
  <img class="card-img-top" src="./img/1.png" alt="Card image cap">
  </a>
  <div class="card-body">
  <h5 class="card-title">The Unconventional Calculator</h5>
  <p class="card-text">-輸入數字可以加減乘除，運用ＪＳ印出該有計算的答案；增加navbar和連結-</p>
    <div class="d-flex justify-content-around ">
    <a href="./Unconventional Calculator.html" class="btn btn-warning">Go</a>
    <button id="edit" class="btn btn-success">Edit</button>
    <button  onclick="deleteDemo(1)" id="dd" class="btn btn-danger">Delete</button>
    </div>
  </div>    
  </div>
  <div class="card  text-center mb-4">
      <a href="./Monster Killer.html">
      <img class="card-img-top" src="./img/2.png" alt="Card image cap">
      </a>
      <div class="card-body">
      <h5 class="card-title">Monster Killer</h5>
      <p class="card-text">-與怪獸對決，按攻擊鍵能攻擊補血鍵能補血，血量條的變化-</p>
        <div class="d-flex justify-content-around ">
        <a href="./Monster Killer.html" class="btn btn-warning">Go</a>
        <button id="edit" class="btn btn-success">Edit</button>
        <button onclick="deleteDemo(2)" class="btn btn-danger">Delete</button>
        </div>
      </div>    
   </div>
   <div class="card  text-center mb-4">
      <a href="./DOM Movie Project.html">
      <img class="card-img-top" src="./img/3.png" alt="Card image cap">
      </a>
      <div class="card-body">
      <h5 class="card-title">DOM Movie</h5>
      <p class="card-text">-能增新喜愛的電影、圖片和連結-</p>
        <div class="d-flex justify-content-around ">
        <a href="./DOM Movie Project.html" class="btn btn-warning">Go</a>
        <button id="edit" class="btn btn-success">Edit</button>
        <button onclick="deleteDemo(3)" class="btn btn-danger">Delete</button>
        </div>
      </div>    
   </div>
   <div class="card  text-center mb-4">
      <a href="./Video Player.html">
      <img class="card-img-top" src="./img/4.png" alt="Card image cap">
      </a>
      <div class="card-body">
      <h5 class="card-title">Custom Video Player</h5>
      <p class="card-text">-播放影集，能拉時間軸和暫停播放-</p>
        <div class="d-flex justify-content-around ">
        <a href="./Video Player.html" class="btn btn-warning">Go</a>
        <button id="edit" class="btn btn-success">Edit</button>
        <button onclick="deleteDemo(4)" class="btn btn-danger">Delete</button>
        </div>
      </div>    
   </div>
   <div class="card  text-center mb-4">
      <a href="./Music Player.html">
      <img class="card-img-top" src="./img/5.png" alt="Card image cap">
      </a>
      <div class="card-body">
      <h5 class="card-title">Music Player</h5>
      <p class="card-text">-播放音樂，能拉時間軸和暫停播放-</p>
        <div class="d-flex justify-content-around ">
        <a href="./Music Player.html" class="btn btn-warning">Go</a>
        <button id="edit" class="btn btn-success">Edit</button>
        <button onclick="deleteDemo(5)" class="btn btn-danger">Delete</button>
        </div>
      </div>    
   </div>
  `;


  const newMovieElement = document.createElement('div');
  newMovieElement.className = 'item';
  newMovieElement.innerHTML = `

            <div class="card text-center mb-3">
              <a href="/html/Unconventional Calculator.html">
              <img class="card-img-top" src="${imageUrl}" alt="Card image cap">
            </a>
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${rating}</p>
                <div class="d-flex justify-content-around ">
                <a href="${aa}" class="btn btn-warning">Go</a>
                <a href="#" class="btn btn-success">Add</a>
                <button  class="btn btn--danger">Delete</button>
                </div>
            </div>
     </div>

  `;
  newMovieElement.addEventListener( 'click',startDeleteMovieHandler.bind(null, i));
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
  // function() {}
  addMovieModal.classList.add('visible');
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  const aaValue = userInputs[3].value; 

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5 ||
    aaValue.trim() === ''
  ) {
    alert('Please enter valid values (rating between 1 and 5).');
    return;
  }

  const newMovie = {
    i: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
    aa: aaValue 
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.i,
    newMovie.title,
    newMovie.image,
    newMovie.rating,
    newMovie.aa
  );
  updateUI();
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInput();
};



addBtn.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);






