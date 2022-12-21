import Table from "./components/Table";

// let data = [
//   { Roll: "001", Name: "Ashish", Marks: "96" },
//   { Roll: "002", Name: "Ramesh", Marks: "100" },
//   { Roll: "003", Name: "Rahul", Marks: "100" }
// ];

let data = [
  { Roll: "001", Name: "Ashish", Subject: "Math", Marks: "96" },
  { Roll: "002", Name: "Ramesh", Subject: "Science", Marks: "100" },
  { Roll: "003", Name: "Rahul", Subject: "English", Marks: "100" },
];
export default function App() {
  return (
    <div className="mt-6">
      <Table TableData={data} />
    </div>
  );
}
