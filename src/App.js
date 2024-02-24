import axios from 'axios';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

function App() {

  const [data,setData] = useState([]);

const fetchData = async () => {
  try{
    const {data} = await axios.get('https://restcountries.com/v3.1/all');
    console.log(data);
    setData(data)

  }catch(e){
    console.log(e)

  }

} 
useEffect(() => {
  fetchData();
},[])

  return (
    <div className={styles.container}>
      {data.map((country) => (
      <div className={styles.card} key={country.cca3}>
      <img alt={`Flag of ${country.flags.alt}`} src={country.flags.png}/>
      <h2>{country.name.official}</h2>
      </div>

    ))}
    </div>
  

  );
}

export default App;
