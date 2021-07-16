import './App.css';
import RenderText from './renderText/index'

const textBase = "Hello world"

const date = new Date()
const day = date.getDate()
const month = date.getMonth()
const monthAlter = month.toString().length < 2 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`
const year = date.getFullYear()
const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Sep", "Out", "Nov", "Dez"]

const text1 = {
  text: textBase.toLowerCase(),
  data: `${day}/${monthAlter}/${year}`
}

const text2 = {
  text: textBase.toUpperCase(),
  data: `${day}/${monthAlter}/${year.toString().slice(2, 4)}`
}

const text3 = {
  text: textBase.split("").reverse().join(''),
  data: `${monthAlter}/${day}/${year}`
}

const text4 = {
  text: textBase.split("").reverse().join('').split(" ").reverse().join(" "),
  data: `${monthAlter}/${day}/${year.toString().slice(2, 4)}`
}

const text5 = {
  text: textBase.toLowerCase().split("").join(' '),
  data: `${day}-${monthAlter}-${year}`
}

const text6 = {
  text: textBase.toUpperCase().split("").join(' '),
  data: `${day}-${monthAlter}-${year.toString().slice(2, 4)}`
}

const text7 = {
  text: textBase.split(" ").join(''),
  data: `${monthAlter}-${day}-${year}`
}

const text8 = {
  text: textBase.toLowerCase().split(" ").reverse().join(' '),
  data: `${monthAlter}-${day}-${year.toString().slice(2, 4)}`
}

const text9 = {
  text: textBase.toUpperCase().split(" ").reverse().join(' '),
  data: `${day} ${months[(month)]} ${year}`
}

const text10 = {
  text: textBase.split("").reverse().join(" "),
  data: `${day} ${months[(month)]} ${year.toString().slice(2, 4)}`
}




const texts = [text1, text2, text3, text4, text5, text6, text7, text8, text9, text10]

function App() {
  return (
    <div className="container">
      <div className="items">
        <div className="header">
          <p>Introdução ao React</p>
          <hr />
        </div>

        <div className="list">
          <div className="list-content">
            {texts.map((e) => {
              return <RenderText
                txt={`${e.text} - ${e.data} `}
                key={Math.random()}
              />
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
