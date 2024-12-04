//require the use of use State
import { useState } from 'react';
//connect the css file to app.jsx
import './App.css'; 

function App() {
  //==========set state variables============
  const [isTeam, setTeam] = useState([]);
  const [isMoney, setMoney] = useState(100);
  const [isTotalStrength, setTotalStrength] = useState(0);
  const [isTotalAgility, setTotalAgility] = useState(0);

  //=============zombie fighter array===========
  const zombieFighters = [
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  },
];

  //============= add fighter // learned from chat gbt
  const handleAddFighter = (fighter) => {
    //checking to see if we have money and if we dont we console log you got no money
    if (isMoney < fighter.price) {
      console.log('Even durring the zombie apocalypse you are a broke ass bitch....');
      return;//this exits the function if there is not enough money
    }
    
    // update the team array and calculate new stats
    setTeam((prevTeam) => {
      //adds a new fighter to the team array
      const updatedTeam = [...prevTeam, fighter];
      // recalculate the total strength of the team
      //'reduce' goes thru each fighter in the updated team array and add their stregth to the "acc" or accumulator
      const updatedStrength = updatedTeam.reduce((acc, curr) => acc + curr.strength, 0);
      //recaculate the total agility of the team array
      //silarly the reduce function sums up the total agility of the fighters of the team and accumulates a total
      const updatedAgility = updatedTeam.reduce((acc, curr) => acc + curr.agility, 0);
      //update the total strength and agility states
      setTotalStrength(updatedStrength);
      setTotalAgility(updatedAgility);
      //return the updated team array to update the state
      return updatedTeam;
    });
    
    // deduct the price that the fighter costs from money state
    setMoney(isMoney - fighter.price);
  };

  //==========remove a fighter from team=====================
  const handleRemoveFighter = (index) => {
    const fighter = isTeam[index];
    const updatedTeam = isTeam.filter((_, i) => i !== index);
    
    // Recalculate the total strength and agility after removal
    const updatedStrength = updatedTeam.reduce((acc, curr) => acc + curr.strength, 0);
    const updatedAgility = updatedTeam.reduce((acc, curr) => acc + curr.agility, 0);
    setTotalStrength(updatedStrength);
    setTotalAgility(updatedAgility);
    
    // Refund money for removed fighter
    setMoney(isMoney + fighter.price);
    
    // Update team state
    setTeam(updatedTeam);
  };

  return (
    <div className="App">
      <h1>Zombie Fighters</h1>
      <div>
        <p>Money: ${isMoney}</p>
        <p>Team Strength: {isTotalStrength}</p>
        <p>Team Agility: {isTotalAgility}</p>
      </div>
{/* dispaly team here */}
      <h2>Your Team</h2>
      <div>
        {/* display some filler text until the first team member is selected */}
        {isTeam.length === 0 ? (
          <p>Pick some fighters to help you knock down the Z's!</p>
        ) : (
          <ul>
            {isTeam.map((fighter, index) => (
              <li key={index} className="team-member">
                <img src={fighter.img} alt={fighter.name} />
                <div>
                  <h3>{fighter.name}</h3>
                  <p>Price: ${fighter.price}</p>
                  <p>Strength: {fighter.strength}</p>
                  <p>Agility: {fighter.agility}</p>
                  <button onClick={() => handleRemoveFighter(index)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
{/* display options and map thru the array */}
      <h2>Choose a Fighter</h2>
      <ul>
        {zombieFighters.map((zFighter, index) => (
          <li key={index} className="fighter-item">
            <img src={zFighter.img} alt={zFighter.name} />
            <div>
              <h3>{zFighter.name}</h3>
              <p>Price: ${zFighter.price}</p>
              <p>Strength: {zFighter.strength}</p>
              <p>Agility: {zFighter.agility}</p>
              <button onClick={() => handleAddFighter(zFighter)}>Add</button>
            </div>
          </li>
        ))}
      </ul>

      
    </div>
  );
}


// dont forget to export the app and youre done!
export default App;





//================ first attempt at being in two differnt jsx files, restarting with one file==================
// // require the use of useState from the react library
// import { useState } from 'react';
// // import the use of the zombiefights jsx
// import ZombieFighter from './ZombieFighters/ZombieFighters';

// const zombieFighters = [
//   {
//     name: 'Survivor',
//     price: 12,
//     strength: 6,
//     agility: 4,
//     img: 'https://via.placeholder.com/150/92c952',
//   },
//   {
//     name: 'Scavenger',
//     price: 10,
//     strength: 5,
//     agility: 5,
//     img: 'https://via.placeholder.com/150/771796',
//   },
//   {
//     name: 'Shadow',
//     price: 18,
//     strength: 7,
//     agility: 8,
//     img: 'https://via.placeholder.com/150/24f355',
//   },
//   {
//     name: 'Tracker',
//     price: 14,
//     strength: 7,
//     agility: 6,
//     img: 'https://via.placeholder.com/150/d32776',
//   },
//   {
//     name: 'Sharpshooter',
//     price: 20,
//     strength: 6,
//     agility: 8,
//     img: 'https://via.placeholder.com/150/1ee8a4',
//   },
//   {
//     name: 'Medic',
//     price: 15,
//     strength: 5,
//     agility: 7,
//     img: 'https://via.placeholder.com/150/66b7d2',
//   },
//   {
//     name: 'Engineer',
//     price: 16,
//     strength: 6,
//     agility: 5,
//     img: 'https://via.placeholder.com/150/56acb2',
//   },
//   {
//     name: 'Brawler',
//     price: 11,
//     strength: 8,
//     agility: 3,
//     img: 'https://via.placeholder.com/150/8985dc',
//   },
//   {
//     name: 'Infiltrator',
//     price: 17,
//     strength: 5,
//     agility: 9,
//     img: 'https://via.placeholder.com/150/392537',
//   },
//   {
//     name: 'Leader',
//     price: 22,
//     strength: 7,
//     agility: 6,
//     img: 'https://via.placeholder.com/150/602b9e',
//   },
// ];

// const App = () => {
// const [isTeam, setTeam] = useState([])
// const [isMoney, setMoney] = useState(100)


//   return (
//     <>
//     <h1>Zombie Fighters</h1>
//     <h2>Money: ${isMoney}</h2>
//     <h2>Team Strength: </h2>
//     <h2>Fighters</h2>
//     <section>
//           {zombieFighters.map((fighters) => (
//           <ZombieFighter
//             key={fighters.id}
//             img={fighters.img}
//             name={fighters.name}
//             price={fighters.price}
//             strength={fighters.strength}
//             agility={fighters.agility}
//           />
          
//         ))}  
           
//     </section>
//     </>
//   );
// }

// export default App

