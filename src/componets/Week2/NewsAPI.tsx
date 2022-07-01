import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import { NewsItem } from './NewsItem';


type dataType = {
  title: string
  content: string
  imageUrl: string
  author?: string
  date?: string
  id?: string
  readMoreUrl?: string
  time?: string
  url?: string
}

type newsDataType = {
  category: string
  data: Array<dataType>
  success: boolean
}

export const NewsAPI = () => {

  const [newsData, setnewsData] = useState<newsDataType>();


  useEffect(() => {
    fetchData("hatke")
    console.log("fetching data");

  }, [])



  const fetchData = async (category: string) => {
    const url = `https://inshorts.deta.dev/news?category=${category}`;
    fetch(url).then(response => response.json()).then(data => setnewsData(data));
  }

  const onChange = (e: any) => {
    fetchData(e.target.value);

  }
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <h3>Select news Catagory</h3>
        <select className="form-select form-select-lg w-auto" name="catagory" id="catagory" onChange={onChange} aria-label="Default select example">
          <option value={"null"} >Open this to select Catagory</option>
          <option value={"national"}>national</option>
          <option value={"business"}>business</option>
          <option value={"sports"}>sports</option>
          <option value={"world"}>world</option>
          <option value={"politics"}>politics</option>
          <option value={"technology"}>technology</option>
          <option value={"startup"}>startup</option>
          <option value={"entertainment"}>entertainment</option>
          <option value={"miscellaneous"}>miscellaneous</option>
          <option value={"hatke"}>hatke (unusual)</option>
          <option value={"science"}>science</option>
          <option value={"automobile"}>automobile</option>
        </select>
      </div>
      <Row>
        {newsData ?
          newsData.data.map((element) => {
            return (
              <Col className="md-4" key={element.id}>
                <NewsItem title={element.title} content={element.content} imageUrl={element.imageUrl} readMoreUrl={element.readMoreUrl} author={element.author} time={element.time} />
              </Col>)
          })
          : "Fetching data"}
      </Row>
    </>
  )
}
