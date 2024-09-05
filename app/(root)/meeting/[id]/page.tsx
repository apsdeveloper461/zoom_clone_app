import React from "react";

const Meeting = ({ params }: { params: { id: string } }) => {
  return <div>
    <h1>Meeting Page</h1>
    <p>Meeting ID: {params.id}</p>
  </div>;
};

export default Meeting;
