import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from './Containers/Layout';
// import ProtectedRoutes from './ProtectedRoutes';
import './App.css';
import Login from './Views/Login/Login';


export default function App() {
  const loading = (
    <div className='pt-3 text-center'>
      <div className='sk-spinner sk-spinner-pulse'>
        
      </div>
    </div>
  )
    return (
    <>
      <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>

        <Route  exact  path="/" component={Login} />  
          <Route  path='/Home' name='Home' component={Layout} />
          <Route  path="/Dashboard" name="Home" component={Layout} />
          <Route  path='/Appointment' name="Appointment"  component={Layout}  />
          <Route  path='/Appversion' name="Appversion" component={Layout}  />
          <Route  path='/Category'  name='Category' component={Layout}  />
          <Route  path='/Smsnotify'  name='Smsnotify' component={Layout}  />
          <Route  path='/Coustomers' name='Coustomers' component={Layout} />
          <Route  path='/ServiceProviders' name='ServiceProviders' component={Layout} />
          <Route  path='/addCategory' name='addCategory' component={Layout} />
          <Route  path='/updateCategory' name='updateCategory' component={Layout} />
          <Route  path='/AddAppointment' name='AddAppointment' component={Layout} />
          <Route  path='/Testing' name='Testing' component={Layout} />
          <Route  path='/Group' name='Group' component={Layout} />
          <Route  path='/addGroup' name='addGroup' component={Layout} />
          <Route  path='/User' name='User' component={Layout} />
          <Route  path='/AddUsers' name='AddUsers' component={Layout} />
          <Route  path='/Permission' name='Permission' component={Layout} />
          <Route  path='/AddPermission' name='AddPermission' component={Layout} />
          <Route  path='/viewUser' name='viewUser' component={Layout} />
          <Route  path='/Country' name='Country' component={Layout} />
          <Route  path='/AddCountry' name='AddCountry' component={Layout} />
          <Route  path='/Province' name='Province' component={Layout} />
          <Route  path='/AddProvince' name='AddProvince' component={Layout} />
          <Route  path='/City' name='City' component={Layout} />
          <Route  path='/AddCity' name='AddCity' component={Layout} />

          
        </Switch>
        </React.Suspense>
      </BrowserRouter>    
    </>
  )
}
