import React, { Component } from 'react';

import Topo from './Topo';
import Rodape from './Rodape';
import Taskboard from './Taskboard';

class Hello extends Component {
    render() {
        return (<div>
            <Topo />
            <Taskboard />
            <Rodape />
        </div>);
    }
}

export default Hello;