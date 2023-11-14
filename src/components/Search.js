import React from 'react';
import './Search.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ term: event.target.value });
    }

    render() {
        return (
            <div className="search-bar">
                <FontAwesomeIcon id='icon' icon={faMagnifyingGlass} />
                <input

                    type="text"
                    placeholder="Search for food, coffee, etc."
                    value={this.state.term}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default Search;
