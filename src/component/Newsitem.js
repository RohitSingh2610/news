import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageurl, newsUrl, author, date,source } = this.props;
    return (
     
      <div className="  my-3 " >
        <div className="card" >
          <div style={{display:"flex" , justifyContent:"flex-end" , position:"absolute" , right:"0" }}>
        <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" >
                {source}
              </span>
              </div>
          <img src={imageurl} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 className="card-title">
              {title}
             
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small class="text-body-secondary">
                By {!author ? "Unknown" : author} On{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>

            <a href={newsUrl} target=" blank" className="btn btn-sm btn-dark">
              Read More...
            </a>
          </div>
        </div>
      </div>
  

    );
  }
}

export default Newsitem;
