import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/Userslice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { APP_LOGO, Supported_Language } from "../utils/constansts";
import { toggleGptSearchView } from "../utils/gptSclice";
import { changeLanguage } from "../utils/configSclice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store?.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/brwose");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handalButtonClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handallanguagechange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="px-12 bg-gradient-to-b from-black  py-4 absolute z-10 w-full h-32">
      <img
        className="md:w-[200px] cursor-pointer w-[150px]"
        src={APP_LOGO}
        alt="NetFlix Logo"
      />
      {user && (
        <div className="md:flex mt-2 p-4 gap-5 justify-end absolute z-50 top-1 right-0 flex w-[350px] ">
          {showGptSearch && (
            <select
              onChange={handallanguagechange}
              className="p-2  bg-gray-700 text-white"
            >
              {Supported_Language.map((Lang) => (
                <option
                  className="w-[20px] h-[20px]"
                  key={Lang.identifier}
                  value={Lang.identifier}
                >
                  {Lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handalButtonClick}
            className="md:px-4 py-2 bg-purple-800 text-white rounded-lg px-2"
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>

          <img
            className="h-12 w-12 object-cover rounded-full cursor-pointer animate-pulse"
            src={user?.photoURL}
            alt="ProfilePhoto"
          />
          <button
            onClick={handleSignout}
            className="font-semibold w-20 text-white bg-orange-700 p-2 rounded "
          >
            signout
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
