import React, { Component } from 'react';
import blank_img from './blank.png'
//import { Grid, Cell } from 'react-mdl';
import './index.css';
//import ProgressCircle from 'react-native-progress-circle';
//import ProgressBar from './ProgressBar.js'
import EventRegistrations from './registeredEvents'
import Notifications from "./notification";

class Dashboard extends Component{
    
    constructor(props)
    {
        super(props);
        this.displayRegisteredEvents = this.displayRegisteredEvents.bind(this);
        this.displayNotifications = this.displayNotifications.bind(this);
        this.state = {registeredEvents:true, data : null};
        //this.getData();
    }

    getData()
    {
        let data=fetch('https://facebook.github.io/react-native/movies.json').then((resp)=>{
            resp.json().then((res)=>{
                //this.setState({data:})
            });
        })
    }

    displayRegisteredEvents()
    {
        this.setState({registeredEvents:true});
    }

    displayNotifications()
    {
        this.setState({registeredEvents:false});
    }

    render(){

        const registeredEvents = this.state.registeredEvents;
        let result;
        if(registeredEvents)
        {
            result= <div id="reg" className="registeredEvents center">
                       {/*<h2 className="headings">REGISTERED EVENTS</h2>*/}
                       <div className="header">
                       <EventRegistrations
                            header="True"
                            event="Event"
                            date="Day"
                            venue="Venue"
                            time="Time"
                            timeofreg="Registration Time"
                        />
                        </div>
                        <div className="notifs">
                        <EventRegistrations
                            event="hackathon"
                            date="28 October 2017"
                            venue="New academic block"
                            time="9am-9 pm"
                            timeofreg="8:40am"
                        />
                            <EventRegistrations
                                event="hackathon"
                                date="28 October 2017"
                                venue="New academic block"
                                time="9am-9 pm"
                                timeofreg="8:40am"
                            />
                            <EventRegistrations
                                event="hackathon"
                                date="28 October 2017"
                                venue="New academic block"
                                time="9am-9 pm"
                                timeofreg="8:40am"
                            />
                            <EventRegistrations
                                event="hackathon"
                                date="28 October 2017"
                                venue="New academic block"
                                time="9am-9 pm"
                                timeofreg="8:40am"
                            />
                            <EventRegistrations
                                event="hackathon"
                                date="28 October 2017"
                                venue="New academic block"
                                time="9am-9 pm"
                                timeofreg="8:40am"
                            />
                            <EventRegistrations
                                event="hackathon"
                                date="28 October 2017"
                                venue="New academic block"
                                time="9am-9 pm"
                                timeofreg="8:40am"
                            />
                            </div>
	                </div>
        }
        else
        {
            result = <div id="notif" className="notification-window center">
                       {/*<h2 className="headings">NOTIFICATIONS</h2>*/}
                       <div className="header">
                       <Notifications 
                            event="Event"
                            timeofupdate="Notification Title"
                            update="Details"/>
                            </div>
                        <div className="notifs">
                        <Notifications
                            event="Battle of the Bands 1"
                            timeofupdate="12:04pm"
                            update="The venue for the event has been changed from L-11 to the Auditorium"/>
                        <Notifications
                                event="Battle of the Bands 2"
                                timeofupdate="12:04pm"
                                update="The venue for the event has been changed from L-11 to the Auditorium"/>
                        <Notifications
                                event="Battle of the Bands 3"
                                timeofupdate="12:04pm"
                                update="The venue for the event has been changed from L-11 to the Auditorium"/>
                        <Notifications
                                event="Battle of the Bands 4"
                                timeofupdate="12:04pm"
                                update="The venue for the event has been changed from L-11 to the Auditorium"/>
                    
                        <Notifications
                            event="Battle of the Bands 5"
                            timeofupdate="12:04pm"
                            update="The venue for the event has been changed from L-11 to the Auditorium"/>
                        <Notifications
                                event="Battle of the Bands 6"
                                timeofupdate="12:04pm"
                                update="The venue for the event has been changed from L-11 to the Auditorium"/>
                        <Notifications
                                event="Battle of the Bands 7"
                                timeofupdate="12:04pm"
                                update="The venue for the event has been changed from L-11 to the Auditorium"/>
                       
                        <Notifications
                            event="Battle of the Bands 8"
                            timeofupdate="12:04pm"
                            update="The venue for the event has been changed from L-11 to the Auditorium"/>
                        <Notifications
                                event="Battle of the Bands 9"
                                timeofupdate="12:04pm"
                                update="The venue for the event has been changed from L-11 to the Auditorium"/>
                        <Notifications
                                event="Battle of the Bands 10"
                                timeofupdate="12:04pm"
                                update="The venue for the event has been changed from L-11 to the Auditorium"/>
                        <Notifications
                                event="Battle of the Bands 11"
                                timeofupdate="12:04pm"
                                update="The venue for the event has been changed from L-11 to the Auditorium"/>
                        <Notifications
                            event="Battle of the Bands 12"
                            timeofupdate="12:04pm"
                            update="The venue for the event has been changed from L-11 to the Auditorium"/>
                        <Notifications
                                event="Battle of the Bands 13"
                                timeofupdate="12:04pm"
                                update="The venue for the event has been changed from L-11 to the Auditorium"/>
                        <Notifications
                                event="Battle of the Bands 14"
                                timeofupdate="12:04pm"
                                update="The venue for the event has been changed from L-11 to the Auditorium"/>
                        <Notifications
                                event="Battle of the Bands 15"
                                timeofupdate="12:04pm"
                                update="The venue for the event has been changed from L-11 to the Auditorium"/>
                        <Notifications
                            event="Battle of the Bands 16"
                            timeofupdate="12:04pm"
                            update="The venue for the event has been changed from L-11 to the Auditorium"/>
                        <Notifications
                                event="Battle of the Bands 17"
                                timeofupdate="12:04pm"
                                update="The venue for the event has been changed from L-11 to the Auditorium"/>
                        <Notifications
                                event="Battle of the Bands 18"
                                timeofupdate="12:04pm"
                                update="The venue for the event has been changed from L-11 to the Auditorium"/>
                        <Notifications
                                event="Battle of the Bands 19"
                                timeofupdate="12:04pm"
                                update="The venue for the event has been changed from L-11 to the Auditorium"/>
                        <Notifications
                            event="Battle of the Bands 20"
                            timeofupdate="12:04pm"
                            update="The venue for the event has been changed from L-11 to the Auditorium"/>
                        <Notifications
                                event="Battle of the Bands 21"
                                timeofupdate="12:04pm"
                                update="The venue for the event has been changed from L-11 to the Auditorium"/>
                        <Notifications
                                event="Battle of the Bands 22"
                                timeofupdate="12:04pm"
                                update="The venue for the event has been changed from L-11 to the Auditorium"/>
                        <Notifications
                                event="Battle of the Bands 23"
                                timeofupdate="12:04pm"
                                update="The venue for the event has been changed from L-11 to the Auditorium"/>
                        </div>
                        </div>
        }
        return (
            <div id="main-div">

                <div className="grid-container">
                    <div className="grid-item left-side">
                        <div id="buttons-id">
                            <button className="button button1" onClick={this.displayRegisteredEvents}><h2>Registered Events</h2></button>
                            <button className="button button2" onClick={this.displayNotifications}><h2>Notifications</h2></button>
                        </div>
                        {result}
                    </div>


                    <div className="grid-item right-side">
                        <div className="center">
                            {/*<h1>PECFEST 2018</h1>*/}
                            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                            {/*Comment : User Image*/}
                            <img className="user-avatar"
                                 src={blank_img} alt=""
                            />

                            <h2>Aakankasha Sharma</h2>
                        </div>
                        <div className="remaining-info-user">
                            <hr style={{borderTop: '3px solid'}}/>
                            <p>Participant, Pecfest 2018</p>

                            <br /><br />
                            {/*<div className="grid-container-card">
                                <div className="grid-item">
                                    <div className="card">
                                        <div className="container">
                                            <h4><b>12</b></h4>
                                            Events Participated
                                        </div>
                                    </div>
                                </div>

                                <div className="grid-item">
                                    <div className="card">
                                        <div className="container">
                                            <h4><b>10</b></h4>
                                            Events Won
                                        </div>
                                    </div>
                                </div>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;