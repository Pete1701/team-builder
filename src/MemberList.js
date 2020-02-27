import React from "react";

const MemberList = props => {
  return (
    <div className="member-list">
      {props.members.map(data => (
        <div className="member" key={data.id}>
          <h2>{data.name}</h2>
          <p>{data.email}</p>
          <p>{data.role}</p>
        </div>
      ))}
    </div>
  );
};

export default MemberList;