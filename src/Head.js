import React from 'react';

const Head = (props) => {
    React.useEffect(()=>{
        document.title='SiteName  |  '+props.title;
        document.querySelector("meta[name='description']").setAttribute('content',props.description)
    },[props])


  return <React.Fragment></React.Fragment>;
};

export default Head;
