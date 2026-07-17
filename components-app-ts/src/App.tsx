import { pets } from "./petData";
import Card from "./Card";

function App() {
   return (
      <div>
         {pets.map((pet, i) => (
            <Card petDetails={pet} key={i} />
         ))}
      </div>
   );
};

export default App;