import React, { useState } from 'react';

const Tabs = () => {
    const [Tab] = useState([
        {tab1: "This is tab 1 content"},
        {tab2: "This is tab 2 content"},
        {tab3: "This is tab 3 content"}
    ]);

    const [tabb, setTabb] = useState({
        tabbs: 0
    })
    const showTab1 =()=>{
        setTabb({
            tabbs: 1
        });
    }
    const showTab2 =()=>{
        setTabb({
            tabbs: 2
        });
    }
    const showTab3 =()=>{
        setTabb({
            tabbs: 3
        });
    }
    return (
        <div className="container">
            <div className="row pt-3">
                <div className="col-4">
                    <button type="submit" onClick ={showTab1}>Tab 1</button>
                </div>
                <div className="col-4">
                    <button type="submit" onClick ={showTab2}>Tab 2</button>
                </div>
                <div className="col-4">
                    <button type="submit" onClick ={showTab3}>Tab 3</button>
                </div>
                <div className="col-4 text-center pt-2">
                    <h5>{`${tabb.tabbs}` == 1 ? Tab.map((d, i) =>
                    {return (<div key={i}>{d.tab1}</div>)}) : ''}</h5>
                </div>
                <div className="col-4 text-center pt-2">
                    <h5>{`${tabb.tabbs}` == 2 ? Tab.map((d, i) =>
                    {return (<div key={i}>{d.tab2}</div>)}) : ''}</h5>
                </div>
                <div className="col-4 text-center pt-2">
                    <h5>{`${tabb.tabbs}` == 3 ? Tab.map((d, i) =>
                    {return (<div key={i}>{d.tab3}</div>)}) : ''}</h5>
                </div>
            </div>
        </div>
)
}

export default Tabs;