import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import FooterComponent from './Components/FooterComponent';
import Header from './Components/Header';
import Client from './Pages/Client';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import Service from "./Pages/Service";
import Mail from './Pages/Mail';
import MailView from './Pages/MailView';
import MailCompose from './Pages/MailCompose';
import MailAuth from './Pages/MailAuth';
import CreateMailAuth from './Pages/CreateMailAuth';
import Dashboard from './Pages/Dashboard';
import ServiceView from "./Pages/ServiceView";



function App() {
  return (
    <div className="App">
      <div>
      <BrowserRouter>
        <Header/>
        
          <Routes>
            <Route Component={Home} path='/'/>
            <Route Component={Service} path='/service/'/>
            <Route Component={ServiceView} path='/service/:id/' />
            <Route Component={Project} path='/project/'/>
            <Route Component={Client} path='/client/'/>
            <Route Component={Contact} path='/contact/'/>
            <Route Component={MailAuth} path='/mail-auth/'/>
            <Route Component={Mail} path='/mails/'/>
            <Route Component={Mail} path='/mail/:category'/>
            <Route Component={MailView} path='/mail-view/:id/'/>
            <Route Component={MailCompose} path='/compose/'/>
            <Route Component={CreateMailAuth} path='/create_auth/' />
            <Route Component={Dashboard} path='/dashboard/:project/' />
          </Routes>
        <FooterComponent/>
      </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
