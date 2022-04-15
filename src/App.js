
import './App.css';
import Toggle from './components/Toggle'
import Tab from './components/Tab'
import Slider from './components/Slider'
import Input from './components/Input'
import DropDown from './components/DropDown'
function App() {
  return (
    <div className="App">
      <div style={{display:'flex', alignItems:'center',marginTop:'50px',flexDirection:'column'}}>
       <Toggle/>
       
       <Tab/>

       <Slider/>
       <Input />
       <DropDown />
       </div>
    </div>
  );
}

export default App;
