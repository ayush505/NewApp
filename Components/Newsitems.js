import React from 'react';

const Newsitems =(props)=>
 {
 
 
    let {title,description,Imagel,newsUrl,author,time,name}=props;
    return (
      <div className="card" style={{width: "18rem", marginBottom:'20px'}}> 
      
      <img src={!Imagel?"https://i.picsum.photos/id/625/200/200.jpg?hmac=oIwf4IzbglfXYZo-9VXZTHju2-ox3D-Vooeuioav_nw":Imagel} className="card-img-top" alt="..." />  
      <div className="card-body">
        <h5 className="card-title">{title}   <span className="badge badge-pill badge-success" style={{background:'rgb(98 91 91)'}}>{name}</span></h5>
     
        
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">Author : {author?author:"Unknown"}  & Last Updated on {new Date(time).toGMTString()}</small></p>
        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark" style={{background:'#787272'}}>Read More</a>
      </div>
    </div>
    );
  }


export default Newsitems;
