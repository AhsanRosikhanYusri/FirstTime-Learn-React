import PropTypes from 'prop-types';


export default function Header({ isi }) {
    return <h1>{isi ? isi : 'Ini h1 default'} Hayuuk</h1>;
}

Header.propTypes = {
    isi: PropTypes.string,
}