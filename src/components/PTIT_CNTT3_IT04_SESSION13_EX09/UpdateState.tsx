import  { useState } from "react";

function UpdateState() {
  const [company, setCompany] = useState("Rikkei Academy");

  const handleChange = () => {
    setCompany("Rikkei Soft");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tên công ty: {company}</h2>
      <button onClick={handleChange}>Change</button>
    </div>
  );
}

export default UpdateState;
