import React from "react";

const defaultValue = {
  currentValue: [],
  addValue: value => {},
  removeValue: index => {}
};

export default React.createContext({ defaultValue });
