import React, { useEffect, useState } from "react";
import { useFirestore } from "react-redux-firebase";
import { useParams, useHistory } from "react-router-dom";
const StudentForm = () => {
  // const firestore = useFirestore();
  const { id } = useParams();
  // let history = useHistory();
  // const [createStudent, setCreateStudent] = useState({
  //   studentName: "",
  //   email: "",
  //   mobile: "",
  //   studentClass: "",
  //   address: "",
  // });
  // const onChangeStudent = (e) => {
  //   setCreateStudent({ ...createStudent, [e.target.name]: e.target.value });
  // };
  // const studentRef = id ? firestore.collection("DBNAME").doc(id) : null;
  // const getStudentData = async () => {
  //   try {
  //     const result = await studentRef.get();
  //     if (result.exists) {
  //       setCreateStudent(result.data());
  //     } else {
  //       console.log("No data found");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (id) {
  //     getStudentData();
  //   }
  // }, [id]);

  // const submit = async (e) => {
  //   e.preventDefault();

  //   if (id) {
  //     await studentRef.update({
  //       ...createStudent,
  //       updatedAt: firestore.FieldValue.serverTimestamp(),
  //     });
  //   } else {
  //     firestore.collection("DBNAME").add({
  //       ...createStudent,
  //       createdAt: firestore.FieldValue.serverTimestamp(),
  //     });
  //   }
  //   history.push("/");
  // };
  return (
    <>
      <div className='container'>
        <div className='row my-5'>
          <div className='col-lg-4  col-md-6 col-sm-12 col-12 m-auto'>
            <form
              className='shadow p-4 rounded-3'
              // onSubmit={submit}
              style={{ backgroundColor: `white` }}>
              <h3 className='text-center mb-3 text-danger'>
                {id ? "Edit" : "Add"} Student
              </h3>
              <div className='mb-3'>
                <input
                  type='text'
                  name='studentName'
                  // value={createStudent.studentName}
                  // onChange={onChangeStudent}
                  className='form-control  border-0 shadow-sm bg-light'
                  placeholder='Full Name'
                  required
                />
              </div>
              <div className='mb-3'>
                <input
                  type='email'
                  name='email'
                  // value={createStudent.email}
                  // onChange={onChangeStudent}
                  className='form-control  border-0 shadow-sm bg-light'
                  placeholder='Email Id'
                  required
                />
              </div>
              <div className='mb-3'>
                <input
                  type='text'
                  name='mobile'
                  // value={createStudent.mobile}
                  // onChange={onChangeStudent}
                  className='form-control  border-0 shadow-sm bg-light'
                  placeholder='Mobile'
                  required
                />
              </div>
              <div className='mb-3'>
                <input
                  type='text'
                  name='studentClass'
                  // value={createStudent.studentClass}
                  // onChange={onChangeStudent}
                  className='form-control  border-0 shadow-sm bg-light'
                  placeholder='Class of the Student'
                  required
                />
              </div>
              <div className='mb-3'>
                <textarea
                  name='address'
                  // value={createStudent.address}
                  // onChange={onChangeStudent}
                  className='form-control  border-0 shadow-sm bg-light'
                  rows='3'
                  requiredplaceholder='Address'></textarea>
              </div>
              <div className='d-grid col-6 mx-auto'>
                <button
                  type='submit'
                  className='btn border-0 btn-danger  btn-sm fs-6 rounded-pill'>
                  {id ? "Update Student" : "Create Student"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentForm;
