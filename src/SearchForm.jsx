import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchItem } = useGlobalContext();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    
    console.log(searchValue);
    if (!searchValue) return;
    setSearchItem(searchValue);
  };
  return (
    <section className="">
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">search</button>
      </form>
    </section>
  );
};

export default SearchForm;
