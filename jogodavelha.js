function main() {
    // Criar o tabuleiro e jogadores, zerar as variaveis.
    // 
    // 0: posição vazia
    // 1: jogada na posição do jogador 1
    // 2: jogada na posição do jogador 2.
    var velha;
    var linha;
    var coluna;
    var haVencedor;

    haVencedor = false;
    var tabuleiro = createArray(9);

    // Limpar/zerar o tabuleiro.
    var index;

    for (index = 0; index <= 8; index++) {
        tabuleiro[index] = 0;
    }
    var jogador1;

    jogador1 = "jogador1";
    var jogador2;

    jogador2 = "jogador2";
    var jogada;

    // Iniciar o jogo, definir quem joga primeiro.
    var jogadordavez;

    jogadordavez = 1;

    // Anotar/registrar a jogada, do primeiro jogador.
    velha = 1;
    do {
        window.alert(tabuleiro[0].ToString() + tabuleiro[1] + tabuleiro[2]);
        window.alert(tabuleiro[3].ToString() + tabuleiro[4] + tabuleiro[5]);
        window.alert(tabuleiro[6].ToString() + tabuleiro[7] + tabuleiro[8]);
        jogada = "";
        window.alert("Digite a posição de sua peça JOGADOR" + jogadordavez);
        jogada = window.prompt('Enter a value for jogada');
        if (validaPosicao(jogada)) {
            linha = parseInt(jogada.charAt(0));
            coluna = parseInt(jogada.charAt(2));
            window.alert("Linha: " + linha + "; Coluna: " + coluna);

            // Verificar se a posição "jogada" é valida.
            // Convencer a jogada texto em dois inteiros linha e coluna.
            // Converter a jogada texto em dois inteiros linha e coluna
            // Simula a função Serial.parseint() do Arduino
            if (tabuleiro[3 * linha + coluna] == 0) {
                tabuleiro[3 * linha + coluna] = jogadordavez;

                // Verificar o tabuleiro, se houve ganhador ou empate, finalizar o jogo.
                if (tabuleiro[0] == jogadordavez && tabuleiro[1] == jogadordavez && tabuleiro[2] == jogadordavez || tabuleiro[3] == jogadordavez && tabuleiro[4] == jogadordavez && tabuleiro[5] == jogadordavez || tabuleiro[6] == 1 && tabuleiro[7] == jogadordavez && tabuleiro[8] == jogadordavez) {
                    haVencedor = true;
                    window.alert("vencedor: jogador " + jogadordavez);
                } else {

                    // Verificar a jogada vencedoras nas linhas
                    if (tabuleiro[0] == jogadordavez && tabuleiro[3] == jogadordavez && tabuleiro[6] == jogadordavez || tabuleiro[1] == jogadordavez && tabuleiro[4] == jogadordavez && tabuleiro[7] == jogadordavez || tabuleiro[2] == jogadordavez && tabuleiro[5] == jogadordavez && tabuleiro[8] == jogadordavez) {
                        haVencedor = true;
                        window.alert("vencedor: jogador " + jogadordavez);
                    } else {

                        // Verificar a jogada vencedoras nas colunas
                        if (tabuleiro[0] == jogadordavez && tabuleiro[4] == jogadordavez && tabuleiro[8] == jogadordavez || tabuleiro[2] == jogadordavez && tabuleiro[4] == jogadordavez && tabuleiro[6] == jogadordavez) {
                            haVencedor = true;
                            window.alert("vencedor: jogador " + jogadordavez);
                        } else {

                            // Verificar a jogada vencedoras nas diagonais
                            if (jogadordavez == 1) {
                                jogadordavez = 2;
                            } else {
                                jogadordavez = 1;
                            }
                        }
                    }
                }
                velha = velha + 1;

                // Trocar de jogador
            } else {
                window.alert("posição ocupada, por favor jogue novamente!");

                // Informar ao jogador 1 que a posição está preenchuda, é inválida e ele precisa informar uma posição válida
            }
        } else {
            window.alert("Jogada invalida");
        }

        // Verificar a jogada vencedora nas linhas
    } while (!haVencedor && velha < 9);

    // Verificar o tabuleiro, se houve ganhador ou empate, finalizar o jogo.
    if (haVencedor) {
        window.alert("parabens pela sua vitoria jogador" + jogadordavez);
    } else {
        window.alert("seu jogo deu velha!");
    }
    window.alert(tabuleiro[0].ToString() + tabuleiro[1] + tabuleiro[2]);
    window.alert(tabuleiro[3].ToString() + tabuleiro[4] + tabuleiro[5]);
    window.alert(tabuleiro[6].ToString() + tabuleiro[7] + tabuleiro[8]);
}

function principal() {
    var somaTotal;
    var x;
    var y;

    window.alert("somaTotal: ");
}

function soma(x, y) {
    var retorno;

    retorno = x + y;
    
    return retorno;
}

function somaVarios(matriz) {
    var resultadoSoma;
    var i;

    resultadoSoma = 0;
    for (i = 0; i <= matriz.length - 1; i++) {
        resultadoSoma = matriz[i] + resultadoSoma;
    }
    
    return resultados;
}

function validaPosicao(entrada) {
    var entradaValida;

    entradaValida = false;
    window.alert(entrada.length());
    if (entrada.length() == 3) {
        if (entrada.charAt(0) == "0" || entrada.charAt(0) == "1" || entrada.charAt(0) == "2") {
            if (entrada.charAt(2) == "0" || entrada.charAt(2) == "1" || entrada.charAt(2) == "2") {
                entradaValida = true;
            }
        }
    }
    
    return entradaValida;
}
