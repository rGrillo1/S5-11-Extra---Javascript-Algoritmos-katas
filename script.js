 function calculateSalary(salarioF, valorVendas) {
     const limitVendas = 1200
     let salarioT = 0

     if(valorVendas > limitVendas) {
     salarioT = salarioF + (valorVendas * (5/100))
         return salarioT
     }
     else {
        salarioT = salarioF + (valorVendas * (3/100))
         return salarioT
     }
 }
  
 let salarioTotal = calculateSalary(1000, 1000)
 

//--------------------------------------------------------------------------------------------||------------------------------------------------------------------// 

 function cashMachine(valorSaque, salario) {

   
    let notaDuzentos = 0
    let notaCem = 0
    let notaCinquenta = 0
    let salarioRestante = salario - valorSaque

   while(valorSaque >= 200){
        valorSaque = valorSaque - 200
        notaDuzentos++
   }

   while(valorSaque >= 100) {
       valorSaque = valorSaque - 100
       notaCem++
   }

   while(valorSaque >= 50) {
       valorSaque = valorSaque - 50
       notaCinquenta++
   }

   console.log(`Foram sacadas ${notaDuzentos} notas de 200R$, Foram sacadas ${notaCem} notas de 100R$, Foram sacadas ${notaCinquenta} notas de 50R$, Seu sálario restante é ${salarioRestante}`)
 }
 
 cashMachine(500, salarioTotal)

 //--------------------------------------------------------------------------------------------||------------------------------------------------------------------//

 function calculateStock(quantidadeEm, quantidadeMax, quantidadeMin) {
    
    let quantidadeMed = (quantidadeMax + quantidadeMin)/2

    if(quantidadeEm >= quantidadeMed) {
        return "Não efetuar compra"
    } 

        return "Efetuar compra"

 }

 calculateStock(50,200,30)

 //--------------------------------------------------------------------------------------------||------------------------------------------------------------------//

 function calculateAge(anoNasc, anoAtual) {

    let idade = anoAtual - anoNasc
    let idadeMes = idade * 12
    let idadeDias = idade * 365
    let idadeSema = idade * 52

    return `Minhada idade é: ${idade}, em meses: ${idadeMes}, em dias: ${idadeDias}, em semanas: ${idadeSema}`

 }
 
 calculateAge(1994,2022)

  //--------------------------------------------------------------------------------------------||------------------------------------------------------------------//

 
 function getDiagonal(matriz) {

    let diagonal = []

    for (i = 0; i < matriz.length; i++ ) {
        diagonal.push(matriz[i][i]) 
        
    }
    console.log(diagonal)
}

 getDiagonal([[5, 2, 3], [5, 2, 3], [5, 2, 3]], 3, 3)