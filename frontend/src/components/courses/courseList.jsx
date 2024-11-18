import { useEffect, useState } from "react";
import { Card } from "./cards";

function Course() {
  const filters = ["All", "Development", "Business", "Design", "Lifestyle"];
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(true);
  let [alldata, setAllData] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      setAllData([]);
      const mydata = await getdata(); // Fetch the data and await it
      setData(mydata); // Set the data once it is fetched

      // After setting data, process it and update alldata
      Object.values(mydata).forEach((e) =>
        e.forEach((course) => {
          setAllData((previous) => [...previous, course]);
        })
      );
    };

    fetchData(); // Call the async function
  }, []);

  function handle(e) {
    if (data != null || data != undefined) {
      let category = e.target.innerText;
      if (category == "All") {
        let values = [
          ...data[filters[1]],
          ...data[filters[2]],
          ...data[filters[3]],
          ...data[filters[4]],
        ];
        setAllData(values);
        setCategory("All");
      } else {
        let values = data[category].map((e) => e);
        setCategory(category);
        setAllData(values);
      }
    }
  }

  const getdata = async () => {
    let response = await fetch("https://codehelp-apis.vercel.app/api/get-top-courses");
    let information = await response.json();
    return information.data; // Return the actual data
  };

  return (
    <>
      <div className="max-w-full">
        <h1 className="font-bold bg-green-800 h-max p-3 text-center text-white text-2xl">
          Top Courses
        </h1>
        <div className="min-h-screen bg-neutral-950 pt-4">
          <span className="flex flex-wrap w-[90%] md:w-max m-auto justify-center gap-2">
            {filters.map((e, index) => {
              if (category === e) {
                return (
                  <button
                    className="p-2 min-w-[100px] border-white border-[1px] border-solid text-white rounded bg-green-500 m-1 transform transition duration-300 hover:scale-105"
                    key={index + 1}
                    onClick={handle}
                  >
                    {e}
                  </button>
                );
              }
              return (
                <button
                  className="p-2 min-w-[100px] text-white rounded bg-green-500 m-1 transform transition duration-300 hover:scale-105"
                  key={index + 1}
                  onClick={handle}
                >
                  {e}
                </button>
              );
            })}
          </span>
          <div className="flex flex-wrap w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] m-auto justify-center mt-3 gap-4">
            {!(alldata.length === 0) &&
              alldata.map((e, index) => <Card key={index} e={e} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
