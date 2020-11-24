import { useState } from "react";

const useForm = (cb) => {
  const [item, setItem] = useState({});

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    console.log("button clicked");
    e.preventDefault();
    e.target.reset();
    cb(e);
    console.log(item);
    const resetitem = {};
    setItem({ item: resetitem });
  };

  return [item, handleChange, handleSubmit];
};

export default useForm;
