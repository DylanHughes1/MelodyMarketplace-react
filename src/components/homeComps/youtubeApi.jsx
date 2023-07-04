import React, { useEffect, useState } from 'react';

function YoutubeApi() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(
                    'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCSNxIry_FPFcQDFRbi3VOAw&maxResults=2&order=rating&key=AIzaSyDw3uf8Xdw2kUl7JQg1StOYZ8KSSIvEW98'
                );
                const data = await response.json();
                const videoList = data.items;
                setVideos(videoList);
            } catch (error) {
                console.log(error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div className="youtube-container">
            <h2 style={{ fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold' }}>
                ¡En el centro del escenario! Descubre nuestros increíbles demos de equipos de sonido y guitarras!
            </h2>
            {videos && Array.isArray(videos) ? (
                videos.map((video) => (
                    <div key={video.id.videoId} style={{ marginBottom: '20px' }}>
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${video.id.videoId}`}
                            allowFullScreen
                        ></iframe>
                    </div>
                ))
            ) : (
                <p>Cargando videos...</p>
            )}
        </div>
    );


}

export default YoutubeApi;