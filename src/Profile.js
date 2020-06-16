import React from 'react';

const profileData = {
    woodz: {
        name: '조승연',
        description: 'All rounder'
    },
    yuri: {
        name: '조유리',
        description: 'mavo'
    }
}

function Profile({ match }) {
    const { username } = match.params;
    const profile = profileData[username];

    if (!profile) {
        return <div>user doesn't exist</div>
    }
    return (
        <div>
            <h3>{username} ({profile.name})</h3>
            <p>{profile.description}</p>
        </div>
    );
}

export default Profile;