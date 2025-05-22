import React,{useState} from 'react';
import './Header.css';
const Header=()=>{
    const names=[
        { title: 'Black Clover', url: 'https://9anime.org.lv/anime/black-clover-dub/', id: "black" },
        { title: 'Dragon Ball Super', url: 'https://9anime.org.lv/anime/dragon-ball-super-broly/', id: 'so' }
    ];
    const [search,setSearch]=useState('false');
    const filter=names.filter(name =>
        name.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="ani">
            <h1>Anime Page</h1>
            <input type="search " placeholder='Anime Name' className="tex"
            onChange={(e) => setSearch(e.target.value)} />
            <ul>
                {filter.map ((name,index)=>(
                    <li key={index}>
                        <a href={name.url} id={name.id}>{name.title}</a>
                    </li>
                ))}
            </ul>  
            
        </div>
    );
};
export default Header;