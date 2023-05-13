export const Form = (props) => {
  console.log(props);
  return (
    <div>
      <p>Form</p>
      <input
        value={props.wartoscInputa}
        onChange={(event) => {
          props.funkcjaSetujaca(event.target.value);
        }}
        type="text"
      />
    </div>
  );
};
