import { createContext, useEffect, useReducer, useState } from "react";

export const expanceContext = createContext({
  expenses: [],
  addPost: () => {},
  deletePost: () => {},
});

const expanceListReducer = (currentExpanceList, action) => {
  let newPostList = currentExpanceList;
  if (action.type == "ADD_POST") {
    newPostList = [action.payload, ...currentExpanceList];
  } else if (action.type == "DELETE_POST") {
    newPostList = currentExpanceList.filter(
      (post) => post.Id !== action.payload.postId,
    );
  }

  return newPostList;
};

const ExpanceProvider = ({ children }) => {
  const [balance, updateBalance] = useState(() => {
    const savedBalance = localStorage.getItem("balance");
    return savedBalance ? JSON.parse(savedBalance) : 0;
  });

  useEffect(() => {
    localStorage.setItem("balance", JSON.stringify(balance));
  }, [balance]);

  

  const [expenses, dispatchExpanses] = useReducer(
    expanceListReducer,[],() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : []}
    
  );

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addPost = (post) => {
    dispatchExpanses({
      type: "ADD_POST",
      payload: post,
    });
  };

  const deletePost = (postId) => {
    dispatchExpanses({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <expanceContext.Provider
      value={{
        expenses,
        addPost,
        deletePost,
        balance,
        updateBalance,
      }}
    >
      {children}
    </expanceContext.Provider>
  );
};

export default ExpanceProvider;
