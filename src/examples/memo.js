import React, {useState, useMemo} from 'react';
// Хук useMemo позволяет оптимизировать наше приложение при обработке сложных функций. 
// Так так рендер вызывается и при изменении другого состояния

function compexComputed(num) {
  let i = 0
  while (i < 1000000000) i++
  return num * 2
}

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => {
    return {
      color: colored ? 'darkred' : 'black'
    }
  }, [colored]);

  const computed = useMemo(() => {
    return compexComputed(number);
  }, [number]);

  useEffect(() => {
    console.log('styles.changes')
  }, [styles]);

  return (
    <>
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
      <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
      <button className={'btn btn-success'} onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Изменить</button>
    </>
  );
}

export default App;