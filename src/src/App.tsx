import {useEffect} from "react";
import { useNavigate } from "react-router-dom";


function App() {
  const navigation = useNavigate();

  useEffect(()=>{
    navigation("/login");
  }, []);

  return (
    <></>
  );
}

export default App
