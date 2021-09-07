import { useEffect, useState } from "react";
import Pagination from "components/pagination";
import { DateAlbumPage } from "types/date";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import "styles/dataTable.css";

function DataTable() {
  const [infoPage, setInfoPage] = useState({
    first: true,
    last: false,
    number: 0,
    totalElement: 100,
    totalPages: 10,
  });

  const [page, setPage] = useState<DateAlbumPage>({
    content: [],
  });

  const [numberPage, setNumberPagember] = useState(0);

  useEffect(() => {
    axios
      .get(`${BASE_URL}albums?_start=${numberPage}&_limit=10`)
      .then((response) => {
        const date = response.data;
        setPage({
          content: date,
        });
      });
  }, [numberPage]);

  const verificar = (index: number) => {
    let first = true;
    let last = false;
    if (index === 0) {
      first = true;
      last = false;
    } else if (index < infoPage.totalPages - 1) {
      first = false;
      last = false;
    } else {
      first = false;
      last = true;
    }

    setInfoPage({
      first: first,
      last: last,
      number: index,
      totalElement: 100,
      totalPages: 10,
    });
  };

  const changePage = (index: number) => {
    setNumberPagember(index * 10);
    verificar(index);
  };

  return (
    <div className="table-container">
      <div className="title-page">
        <p>Albums</p>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Título</th>
            </tr>
          </thead>
          <tbody>
            {page.content?.map((item) => (
              <tr key={item.id}>
                <td className="id">{item.id}</td>
                <td>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <Pagination page={infoPage} onPageChange={changePage} />
        </div>
      </div>
    </div>
  );
}
export default DataTable;
