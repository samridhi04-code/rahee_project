import React from 'react';
import {
    RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
    Home,
    QuestionAnswerRoundedIcon,
    HomeRoundedIcon,
    ExploreRoundedIcon,
    VideoLibraryIcon,
    BookMarksIcon,
  } from "@material-ui/icons";
import "./Sidenavbar.css";
// import { useLocation } from "react-router-dom";

export default function Sidenavbar() {

    // const location = useLocation();

    return (
              <div className="sidebar">
                <div className="sidebarWrapper">
                  <ul className="sidebarList">
                    <li className="sidebarListItem">
                      <Home style={{ color: 'orange' }} className="sidebarIcon" />
                      <span className="sidebarListItemText"></span>
                    </li>
                    <li className="sidebarListItem">
                      <Chat color="primary" className="sidebarIcon" />
                      <span className="sidebarListItemText"></span>
                    </li>
                    <li className="sidebarListItem">
                      <PlayCircleFilledOutlined style={{ color: 'yellow' }} className="sidebarIcon" />
                      <span className="sidebarListItemText"></span>
                    </li>
                    <li className="sidebarListItem">
                      <Group style={{ color: 'rgb(36,255,255)' }} className="sidebarIcon" />
                      <span className="sidebarListItemText"></span>
                    </li>
                    <li className="sidebarListItem">
                      <Bookmark style={{ color: 'pink' }}className="sidebarIcon" />
                      <span className="sidebarListItemText"></span>
                    </li>
                    <li className="sidebarListItem">
                      <HelpOutline style={{ color: 'lightgreen' }} className="sidebarIcon" />
                      <span className="sidebarListItemText"></span>
                    </li>
                    <li className="sidebarListItem">
                      <WorkOutline style={{ color: 'rgb(0,87,87)' }} className="sidebarIcon" />
                      <span className="sidebarListItemText"></span>
                    </li>
                    <li className="sidebarListItem">
                      <Event style={{ color: 'purple' }} className="sidebarIcon" />
                      <span className="sidebarListItemText"></span>
                    </li>
                    <li className="sidebarListItem">
                      <School style={{ color: 'lightblue' }} className="sidebarIcon" />
                      <span className="sidebarListItemText"></span>
                    </li>
                  </ul>
                  </div>
                  </div>
        
    );
}