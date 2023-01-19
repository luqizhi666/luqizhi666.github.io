const ap = new APlayer({
    container: document.getElementById("aplayer"),
    fixed: true,
    autoplay: true,
    lrcType: 3,
    audio: [
        {
            name: "Take Off And Land 2012",
            artist: "Kitsune2",
            url: "https://music.163.com/song/media/outer/url?id=1293905789.mp3",
            cover: "https://p2.music.126.net/A-jwjeGVtSAEvhvBw7hMlA==/109951163413219245.jpg?param=130y130",
            lrc: "nothing.lrc"
        },
        {
            name: "阳光风神",
            artist: "街憬",
            url: "https://music.163.com/song/media/outer/url?id=1920315462.mp3",
            cover: "https://p1.music.126.net/HxUUVR8VhROxLVcyJKJQ0A==/109951166583333280.jpg?param=130y130",
            lrc: "阳光风神（赠品） - 街憬.lrc"
        }
    ]
});
