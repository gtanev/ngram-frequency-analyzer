import React from "react";
import { Bar, BarChart, Brush, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import theme from "../../../../styles/theme.scss";

export default function CanvasBarChart({ data, contentHeight }) {
  return (
      <div className="w-100" style={{ height: contentHeight() }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="horizontal">
            <XAxis type="category" dataKey="n-gram" style={{ whiteSpace: "pre" }}/>
            <YAxis type="number" dataKey="count"/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip labelStyle={{ whiteSpace: "pre" }}/>
            <Brush dataKey="n-gram" height={30} stroke={theme["secondary"]}>
              <BarChart>
                <Bar dataKey="count" fill={theme["dark"]} fillOpacity={0.25}/>
              </BarChart>
            </Brush>
            <Bar dataKey="count" fill={theme["primary"]}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
  );
}