import './App.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { Routes, Route, Link } from "react-router-dom";
import InstanceList from "./components/InstanceList";

const App =() => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InstanceList />} />
      </Routes>
    </div>
  );
}

export default App;
