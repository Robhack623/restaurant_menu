
const startersUL = document.getElementById('startersUL')
const entreesUL = document.getElementById('entreesUL')
const dessertsUL = document.getElementById('dessertsUL')
const filteredStarters = dishes.filter(dish => dish.course === 'Starters')
const filteredEntrees = dishes.filter(dish => dish.course === 'Entrees')
const filteredDesserts = dishes.filter(dish => dish.course === 'Desserts')


//starters
for(let index = 0; index < filteredStarters.length; index++) {

    const dish = filteredStarters[index]
    const dishItem = `
        <li class="parent">
            <div class="child1"><img class = "pictures" src = ${dish.imageURL} /></div>
            <div class="child2"><h3>${dish.title}</h3>
            <p>${dish.description}</p></div>
            <div class="child3"><p>$ ${dish.price}</p></div>
        </li>
    `
    startersUL.insertAdjacentHTML('beforeend', dishItem)
}

//entrees
for(let index = 0; index < filteredEntrees.length; index++) {

    const dish = filteredEntrees[index]
    const dishItem = `
    <li class="parent">
        <div class="child1"><img class = "pictures" src = ${dish.imageURL} /></div>
        <div class="child2"><h3>${dish.title}</h3>
        <p>${dish.description}</p></div>
        <div class="child3"><p>$ ${dish.price}</p></div>
    </li>
    `
    entreesUL.insertAdjacentHTML('beforeend', dishItem)
}

//desserts
for(let index = 0; index < filteredDesserts.length; index++) {

    const dish = filteredDesserts[index]
    const dishItem = `
    <li class="parent">
        <div class="child1"><img class = "pictures" src = ${dish.imageURL} /></div>
        <div class="child2"><h3>${dish.title}</h3>
        <p>${dish.description}</p></div>
        <div class="child3"><p>$ ${dish.price}</p></div>
    </li>
    `
    dessertsUL.insertAdjacentHTML('beforeend', dishItem)
}