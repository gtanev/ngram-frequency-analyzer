import React from "react";

export default function CanvasTableBody({ data }) {
  const renderRow = row => (
    <tr key={row.index}>
      <th scope="row">{row.index}</th>
      <td className="align-middle"
          style={{ whiteSpace: "pre" }}>
        {row['n-gram']}
      </td>
      <td className="align-middle">
        {row['count']}
      </td>
    </tr>
  );

  return (
    <tbody className="text-dark">
    {data.map(renderRow)}
    </tbody>
  );
}