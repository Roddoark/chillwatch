import React, { Component } from 'react';

import "./popover.scss"

class Popover extends Component {
    render() {
        return (
                <div className="popoverContent">
                <div className="popoverContent-header">
                    Genre
                    <button>Réinitialiser</button>
                </div>
                <div className="popoverContent-genres">
                    <div>
                        <a href="">Action</a>
                    </div>
                    <div>
                        <a href="">Animation</a>
                    </div>
                    <div>
                        <a href="">Comédie</a>
                    </div>
                    <div>
                        <a href="">Documentaire</a>
                    </div>
                    <div>
                        <a href="">Drame</a>
                    </div>
                    <div>
                        <a href="">Fantastique</a>
                    </div>
                    <div>
                        <a href="">Histoire</a>
                    </div>
                    <div>
                        <a href="">Horreur</a>
                    </div>
                    <div>
                        <a href="">Comédie romantique</a>
                    </div>
                    <div>
                        <a href="">Science fiction</a>
                    </div>
                    <div>
                        <a href="">Thriller</a>
                    </div>
                    <div>
                        <a href="">Western</a>
                    </div>
                </div>
                </div>
        );
    }
}

export default Popover;
