import React from "react";
import { Tabs } from "antd";
import LDC from "./Events/LDC";
import Kanpur from "./Events/Kanpur";
import Lala from "./Events/Lala";
import Maharishi from "./Events/Maharishi";

// Placeholder components
// const LDC: React.FC = () => <div>LDC Component Content</div>;
const AnotherComponent: React.FC = () => <div>Another Component Content</div>;

const App: React.FC = () => (
  <Tabs
    defaultActiveKey="1"
    centered
    items={[
      {
        label: "Kanpur - IIT",
        key: "1",
        children: <Kanpur />, // Render LDC component in Tab 1
      },
      {
        label: "LDC Public School",
        key: "2",
        children: <LDC />, // Render another component in Tab 2
      },
      {
        label: "Maharishi Patanjali School",
        key: "3",
        children: <Maharishi />, // You can replace this with any other content
      },
      {
        label: "Lala Mohan Das College",
        key: "4",
        children: <Lala />, // You can replace this with any other content
      },
    ]}
  />
);

export default App;
