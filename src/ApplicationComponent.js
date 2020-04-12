import { Component } from "react";
import AppContext from "./context/appContext";
export default class ApplicationComponent extends Component {
  static contextType = AppContext;
}
