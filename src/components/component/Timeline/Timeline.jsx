import {VerticalTimeline,VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import './TLine.scss'

// import img
import GirlPlatform from  '../../../assets/Nurlan/img/MainPage/GirlPlatform.png'
import MenWithNote from '../../../assets/Nurlan/img/MainPage/MenWithNote.png'
import GroupPeople from '../../../assets/Nurlan/img/MainPage/GroupPeople.png'
import MenStartWork from '../../../assets/Nurlan/img/MainPage/MenStartWork.png'


function Timeline() {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "black", color: "#fff" }}
        >
                        <div className="Platform">
                            <img src={GirlPlatform}/>
                            <h4>Ro’yxattan o’tasiz</h4>
                            <p>Avvalo platformadan Git/Tarjimon<br/> yokida Mijoz sifatida ro’yhattan o’tasiz.</p>
                        </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "black", color: "#fff" }}
        >
                        <div className="Platform">
                            <img src={MenWithNote}/>
                            <h4>So‘rov qoldirasiz</h4>
                            <p>Mijoz so‘rov qoldirishi mumkin<br/>yokida o‘zi Git/Tarjimoni tanlashi<br/> mumkin.</p>
                        </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "black", color: "#fff" }}
        >
                        <div className="Platform">
                            <img src={GroupPeople}/>
                            <h4>Aloqaga chiqiladi</h4>
                            <p>Tarjimon/Git tanlangandan so’ng,<br/> aloqaga chiqib kelishib olinadi va<br/> ish boshlanadi.</p>
                        </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "black", color: "#fff" }}
        >
                        <div className="Platform">
                            <img src={MenStartWork}/>
                            <h4>Ish boshlanadi</h4>
                            <p>Aloqa chiqib ish kelishib<br/> olgningizdan so’ng ishni<br/> boshlaysiz</p>
                        </div>
        </VerticalTimelineElement>
      
       </VerticalTimeline>
    </div>
  );
}

export default Timeline;
