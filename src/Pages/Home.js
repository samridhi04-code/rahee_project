import React from 'react'
import Sidenavbar from "../MyComponents/Sidenavbar";
import {Topbar} from "../MyComponents/Topbar";
import {Rightbar} from "../MyComponents/Rightbar";
import {Feed} from "../MyComponents/Feed";
import "./Home.css";

export const Home = () => {
  return (
    <>
    <Topbar/>
    {/* <Sidenavbar/> */}
    <div class=" set">
  {/* <div class="row"> */}
    {/* <div class="okay"> */}
    <Sidenavbar/>
    {/* </div> */}
    {/* <div class="col-9"> */}
    {/* <div> */}
      <Feed/>
    {/* </div> */}
    {/* <div class="col"> */}
    {/* <div> */}
    <Rightbar/>
    {/* </div> */}
    </div>
    {/* </div> */}
{/* <Topbar/>
<Sidenavbar/>
<Rightbar/> */}
</>

  );
}
