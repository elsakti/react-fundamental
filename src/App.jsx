import './App.css';
import { GlobalContext } from "./contexts";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";


function App() {
  const user = {
    username: 'Wahyudi',
  };
  return (
    <>
      <div className="App">
        <GlobalContext.Provider value={user}>
          <RouterProvider router={router}/>
        </GlobalContext.Provider>
      </div>
    </>
  )
}

export default App
