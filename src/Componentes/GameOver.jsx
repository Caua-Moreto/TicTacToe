import GameState from "./GameState";

function GameOver({ gameState }) { // declarei o estado do jogo
  switch (gameState) { // aqui ele vai mudar o estado do meu jogo conforme vemos
    case GameState.inProgress: // enquanto o jogo rola nada acontece
      return <></>;
    case GameState.playerOWins: // se o jogador ganhar, essa mensagem aparece
      return <div className="game-over">O jogador O Ganhou!</div>;
    case GameState.playerXWins:
      return <div className="game-over">O jogador X Ganhou!</div>;
    case GameState.draw: // se empatar, essa
      return <div className="game-over">Vish! deu empate!</div>;
    default:
      return <></>;
  }
}

export default GameOver;