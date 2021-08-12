import React, { useState, useEffect } from "react";
// select box styling material ui
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// material ui select option
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 70,
    },
    buttonStyle: {
        color: "white",
        backgroundColor: "inherit"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function Pagination({ data, RenderComponent, title, pageLimit, dataLimit, onThumbForPage }) {
    const classes = useStyles();
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [currentPage]);
    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };
    function onThumbClickList(id) {
        onThumbForPage(id);
    }
    return (
        <div>
            <div className="pagination">
                <button
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}>
                    prev
                </button>
                {/* pagination counts */}
                {/* {getPaginationGroup().map((item, index) => (
                    <button
                        key={index}
                        onClick={changePage}
                        className={`paginationItem ${currentPage === item ? 'active' : null}`}
                    >
                        <span>{item}</span>
                    </button>
                ))} */}

                <button
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                >
                    next
                </button>
            </div>
            <div className="dataContainer">
                {getPaginatedData().map((d, idx) => (
                    <>
                        {
                            console.log(d)
                        }
                        <RenderComponent key={idx} data={d} onThumbClickOneVideo={onThumbClickList} />
                    </>
                ))}
            </div>
        </div>
    );
}

export default Pagination;