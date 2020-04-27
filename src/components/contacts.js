import React from 'react'
import Avatar from 'react-avatar';

const Contacts = ({ contacts }) => {
    return (
        <div>
            <center><h1>Contact List</h1></center>
            {contacts.map((contact) => (
                <div className="card" key={contact.id}>
                    <div className="card-body">
                        <Avatar src={contact.avatar_url} />
                        <h5 className="card-title">{contact.login}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{contact.node_id}</h6>
                        {/*<p className="card-text">{contact.company.catchPhrase}</p>*/}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Contacts