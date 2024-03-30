import { useState } from "react";
import Name from "./components/Name";
import Email from "./components/Email";
import Password from "./components/Password";
import Date from "./components/Date";
import ShowData from "./components/ShowData";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("name");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");

  // console.log(`${name}, ${email}, ${date}, ${password}`);

  const renderActiveTab = () => {
    switch (activeTab) {
      case "name":
        return <Name setName={setName} setActiveTab={setActiveTab} />;
      case "email":
        return <Email setEmail={setEmail} setActiveTab={setActiveTab} />;
      case "date":
        return <Date setDate={setDate} setActiveTab={setActiveTab} />;
      case "password":
        return (
          <Password setPassword={setPassword} setActiveTab={setActiveTab} />
        );

      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      email,
      date,
    };
    setData(data);
    setIsSubmitted(true);
  };

  return (
    <main className="App">
      {isSubmitted ? (
        <ShowData data={data} />
      ) : (
        <form onSubmit={handleSubmit}>{renderActiveTab()}</form>
      )}
    </main>
  );
}

export default App;
