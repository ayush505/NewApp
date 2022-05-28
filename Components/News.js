import React, { useEffect,useState} from 'react';
import Newsitems from './Newsitems';

import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
  //  articles= [
  //     {
  //     "source": {
  //     "id": "bbc-sport",
  //     "name": "BBC Sport"
  //     },
  //     "author": "BBC Sport",
  //     "title": "India v West Indies - Cricket - BBC Sport",
  //     "description": "Find out the in depth batting and bowling figures for India v West Indies in the International Twenty20 Match on BBC Sport.",
  //     "url": "https://www.bbc.co.uk/sport/cricket/scorecard/ECKO51924",
  //     "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
  //     "publishedAt": "2022-02-16T14:07:22.5351188Z",
  //     "content": "<table><tr><th>Batter</th><th>How Out</th><th>Bowler</th><th>Runs</th><th>Balls</th><th>4s</th><th>6s</th><th>Mins</th><th>SR</th></tr>\r\n<tr><th>Total</th><th>(6.5 overs)</th><th>51-for2wickets</th><… [+1712 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": "espn-cric-info",
  //     "name": "ESPN Cric Info"
  //     },
  //     "author": null,
  //     "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     "publishedAt": "2020-04-27T11:41:47Z",
  //     "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": "espn-cric-info",
  //     "name": "ESPN Cric Info"
  //     },
  //     "author": null,
  //     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     "publishedAt": "2020-03-30T15:26:05Z",
  //     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //     }
  //     ];

  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(10);

   useEffect(() => {
    return () => {
      document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
      update();
 
    }; 
  }, []);


  //  componentDidMount=async()=> {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ecbb26da8b0244718f9d1a767c133e73&page=1&pageSize=${props.pageSize}`;
  //   this.setState({ loading: true })
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   console.log(parseData);
  //   this.setState({ articles: parseData.articles,
  //     totalResults:parseData.totalResults,
  //      loading: false });
  // }

  const capitalizeFirstLetter=(string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }




  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // articles:this.articles,
  //     articles: [],
  //     loading: true,
  //     page: 1
  //   }
  //  document.title=`${this.capitalizeFirstLetter(props.category)} - Khabar `

  // }


  // this function is taken from same infinite scroll npm  and concanate the curr articles with prev
 const fetchMoreData = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ecbb26da8b0244718f9d1a767c133e73&page=${  page+1}&pageSize=${props.pageSize}`;
    setloading(true);  
    await setpage(page+1);
    let data = await fetch(url);
    let parseData = await data.json();
  
   
    setarticles(articles.concat( parseData.articles));
     
    settotalResults(parseData.totalResults);
    setloading(false);


  
  };

  const update=async()=>
  {
     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ecbb26da8b0244718f9d1a767c133e73&page=${  page}&pageSize=${props.pageSize}`;
    
    setloading(true);
    let data = await fetch(url);
    let parseData = await data.json();
   
    setarticles(parseData.articles);
    settotalResults(parseData.totalResults);
    setloading(false);

    
  }

  const handleNext = async () => {


    // if (!(  page + 1 > Math.ceil(  totalResults / props.pageSize))){
    //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ecbb26da8b0244718f9d1a767c133e73&page=${  page + 1}&pageSize=${props.pageSize}`;
    //   console.log(  page);
    //   this.setState({ loading: true })
    //   let data = await fetch(url);
    //   let parseData = await data.json();

    //   console.log(parseData);
    //   this.setState(
    //     {
    //       page:   page + 1,
    //       articles: parseData.articles,
    //       totalResults: parseData.totalResults,
    //       loading: false
    //     }
    //   );
    // }

    await setpage(page+1);

    update();

  };
 const handlePrevious = async () => {

    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ecbb26da8b0244718f9d1a767c133e73&page=${  page - 1}&pageSize=${props.pageSize}`;
    // console.log(  page);
    // this.setState({ loading: true })
    // let data = await fetch(url);
    // let parseData = await data.json();
    // console.log(parseData);
    // this.setState({
    //   page:   page - 1,
    //   articles: parseData.articles,
    //   loading: false
    // });

   
    await setpage(page-1);
    update();
  };

  




    return (

 
<div className='container'>
        <h1 className="text-center" style={{ margin: '35px' ,marginTop:'80px'}}>Top Headlines for {capitalizeFirstLetter(props.category)}-Category</h1>

        {/* {  loading && <  Spinner />} */}
        <InfiniteScroll
          dataLength={articles.length}
         next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
       

        <div className="row">

{/* !  loading && added when spinner will enable and also use prev & next  */}

          { articles.map((ele) => {
            return (<div className="col-sm" key={ele.url}>
              <Newsitems title={ele.title} description={ele.description} Imagel={ele.urlToImage} newsUrl={ele.url} author={ele.author} time={ele.publishedAt} name={ele.source.name} />
            </div>);
          })}



          {/* <div className="container d-flex justify-content-between my-5">
            <button disabled={  page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevious}> &larr; Previous</button>
            <button disabled={  page + 1 > Math.ceil(  totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext} >Next &rarr;</button>
          </div> */}
        </div>
        </InfiniteScroll>
  </div>
    );
  
}

News.defaultProps = {
  country: 'in',
  pageSize: 10,
  category: 'general'
};


export default News;
