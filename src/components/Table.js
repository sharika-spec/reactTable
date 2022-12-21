
export default function Table({ TableData }) {
  let tableHead = Object.keys(TableData[0]);
  return (
    <div className="">
      <table className="container mx-auto border-2 text-slate-500 border-slate-300">
        <thead>
          <tr>
            {tableHead.map((item, index) => {
              return <th  className="border-b-2 bg-slate-200 p-2" key={index}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {TableData.map((data, index) => {
            return (
              <tr key={index}>
                {tableHead.map((v, index) => {
                  return <td className="text-center border-b-2 p-2" key={index}>{data[v]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
