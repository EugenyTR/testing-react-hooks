import React, {useState, useCallback} from 'react';
import ItemsList from './ItemsList';

// Хук useCallback делает почти тоже самое, что и useMemo.
// Чтобы не вызывался ререндер, кешируем с помощью useCallback
// useCallback возвращает функцию

function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? 'darken' : 'black'
  }

  const generateIttemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Элемент ${i + 1}`)
  }, [count])

  return (
    <>
      <h1 style={styles}>Количество элементов: {count}</h1>
      <button className={'btn btn-success'} onClick={() => setCount(prev => prev + 1)}>Добавить</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Изменить</button>

      <ItemsList getItems={generateIttemsFromAPI} />
    </>
  )
}

export default App;