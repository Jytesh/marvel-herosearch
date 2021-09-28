const apiKey = "837ec1513993ed3b2fe176cf44496148";
class marvelAPI {
  static fetchCharacter = async (value) => {
    return this.fetch(`characters?nameStartsWith=${value}`);
  };
  static fetch = async (value) => {
    return new Promise((resp, rej) => {
      fetch(
        `https://gateway.marvel.com:443/v1/public/${value}&apikey=${apiKey}`
      )
        .then((res) => res.json())
        .then(resp)
        .catch(rej);
    });
  };
}

export default marvelAPI;
