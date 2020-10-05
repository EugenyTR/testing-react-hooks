import React, {useState} from 'react';

// Если нам необходимо вычислить состояние (state заранее не известен)
function computeInitialCounter() {
  console.log('Some calculation');
  return Math.trunc(Math.random() * 20);
}

function App() {
  // Принимаем кортеж (массив с заранее известными составляющими)
  // const [counter, setCounter] = useState(0);

  // Чтобы компонент не перерендерился при каждом вызове функции надо добавить callback фукцию в useState
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter();
  });

  const [state, setState] = useState({
    title: 'Счетчик',
    date: Date.now()
  });

  function increment() {
    // setCounter(counter + 1);

    // Чтобы обновлять state основываясь на предыдущем состоянии нужно использовать callback функцию
    setCounter((prev) => {
      return prev + 1;
    });
    setCounter(prev => prev + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function updateTitle() {
    setState(prev => {
     return {
      ...prev, 
      title: 'Новое название'
     }
    });
  }

  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment} className='btn btn-success'>Добавить</button>
      <button onClick={decrement} className='btn btn-danger'>Убрать</button>
      <button onClick={updateTitle} className='btn btn-danger'>Изменить состояние</button>

  <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;