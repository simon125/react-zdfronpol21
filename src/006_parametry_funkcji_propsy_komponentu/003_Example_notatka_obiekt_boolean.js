import React from "react";
import { useState } from "react";

/**
 *
 * Czym są propsy?
 *
 * Przypominam funkcyjny komponent reactowy to dalej FUNCKJA JAVASCRIPTOWA
 * oznacza to tyle że tak funckja (komponent) może przyjmować parametry które w nomenklaturze reacta
 * nazywają się PROPSAMI
 *
 *
 * 1) props
 * 2) string/numbers/object as a props
 * 3) boolean as props
 * 4) functions/callbacks as a props
 * 5) props drilling
 * 6) ⭐ children
 * 7) ⭐⭐ react elements as a props
 */

const ComponentWithProps = (props) => {
  return (
    <li>
      {props.cokolwiek} {props.lastName}
    </li>
  );
};

const ComponentWithObjectAsProps = (props) => {
  /**
   * Destrukturyzacja propsów jest opcjonalna ale jest częstą praktyką
   */
  const { user } = props;

  // return <li>{user.name} {user.lastName}</li>;
  return (
    <li>
      {props.user.name} {props.user.lastName}
    </li>
  );
};

const BooleanComponent = (props) => {
  return props.showUnorderdList ? (
    <ul>
      <li>UnorderdList</li>
    </ul>
  ) : (
    <ol>
      <li>Ordered list</li>
    </ol>
  );
};

export const Props = () => {
  const users = [
    { name: "John", lastName: "Doe" },
    { name: "Jane", lastName: "Doe" },
  ];

  return (
    <article>
      Example
      <ul>
        <ComponentWithProps
          cokolwiek={users[0].name}
          lastName={users[0].lastName}
        />
        <ComponentWithProps cokolwiek={"jane"} lastName={"Doe"} />
      </ul>
      <ol>
        <div style={{ background: "red", width: 100 }}></div>
        <ComponentWithObjectAsProps user={{ name: "Jane", lastName: "Doe" }} />
      </ol>
      <input type="text" readOnly={false} />
      <input type="text" readOnly={true} />
      <input type="text" readOnly />
      <h3>Listy i boolean props</h3>
      <BooleanComponent showUnorderdList />
      <BooleanComponent showUnorderdList={true} />
      <BooleanComponent showUnorderdList={false} />
    </article>
  );
};

/**
 * 1) paramtry defaultowe
 */
// const addTwoNumbers = (a = 10, b = 10) => a + b;

/**
 * 2) logiczne
 */
const addTwoNumbers = (a, b) => (a || 10) + (b || 10);

addTwoNumbers(10, 20);

addTwoNumbers(40, 10);

addTwoNumbers(40); // 50

addTwoNumbers(); // 20
