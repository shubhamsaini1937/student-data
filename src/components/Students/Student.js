import React, { useEffect, useState } from "react";
// import { useFirestore } from "react-redux-firebase";
import { Link, useParams } from "react-router-dom";
// import Loading from "../Navbar/Loading";

const Student = () => {
  // const firestore = useFirestore();
  const { id } = useParams();
  // const [student, setStudent] = useState(null);

  // const getStudentData = async () => {
  //   try {
  //     const studentRef = firestore.collection("DBNAME").doc(id);
  //     const result = await studentRef.get();
  //     if (result.exists) {
  //       setStudent(result.data());
  //     } else {
  //       console.log("No result found!");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getStudentData();
  // }, []);
  // if (!student) {
  //   return <Loading />;
  // }
  return (
    <>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-lg-5 col-md-8 col-sm-12 col-12 m-auto'>
            <div className='card border-0 rounded-3 shadow my-5 position-relative '>
              <img
                src={`https://i.pravatar.cc/150?u=${id}`}
                className='card-img-top rounded-circle shadow-sm  border-danger position-absolute top-0 start-50 translate-middle'
                alt='profileImg'
                style={{ width: `8rem` }}
              />
              <div
                className='card-body d-flex flex-column align-items-center'
                style={{ marginTop: `4rem` }}>
                <h5 className='card-title text-danger fw-bold'>Your Name</h5>
                <p className='card-text text-secondary'>dwmo@example.com</p>

                <table className='table mb-4'>
                  <tbody>
                    <tr>
                      <th className='text-danger'>Mobile</th>
                      <td className='text-secondary'>+91-11111-11111</td>
                    </tr>
                    <tr>
                      <th className='text-danger'>Class</th>
                      <td className='text-secondary'>12th</td>
                    </tr>
                    <tr>
                      <th className='text-danger'>Address</th>
                      <td className='text-secondary'>Your Address...</td>
                    </tr>
                  </tbody>
                </table>
                <Link
                  to={`/studentform/${id}`}
                  className='btn btn-danger px-4 border-0 btn-sm fs-6 rounded-pill'>
                  Edit Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
