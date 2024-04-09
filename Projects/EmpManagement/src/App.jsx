import { useEffect, useState } from "react";
import EmpNav from "./components/EmpNav";
import data from "./data.json";
import "./App.css";
import EmpList from "./components/EmpList";
import EmpInfo from "./components/EmpInfo";
import AddEmp from "./components/AddEmp";

function App() {
  const [selectedEmp, setSelectedEmp] = useState({});
  const [employees, setEmployees] = useState(data);
  const [addEmp, setAddEmp] = useState(false);

  const handleDelete = (emp) => {
    const emps = [...employees];
    const filteredEmps = emps.filter((employee) => employee.id !== emp.id);
    setEmployees(filteredEmps);
  };

  useEffect(() => {
    setSelectedEmp(employees[0]);
  }, [employees]);
  return (
    <>
      <EmpNav addEmp={addEmp} setAddEmp={setAddEmp} />

      <main>
        {/* Employee list */}
        <section className="emp-list-section">
          <EmpList
            empData={employees}
            setSelectedEmp={setSelectedEmp}
            handleDelete={handleDelete}
          />
        </section>

        {/* Employee info */}
        <section className="emp-info-section">
          <EmpInfo empData={selectedEmp} />
        </section>

        {/* Add Employee Modal */}
        {addEmp && (
          <section>
            <AddEmp
              employees={employees}
              setEmployees={setEmployees}
              setAddEmp={setAddEmp}
            />
            <div
              className="modal-overlay"
              onClick={() => setAddEmp(false)}
            ></div>
          </section>
        )}
      </main>
    </>
  );
}

export default App;
