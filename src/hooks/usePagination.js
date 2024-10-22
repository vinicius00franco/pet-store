import { useState, useEffect } from "react";

const usePagination = (items, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrentItems(items.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage, items, itemsPerPage]);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  return { currentItems, currentPage, setCurrentPage, totalPages };
};

export default usePagination;
