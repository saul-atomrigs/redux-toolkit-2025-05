import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"

export const App = () => (
  <div className="App">
    <header className="App-header">
      <Counter />
      <Quotes />
    </header>
  </div>
)
