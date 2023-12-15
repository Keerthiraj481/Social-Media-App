import React, { useContext, useReducer, useEffect, useState } from "react";
import avatar from "../../assets/images/avatar.jpg";
import like from "../../assets/images/like.jpg";
import comment from "../../assets/images/comment.jpg";
import remove from "../../assets/images/delete.jpg";
import addFriend from "../../assets/images/add-friend.png";
import { AuthContext } from "../context/context";
import { PostsReducer, postActions, postsStates } from "../context/reducer";
import {
  doc,
  getDocs,
  setDoc,
  updateDoc,
  arrayUnion,
  deleteDoc,
  collection,
  query,
  onSnapshot,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import CommentSection from "./commentsection";




const PostCard = ({ uid, id, logo, email, name, text, image, timestamp }) => {

  const { user } = useContext(AuthContext);

  const [state, dispatch] = useReducer(PostsReducer, postsStates);

  const likesRef = doc(collection(db, "posts", id, "likes"));

  const likesCollection = collection(db, "posts", id, "likes");

  const singlePostDocument = doc(db, "posts", id)

  const { ADD_LIKE, HANDLE_ERROR } = postActions;

  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  const addUser = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].ref;
      await updateDoc(data, {
        friends: arrayUnion({
          id: uid,
          image: logo,
          name:name,
        }),
      });
    } catch (err) {
      alert(err.message);
      console.log(err.message);
    }
  };

  const handleLike = async (e) => {
    e.preventDefault();
    const q = query(likesCollection, where("id", "==", user?.uid))
    const querySnapshot = await getDocs(q);
    const likesDocId = await querySnapshot?.docs[0]?.id;
    try {
      if (likesDocId !== undefined) {
        const deleteId = doc(db, "posts", id, "likes", likesDocId);
        await deleteDoc(deleteId);
      } else {
        await setDoc(likesRef, {
          id: user?.uid,
        })
      }
    } catch (err) {
      alert(err.message);
      console.log(err.message);
    }
  }

  const deletePost = async (e) => {
    e.preventDefault();
    try {
      if(user?.uid === uid) {
        await deleteDoc(singlePostDocument)
      } else {
        alert("you can't Delete other Users posts.!!!")
      }
    } catch (err) {
      alert(err.message);
      console.log(err.message);
    }
  };


  useEffect(() => {
    const getLikes = async () => {
      try {
        const q = collection(db, "posts", id, "likes");
        await onSnapshot(q, (doc) => {
          dispatch({
            type: ADD_LIKE,
            likes: doc.docs.map((item) => item.data()),
          });
        });
      } catch (err) {
        dispatch({ type: HANDLE_ERROR });
        alert(err.message);
        console.log(err.message);
      }
    }
    return () => getLikes();
  }, [id, ADD_LIKE, HANDLE_ERROR]);


    return (
      <div className="mb-4">
        <div className="flex flex-col py-4 bg-white rounded-t-3xl">
          <div className="flex items-center pb-4 ml-2">
            <img
              size="sm"
              variant="circular"
              src={logo || avatar}
              alt="avatar"
              className="w-[3rem] h-[3rem] rounded-full"
            />
            <div className="flex flex-col">
              <p className="ml-4 py-2 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
                {email}
              </p>
              <p className="ml-4 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
                Published: {timestamp}
              </p>
            </div>
            {user?.uid !== uid && (
              <div
                onClick={addUser}
                className="w-full flex justify-end cursor-pointer mr-10"
              >
                <img
                  className="hover:bg-blue-100 rounded-xl p-2 w-[3rem] h-[3rem]"
                  src={addFriend}
                  alt="addFriend"
                ></img>
              </div>
            )}
          </div>
          <div>
            <p className="ml-4 pb-4 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
              {text}
            </p>
            {image && (
              <img src={image} alt="postImage" className="h-[500px] w-full" />
            )}
          </div>
          <div className="flex justify-around items-center pt-4">
            <button
              className="flex items-center cursor-pointer rounded-lg p-2 hover:bg-gray-100"
              onClick={handleLike}
            >
              <img src={like} alt="like" className="h-8 mr-4" />
              {state.likes?.length > 0 && state?.likes?.length}
            </button>
            <div
              className="flex items-center cursor-pointer rounded-lg p-2 hover:bg-gray-100"
              onClick={handleOpen}
            >
              <div className="flex items-center cursor-pointer">
                <img src={comment} alt="comment" className="h-8 mr-4" />
                <p className="font-roboto font-medium text-md text-gray-700 no-underline tracking-normalleading-none">
                  Comments
                </p>
              </div>
            </div>
            <div
              className="flex items-center cursor-pointer rounded-lg p-2 hover:bg-gray-100"
              onClick={deletePost}
            >
              <img src={remove} alt="delete" className="h-8 mr-4" />
              <p className="font-roboto font-medium text-md text-gray-700 no-underline tracking-normalleading-none">
                Delete
              </p>
            </div>
          </div>
        </div>
        {open && <CommentSection postId={id}></CommentSection>}
      </div>
    );
}
 
export default PostCard;