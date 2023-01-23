const ap = new APlayer({
    container: document.getElementById("aplayer"),
    fixed: true,
    autoplay: true,
    lrcType: 3,
    audio: [
        {
            name: "我不曾忘记",
            artist: "花玲 / 张安琪 / 沐霏",
            url: "https://music.163.com/song/media/outer/url?id=2014336709.mp3",
            cover: "https://p2.music.126.net/dM_2lEqG7ZP7l0NjoApPFg==/109951168232666774.jpg?param=130y130",
            lrc: "/lrc/我不曾忘记 - 花玲.lrc"
        },
        {
            name: "Take Off And Land 2012",
            artist: "Kitsune2",
            url: "https://music.163.com/song/media/outer/url?id=1293905789.mp3",
            cover: "https://p2.music.126.net/A-jwjeGVtSAEvhvBw7hMlA==/109951163413219245.jpg?param=130y130",
            lrc: "/lrc/nothing.lrc"
        },
        {
            name: "阳光风神",
            artist: "街憬",
            url: "https://music.163.com/song/media/outer/url?id=1920315462.mp3",
            cover: "https://p1.music.126.net/HxUUVR8VhROxLVcyJKJQ0A==/109951166583333280.jpg?param=130y130",
            lrc: "/lrc/阳光风神（赠品） - 街憬.lrc"
        },
        {
            name: " We Are The World",
            artist: "Lionel Richie / Stevie Wonder / Paul Simon / Kenny Rogers / James Ingram / Tina Turner / Billy Joel / Michael Jackson / Diana Ross / Dionne Warwick / Willie Nelson / Al Jarreau / Bruce Springsteen / Kenny Loggins / Steve Perry / Daryl Hall / Huey Lewis / Cyndi Lauper / Kim Carnes / Bob Dylan / Ray Charles",
            url: "https://music.163.com/song/media/outer/url?id=28493451.mp3",
            cover: "https://p1.music.126.net/x_sTEtNoVpcE6hX9CkDNpw==/109951163122957256.jpg?param=130y130",
            lrc: "/lrc/We Are The World - Lionel Richie.lrc"
        }
    ]
});
