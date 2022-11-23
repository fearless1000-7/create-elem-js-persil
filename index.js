

let body = document.body


{
    // point one
    let container = document.createElement('div')
    let photo_add = document.createElement('div')
    let img = document.createElement('img')
    let svg = document.createElement('i')
    let cost = document.createElement('div')
    let link = document.createElement('div')
    let svg1 = document.createElement('h3')
    let a = document.createElement('a')
    let span = document.createElement('span')

    photo_add.classList.add('photo_add')
    cost.classList.add('cost')
    span.classList.add('lc')
    link.classList.add('link')
    
    container.classList.add('container')
   img.classList.add('img')
   svg.classList.add('bx')
   svg.classList.add('bxs-plus-circle')
   

    // point two
    
    cost.innerHTML = "79.999"
    svg1.innerHTML="b"
    span.innerHTML = "сум./1шт"
    a.innerHTML = "Cтиральный порошок Persil лаванда итд..."
    

    a.href = "#"
    img.src = "persil.png"



    // point three
    photo_add.append(img, svg)
    cost.append(span)
    link.append(a)
    container.append(photo_add,cost,link)

    body.append(container,svg1)
} 

{/* <div class="container">
<div class="photo_add">
    <div class="photo"><img src="persil.png" alt=""></div>
    <div class="plus">i</div>
</div>
<div class="cost">
    79.999 <span class="lc">сум/1шт</span>
</div>
<div class="link"><a href="#">Cтиральный порошок <br> Persil лаванда итд...</a></div>
</div> */}
