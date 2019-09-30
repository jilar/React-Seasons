import React from 'react';

const getSeason = (lat, month) => {
    if(month <=8 && month >= 3){
      return lat > 0 ? 'summer' :'winter';
    }
    return lat < 0 ? 'winter' :'summer';
}

const SeasonDisplay = (props) =>{
  const season =getSeason(props.lat, new Date().getMonth());
  const icon= season === 'winter' ? 'snowflake' : 'sun';
  const text= season === 'winter' ? 'Burr, it is chilly!' : 'Lets hit the beach!';
  return (
    <div>
    <i className= {`${icon} icon`} />
    <h1>{text}</h1>
    <i className= {`${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
