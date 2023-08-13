'use client';

import { FC } from 'react';
import ReactPaginate from 'react-paginate';

import FontAwesomeIcon from '../Icons/FontAwesomeIcon';

import './Pagination.scss';

const Pagination: FC = () => {
	return (
		<ReactPaginate
			pageRangeDisplayed={3}
			marginPagesDisplayed={2}
			pageCount={5}

			previousLabel={<FontAwesomeIcon name="FaArrowLeft" />}
			nextLabel={<FontAwesomeIcon name="FaArrowRight" />}
			
			
			pageClassName="pagination-item"
			pageLinkClassName="pagination-link"
			previousClassName="pagination-prev"
			previousLinkClassName="pagination-link"
			nextClassName="pagination-next pagination-item"
			nextLinkClassName="pagination-link"
			breakLabel="..."
			breakClassName="pagination-item pagination-breakable"
			breakLinkClassName="pagination-link"
			containerClassName="pagination"
			activeClassName="pagination-item--active"
			renderOnZeroPageCount={null}
		/>
	);
};

export default Pagination;
