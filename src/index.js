import React from "react";
import ReactDOM from 'react-dom';
import App from './components/App'

const Body=()=>{
  return(
  <div>
    <App/>
  </div>
  )
}
ReactDOM.render(<Body/>,document.getElementById('root'));
