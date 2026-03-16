import { useState, useEffect } from "react";

const Apiloadercomp = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div>
      <h1>API Loader Component</h1>
      <p>
        This component fetches data from an API when it mounts and shows the
        first 5 post titles.
      </p>

      {loading ? <p>Loading...</p> : null}

      <ul>
        {data.slice(0, 5).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Apiloadercomp;
