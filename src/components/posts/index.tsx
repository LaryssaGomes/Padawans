import { useEffect, useState } from "react";
import Pagination from "components/pagination";
import { DatePostPage } from "types/date";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import "styles/dataTable.css";

function PostTable() {
  const [infoPage, setInfoPage] = useState({
    first: true,
    last: false,
    number: 0,
    totalElement: 100,
    totalPages: 10,
  });

  const [numberPage, setNumberPagember] = useState(0);

  const [page, setPage] = useState<DatePostPage>({
    content: [],
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}posts?_start=${numberPage}&_limit=10`)
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
        <p>Postagens</p>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Título</th>
              <th>Mensagem</th>
            </tr>
          </thead>
          <tbody id="table-content">
            {page.content?.map((item) => (
              <tr key={item.id}>
                <td id="item">{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Pagination page={infoPage} onPageChange={changePage} />
      </div>
    </div>
  );
}
export default PostTable;
