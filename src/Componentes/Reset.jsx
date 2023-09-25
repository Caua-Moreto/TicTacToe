import GameState from "./GameState";

function Reset({ gameState, onReset }) {
  if (gameState === GameState.inProgress) { // se ela for verdadeira, o codigo dentro do if não vai aparecer
    return; // logo, não vai aparecer o botão para resetar o jogo
  }
  return ( // aqui a gente definiu o botão do return que vai zerar o jogo
    <button onClick={onReset} className="reset-button">
      Jogar de Novo!
    </button>
  );
}

export default Reset;