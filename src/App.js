import './App.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import React from 'react'
import Amplify from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Routes, Route } from "react-router-dom";
import InstanceList from "./components/InstanceList";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InstanceList />} />
      </Routes>
    </div>
  );
}

export default withAuthenticator(App)
