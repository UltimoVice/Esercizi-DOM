// Crea la tua To-Do List mediante i metodi visti nel video.
// Crea una funzione che ti permette di:

// - Creare una lista aggiungendo il task desiderato mediante il bottone `Aggiungi`.
// - Creare un checkbox per ogni task aggiunto.


const addProduct = () => {
  // ...
  const addInput = document.querySelector('input').value;

  const ul = document.querySelector('ul');

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox'

  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(addInput));
  
  ul.appendChild(li);
};
