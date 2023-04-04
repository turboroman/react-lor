const ChaptersBtn = ({ active, setActive, style }) => {
  const handleClick = () => {
    setActive(!active)
  }

  return (
    <button onClick={handleClick} className={style}>
      Chapters
    </button>
  )
}

export default ChaptersBtn
