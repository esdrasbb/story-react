import React, { Component } from 'react';

class Rodape extends Component {
  render() {
    return (<div>  <footer className="page-footer orange">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            Introdução ao React
        </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          Feito com <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
        </div>
      </div>
    </footer>
    </div>
    )
  }
}

export default Rodape;