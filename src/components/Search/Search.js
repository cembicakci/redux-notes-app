import React from 'react'
import styles from './Search.module.css'
import { useDispatch } from 'react-redux'
import { filterNote } from '../../redux/notes/notesSlice';

function Search() {

  const dispatch = useDispatch();

  function handleInput(e) {
    dispatch(filterNote(e.target.value))
  }

  return (
    <div>
      <input placeholder='Search...' className={styles.input} onChange={handleInput} />
    </div>
  )
}

export default Search