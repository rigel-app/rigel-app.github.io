import React from 'react';
import Button from "./Button";

const ValueProp = props => {

  return (
    // <section className="value-prop">
    <div className="value-prop-content">
      <div className="main-message">
        <h1>Discover New Things with Rigel</h1>
        <p className="main-subtitle"> <b>Rigel</b> gives you access to <b>thousands of</b> articles, essays, interviews, podcasts and much more related to different topics from the <b>most renown magazines in the world</b>.
          <br /> <br />
          Everything from a <b>single app</b>.</p>
        <br />
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <Button label="Join the Beta" />
        </div>
      </div>
      <div className="main-photo">
        {/* <img style={{ height: '80%', marginTop:window.innerWidth < 900 ? 80 : 0}} src={require("../assets/rigel-main.png")} /> */}
      </div>
    </div>
    // </section>
  )
};

export default ValueProp;
