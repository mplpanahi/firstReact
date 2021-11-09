import React from "react";

export default class Product extends React.Component {
  render() {
    let bmiCalc = this.props.weight / this.props.height ** 2;
    let BMI;
    if (bmiCalc < 18.5) BMI = "لاغر";
    if (bmiCalc >= 18.5 && bmiCalc < 24.9) BMI = "نرمال";
    if (bmiCalc >= 25 && bmiCalc < 29.9) BMI = "اضافه وزن";
    if (bmiCalc >= 30 && bmiCalc < 34.9) BMI = "چاق";
    if (bmiCalc >= 35) BMI = "خیلی چاق";
    let hastid = "";
    if (BMI == "اضافه وزن") {
      hastid = "دارید";
    } else {
      hastid = "هستید";
    }
    return (
      <h4>
        شما {BMI} {hastid}
      </h4>
    );
  }
}
