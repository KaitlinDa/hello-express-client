import { useState } from 'react';
import axios from 'axios';

export default function App() {

  const [shoppingList, setShoppingList] = useState([]);

  async function getFood() {
    const API = 'http://localhost:3002';
    const response = await axios.get(`${API}/shoppingList?type=food`);
    setShoppingList(response.data);
  }

  return (
    <div>
    <p>
    Shopping List:
    {JSON.stringify(shoppingList)};
      </p>
      <button onClick={getFood}>Get Food </button>
    </div>
  )
}
