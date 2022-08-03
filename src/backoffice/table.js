import { useMemo } from "react";
import { useTable } from "react-table";
import styles from "./table.module.css";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
// import Icon from "components/Icon";

function Table(props) {
  const {
    data,
    columns,
    className = "",
    paging = { page: 1, totalPages: 1 },
    searchValue = {},
    pagination = true,
    onChange = () => {},
  } = props;
  const table = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    table;
  const { page, totalPages } = paging;

  // TODO : DANGER ZONE this is for datepicker bug, if's broke!, FIX THIS FOR ME PLS!
  const dataList = useMemo(() => {
    return rows.map((row) => {
      prepareRow(row);
      return (
        <tr {...row.getRowProps()}>
          {row.cells.map((cell) => {
            return (
              <td {...cell.getCellProps([{ style: cell.column.styles?.cell }])}>
                {cell.render("Cell")}
              </td>
            );
          })}
        </tr>
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const generateSortingIndicator = (columnId, searchValue) => {
    if (columnId !== searchValue.orderBy) return null;
    return searchValue.order === "desc" ? "^" : "v";
  };

  return (
    <>
      <section className={cx(styles.container, className)}>
        <table className={styles.table} {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps([
                      // column.getSortByToggleProps(),
                      {
                        style: column.styles?.header,
                      },
                    ])}
                    // onClick={() => {
                    //   if (column.render("Header") !== "")
                    //     onChange({
                    //       page: 1,
                    //       orderBy: column.id,
                    //       order: searchValue.order === "desc" ? "asc" : "desc",
                    //     });
                    // }}
                  >
                    {column.render("Header")}
                    <span style={{ float: "right" }}>
                      {generateSortingIndicator(column.id, searchValue)}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>{dataList}</tbody>
        </table>
      </section>
      {pagination && (
        <section className={styles.pagination}>
          <span className={styles.input_wrapper}>
            page
            <input
              type="number"
              value={page}
              onChange={(e) => {
                onChange({ page: e.target.value });
              }}
            />
            form {totalPages}
          </span>
          <button
            className={styles.btn_pagination}
            onClick={() => {
              onChange({ page: page - 1 });
            }}
            disabled={page <= 1}
          >
            <FontAwesomeIcon icon={faChevronLeft} color={"#fff"} />
          </button>
          <button
            className={styles.btn_pagination}
            onClick={() => {
              onChange({ page: page + 1 });
            }}
            disabled={page >= totalPages}
          >
            <FontAwesomeIcon icon={faChevronRight} color={"#fff"} />
          </button>
        </section>
      )}
    </>
  );
}

export default Table;
