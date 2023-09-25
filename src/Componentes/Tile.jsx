function Tile({ className, value, onClick, playerTurn }) {
    let hoverClass = null; 
    if (value == null && playerTurn != null) { // verifica se o valor é nulo e se é a vez de algum jogador 
      hoverClass = `${playerTurn.toLowerCase()}-hover`; // ele identifica a jogada, se for x ele vira x-hover
      // e se for o o-hover
    }
    return ( // embaixo vamos conseguir estilizar o fantasminha(hover) 
      <div onClick={onClick} className={`tile ${className} ${hoverClass}`}> 
        {value}
      </div>
    );
  }
  
  export default Tile;