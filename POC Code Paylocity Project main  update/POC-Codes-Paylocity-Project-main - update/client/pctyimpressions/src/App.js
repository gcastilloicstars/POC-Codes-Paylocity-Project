import logo from './logo.svg';
import './App.css';
import ImpressionList from './impressionList';
import axios from "axios";

function App() {
  var testList = [
    {name:"a", description: "impressionA"}, 
    {name:"b", description: "impressionB"}, 
    {name:"c", description: "impressionC"}, 
    {name:"d", description: "impressionD"}, 
  ]
  const realList = axios.get("http://localhost:4008/api/impressions");
  
  return (
    <div className="App">
     <ImpressionList name={"Gio"} impressions={realList.data}/> 

    </div>
  );
}

export default App;
