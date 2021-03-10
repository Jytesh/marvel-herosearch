import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const parseThumb = (thumb) => `${thumb.path}.${thumb.extension}`

class CharacterCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.children = props.data.map( (x,i) => <div key={i}><Character data={x}/></div>);
    console.log(this.children)
    this.slickConfig = {
      dots: true,
      infinite: true,
      autoplay: true,
      variableWidth: true,
      adaptiveHeight: true,
      accessibility: true,
      arrows: true,
      draggable: true,
    };
  }
  render(){
    return (
      <div className="Carousel">
        <Slider {...this.slickConfig}>
          {this.children}
        </Slider>
      </div>)
  }
}
class Character extends React.Component {
    render() {
      return (
        <div className="character">
          <div className="characterContainer">
            {
              (() => {
                if (this.props.data.urls){
                    let dat = []
                    this.props.data.urls.forEach( (url,i) => {
                      dat.push(<Button data={url} key={i}/>);
                    })
                    return <div>{dat}</div>;
                  }
                return ''
                } 
              )()
            }
            <img alt="meme" src= {parseThumb(this.props.data.thumbnail)}></img>
            <h1> {this.props.data.name} </h1>
            <p> {this.props.data.description} </p>
          </div>
        </div>
      );
    }
  }
//detail
// wiki
// comiclink
//
class Button extends React.Component {
  constructor(props){
    super(props)
    let replace = '';
    switch (props.data.type) {
      case 'detail': {
        replace = 'Read Details';
        break;
      }
      case 'wiki': {
        replace = 'Read Wiki';
        break;
      }
      case 'comiclink': {
        replace = 'Read Comics';
        break;
      }
      default: {
        replace = 'Read'
      }
    };
    this.data = props.data;
    this.replace = replace;
  }
  render() {
    if (this.data) return <div className="button"><a href={this.data.url}><div className="innerFill "><span>{this.replace}</span></div></a></div>;
    else return <div></div>
  }
}
export default CharacterCarousel;