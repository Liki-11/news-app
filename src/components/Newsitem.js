import React, { Component } from 'react';

export default class Newsitem extends Component {
  render() {
   
  let {title,description,imageurl,newsurl,author,date,category}=this.props;
  
    return (
      <div>
        <div className="card" style={{}}>
          <img src={imageurl?imageurl:`https://imagekit.io/tools/asset-public-link?detail=%7B%22name%22%3A%22e8d0910d-8997-4eec-bb5d-ca59a525d85a.jpg%22%2C%22type%22%3A%22image%2Fjpeg%22%2C%22signedurl_expire%22%3A%222025-01-06T11%3A02%3A32.244Z%22%2C%22signedUrl%22%3A%22https%3A%2F%2Fmedia-hosting.imagekit.io%2F%2F749cc82951db44cf%2Fe8d0910d-8997-4eec-bb5d-ca59a525d85a.jpg%3FExpires%3D1736161352%26Key-Pair-Id%3DK2ZIVPTIP2VGHC%26Signature%3DD4En98s2F-zLbs1doqLC7LVAd~UreTTXKmA3thaCU1XJ7srDPT5GBvw9DOaXpsY3KF08uucgymrHGMrVjkKGkRnkeTuNAIFoe8lsMezDz6vOcr-CZ~ZSSYmnaaHeTMNaRDAg2BEE-HZKzTUN6yFVzxIwFpkq2rPR9mVfSvd6OAySFRJKOiYhHaFQWWhV3LhS3fnE7~2e~DIaYHdHTGvmwWYSFu4aWeliohr8LQZCnpwT43jjxe-hkJqukpUBtKZ-ZS8eJvHLkCRwhq5tTC0XXl6GllyiRAla9iGxXhfpNOcInibT2yuiishkb5PiIhLbwlOd~VUnXH7x0sktaAOYJg__%22%7D`} className="card-img-top" alt="image"/>
          
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
             <p className="card-text">{description}</p>
             <p className="card-text"><small className="text-muted"> By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
           <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  }
}
