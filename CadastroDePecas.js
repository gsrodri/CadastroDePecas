let peso = 150

if (peso < 100)
{
    console.log('Não foi possivel cadastrar o produto, peso deve conter 100g no mínimo.')
}else {
    console.log('Peça cadastrada com sucesso.')
}

let listaDePecas = ['cabedal', 'vidro', 'volante', 'calota']

if (listaDePecas.length < 3)
{
    console.log('Possivel cadastrar mais peças')
} else {
    console.log('Não possivel cadastrar, muitas peças cadastradas.Max: 3')
}

let nomePeca = 'vidro'

if (nomePeca.length < 3)
{
    console.log('Não possivel cadastrar, nome invalido. Min: 3 caracteres')
} else if (nomePeca.length == 0){
    console.log('O nome nao pode ser vazio')
}
else {
    console.log('Nome cadastrado com sucesso')
}

