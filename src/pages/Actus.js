import "../Style/Style.css";
import Header from "../composent/Header";
import Collection from "../composent/Collection";
import Transition from "../composent/Transition";

const Actus = () => {
  return (
    <div className="App">
      <Header />
      <Collection />
      <Transition />
    </div>
  );
}

export default Actus