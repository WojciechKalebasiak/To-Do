import React from "react";
import style from './containers/App.css'
const Title = props =><h1 className={style.title}>{props.text}: {props.amount}</h1>;
export default Title;