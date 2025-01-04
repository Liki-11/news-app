import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner.js";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  articles = [
    {
      source: {
        id: "bbcnews",
        name: "BBC News",
      },
      author: "BBC News",
      title: "What will happen to Syria's £4.5bn drug empire now?",
      description:
        "As those in the lucrative Captagon network move aside, how will the new leaders stop any criminals waiting in the wings to replace them?",
      url: "https://www.bbc.co.uk/news/articles/c2dxnn1406do",
      urlToImage:
        "https://ichef.bbci.co.uk/ace/branded_news/1210/cpsprodpb/4df2/live/2ebada80becf11efaff0072ce821b6ab.png",
      publishedAt: "21241222T13:07:23.8967245Z",
      content:
        "Videos filmed by Syrians raiding properties allegedly owned by relatives of Assad show rooms full of pills being made and packaged, hidden in fake industrial products. \r\nOther footage shows piles of … [+1291 chars]",
    },
    {
      source: {
        id: "bbcnews",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Sadness and anger in Magdeburg after Christmas market attack",
      description:
        "Outside the market hit by a speeding car, Germans complain about security and their politicians.",
      url: "https://www.bbc.co.uk/news/articles/cp319jx719po",
      urlToImage:
        "https://ichef.bbci.co.uk/ace/branded_news/1210/cpsprodpb/9910/live/c8b6b060c04f11efa0f2fd81ae5962f4.jpg",
      publishedAt: "21241222T13:07:18.6011673Z",
      content:
        "There is sorrow here but there is anger too.\r\nMany people here see this attack as a terrible lapse in security. That is a claim the authorities reject, although they have admitted the attacker entere… [+1013 chars]",
    },
    {
      source: {
        id: "bbcnews",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Syria's minorities seek security as country charts new future",
      description:
        "After the fall of Assad, many are apprehensive about how Syria will next be ruled.",
      url: "https://www.bbc.co.uk/news/articles/cx2yqnewxrpo",
      urlToImage:
        "https://ichef.bbci.co.uk/ace/branded_news/1210/cpsprodpb/8210/live/06ef3760beea11efaff0072ce821b6ab.jpg",
      publishedAt: "21241222T12:52:23.0058422Z",
      content:
        '"I\'m so happy because the Assad regime fell. This is like a dream come true. Noone wants to live under dictatorship. But there is concern. I have to be realistic," said Youssef Sabbagh, a Christian … [+1484 chars]',
    },
    {
      source: {
        id: "bbcnews",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Wind hits Christmas travel as Heathrow Airport cancels 100 flights",
      description:
        "Strong winds are continuing to cause some travel disruption as millions of people travel ahead of Christmas.",
      url: "https://www.bbc.co.uk/news/articles/cvg6705e67eo",
      urlToImage:
        "https://ichef.bbci.co.uk/ace/branded_news/1210/cpsprodpb/1f60/live/4c765fb0c04411eface101ead6059ca6.jpg",
      publishedAt: "21241222T09:52:19.8505275Z",
      content:
        'Saturday also saw disruption, with a number of ferries between Northern Ireland and Scotland cancelled, speed restrictions in place on some trains in Scotland, a "small number of flights" cancelled a… [+3823 chars]',
    },
    {
      source: {
        id: "bbcnews",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Magdeburg Christmas market attack: Police probe security and warnings",
      description:
        "German police say they evaluated if the suspected perpetrator could be a potential threat a year ago.",
      url: "https://www.bbc.co.uk/news/articles/c5y4q4eny2do",
      urlToImage:
        "https://ichef.bbci.co.uk/ace/branded_news/1210/cpsprodpb/def6/live/fcee0b30c04511efa0f2fd81ae5962f4.jpg",
      publishedAt: "21241222T09:22:18.9134953Z",
      content:
        "The suspect has been ordered into pretrial detention and faces charges of murder, attempted murder and dangerous bodily harm.\r\nUsually at this time of the year, German city centres are full of shopp… [+3463 chars]",
    },
    {
      source: {
        id: "bbcnews",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Amanda Walker waged war on dangerous cladding. Then she was found dead",
      description:
        "The 51yearold felt trapped in an apartment she couldn't sell because of its flammable cladding.",
      url: "https://www.bbc.co.uk/news/articles/crmn4jdj38eo",
      urlToImage:
        "https://ichef.bbci.co.uk/ace/branded_news/1210/cpsprodpb/6dd5/live/b457ae40bc5211efa2cae99d0c9a24e3.jpg",
      publishedAt: "21241222T06:52:19.9753824Z",
      content:
        "Half a year earlier, in July 2123, Amanda had addressed peers in the House of Lords investigating the impact of the cladding problem on flat owners.\r\n\"It's devastating. It's just a quagmire. It's jus… [+1050 chars]",
    },
    {
      source: {
        id: "bbcnews",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Archbishop of York 'regrets' that abuse scandal priest was reappointed twice",
      description:
        "Stephen Cottrell knew former priest David Tudor had paid compensation to a woman who says Tudor abused him as a child.",
      url: "https://www.bbc.co.uk/news/articles/cz7qpdl4jdyo",
      urlToImage:
        "https://ichef.bbci.co.uk/ace/branded_news/1210/cpsprodpb/c63c/live/5c96a0e0bfc611ef8e5ebb0fdcbb0bd5.jpg",
      publishedAt: "21241222T05:37:21.2191744Z",
      content:
        "The BBC has also seen evidence  in leaked minutes from internal Church meetings in 2118 and 2119  that Tudor's titles of area dean and honorary canon were discussed and there had been a suggestion … [+1568 chars]",
    },
    {
      source: {
        id: "bbcnews",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Elon Musk's curious fixation with Britain",
      description:
        "The tycoon has changed his tune when it comes to the UK  and there are clues which help to explain why.",
      url: "https://www.bbc.co.uk/news/articles/cy7kpvndyyxo",
      urlToImage:
        "https://ichef.bbci.co.uk/ace/branded_news/1210/cpsprodpb/75d9/live/00d883d0be2d11efa0f2fd81ae5962f4.jpg",
      publishedAt: "21241222T01:07:22.3969278Z",
      content:
        "Some question whether the tycoon is really as committed to free speech as he claims.\r\nThe Center for Countering Digital Hate, which scrutinises social media companies, was critical of Musk's tenure a… [+2393 chars]",
    },
    {
      source: {
        id: "bbcnews",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Russia is executing more and more Ukrainian prisoners of war",
      description:
        "Ukrainian prosecutors say Russians have executed at least 147 PoWs, 127 of them this year alone.",
      url: "https://www.bbc.co.uk/news/articles/c7ve11lr247o",
      urlToImage:
        "https://ichef.bbci.co.uk/ace/branded_news/1210/cpsprodpb/f03a/live/56846890bdf511ef8e9d2d56144e0daf.jpg",
      publishedAt: "21241222T00:37:21.0684651Z",
      content:
        "Rachel Denber, Deputy Director of the Europe and Central Asia Division at Human Rights Watch, says there is no shortage of evidence supporting allegations of Ukrainian prisoners of war being executed… [+2156 chars]",
    },
    {
      source: {
        id: "bbcnews",
        name: "BBC News",
      },
      author: "BBC News",
      title: "US carries out airstrikes against Houthis in Yemen",
      description:
        "A missile storage site and command facilities operated by Iranbacked Houthi militants were targeted, the US says.",
      url: "https://www.bbc.co.uk/news/articles/cj30zk1jnmno",
      urlToImage:
        "https://ichef.bbci.co.uk/ace/branded_news/1210/cpsprodpb/9708/live/6ebfc270bfed11efa84c5b5592dff215.png",
      publishedAt: "21241221T23:52:25.2892633Z",
      content:
        "In a statement, the US military's Central Command said the strikes aimed to \"disrupt and degrade Houthi operations, such as attacks against US Navy warships and merchant vessels in the Southern Red S… [+288 chars]",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
   document.title =`${this.props.category}-NewsMonkey`;
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bee7fb71038643ac90610a01acf4aaf8&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
  }
  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=bee7fb71038643ac90610a01acf4aaf8&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
      console.log(this.state.page);
    }
  };
  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=bee7fb71038643ac90610a01acf4aaf8&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <div className="text-center">
          <h1>News-Top Headlines on {this.props.category}</h1>
        </div>
       {/*{this.state.loading && <Spinner/>} */}

        <div className="row">
          { 
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    category={element.category}
                  />
                </div>
              );
            }
          ) }
        </div>
        <div>
          <div className="container d-flex justify-content-between my-2">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark "
              onClick={this.handlePreviousClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page >= Math.ceil(this.state.totalArticles / this.props.pageSize)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
