import { pets } from "./petData";
import Card from "./Card";

function App() {
   return (
      <div>
         {pets.map((pet) => (
            <Card petDetails={pet} />
         ))}
      </div>
   );
};

export default App;