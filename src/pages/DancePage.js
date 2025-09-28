import React from 'react';
import VideoGallery from '../components/VideoGallery';

const directedVideos = [
    'nlghucKw4pg', // Blue Flame (personal cover)
    'PcPHoZn0dCA', // Spirit of a Nation (ADT Setlist)
    'rNHTeQ3joOQ', // Rock With You (ADT Cover)
    'DjG7bTw3ccc', // Complete (ADT Virtual Setlist)
    'WQz2wN5_61Q', // Salty (ADT Virtual Setlist)
    'DKkLxDJn0Nk',  // Never Ever (ADT Cover)
    'DJyOuvt3Y0Y',  // Crazy In Love (ADT Setlist)
    'd7fpzgDNBM8',  // Journey to the West (ADT Setlist)
    'FMnCP9tpZwE',  // Home (ADT Setlist)
    'K36xAyBoUzM',  // Energetic (ADT Cover)
    '91VAGIMosWg',  // Heaven (ADT Setlist)
    '3daGt3rhmdo',  // Our Dawn is Hotter Than Day (ADT Cover)
    'BkzYif8noMo',  // Bboom Bboom (ADT Cover)
    'N34kackV13E',  // Blossoms (ADT Setlist)
    '0AmoquZIBoQ',  // Just Right (ADT Cover)
];

const performedVideos = [
    'nlghucKw4pg', // Blue Flame (personal cover)
    '8kaN00KHMes', // Reveal (ADT Setlist)
    'iRb-rqPb0XU', // Daybreak (ADT Setlist)
    'YgsALJ7NlZg', // We Must Love (ADT Setlist)
    '2W6l9YFE0Pw', // Spring 2022 (Ridonkulous)
    'RwdQaJOdspU', // Winter 2022 (Ridonkulous)
    'uNiAytAsfXc', // Thrill Ride (ADT Cover)
    'hGXz8eghMUs', // Universe (ADT Cover)
    '8WsL3uhBESo', // Luna (ADT Cover)
    '6E2SYeFk04A', // Blessed Cursed (ADT Cover)
    'ByKt2gPAMXU', // One Flower, One Sword (ADT Setlist)
    '3DnnjTT4pNE', // Nightmares (ADT Setlist)
    'FaLToekPXR4', // Fall 2021 (Ridonkulous)
    'JxnBIjFovpY', // Fall 2021 (MissBehavior)
    'rNHTeQ3joOQ', // Rock With You (ADT Cover)
    'j8uMMb7vnaM', // The Stealer (ADT Cover)
    'AXWsvTQUO5g', // Given Taken (ADT Virtual Cover)
    'OfSYWXpHrgk', // Home Run (ADT Virtual Setlist)
    'lj2w-Q6Rqtg', // Bad Idea (ADT Virtual Setlist)
    'jIzHWotmmYQ', // Just One Dance (ADT Virtual Setlist)
    'zjeeXfncb1U', // The Banquet (ADT Virtual Setlist)
    'bfsTJ2xFDgQ', // Hwaa (ADT Virtual Cover)
    '6CbFGyOVi84', // Can't ask you to stay (ADT Virtual Setlist)
    'ToUluNfn0TI', // Butterflies and Violet Nights (ADT Virtual Setlist)
    'lziFwtffIIM', // Senior Interlude (ADT Virtual Setlist)
    'ilm93lcoO_o', // Alive (Ridonkulous)
    'w-yFipFSMyM', // Winter 2020 (Ridonkulous)
    'DKkLxDJn0Nk',  // Never Ever (ADT Cover)
    'mJ8q7n90Xr4', // Exec Interlude (ADT 2019 Fall)
    'tVd5vZAXYEA', // In the Rain (ADT Setlist)
    'iMiX9Rnie6A', // Fall 2019 (Ridonkulous)
    'yoYccjhCJCo', // No Air (ADT Setlist)
    'YMCuCsQV7lY', // Youth (ADT Setlist)
    'n769vEc2CeE', // Fate (ADT Setlist)
    'K36xAyBoUzM',  // Energetic (ADT Cover)
    'kxemxSKx7-A', // Stay With Me (ADT Setlist)
    'A3bZmbvwlrU', // Jasmine Flowers (ADT Setlist)
    '_9TmhM-STHg', // Empathy (ADT Setlist)
    '6WcU4SvXRaE', // Help Me (ADT Cover)
    '3daGt3rhmdo',  // Our Dawn is Hotter Than Day (ADT Cover)
    'ueI32WJkUGg', // The Chaser (ADT Setlist)
    'N34kackV13E',  // Blossoms (ADT Setlist)
    '0AmoquZIBoQ',  // Just Right (ADT Cover)
    'fHD2XPp3pu4', // Clap (ADT Cover)
    'i0-cLsoIc6M', // Blood, Sweat, and Tears (ADT + Synco Collaboration Cover)
    '5swu3MopTNk', // Pretty Boom (ADT Setlist)
    'HB4LazIVPfY', // Water Spirits (ADT Setlist)
    'yI8IUBweNWc', // You Are (ADT Cover)
];

const DancePage = () => {
    return (
        <div className="dance-page">
            <div className="dance-heading">
                Dance
            </div>
            <div className="dance-paragraph">
                Right now, I focus a lot on house dancing. In college, I was the co-captain, male kpop choreographer, and traditional Chinese dance choreographer of <a href="http://adt.mit.edu/" className="dance-link">MIT Asian Dance Team</a>. From Fall 2019 to Spring 2022, I was a part of <a href="http://ridonk.mit.edu/" className="dance-link">MIT Ridonkulous</a>, a competitive urban dance team. I grew up dancing ballet and Chinese traditional dance and started dancing hip hop in high school.
            </div>

            <div className="dance-title">
                Directed/Choreographed Pieces
            </div>

            <div className="dance-videos">
                <VideoGallery videos={directedVideos}/>
            </div>

            <div className="dance-title">
                Performed Pieces
            </div>

            <div className="dance-videos">
                <VideoGallery videos={performedVideos}/>
            </div>
        </div>
        
    );
};

export default DancePage;
