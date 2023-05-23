import { useState, useEffect, useRef } from "react";
import { API_URL } from '../../global/constants'
import axios from "axios";

import Image from "./components/Image";
import Loading from "./components/Loading";
import "./index.scss";

async function fetchData(query, setImage, setIsLoading) {
  try {
    setIsLoading(true)
    const res = await axios.get(`${API_URL}&tags=${query}&per_page=20&format=json&nojsoncallback=1`)
    console.log(res.status)
    if (res.status === 200) {
      setImage(res.data.photos.photo);
      setIsLoading(false)
    }
  } catch (error) {
    console.error(error.message);
  }
}

const Search = () => {
  //建立image初始值 setImage是function，可用來改變image的
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const queryRef = useRef()

  // const handleChange = (e) => {
  //   console.log(e.target.value)
  //   setQuery(e.target.value)
  // }

  const handleSearch = () => {
    const queryValue = queryRef.current.value
    fetchData(queryValue, setImage, setIsLoading)
  }

  const handleChangeInput = (query) => {
    fetchData(query, setImage, setIsLoading)
  }

  // useEffect(() => {
  //   console.log(query)
  //   fetchData(query, setImage)
  // }, [query]);


  return (
    <div className="search">
      <h1 className="app-header">Search Photo</h1>
      <div className="search-bar">
        <input type="text" ref={queryRef} />
        <button onClick={handleSearch}>搜尋</button>
      </div>
      <div className="hot">
        熱門關鍵字
        <span className="key" onClick={() => handleChangeInput('flower')}>Flower</span>
        <span className="key" onClick={() => handleChangeInput('mountain')}>Mountain</span>
        <span className="key" onClick={() => handleChangeInput('sky')}>Sky</span>
      </div>
      {isLoading ? <Loading /> : <Image imageData={image} />}
    </div>
  );
};

export default Search;
