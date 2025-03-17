import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

function App() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');

  const guardarDatos = async (e) => {
    e.preventDefault(); // Evita que el formulario se recargue

    try {
      // Agrega un documento a la colección "usuarios"
      const docRef = await addDoc(collection(db, "usuarios"), {
        nombre: nombre,
        edad: edad,
        fecha: new Date() // Puedes agregar más campos
      });
      console.log("Documento guardado con ID: ", docRef.id);
      alert("Datos guardados correctamente!");
    } catch (error) {
      console.error("Error al guardar los datos: ", error);
      alert("Hubo un error al guardar los datos.");
    }
  };

  return (
    <div>
      <h1>Guardar datos en Firestore</h1>
      <form onSubmit={guardarDatos}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default App;