import React, { Component } from 'react';

class Estoria extends Component {
  constructor() {
    super();

    this.state = {
      exibirEstoria: false
    }
  }

  _handleClick(event) {
    event.preventDefault();
    this.setState({
      exibirEstoria: !this.state.exibirEstoria
    });
  }

  _handleDelete(event) {
    event.preventDefault();
    this.props.onDelete(this.props.id);
  }

  render() {
    let descricao;
    let textoBotao = 'Exibir Estória';

    if (this.state.exibirEstoria) {
      descricao = <p>{this.props.description}<span className="badge white">{this.props.points} pontos</span></p>
      textoBotao = "Ocultar Estória";
    }

    return (<div>
      <div className="row">
        <div className="col s12 m12">
          <div className="card indigo darken-3">
            <div className="card-content white-text">
              <span className="card-title">{this.props.title}</span>
              {descricao}
            </div>
            <div className="card-action">
              <a className="right" href="#"
                onClick={this._handleClick.bind(this)}>{textoBotao}</a>
              <a className="right" href="#"
                onClick={this._handleDelete.bind(this)}>Excluir</a>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Estoria;