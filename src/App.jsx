import './App.css'
import React from 'react';

function UserProfile({ avatar, username, email, isVerified }) {
  return (
    <div>
      <img src={avatar} alt="" style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
      <div>
        <strong>{username} {isVerified ? ' ✅' : ' (Не подтвержден)'}</strong>
        <br />
        <span>{email}</span>
      </div>
    </div>
  );
}

// Использование
function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px'}}>
      <div style={{ backgroundColor: '#f6f0f8', width: '300px', height: '150px', borderRadius: '30px', padding: '20px'}}>
      <UserProfile
        avatar="https://avatars.mds.yandex.net/i?id=aaa25fd01ca95049a41210887f487817_l-16545970-images-thumbs&n=13"
        username="alex_2025"
        email="alex@example.com"
        isVerified={true}
      />
      </div>
      <div style={{ backgroundColor: '#f6f0f8', width: '300px', height: '150px', borderRadius: '30px', padding: '20px' }}>
      <UserProfile
        avatar="https://img.freepik.com/free-photo/black-cat-crossing-neon-city-street_23-2152005296.jpg?semt=ais_hybrid&w=740&q=80"
        username="polya"
        email="polya@example.com"
        isVerified={false}
      />
      </div>
    </div>
  );
}

export default App;