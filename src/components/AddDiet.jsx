import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";

const signupSchema = Yup.object().shape({
  timeSpan: Yup.string().required("Required"),
});

const AddDiet = () => {

  const nameRef = useRef(null);
  const descRef = useRef(null);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const [foodItems, setFoodItems] = useState([]);

  const addFoodItem = () => {
    
    setFoodItems([
      ...foodItems,
      { name: nameRef.current.value, description: descRef.current.value },
    ]);
  };

  const removeFoodItem = (index) => {
    let temp = foodItems;
    temp.splice(index, 1);
    setFoodItems(temp);
  };

  const navigate = useNavigate();

  const signupForm = useFormik({
    initialValues: {
      user: currentUser._id,
      person: "",
      foodItems: [],
      timeSpan: "",
      createdAt: new Date(),
    },

    onSubmit: async (values) => {
      values.foodItems = foodItems;
      console.log(values);

      // sending a request on backend to save user data
      const res = await fetch("http://localhost:5000/diet/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "User Registered Successfully",
          text: "Please Login to Continue",
        });
      }

      // add code here to connect to backend
    },

    validationSchema: signupSchema,
  });

  return (
    <div>
      <div className="col-md-3 mx-auto">
        <div className="card">
          <div className="card-body">
            <h2 className="my-5 text-center">Add diet</h2>

            <form onSubmit={signupForm.handleSubmit}>
              <label htmlFor="">Person Name</label>
              <span style={{ color: "red", fontSize: 15, marginLeft: 10 }}>
                {signupForm.touched.name && signupForm.errors.name}
              </span>
              <input
                className="form-control mb-3"
                onChange={signupForm.handleChange}
                value={signupForm.values.name}
                name="name"
              />

              <label htmlFor="">Time Span</label>
              <span style={{ color: "red", fontSize: 15, marginLeft: 10 }}>
                {signupForm.touched.timeSpan && signupForm.errors.timeSpan}
              </span>
              <input
                className="form-control mb-3"
                onChange={signupForm.handleChange}
                value={signupForm.values.timeSpan}
                name="timeSpan"
              />

              <label>Select Food Items</label>

              <div className="">
                <input type="text" className="form-control" ref={nameRef} />
                <textarea className="form-control" ref={descRef}></textarea>
                <button type="button" className="btn btn-primary" onClick={addFoodItem}><i class="fa fa-plus" aria-hidden="true"></i></button>
              </div>

              <ul className="list-group">
                {foodItems.map((food) => (
                  <li className="list-group-item">
                    <h4>{food.name}</h4>
                    <p>{food.description}</p>
                  </li>
                ))}
              </ul>

              <button type="submit" className="btn btn-primary mt-4">
                Add diet
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDiet;
