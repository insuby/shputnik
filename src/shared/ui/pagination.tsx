import ReactPaginate from 'react-paginate';

export const Pagination = ({
  pageCount,
  pageIndex,
  onPageChange,
}: {
  pageCount: number;
  pageIndex: number;
  onPageChange: (newPageIndex: { selected: number }) => void;
}) => {
  return (
    <ReactPaginate
      forcePage={pageIndex}
      onPageChange={onPageChange}
      nextLabel={
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.59961 10.8L6.39961 5.99995L1.59961 1.19995"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      }
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel={
        <svg
          className="flex size-full"
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.39961 10.8L1.59961 5.99995L6.39961 1.19995"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      }
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
      renderOnZeroPageCount={null}
    />
  );
};
