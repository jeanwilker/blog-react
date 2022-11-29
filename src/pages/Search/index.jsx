// COMPONENTS
import Header from '../Header';
import Footer from '../Footer';
import Card from '../Home/Card';

// HOOKS
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// API
import api from 'services/api';

const Search = () => {
    const { wordSearch } = useParams();

    const [word, setWord] = useState(wordSearch);
    const [search, setSearch] = useState([]);
    const [form, setForm] = useState([]);

    useEffect(() => {
        if (word) {
            api.get(`/posts?q=${word}`).then((response) => {
                setSearch(response.data);
            });
        }
    }, [word]);

    function onChange(event) {
        const { value, name } = event.target;

        setForm({ ...form, [name]: value });
    }

    function handleSearch(event) {
        event.preventDefault();

        setWord(form.search);
    }

    return (
        <>
            <Header />

            <section className="container">
                <h6 className="upercase color-primary text-center">
                    {search.length} resultdos
                </h6>
                <h4 className="text-center">"{word}"</h4>
                <form onSubmit={handleSearch}>
                    <div className="row">
                        <div className="grid-2 disapper"></div>
                        <div className="grid-8 flex-center">
                            <input
                                type="text"
                                name="search"
                                placeholder="Buscar..."
                                onChange={onChange}
                            />
                            <button className="btn ml-2">Pesquisar</button>
                        </div>
                        <div className="grid-2 disapper"></div>
                    </div>
                </form>
                <div className="row">
                    {search.map((item) => {
                        return <Card key={item.id} content={item} />;
                    })}
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Search;
