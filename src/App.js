import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";
import Alert from "./components/Alert";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "sucess");
    }
  };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
      // element: <Textform showAlert={showAlert}/>,
  //   },
  //   {
  //     path: "/home",
  //     element: <Textform showAlert={showAlert} />,
  //   },
  //   {
  //   //   path: "/about",
  //   //   element: <About />,
  //   // },
  // ]);

  return (
    <>
      {/*     
      <Navbar title="Textutlis" mode={mode} toggleMode={toggleMode} /> */}
      {/* <Navbar/> */}
      <Navbar title="Textutlis" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Textform showAlert={showAlert}/> */}
      <div className="conatiner my-3">
        {/* <RouterProvider router={router} /> */}
        <Textform mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
