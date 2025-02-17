import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/style_chores.css';

function Chores() {
  const [chores, setChores] = useState([]);
  const [newChore, setNewChore] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [recurrence, setRecurrence] = useState('one-time');

  useEffect(() => {
    const fetchChores = async () => {
      const choresCollection = collection(db, 'chores');
      const choresSnapshot = await getDocs(choresCollection);
      const choresList = choresSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setChores(choresList);
    };

    fetchChores();

    const interval = setInterval(() => {
      const now = new Date();
      if (now.getHours() === 0 && now.getMinutes() === 0) {
        fetchChores();
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const handleAddChore = async () => {
    if (newChore.trim()) {
      const choreData = {
        name: newChore,
        startDate: startDate.toISOString(),
        recurrence,
        completed: false
      };
      const docRef = await addDoc(collection(db, 'chores'), choreData);
      setChores([...chores, { id: docRef.id, ...choreData }]);
      setNewChore('');
      setStartDate(new Date());
      setRecurrence('one-time');
    }
  };

  const handleDeleteChore = async (id) => {
    await deleteDoc(doc(db, 'chores', id));
    setChores(chores.filter(chore => chore.id !== id));
  };

  const handleToggleComplete = (id) => {
    setChores(chores.map(chore => {
      if (chore.id === id) {
        return { ...chore, completed: !chore.completed };
      }
      return chore;
    }));
  };

  return (
    <div className="chores">
      <h2>Chores</h2>
      <ul className="chores-list">
        {chores.map((chore) => (
          <li key={chore.id} className={chore.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={chore.completed}
              onChange={() => handleToggleComplete(chore.id)}
            />
            {chore.name}
            <button onClick={() => handleDeleteChore(chore.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newChore}
        onChange={(e) => setNewChore(e.target.value)}
        placeholder="Add a new chore"
      />
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      <select value={recurrence} onChange={(e) => setRecurrence(e.target.value)}>
        <option value="one-time">One-time</option>
        <option value="weekly">Weekly</option>
        <option value="bi-weekly">Bi-weekly</option>
        <option value="monthly">Monthly</option>
        <option value="bi-monthly">Bi-monthly</option>
        <option value="quarterly">Quarterly</option>
        <option value="semi-annually">Semi-annually</option>
        <option value="annually">Annually</option>
      </select>
      <button onClick={handleAddChore}>Add Chore</button>
    </div>
  );
}

export default Chores;