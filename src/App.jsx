import react, { useEffect, useState } from "react";
import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { doc, onSnapshot } from "firebase/firestore";
import { useChatStore } from "./lib/chatStore";
import ViewComp from "./components/viewComp/ViewComp";


const App = () => {
const {currentUser, isLoading, fetchUserInfo} = useUserStore()
const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
const {chatId} = useChatStore()

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);


 
  
  if(isLoading) return (
    <div className="loading">
      {" "}
      <i
        class="bx bx-loader-alt bx-spin bx-rotate-90"
        
      ></i>
    </div>
  );

 
  return (
    <div className="container">
      {currentUser ? (
        <>
          {isDesktop && <List />}
          {isDesktop && chatId && <Chat />}
          {isDesktop && chatId && <Detail />}
        </>
      ) : (
        <Login />
      )}
      {!isDesktop && (
        <ViewComp/>
      )}
      <Notification />
    </div>
  );
};

export default App;
