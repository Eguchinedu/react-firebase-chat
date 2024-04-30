import React from "react";
import "./detail.css";
import { auth } from "../../lib/firebase";

function Detail() {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            
            <div className="photo__item">
              <div className="photo__detail">
                <img
                  src="https://images.pexels.com/photos/534124/pexels-photo-534124.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" className="icon" alt="" />
            </div>

            <div className="photo__item">
              <div className="photo__detail">
                <img
                  src="https://images.pexels.com/photos/534124/pexels-photo-534124.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" className="icon" alt="" />
            </div>

            <div className="photo__item">
              <div className="photo__detail">
                <img
                  src="https://images.pexels.com/photos/534124/pexels-photo-534124.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" className="icon" alt="" />
            </div>

            <div className="photo__item">
              <div className="photo__detail">
                <img
                  src="https://images.pexels.com/photos/534124/pexels-photo-534124.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" className="icon" alt="" />
            </div>
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <button>Block User</button>
        <button className="logout" onClick={() => auth.signOut()}>Logout</button>
      </div>
    </div>
  );
}

export default Detail;
