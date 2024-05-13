int velha;
int linha;
int coluna;
bool haVencedor = false;
int tabuleiro[9];
String jogador1 = "Jogador 1";
String jogador2 = "Jogador 2";
String jogada = "";
int jogadorDaVez = 1;
int index;

bool validaPosicao(String entrada) {
  bool entradaValida;

  entradaValida = false;

  if (entrada.length() == 3) {
    if (entrada[0] == '0' || entrada[0] == '1' || entrada[0] == '2') {
      if (entrada[2] == '0' || entrada[2] == '1' || entrada[2] == '2') {
        entradaValida = true;
      }
    }
  }

  return entradaValida;
}


void setup() {
  Serial.begin(115200);
  for (index = 0; index <= 8; index++) {
    tabuleiro[index] = 0;
  }
   
   for (index = 0; index <= 8; index++) {
    if(index == 3 || index == 6) {
      Serial.println("");
    }
   }
}

void loop() {
  velha = 1;
  do {

    Serial.print(tabuleiro[0]);
    Serial.print(tabuleiro[1]);
    Serial.println(tabuleiro[2]);
    Serial.print(tabuleiro[3]);
    Serial.print(tabuleiro[4]);
    Serial.println(tabuleiro[5]);
    Serial.print(tabuleiro[6]);
    Serial.print(tabuleiro[7]);
    Serial.println(tabuleiro[8]);

    jogada = "";

   
    Serial.print("Digite a posição da sua peça JOGADOR ");
    Serial.println(jogadorDaVez);
    while (!Serial.available());
    jogada = Serial.readString();
    if (validaPosicao(jogada)) {

      linha = int(jogada[0]) - '0';
      coluna = int(jogada[2]) - '0';
      Serial.print("Linha: ");
      Serial.print(linha);
      Serial.print("Coluna: ");
      Serial.println(coluna);
      if (tabuleiro[3 * linha + coluna] == 0) {
        tabuleiro[3 * linha + coluna] = jogadorDaVez;
        if ((tabuleiro[0] == jogadorDaVez && tabuleiro[1] == jogadorDaVez && tabuleiro[2] == jogadorDaVez) || (tabuleiro[3] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[5] == jogadorDaVez) || (tabuleiro[6] == jogadorDaVez && tabuleiro[7] == jogadorDaVez && tabuleiro[8] == jogadorDaVez)) {
          haVencedor = true;
        } else {
          if ((tabuleiro[0] == jogadorDaVez && tabuleiro[3] == jogadorDaVez && tabuleiro[6] == jogadorDaVez) || (tabuleiro[1] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[7] == jogadorDaVez) || (tabuleiro[2] == jogadorDaVez && tabuleiro[5] == jogadorDaVez && tabuleiro[8] == jogadorDaVez)) {
            haVencedor = true;
          } else {
            if ((tabuleiro[0] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[8] == jogadorDaVez) || (tabuleiro[2] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[6] == jogadorDaVez)) {
              haVencedor = true;
            } else {
              if (jogadorDaVez == 1) {
                jogadorDaVez = 2;
              } else {
                jogadorDaVez = 1;
              }
            }
          }
        }
        velha = velha + 1;
      } else {
        Serial.println("Posição ocupada, jogue novamente !!!");
      }
    } else {
      Serial.println("Jogada inválida !!!");
    }
  } while (!haVencedor && velha <= 9);


  if (haVencedor) {
    Serial.print("Parabéns pela a vitória, jogador ");
    Serial.println(jogadorDaVez);
  } else {
    Serial.println("Deu VELHA!!!");
  }
  
  Serial.print(tabuleiro[0]);
  Serial.print(tabuleiro[1]);
  Serial.println(tabuleiro[2]);
  Serial.print(tabuleiro[3]);
  Serial.print(tabuleiro[4]);
  Serial.println(tabuleiro[5]);
  Serial.print(tabuleiro[6]);
  Serial.print(tabuleiro[7]);
  Serial.println(tabuleiro[8]);
}