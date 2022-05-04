//need readline-sync since im not going to write 1000 lines of code that I don't even understand
const input = require('readline-sync')

const wannaPlay = () => {let banana = input.question('ola gostaria de jogar?\n\n(sim/nao)\n\nR: '); 
                if(banana === 'sim'){startGame()}}
                
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
            if ((gameDraw[0] == ('X') && gameDraw[34] == ('X') && gameDraw[68] == ('X')) || 
            (gameDraw[12] == ('X') && gameDraw[34] == ('X') && gameDraw[56] == ('X')) ||
            (gameDraw[0] == ('X') && gameDraw[6] == ('X') && gameDraw[12] == ('X')) ||
            (gameDraw[28] == ('X') && gameDraw[34] == ('X') && gameDraw[40] == ('X')) ||
            (gameDraw[56] == ('X') && gameDraw[62] == ('X') && gameDraw[68] == ('X')) ||
            (gameDraw[0] == ('X') && gameDraw[28] == ('X') && gameDraw[56] == ('X')) ||
            (gameDraw[6] == ('X') && gameDraw[34] == ('X') && gameDraw[62] == ('X')) ||
            (gameDraw[12] == ('X') && gameDraw[40] == ('X') && gameDraw[68] == ('X')))
            {
                return true
                }
             if ((gameDraw[0] == ('O') && gameDraw[34] == ('O') && gameDraw[68] == ('O')) || 
            (gameDraw[12] == ('O') && gameDraw[34] == ('O') && gameDraw[56] == ('O')) ||
            (gameDraw[0] == ('O') && gameDraw[6] == ('O') && gameDraw[12] == ('O')) ||
            (gameDraw[28] == ('O') && gameDraw[34] == ('O') && gameDraw[40] == ('O')) ||
            (gameDraw[56] == ('O') && gameDraw[62] == ('O') && gameDraw[68] == ('O')) ||
            (gameDraw[0] == ('O') && gameDraw[28] == ('O') && gameDraw[56] == ('O')) ||
            (gameDraw[6] == ('O') && gameDraw[34] == ('O') && gameDraw[62] == ('O')) ||
            (gameDraw[12] == ('O') && gameDraw[40] == ('O') && gameDraw[68] == ('O')))
            {
                return true
                }
            }
    if (coin == 1){
    coin = coin + 1
    const userATurn = await input.keyInSelect(gamePossibilities, 'Jogador 1 onde deseja posicionar?')
    indexToReplace = gameDraw.indexOf(gamePossibilities[userATurn])
    gamePossibilities.splice(userATurn, 1)
    gameDraw.replaceAt(indexToReplace, 'X')
    gameDraw = gameDraw.split('');
    gameDraw[indexToReplace] = 'X';
    gameDraw = gameDraw.join('');
    console.log(`${gameDraw}\n\n`)
    if (checkEnd() == true) return console.log('Jogador 1 venceu!, FIM DE JOGO!'), wannaPlay();
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
    console.log(`${gameDraw}\n\n`)
    if (checkEnd() == true) return console.log('Jogador 2 venceu!, FIM DE JOGO!'), wannaPlay();
    continue
        }
    }
}
wannaPlay()
