import React, { Component } from 'react';

import Estoria from './Estoria';
import EstoriaForm from './EstoriaForm';
import jQuery from 'jquery';

class Taskboard extends Component {
    constructor() {
        super();

        this.state = {
            estorias: []
        }
    }

    render() {
        const estorias = this._getEstorias();
        const totalDeEstorias = this._getTitulo(estorias.length);
        return (<div>  <div className="section no-pad-bot" id="index-banner">
            <div className="container">
                <h1 className="header center orange-text">Estórias</h1>
                <h3>{totalDeEstorias}</h3>
                {estorias}
                <EstoriaForm adicionarEstoria={this._adicionarEstoria.bind(this)} />
            </div>
        </div>
        </div>
        )
    }

    componentWillMount() {
        this._buscarEstorias();
    }

    componentDidMount() {
        this._timer =
            setInterval(() => this._buscarEstorias(), 5000);
    }
    componentWillUnmount() {
        clearInterval(this._timer);
    }

    _buscarEstorias() {
        jQuery.ajax({
            method: 'GET',
            url: 'http://localhost:3001/estorias',
            success: (estorias) => {
                this.setState({ estorias })
            }
        });
    }

    _getEstorias() {
        return this.state.estorias.map(estoria => <Estoria title={estoria.titulo} description={estoria.descricao}
            points={estoria.pontos} key={estoria.id}
            id={estoria.id} onDelete={this._excluirEstoria.bind(this)}
        />);
    }

    _getTitulo(totalDeEstorias) {
        if (totalDeEstorias === 0) {
            return "Backlog vazio";
        } else if (totalDeEstorias === 1) {
            return "1 estória";
        } else {
            return `${totalDeEstorias} estórias`;
        }
    }

    _adicionarEstoria(titulo, pontos, descricao) {
        const estoria = {
            titulo,
            descricao,
            pontos
        };

        jQuery.ajax({
            method: 'POST',
            url: 'http://localhost:3001/estorias',
            data: estoria,
            success: novaEstoria => {
                this.setState({ estorias: this.state.estorias.concat([novaEstoria]) })                
            }
        });
    }

    _excluirEstoria(estoriaId) {
        jQuery.ajax({
            method: 'DELETE',
            url: `http://localhost:3001/estorias/${estoriaId}`
        });

        const estorias = [...this.state.estorias];
        estorias.splice(estoriaId, 1);

        this.setState({ estorias });
    }
}
export default Taskboard;