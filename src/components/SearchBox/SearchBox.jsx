/* eslint-disable react/prop-types */
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/filtersSlice";


export default function SearchBox () {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleFilter = (e) => {
        const name = e.target.value.trim();
        dispatch(setStatusFilter(name));
    };

    return (
        <div className={css.searchBox}>
            <label htmlFor="searchBox" className={css.label}>Find contacts by name</label>
            <input value={filter} onChange={handleFilter} type='text' id='searchBox' className={css.searchInput}></input>
           
        </div>

    )
}