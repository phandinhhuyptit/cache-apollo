import React from "react";

import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios({
      url:
        "http://192.168.213.97:1118/api/File/Clients?token=Spm2Q/KZlfItNOeUZgdbLUY4Bv6Eb7TO7SJEz9wMsIIywtIZ5igPuLjLcZF5uHJjJ/dFTDEqpWUvOAodHjY7I7Wb4cOJ94TmVWNN5hcLz+1hBiIkHW3O3jNOTzgQKWsDNTdarNGmcGSqTb6SBWibw/wM1Sv5TxJHIO7BotiG50V4PO0w0rWf9PpGIc7QSXUbnLcmB1jRxOSq5ed95eePl/ozR5WnD2UkhJLuX5WMllWCob9gTRvq5yw9e4pCthcQj9I2DgBJUR01K5WDuD+m+0sBdlc1VL+MG8JTL4xG8WI=", //your url
      method: "GET",
      responseType: "blob", // important
    })
      .then((res) => {
        const persons = res.data;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return <ul></ul>;
  }
}
