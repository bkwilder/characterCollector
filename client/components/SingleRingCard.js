import React from "react";

export default function SingleRingCard(props) {
  return (
    <div>
      <figure className="snip1559">
        <div className="profile-image">
          <img src={props.ring.image}/>
        </div>
        <figcaption>
          <h3>{props.ring.value}</h3>
          <h5>{props.ring.name}</h5>
          <p>
            {props.ring.description}
          </p>
          <div className="icons">
            <a href="#">
              <i className="ion-social-reddit"></i>
            </a>
            <a href="#">
              {" "}
              <i className="ion-social-twitter"></i>
            </a>
            <a href="#">
              {" "}
              <i className="ion-social-vimeo"></i>
            </a>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
