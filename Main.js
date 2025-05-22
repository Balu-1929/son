import './Main.css';
import Asta from './910289.jpg';
import Son from './son.webp';
import Naruto from './Naruto.jpg';
import Attack from './Attack.jpg';
import Mikey from './mikey.jpeg';
import Hunter from './Hunter.jpg';
import Demon from './Demon.jpeg';
import Solo from './Sol.png';
import Note from './Note.jpg';
import Hinata from './Hinata.jpg';
import Zoro from './Zoro.webp';
import Blue from './Blue.jpg';
import Kaiju from './Kaiju.jpg';
function Main(){
    return(
    <div className='main'>
        <h1>All Animes</h1>
        <div className='cont'>
            <img src={Asta} id='asta' ></img>
            <img src={Son} id='son'></img>
            <img src={Naruto} id='naruto'></img>
            <img src={Attack} id='attack'></img>
            <img src={Mikey} id='mikey'></img>
            <img src={Hunter} id='hunter'></img>
            <img src={Demon} id='demon'></img>
        </div>
            <a href='https://9anime.org.lv/anime/black-clover-dub/' id="black">Black Clover</a>
            <a href='https://9anime.org.lv/anime/dragon-ball-super-broly/' id='so'>Dragon Ball Super</a>
            <a href='https://9anime.org.lv/anime/naruto-shippuuden-dub/' id='na'>Naruto Shippuuden</a>
            <a href='https://9anime.org.lv/anime/attack-on-titan-dub/' id='att'>Attack On Titan<br/>Season 1</a>
            <a href='https://9anime.org.lv/anime/tokyo-revengers-dub/' id='mik'>Tokyo Revengers<br/>Season 1</a>
            <a href='https://9anime.org.lv/anime/hunter-x-hunter/' id='x'>Hunter-X-Hunter</a>
            <a href='https://9anime.org.lv/anime/demon-slayer-kimetsu-no-yaiba-dub/' id='dem'>Demon Slayer<br/>Season 1</a>
        <div className='con'>
            <img src={Solo} id='solo'></img>
            <img src={Note} id='note'></img>
            <img src={Hinata} id='hinata'></img>
            <img src={Zoro} id='zoro'></img>
            <img src={Blue} id='blue'></img>
            <img src={Kaiju} id='kaiju'></img>
        </div>
            <a href='https://9anime.org.lv/anime/solo-leveling-dub/' id='sol'>Solo Leveling<br/>Season 1</a>
            <a href='https://9anime.org.lv/anime/death-note-dub/' id='not'>Death Note</a>
            <a href='https://9anime.org.lv/anime/haikyu-dub/' id='hai'>Haikyu Season 1</a>
            <a href='https://9anime.org.lv/jujutsu-kaisen-0-dub-episode-1/' id='zor'>Jujutsu Kaisen 0</a>
            <a href='https://9anime.org.lv/anime/blue-lock-dub/' id='Bu'>Blue Lock<br/>Season 1</a>
            <a href='https://9anime.org.lv/anime/kaiju-no-8/' id='kai'>Kaiju-No-8</a>
    </div> 
    );

};
export default Main;
