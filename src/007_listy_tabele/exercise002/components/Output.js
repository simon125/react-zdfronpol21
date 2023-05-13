// export const Output = (props) => {
//     const {value, bgColor} = props;
//   return <p>Output</p>;
// };

// export const Output = ({value, bgColor}) => {

//   return <p>Output</p>;
// };

export const Output = (props) => {
  return (
    <p
      style={{
        background: props.bgColor,
        margin: 5,
        padding: 5,
        color: "white",
      }}
    >
      {props.value}
    </p>
  );
};
