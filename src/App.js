import "./App.css";
import { PaymentForm } from "./pages/Transactions/components/PaymentForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ViewAllTable } from "./pages/View-All-Transactions/components/ViewAllTable";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/makePayment" element={<PaymentForm />} />
          <Route path="/allTransaction" element={<ViewAllTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
