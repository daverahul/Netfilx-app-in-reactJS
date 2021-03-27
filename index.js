import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import './index.css';
import  Sdata from './Sdata';



ReactDOM.render(
    <>
    <h1 className="heading_style"> LIST OF TOP 5 NETFLIX SERIES OF ALL TIME G.O.A.T. </h1>
<Cards
    imgsrc={Sdata[0].imgsrc}
    link={Sdata[0].link}
    title={Sdata[0].title}
    sname={Sdata[0].sname}
/>
<Cards
    imgsrc={Sdata[1].imgsrc}
    link={Sdata[1].link}
    title={Sdata[1].title}
    sname={Sdata[1].sname}

 />

<Cards
    imgsrc={Sdata[2].imgsrc}
    link={Sdata[2].link}
    title={Sdata[2].title}
    sname={Sdata[2].sname}
/>
<Cards
    imgsrc={Sdata[3].imgsrc}
    link={Sdata[3].link}
    title={Sdata[3].title}
    sname={Sdata[3].sname}
/>
<Cards
    imgsrc={Sdata[4].imgsrc}
    link={Sdata[4].link}
    title={Sdata[4].title}
    sname={Sdata[4].sname}
/>

</>,document.getElementById("root"));
