import { useEffect, useState } from "react";
import Page from "./components/Page";

function App() {
  const [yearBook, setYearBook] = useState([])
  useEffect(() => {
    fetch('/yearbook.json').then(res => res.json()).then(data => {
      setYearBook(data.sort((a, b) => a.name.localeCompare(b.name)))
    })
  }, [])

  console.log(yearBook);

  return (
    <div className="bg-dark d-flex flex-column justify-content-start" style={{}}>
      {
        yearBook.map((page, j) => {
          const { name, comments } = page
          const size = 12
          return Array.from({ length: Math.ceil(comments.length / size) }, (v, i) =>
            comments.slice(i * size, i * size + size)

          ).map((chunk, i) => <div key={(j + 1) * (i + 1)} style={{
            border: '1px solid #ccc',
          }}>
            <Page comments={chunk} name={name} />
          </div>)
        })
      }

    </div>
  );
}

export default App;
