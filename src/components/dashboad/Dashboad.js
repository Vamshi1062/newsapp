import React, { Fragment, useEffect, useState } from "react"
import CardD from "../card/CardD"
// const  News=[];
const Dashboad=props=>{
    return <Fragment>
        {props.news.map((newItem,index) => {
          return  <CardD isdisplay={props.isReadList} key={index} Imgurl={newItem.urlToImage} Title={newItem.title} Author={newItem.author} />;
        })}
    </Fragment>
}

export default Dashboad;