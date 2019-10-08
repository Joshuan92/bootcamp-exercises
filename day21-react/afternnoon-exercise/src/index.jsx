import React from 'react';
import ReactDOM from 'react-dom';

import TermDatabase from './contact/contact.jsx';
import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return ( 
      <p>
        <TermDatabase 
          term="Antidisestablishmentarianism" 
          definition="A political position that developed in 19th-century Britain in opposition to Liberal proposals for the disestablishment of the Church of England—meaning the removal of the Anglican Church's status as the state church of England, Ireland, and Wales. The establishment was maintained in England, but in Ireland, the Church of Ireland (Anglican) was disestablished in 1871. In Wales, four Church of England dioceses were disestablished in 1920 and became the Church in Wales." 
        />
        <TermDatabase 
          term="Dial-up" 
          definition="a computer connection that is brought up and brought down as needed - a simple version is dialing in to a servive provider over a modem as a dumb terminal - SLIP and PPP can also be dial-up connections - also known as a switched connection." 
        />
        <TermDatabase 
          term="Cable Modem" 
          definition="a device that allows a computer to connect to a cable television system and connect to a computer network - cable modems work at speeds approaching Ethernet connections - probable wide-spread future way to connect to the Internet." 
        />
       
        
      </p>
      
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
