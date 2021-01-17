import React from "react";

const Loading = () => {
  return (
    <>
      <div className='container'>
        <div
          class='spinner-border text-center'
          style={{ width: "3rem", height: "3rem" }}
          role='status'>
          <span class='visually-hidden'>Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Loading;
