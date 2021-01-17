import React from "react";
import { useSelector } from "react-redux";
// import { useFirestoreConnect, useFirestore } from "react-redux-firebase";
import { Link } from "react-router-dom";
import Loading from "../Navbar/Loading";
const Students = () => {
  // const firestore = useFirestore();
  // const students = useSelector((state) => state.firestore.ordered.studentdata);
  // useFirestoreConnect([
  //   {
  //     collection: "DBNAME",
  //     orderBy: ["createdAt", "desc"],
  //   },
  // ]);
  // if (!students) {
  //   return <Loading />;
  // }
  // const deleteStudent = async (id) => {
  //   try {
  //     await firestore.collection("DBNAME").doc(id).delete();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
      <div className='container'>
        <div className='row py-5'>
          {
            // students.map((student)
            new Array(12).fill("").map((item, index) => (
              <div className='col-md-4 col-12' key={index}>
                <div className='card border-0 mx-4 my-5 p-3 rounded-3 shadow  position-relative'>
                  <img
                    src={`https://i.pravatar.cc/150?u=${index}`}
                    className='card-img-top rounded-circle shadow-sm  border-danger position-absolute top-0 start-50 translate-middle'
                    alt='profileImg'
                    style={{ width: `8rem` }}
                  />
                  <div
                    className='card-body d-flex flex-column align-items-center'
                    style={{ marginTop: `4rem` }}>
                    <h5 className='card-title text-danger fw-bold '>
                      Your Name
                    </h5>
                    <p className='card-text text-secondary  mb-3'>
                      demo@example.com
                    </p>
                  </div>
                  <div className=' d-flex  justify-content-evenly'>
                    <div>
                      <Link
                        to={`/student/${index}`}
                        className='btn btn-outline-primary border-0 btn-sm  shadow-sm rounded-2'
                        data-bs-toggle='tooltip'
                        data-bs-placement='bottom'
                        title='View Profile'>
                        <i className='fas fa-user-graduate' />
                      </Link>
                    </div>
                    <div>
                      <button
                        className='btn btn-outline-danger btn-sm shadow-sm border-0  rounded-2'
                        data-bs-toggle='tooltip'
                        data-bs-placement='bottom'
                        title='Delete Student'
                        // onClick={() => deleteStudent(student.id)}
                      >
                        <i className='fas fa-trash' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Students;
