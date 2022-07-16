const prompt = require('prompt-sync')();
const fs= require('fs');

function List( name , quantity , price) {
    this.name = name ,
    this.quantity = quantity,
    this.price = price ,
    this.totalPrice = this.price*this.quantity 
}
exports.addItem =()=>{
    let Cart = JSON.parse(fs.readFileSync('shoppingCart.json'));
    const noOfItems = Number(prompt('enter the no. of items'));
    for (let i = 0; i < noOfItems; i++) {
        var name = prompt(`enter the ${i+1} name`);
        var quantity = Number(prompt(`enter the quantity of ${i+1} item`));
        var price = Number(prompt(`enter the price of ${i+1} item`)); 
        var total = price*quantity;
        var item = new List(name , quantity , price);
        Cart.push(item);
    }
    fs.writeFile("shoppingCart.json" , JSON.stringify(Cart),(err)=>
    {
        if(err)
         console.log('something went wrong');
         else
         console.log('item included succesfully');
    }
    )
}
