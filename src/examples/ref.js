import React, {useState, useEffect, useRef} from 'react';
// Хук useRef достаточно мощный, он сохраняет и меняет состояние (state) при рендерах, при это не вызывая сам рендер
// Все это не совсем правильно, так как есть переменная, которая находится вне реакта.
// Чтобы это решить надо использовать фукцию useRef
// let renderCount = 1

function App() {
 //const [renderCount, setRenderCount] = useState(1);
 const [value, setValue] = useState('initial');
 // Сейчас используем useRef. Он очень похож на useState.
 // Здесь мы неп олучаем кортеж [someState, setSomeState]. Мы получаем переменную.
 // И обращаемся к свойству current этой переменной.
 const renderCount = useRef(1);
 // useRef имеет возможности создавать ссылки на дом-элементы
 const inputRef = useRef(null);
 // Так же с помощью useRef мы можем получать занчение предыдущего стейта
 const prevValue = useRef('');

  useEffect(() => {
    // В данном случае использования useEffect мы уходим в бесконечный цикл ререндера.
    // Чтобы этого не произошло необходимо создать переменную вне тела функции (let renderCount = 1) и выхвать ее в useEffect
    renderCount.current++
    console.log(inputRef.current.value);
  });

  useEffect(() => {
    prevValue.current = value
  }, [value]);

  const focus = () => {
    inputRef.current.focus()  
  }

  return (
    <div>
      <h1>количество рендеров: {renderCount.current}</h1>
      <h1>Прошлое состояние: {prevValue.current}</h1>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
      <button className="btn btn-success" onClick={focus}>Фокус</button>
    </div>
  );
}

export default App;