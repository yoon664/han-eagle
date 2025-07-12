import PlayerCard from './PlayerCard';

const players = [
  { id: 1, name: '주현상', number: 66, image: '/img/player1.png' },
  { id: 2, name: '김도연', number: 27, image: 'doyeon.jpg' },
  
];

export default function PlayersCarousel() {
  return (
    <div className="flex overflow-x-auto space-x-4">
      {players.map(player => (
        <PlayerCard
          key={player.id}
          name={player.name}
          number={player.number}
          image={player.image}
        />
      ))}
    </div>
  );
}

