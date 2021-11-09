import "./styles.css";
import User from "./User";

export default function App() {
  return (
    <div className="App">
      <User
        firstName="علیرضا"
        lastName="باقری"
        image="https://picsum.photos/201"
        weight={80}
        height={1.7}
      />
      <User
        firstName="محمد"
        lastName="پناهی"
        image="https://picsum.photos/202"
        weight={90}
        height={1.7}
      />
      <User
        firstName="جواد"
        lastName="خاجوی"
        image="https://picsum.photos/203"
        weight={100}
        height={1.7}
      />
      <User
        firstName="علی"
        lastName="ناصری"
        image="https://picsum.photos/204"
        weight={110}
        height={1.7}
      />
    </div>
  );
}
