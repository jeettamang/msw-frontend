import { ToastContainer } from "react-toastify";
import Header from "./components/conmon/Header";
import UserRoutes from "./routes/UserRoutes";

function App() {
  return (
    <>
      <Header />
      <div>
        <UserRoutes />
      </div>
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
    </>
  );
}

export default App;
