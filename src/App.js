import './App.css';
import Task3c from './components/Task3c';

const Apps = () => {
  const colors = ["red", "green", "blue", "yellow", "pink", "orange", "lemon", "purple","lightblue ","white","gray","black","brown","aquamarine", "lightgray","yellow"];

  return (
    <div className="App">
      <Task3c colors={colors} />
    </div>
  );
};

export default Apps;