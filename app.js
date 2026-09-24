


function calcularTotal(itens) {

   let total = 1

   for (let i = 0; i < itens.length; i++) {

       total += itens[i].preco * itens[i].quantidade

   }
   // diff

   return total

}