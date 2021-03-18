import React,{useState} from 'react';
import Location from './Location/Location';
import Topic from './Topic/Topic';
import classes from './HomePage.module.scss';
import Project from '../Forms/Project/Project';
import Birds from '../Forms/Birds/Birds';
import Coffee from '../Forms/Coffee/Coffee';
import Video from '../Forms/Video/Video';
import ArrowBack from '../Ui/ArrowBack/ArrowBack';

function HomePage(){
    const[content,setContent]=useState('topic');
    function changeValue(pagecontent){
        setContent(pagecontent);
    }
    // function click(){
    //      setContent('topic');
    // }
    return(
        <div className={classes.container}>
            <div className={classes.left}>
                <Location callBack={changeValue} content={content}/>
            </div>
            <div className={classes.right}>
                {/* <button className={classes.closepage}>X</button> */}
                {content==='topic'?(<div><Topic callBack={changeValue}/></div>):null}
                {content==='project'?(<div><Project/></div>):null}
                {content==='video'?(<div><Video/></div>):null}
                {content==='birds'?(<div><Birds/></div>):null}
                {content==='coffee'?(<div><Coffee/></div>):null}
            </div>
        </div>
    );
}


export default HomePage;