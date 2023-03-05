const loadNews1 = async() => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`;
    const res = await fetch(url);
    const data = await res.json();
    displayNews1(data.data); 
    
}
const loadNews2 = async() => {
    const url = `https://openapi.programming-hero.com/api/news/category/05`;
    const res = await fetch(url);
    const data = await res.json();
    displayNews1(data.data);    
}
const loadNews3 = async() => {
    const url = `https://openapi.programming-hero.com/api/news/category/04`;
    const res = await fetch(url);
    const data = await res.json();
    displayNews1(data.data);    
}
const displayNews1 = news1 => {
    const news1Container = document.getElementById('first-news');
        news1 = news1.slice(0, 1);
        news1.forEach(news2 => {
        const news1Div = document.createElement('div');
        console.log(news2);
        news1Div.innerHTML = `
        <div class="card mb-4 border-0 shadow" style="max-width: 850px; max-height: 330px ">
        <div class="row g-0">
        <div class="col-md-4">
        <img style= "height: 230px; width: 200px" src="${news2.thumbnail_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${news2.title}</h5>
            <p class="card-text">${news2.details.slice(0, 200)}...</p>
           <div class = "d-flex align-items-center justify-content-between"> 
                 <h5 class="card-text mx-2"><small class="text-muted">${news2.author.name}</small></h5>
                 <p><i class='bx bxs-star'></i>
                 <i class='bx bxs-star'></i>
                 <i class='bx bxs-star-half'></i>
                 ${news2.rating.number}</p>
                 <p class="card-text fs-4"><small class="text-muted"><i class='bx bx-bullseye'></i> ${news2.total_view}</small></p>
                 <P class= "fs-2"><i id ="btn-details" onclick= "loadDetails('${news2._id}')" class='bx bxs-right-arrow-circle' data-bs-toggle="modal" data-bs-target="#phoneModal"></i></p>
           </div>
        </div>
        </div>
    </div>
 </div>`;
news1Container.appendChild(news1Div);     
})
}

loadNews1();
loadNews2();
loadNews3();