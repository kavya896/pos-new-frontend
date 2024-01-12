import React from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const maxVisiblePages = 4;

  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    const leftEllipsis = currentPage > maxVisiblePages / 2 + 1;
    const rightEllipsis = currentPage < totalPages - maxVisiblePages / 2;

    if (leftEllipsis && !rightEllipsis) {
      pageNumbers.push(1);
      pageNumbers.push('...');
      for (let i = totalPages - maxVisiblePages + 3; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else if (!leftEllipsis && rightEllipsis) {
      for (let i = 1; i <= maxVisiblePages - 1; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push('...');
      pageNumbers.push(totalPages);
    } else {
      const startPage = currentPage - Math.floor(maxVisiblePages / 2);
      for (let i = startPage; i < startPage + maxVisiblePages; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push('...');
      pageNumbers.push(totalPages);
    }
  }

  return (
    <nav className="d-flex justify-content-center">
      {currentPage > 1 && (
        <button className=" text-lg mr-3" onClick={() => onPageChange(currentPage - 1)}>
          <GrFormPrevious />
        </button>
      )}
      {pageNumbers.map((number, index) => (
        <span key={index} className={number === currentPage ? 'active mx-2' : 'mx-2'}>
          {number === '...' ? (
            <span className="text-lg">{number}</span>
          ) : (
            <button className="btn border" onClick={() => onPageChange(number)}>
              {number}
            </button>
          )}
        </span>
      ))}
      {currentPage < totalPages && (
        <button className="btn border text-lg" onClick={() => onPageChange(currentPage + 1)}>
          <GrFormNext />
        </button>
      )}
    </nav>
  );
};

export default CustomPagination;
