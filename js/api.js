const loadNews = async(category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}

    `;
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data); 
}

const displayNews = news => {
   const newsContainer = document.getElementById('news-all');
       newsContainer.textContent = ``;
       // search Found start
       const searchSection = document.getElementById('no-search-found');
       if(news.length === 0){
         searchSection.classList.remove('d-none');
       }
       else{
         searchSection.classList.add('d-none');
       }
       // search Found End
       news.forEach(news1 => {
       const newDiv = document.createElement('div');
       console.log(news1);
       newDiv.classList.add('col');
       newDiv.innerHTML = `
       <div class="card mb-4 border-0 shadow" style="max-width: 850px; max-height: 330px ">
       <div class="row g-0">
       <div class="col-md-4">
       <img style= "height: 230px; width: 200px" src="${news1.thumbnail_url}" class="img-fluid rounded-start" alt="...">
       </div>
       <div class="col-md-8">
       <div class="card-body">
           <h5 class="card-title">${news1.title}</h5>
           <p class="card-text">${news1.details.slice(0, 200)}...</p>
          <div class = "d-flex align-items-center justify-content-between"> 
                <h5 class="card-text mx-2"><small class="text-muted">${news1.author.name}</small></h5>
                <p><i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half'></i>
                ${news1.rating.number}</p>
                <p class="card-text fs-4"><small class="text-muted"><i class='bx bx-bullseye'></i> ${news1.total_view}</small></p>
                <P class= "fs-2"><i id ="btn-details" onclick= "loadDetails('${news1._id}')" class='bx bxs-right-arrow-circle' data-bs-toggle="modal" data-bs-target="#phoneModal"></i></p>
          </div>
       </div>
       </div>
   </div>
</div>
       `;
       newsContainer.appendChild(newDiv);
   })
   toggleSpiner(false);
}

const searchNews = () => {
    toggleSpiner(true);
    const searchNewsField = document.getElementById('search-field1');
    const searchTextNews = searchNewsField.value;
    loadNews(searchTextNews);
    // searchNewsField.value = '';
}
document.getElementById('news-search').addEventListener('click', function(){
    searchNews();
})
document.getElementById('search-field1').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      searchNews();
    }
});

// Spinner Loader
 const toggleSpiner = isLoading =>{
      const loadSection = document.getElementById('loader');
      if(isLoading){
        loadSection.classList.remove('d-none');
      }
      else{
        loadSection.classList.add('d-none')
      }
 }

const loadDetails = async(news_id) => {
    const url = ` https://openapi.programming-hero.com/api/news/${news_id}`;
      const res = await fetch(url);
      const data = await res.json();
      displayDetails(data.data[0]); 
  }
  const displayDetails = details => {
    // console.log(details);
    const modalTitle = document.getElementById('newsTitle');
     modalTitle.innerText = details.title;
    const newsDeatsil = document.getElementById('modal-news-detail');
    newsDeatsil.innerHTML = `
    <div class="d-flex align-items-center justify-content-between my-2">
        <div class= "d-flex align-items-center">
        <img src= "${details.author.img}" class = "mx-2" style="width: 50px; border-radius: 50%" /> 
        <h4>${details.author.name}</h4>
        </div>
      <p>${details.author.published_date}</p>
    </div>
    <img src= "${details.image_url}" style="width: 350px; height: 200px "/>
    <P>${details.details}</p>
    `
  }
 //loadNews('01')
  //loadDetails();
  
  

