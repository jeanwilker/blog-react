// Hooks
import { useState, useEffect } from 'react';

// API
import api from '../../../services/api';

const Main = ({ content }) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        if (content) {
            api.get('/user/' + content.id_user).then((response) => {
                setUser(response.data);
            });
        }
    }, []);

    return (
        <>
            <div className="bb-black py-3">
                <h6 className="color-gray">{content.date}</h6>
                <h6 className="upercase color-primary">{content.category}</h6>
                <a href="" className="link-title">
                    <h4 className="mt-1">{content.title}</h4>
                </a>
                <p className="mt-1">{content.resume}</p>
                <div className="flex-start-row mt-2">
                    <div className="profile">
                        <img
                            src={user.imageProfile}
                            className="profile-img"
                            alt="Foto do perfil"
                        />
                    </div>
                    <div className="ml-1">
                        <h6 className="color-primary">
                            {user.name} {user.surname}
                        </h6>
                        <h6 className="color-gray">{user.user}</h6>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
