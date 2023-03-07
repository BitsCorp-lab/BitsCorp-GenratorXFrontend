import { useEffect, useState } from "react";
import { TiArrowRightThick } from "react-icons/ti";
import "./AppMultiInput.css";

const AppMultiInput = ({ getValues }) => {
  const [value, setValue] = useState();
  const [multiVal, setMultiVal] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addValue = () => {
    setMultiVal([...multiVal, value]);
    setValue("");
  };

  const deleteValue = (val) => {
    let value = multiVal.filter((ele) => {
      return ele !== val;
    });
    setMultiVal(value);
  };

  useEffect(() => {
    getValues(multiVal)
  },[multiVal])


  return (
    <>
      <div className="multiInputCon">
        <input
          className="multiInputBox"
          value={value}
          onChange={handleChange}
        ></input>
        <div className="submitBtn" onClick={addValue}>
          <TiArrowRightThick className="submitIcon"/>
        </div>
      </div>

      <div className="multiInputVal">
        {multiVal.length !== 0
          ? multiVal.map((ele, idx) => {
              return (
                <span onClick={() => deleteValue(ele)} className="multiVal">
                  {ele}
                </span>
              );
            })
          : null}
      </div>
    </>
  );
};

export default AppMultiInput;
