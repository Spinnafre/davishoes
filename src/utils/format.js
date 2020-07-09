// Estou exportando a função format apelidade de formatPrice
export const {format:formatPrice}=new Intl.NumberFormat('pt-BR',{
    style:'currency',
    currency:'BRL'
})


/* 
Ao invés de exportar o valor formatado diretamente (number) irei exportar a função format no qual ela aceita
um parâmetro que é o número que é desejado formatar.

new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number)

*/