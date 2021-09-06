import { useEffect, useState } from "react";
import Pagination from "components/pagination";
import { DateAlbumPage } from "types/date";
import axios from "axios";
import { BASE_URL } from "utils/requests";

function TodosTable() {
  const [infoPage, setInfoPage] = useState({
    first: true,
    last: false,
    number: 0,
    totalElement: 100,
    totalPages: 10,
  });

  const [numberPage, setNumberPagember] = useState(0);

  const [page, setPage] = useState<DateAlbumPage>({
    content: [],
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}todos?_start=${numberPage}&_limit=10`)
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
    setNumberPagember(index);
    verificar(index);
  };

  return (
    <>
      <Pagination page={infoPage} onPageChange={changePage} />
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Título</th>
            </tr>
          </thead>
          <tbody>
            {page.content?.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default TodosTable;
