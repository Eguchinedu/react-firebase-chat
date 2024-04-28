import React, { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setIsOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setIsOpen(false);
  };
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor, sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum
              tempora provident laudantium veniam aliquid quidem earum, voluptas
              distinctio aliquam.
            </p>
            <span>1 min ago.</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum
              tempora provident laudantium veniam aliquid quidem earum, voluptas
              distinctio aliquam.
            </p>
            <span>1 min ago.</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum
              tempora provident laudantium veniam aliquid quidem earum, voluptas
              distinctio aliquam.
            </p>
            <span>1 min ago.</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
          <img
            src="https://images.pexels.com/photos/534124/pexels-photo-534124.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum
              tempora provident laudantium veniam aliquid quidem earum, voluptas
              distinctio aliquam.
            </p>
            <span>1 min ago.</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          value={text}
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setIsOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="send__button">Send</button>
      </div>
    </div>
  );
};

export default Chat;
