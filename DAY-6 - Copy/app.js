if(localStorage.getItem('basket') === null) {
    localStorage.setItem('basket',JSON.stringify([]))
}


let buttons = document.querySelectorAll('.btn');

for(let btn of buttons) {
    btn.addEventListener('click',function(e) {
        e.preventDefault();
        let basket = JSON.parse(localStorage.getItem('basket'));
        let id = e.target.parentElement.parentElement.parentElement.id;
        let img = e.target.parentElement.previousElementSibling.src;
        let prod_name = e.target.previousElementSibling.previousElementSibling.innerText;
        let prod_price = e.target.previousElementSibling.innerText;

        let existProd = basket.find(x => x.id === id)

        if(existProd === undefined) {
            basket.push({
                id: id,
                name: prod_name,
                price: prod_price,
                image: img,
                count: 1
            })
        }
        else{
            existProd.count += 1;
        }

       

        localStorage.setItem('basket',JSON.stringify(basket))
        ShowCount();
    })
}


function ShowCount() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    let count = document.getElementById('count');
    count.innerHTML = basket.length
}

ShowCount();