const input = require('readline-sync')


const wannaPlay = input.question('ola gostaria de jogar?\n\n(sim/nao)\n\nR: ')

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

const startGame = async () => {
    let gamePossibilities = [1,2,3,4,5,6,7,8,9]
    let coin = 1
    let gameDraw = '1  |  2  |  3\n---|-----|---\n4  |  5  |  6\n---|-----|---\n7  |  8  |  9'
    console.log(gameDraw)
    for(let i = gamePossibilities.length; i!== 0; i--){
        function checkEnd(){
            //cross
            if (gameDraw[0] == ('X' || 'O') && gameDraw[34] == ('X' || 'O') && gameDraw[68] == ('X' || 'O')){
                console.log('game ended')
                return true
                }
            if (gameDraw[12] == ('X' || 'O') && gameDraw[34] == ('X' || 'O') && gameDraw[56] == ('X' || 'O')){
                console.log('game ended')
                return true
                }
            //horizontal
            if (gameDraw[0] == ('X' || 'O') && gameDraw[6] == ('X' || 'O') && gameDraw[12] == ('X' || 'O')){
                console.log('game ended')
                return true
                }
            if (gameDraw[28] == ('X' || 'O') && gameDraw[34] == ('X' || 'O') && gameDraw[40] == ('X' || 'O')){
                console.log('game ended')
                return true
                }
            if (gameDraw[56] == ('X' || 'O') && gameDraw[62] == ('X' || 'O') && gameDraw[68] == ('X' || 'O')){
                console.log('game ended')
                return true
                }
            //vertical
            if (gameDraw[0] == ('X' || 'O') && gameDraw[28] == ('X' || 'O') && gameDraw[56] == ('X' || 'O')){
                console.log('game ended')
                return true
                }
            if (gameDraw[6] == ('X' || 'O') && gameDraw[34] == ('X' || 'O') && gameDraw[62] == ('X' || 'O')){
                console.log('game ended')
                return true
                }
            if (gameDraw[12] == ('X' || 'O') && gameDraw[40] == ('X' || 'O') && gameDraw[68] == ('X' || 'O')){
                console.log('game ended')
                return true
                }
            }
            if (checkEnd() == true) return;
    if (coin == 1){
    coin = coin + 1
    console.log(coin)
    const userATurn = await input.keyInSelect(gamePossibilities, 'Jogador 2 onde deseja posicionar?')
    indexToReplace = gameDraw.indexOf(gamePossibilities[userATurn])
    gamePossibilities.splice(userATurn, 1)
    gameDraw.replaceAt(indexToReplace, 'X')
    gameDraw = gameDraw.split('');
    gameDraw[indexToReplace] = 'X';
    gameDraw = gameDraw.join('');
    console.log(gameDraw)
    continue
    }
    if (coin == 2){
    coin = coin - 1
    const userBTurn = await input.keyInSelect(gamePossibilities, 'Jogador 2 onde deseja posicionar?')
    indexToReplace = gameDraw.indexOf(gamePossibilities[userBTurn])
    gamePossibilities.splice(userBTurn, 1)
    gameDraw.replaceAt(indexToReplace, 'X')
    gameDraw = gameDraw.split('');
    gameDraw[indexToReplace] = 'O';
    gameDraw = gameDraw.join('');
    console.log(gameDraw)
    continue
        }
    }
}
const gamechooseer = () => {
    const options = ['jogo da velha' , 'quero me matar', 'vou me matar hoje de noite']   
    const selected = input.keyInSelect(options, 'que jogo?')
    console.log(`you choosed ${options[selected]}`)
    if (selected === 0){startGame()}
    }

if (wannaPlay === 'sim'){gamechooseer()}
