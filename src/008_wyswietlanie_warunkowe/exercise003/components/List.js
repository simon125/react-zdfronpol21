import React from "react";

export const List = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Content</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Test</td>
          <td>Content</td>
          <td>
            <button style={{ width: "fit-content" }}>Delete</button>
          </td>
        </tr>
        <tr>
          <td>Test1</td>
          <td>Content1</td>
          <td>
            <button style={{ width: "fit-content" }}>Delete</button>
          </td>
        </tr>
        <tr>
          <td>Test2</td>
          <td>Content2</td>
          <td>
            <button style={{ width: "fit-content" }}>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
