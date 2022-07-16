const prompt = require('prompt-sync')();
const fs= require('fs');


exports.changeQuantity=() =>
{
    const name = prompt('enter the item name whose quantity u want to change')
   const newQuantity = Number(prompt('enter the new quantity'));
    let Cart = JSON.parse(fs.readFileSync('shoppingCart.json'));
   let CartNew = Cart.filter(items=> items.name == name);
    Cart = Cart.filter(items=> items.name != name);
    CartNew[0].quantity = newQuantity;
    CartNew[0].totalPrice = newQuantity* CartNew[0].price;
    Cart.push(CartNew[0]);
    fs.writeFile('shoppingCart.json',JSON.stringify(Cart),(err)=>
    {
        if(err)
         console.log('something went wrong');
         else
        console.log('item updated succesfully');
    }
    )

}
