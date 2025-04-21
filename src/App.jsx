import { useState } from 'react';
import Header from '../Component/header';

function Homepage() {
    const [likes, setLikes] = useState(0);
    const [int, setInt] = useState(0);

    function handleClick() {
        setLikes((prevLikes) => prevLikes + 1);
    }

    function tambahAngka() {
        setInt((prevInt) => prevInt + 1);
    }

    function kurangAngka() {
        setInt((prevInt) => prevInt - 1);
    }

    function resetAngka() {
        setInt(0);
    }

    return (
        <>
            <div>
                <Header />
                <Header isi="ini h2 yang di edit" />
                <Header isi="ABDUYusriL"/>
            </div>

            {/* Likes Section */}
            <div>
                <button onClick={handleClick}>Klik Untuk Like</button>
                <p>Likes ({likes})</p>
            </div>

            {/* Counter Section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button style={{ padding: '8px', backgroundColor: 'blue', color: 'white', borderRadius: '5px' }} onClick={kurangAngka}>
                    Kurang
                </button>
                <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Hitung {int}</p>
                <button style={{ padding: '8px', backgroundColor: 'green', color: 'white', borderRadius: '5px' }} onClick={tambahAngka}>
                    Tambah
                </button>
            </div>

            {/* Reset Button */}
            <div style={{ marginTop: '10px' }}>
                <button style={{ padding: '8px', backgroundColor: 'red', color: 'white', borderRadius: '5px' }} onClick={resetAngka}>
                    Reset
                </button>
            </div>
        </>
    );
}

function Navigasi() {
    const siswa = ['Ahsan', 'Yusriyana', 'YusriGaming'];

    return (
        <>
            <header>
                <h2>Daftar Siswa</h2>
            </header>
            <ul>
                {siswa.map((nama, index) => (
                    <li key={index}>{nama}</li>
                ))}
            </ul>
        </>
    );
}

function App() {
    return (
        <>
            <Homepage />
            <Navigasi />
        </>
    );
}

export default App;
