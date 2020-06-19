const movL = document.getElementById('movie-list');
const movie = document.getElementById('movie');
//class 


class Movie {
    constructor( id, title, imageUrl, rating, aa){
      this.id = id ;
      this.title =  title;
      this.imageUrl = imageUrl;
      this.rating = rating;
      this.aa = aa;
    }
  
  }

  class movieList {
    constructor(project) {
      this.project = project;
    }
  
    render (){
      const titleEL = document.createElement('div');
      titleEL.className = 'item';
      titleEL.innerHTML = 
      
      `    
      <div class="card  text-center mb-4">
      <a href="${this.project.aa}">
      <img class="card-img-top" src="${this.project.imageUrl}" alt="Card image cap">
      </a>
      <div class="card-body">
      <h5 class="card-title">${this.project.title}</h5>
      <p class="card-text">${this.project.rating}</p>
        <div class="d-flex justify-content-around ">
        <a href="${this.project.aa}" class="btn btn-warning">Go</a>
        <button id="edit" class="btn btn-success">Edit</button>
        <button  onclick="deleteDemo(${this.project.id})"  class="btn btn-danger">Delete</button>
        </div>
      </div>    
   </div>`
    //   <div class="card text-center mb-4">
    
    ;
    
    return titleEL;
    }
  };
  class movieT {
    project = [
      //商品清單
      new Movie(
        1,
        "The Unconventional Calculator",
        "./img/1.png",
        "-輸入數字可以加減乘除，運用ＪＳ印出該有計算的答案；增加navbar和連結-",
        "./Unconventional Calculator.html"
      ),
      new Movie(
        2,
        "Monster Killer",
        "./img/2.png",
        "-與怪獸對決，按攻擊鍵能攻擊補血鍵能補血，血量條的變化-",
        "./Monster Killer.html"
      ),
      new Movie(
        3,
        "DOM Movie",
        "./img/3.png",
        "-能增新喜愛的電影、圖片和連結-",
        "./DOM Movie Project.html"
      ),
      new Movie(
        4,
        "Custom Video Player",
        "./img/4.png",
        "-播放影集，能拉時間軸和暫停播放-",
        "./Video Player.html"
      ),
      new Movie(
        5,
        "Music Player",
        "./img/5.png",
        "-播放音樂，能拉時間軸和暫停播放-",
        "./Music Player.html"
      ),
    ];
  
    constructor(){}

    render() {
      const projList = document.createElement('div'); //產生ul標籤
      // cardList.classList = ' ';
      // cardList.id = 'main';
      for (const proj of this.project) {
        
        const projectItem = new movieList(proj); //宣告商品產生器
        const projEl = projectItem.render(); //呼叫商品資訊產生器
        projList.append(projEl); //呼叫li產生器prodEl
      }
      return projList;
    }
  
  }
  
  class Shop {
    render() {
      const renderHook = document.getElementById("movie-list");
  
      const projectList = new movieT();
      const projListEl = projectList.render();

      renderHook.append(projListEl);
    }
  }
  
  const shop = new Shop();
  shop.render(); 

  
  const showDemoList = () => {
    movL.classList = 'visible';
    movie.classList = 'invisible';
  };
  
  const showDemo = (srcUrl) => {
    movL.classList = 'invisible';
    movie.classList = 'visible';
    movie.style.marginTop = '100px';
    movie.innerHTML = `
    <iframe src="${srcUrl}" height="900px" width=100% ></iframe>
    `;
    
  };

const deleteDemo = id => {
  projectList.project.forEach((item, i) => {
    if (item.id == id) projectList.project.splice( i, 1)
  });
  movL.innerHTML = '';
  movL.append(projectList.render());
};
  
  const projectList = new movieT();
  projectList.render(); //呼叫整個產生器

  // const deleteDemo = (id) => {
  //   // console.log
  //   projectList.project.forEach((item, i) => {
  //     if(item.id == id) projectList.project.splice( i, 1);
  // });
  // movL.innerHTML = '';
  // projectList.render();
  
  // };


  