const axios = require('axios')
const { fetchJson, fetchText } = require('../utils/fetcher')
const fs = require('fs-extra')
const link = 'https://arugaz.herokuapp.com'
const mehh = 'https://api.i-tech.id/dl/yt?key=eT16a3-P3Gvx4-8JwS8r-N4jEB2-c9VIz4'
const fileyt = 'https://raw.githubusercontent.com/ArugaZ/scraper-results/main/20201111_230923.jpg'
const eroryt = 'https://raw.githubusercontent.com/ArugaZ/scraper-results/main/20201111_234624.jpg'

const setting = JSON.parse(fs.readFileSync('./settings/setting.json'))
let { 
    vhtearkey,
    apiKey,
    keepSave,
    iTechApi
    } = setting


const nowm = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/tiktokdl?link=${url}&apikey=${vhtearkey}`)
    .then(res => {
        resolve(res.data.result)
      })
      .catch(err => {
        reject(err)
      })
})

const nhpdf = async (query) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/nhentaipdfdownload?query=${query}&apikey=${vhtearkey}`)
    .then(res => {
        resolve(res.data.result)
    })
    .catch(err => {
        reject(err)
    })
})

const ig = async (url) => new Promise((resolve, reject) => {
    axios.get(`http://keepsaveit.com/api/?api_key=${keepSave}&url=${url}`)
    .then(res => {
        resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
})

const gsm = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/gsmarena?query=${url}&apikey=${vhtearkey}`)
    .then(res => {
        if (res.data.error) resolve(res.data.error)
        const swdkp = `*Type Handphone : ${res.data.result.title}*\n\n${res.data.result.spec}`
        resolve(swdkp)
    })
    .catch(err => {
        reject(err)
    })
})

const ssweb = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.i-tech.id/tools/ssweb?key=qTOfqt-6mDbIq-8lJHaR-Q09mTR-D6pAtD&link=${url}`)
    .then(res => {
        resolve(res)
    })
    .catch(err => {
        reject(err)
    })
})

const twit = async (url) => new Promise((resolve, reject) => {
    axios.get(`http://api.kocakz.xyz/api/media/twvid?url=${url}`)
    .then(res => {
        resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
})

const yt3 = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.i-tech.id/dl/yt?key=qTOfqt-6mDbIq-8lJHaR-Q09mTR-D6pAtD&link=${url}`)
    .then(res => {
        resolve(res.data)
    })
    .catch(err =>  {
        reject(err)
    })
})

const fb = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://mhankbarbars.herokuapp.com/api/epbe?url=${url}&apiKey=${apiKey}`)
    .then(res => {
        resolve(res)
    })
    .catch(err => {
        reject(err)
    })
})

/**
 * Get fresh videos from TikTok.
 */
const asupan = () => new Promise((resolve, reject) => {
    console.log('Fetching video...')
    fetchText('http://sansekai.my.id/sansekai.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

const kusonime = async (judul) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/kuso?q=${judul}`)
    .then((res) => {
        const initext = `*Judul :* ${res.data.title}\n*Sinopsis :* ${res.data.sinopsis}\n*Info :* ${res.data.info}\n\n*Link Download* : _${res.data.link_dl}_`
        resolve({link: res.data.thumb, text: initext})
    })
    .catch((err) => {
        reject(err)
    })
})

const zodiak2 = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/zodiak?query=url&apikey=${vhtearkey}`)
    .then((res) => {
        const tqt = `Nama Zodiak : ${res.data.result.zodiak}\nRamalan : ${res.data.result.ramalan}\nNomor Keberuntungan : ${res.data.result.nomorKeberuntungan}\nMotivasi : ${res.data.result.motivasi}\n\nInspirasi : ${res.data.result.inspirasi}`
        resolve({text : tqt})
    })
    .catch((err) => {
        reject(err)
    })
})

const dewabatch = async (judul) => new Promise((resolve, reject) => {
	axios.get(`${link}/api/dewabatch?q=${judul}`)
	.then((res) => {
		const textdew = `${res.data.result}\n\nSinopsis: ${res.data.sinopsis}`
		resolve({link: res.data.thumb, text: textdew})
	})
	.catch((err) => {
		reject(err)
	})
})

const simi = (chat) => new Promise((resolve, reject) => {
	console.log('Get Response from Simsumi!')
	fetchJson(`http://simsumi.herokuapp.com/api?text=${chat}&lang=id`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const maps = async (jalan) => new Promise((resolve, reject) => {
axios.get(`https://mnazria.herokuapp.com/api/maps?search=${jalan}`)
.then((res) => {
	resolve(res.data.gambar)
	})
	.catch((err) => {
		reject(err)
		})
		})

const bokep2 = async () => new Promise((resolve, reject) => {
	axios.get(`${link}/api/indohot`)
	.then((res) => {
		const textv = `Negara: ${res.data.result.country}\nDurasi: ${res.data.result.durasi}\nGenre: ${res.data.result.genre}\nJudul: ${res.data.result.judul}\nLink: ${res.data.result.url}`
		resolve(textv)
	})
	.catch((err) => {
		reject(err)
	})
})

const cekzodiak = async (nama,tgl,bln,thn) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/getzodiak?nama=${nama}&tgl-bln-thn=${tgl}-${bln}-${thn}`)
    .then((res) => {
        const text = `Nama: ${res.data.nama}\nUltah: ${res.data.ultah}\nZodiak: ${res.data.zodiak}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const cooltext = async (teks) => new Promise((resolve, reject) => {
	axios.get(`https://api.haipbis.xyz/randomcooltext?text=${teks}`)
	.then((res) => {
		const textc = `Teks: ${res.data.text}\nGambar: ${res.data.image}`
		resolve({link: res.data.image, text: textc})
	})
	.catch((err) => {
		reject(err)
	})
})

const story = async (query) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/igstory?query=${query}&apikey=${vhtearkey}`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) => {
        reject(err)
    })
})

const ig2 = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://st4rz.herokuapp.com/api/ig?url=${url}`)
    .then((res) => {
        resolve(res.data)
    })
    .catch((err) => {
        reject(err)
    })
})
const cerpen = async () => new Promise((resolve, reject) => {
	axios.get(`${link}/api/cerpen`)
	.then((res) => {
		resolve(res.data)
	})
	.catch((err) => {
		reject(err)
	})
})

const cersex = async () => new Promise((resolve, reject) => {
	axios.get(`https://api.vhtear.com/cerita_sex&apikey=${vhtearkey}`)
	.then((res) => { 
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
})

const puisi = async () => new Promise((resolve, reject) => {
	const puiti = ['1','3']
	const ranisi = puiti[Math.floor(Math.random() * puiti.length)]
	axios.get(`${link}/api/puisi${ranisi}`)
	.then((res) => {
		resolve(res.data)
	})
	.catch((err) => {
		reject(err)
	})
})

const ytmp3 = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/ytmp3?query=${url}&apikey=${vhtearkey}`)
    .then((res) => {
		resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

const ymp3 = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/ytmp3?query=${url}&apikey=${vhtearkey}`)
    .then((res) => {
		resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

const ytmp4 = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.i-tech.id/dl/yt?key=qTOfqt-6mDbIq-8lJHaR-Q09mTR-D6pAtD&link=${url}`)
    .then((res) => {
		resolve(res.data)
    })
    .catch((err) =>{
        reject(err)
    })
})

const ingfo = async (query) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/infoalamat?query=${query}&apikey=${vhtearkey}`)
    .then((res) =>{
        resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
})

const film = async (query) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/downloadfilm?judul=${query}&apikey=${vhtearkey}`)
    .then((res) => {
        resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
})

const jam = async (query) => new Promise((resolve, reject) => {
    axios.get(`https://api.i-tech.id/tools/jam?key=qTOfqt-6mDbIq-8lJHaR-Q09mTR-D6pAtD&kota=${query}`)
    .then((res) => {
        resolve(res.data)
    })
    .catch((err) => {
        reject(err)
    })
})

const ymp4 = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/ytdl?link=${url}&apikey=${vhtearkey}`)
    .then((res) => {
		resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

const kbbi = async (url) => new Promise((resolve, reject) => {
    axios.get(`http://enznoire.herokuapp.com/kbbi?kata=${url}`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

const stalktt = async (url) => new Promise ((resolve, reject) => {
    axios.get(`https://api.vhtear.com/tiktokprofile?query=${url}&apikey=${vhtearkey}`)
    .then((res) => {
        if (res.data.error) resolve(res.data.error)
        const ttxt = `*User :* ${res.data.result.username}\n*Nama :* ${res.data.result.title}\n*Verified :* ${res.data.result.verified}\n*Deskripsi :* ${res.data.result.description}\n*Bio :* ${res.data.result.bio}\n*Followers :* ${res.data.result.follower}\n*Following :* ${res.data.result.follow}\n*Video Post :* ${res.data.result.video_post}\n*Total Like :* ${res.data.result.like_count}\n\n*Url Account :* ${res.data.result.url_account}`
        resolve(ttxt)
    })
    .catch((err) => {
        reject(err)
    })
})

const stalkig = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/igprofile?query=${url}&apikey=${vhtearkey}`)
    .then((res) => {
		if (res.data.error) resolve(res.data.error)
        const text = `*User :* ${res.data.result.username}\n*Name :* ${res.data.result.full_name}\n*Bio :* ${res.data.result.biography}\n*Private Account :* ${res.data.result.is_private}\n*Followers :* ${res.data.result.follower}\n*Following :* ${res.data.result.follow}\n*Post :* ${res.data.result.post_count}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const ttpict = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/tiktokprofile?query=${url}&apikey=${vhtearkey}`)
    .then((res) => {
        if (res.data.error) resolve('https://c4.wallpaperflare.com/wallpaper/976/117/318/anime-girls-404-not-found-glowing-eyes-girls-frontline-wallpaper-preview.jpg')
        resolve(`${res.data.result.picture}`)
    })
    .catch((err) => {
        reject(err)
    })
})

const gsmpict = async (url) => new Promise((resolve) => {
    axios.get(`https://api.vhtear.com/gsmarena?query=${url}&apikey=${vhtearkey}`)
    .then((res) => {
        resolve(`${res.data.result.image}`)
    })
    .catch((err) => {
        reject(err)
    })
})

const stalkigpict = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/igprofile?query=${url}&apikey=${vhtearkey}`)
    .then((res) => {
		if (res.data.error) resolve('https://c4.wallpaperflare.com/wallpaper/976/117/318/anime-girls-404-not-found-glowing-eyes-girls-frontline-wallpaper-preview.jpg')
        resolve(`${res.data.result.picture}`)
    })
    .catch((err) =>{
        reject(err)
    })
})

const quote = async () => new Promise((resolve, reject) => {
    axios.get(`${link}/api/randomquotes`)
    .then((res) => {
        const text = `Author: ${res.data.author}\n\nQuote: ${res.data.quotes}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const wiki = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/wiki?q=${url}`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

const daerah = async () => new Promise((resolve, reject) => {
    axios.get(`${link}/daerah`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

const jadwaldaerah = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.haipbis.xyz/jadwalsholat?daerah=${url}`)
    .then((res) => {
		if (res.data.error) resolve(res.data.error)
        const text = `Jadwal Sholat ${url}\n\nImsyak: ${res.data.Imsyak}\nSubuh: ${res.data.Subuh}\nDzuhur: ${res.data.Dzuhur}\nAshar: ${res.data.Ashar}\nMaghrib: ${res.data.Maghrib}\nIsya: ${res.data.Isya}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const cuaca = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://rest.farzain.com/api/cuaca.php?id=${url}&apikey=O8mUD3YrHIy9KM1fMRjamw8eg`)
    .then((res) => {
		if (res.data.respon.cuaca == null) resolve('Maaf daerah kamu tidak tersedia')
        const text = `Cuaca di: ${res.data.respon.tempat}\n\nCuaca: ${res.data.respon.cuaca}\nAngin: ${res.data.respon.angin}\nDesk: ${res.data.respon.deskripsi}\nKelembapan: ${res.data.respon.kelembapan}\nSuhu: ${res.data.respon.suhu}\nUdara: ${res.data.respon.udara}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const chord = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/chord?q=${url}`)
    .then((res) => {
		if (res.data.error) resolve(res.data.error)
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

const tulis = async (teks) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/nulis?text=${encodeURIComponent(teks)}`)
    .then((res) => {
        resolve(`${res.data.result}`)
    })
    .catch((err) => {
        reject(err)
    })
})

const artinama = async (nama) => new Promise((resolve, reject) => {
	axios.get(`${link}/api/artinama?nama=${nama}`)
	.then((res) => {
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
})

const cekjodoh = async (nama,pasangan) => new Promise((resolve, reject) => {
	axios.get(`${link}/api/jodohku?nama=${nama}&pasangan=${pasangan}`)
	.then((res) => {
		const textc = `Nama : ${res.data.nama}\nPasangan : ${res.data.pasangan}\nPositif: ${res.data.positif}\nNegatif : ${res.data.negatif}`
		resolve({link: res.data.gambar, text: textc})
	})
	.catch((err) => {
		reject(err)
	})
})

const covidindo = async () => new Promise((resolve, reject) => {
	axios.get(`${link}/api/coronaindo`)
	.then((res) => {
		const textv = `Info Covid-19 ${res.data.negara}\n\nKasus Baru: ${res.data.kasus_baru}\nTotal Kasus: ${res.data.kasus_total}\nSembuh: ${res.data.sembuh}\nPenanganan: ${res.data.penanganan}\nMeninggoy: ${res.data.meninggal}\n\nUpdate: ${res.data.terakhir}`
		resolve(textv)
	})
	.catch((err) => {
		reject(err)
	})
})
const bapakfont = async (kalimat) => new Promise((resolve, reject) => {
	axios.get(`${link}/api/bapakfont?kata=${kalimat}`)
	.then((res) => {
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
})

const lirik = async (judul) => new Promise((resolve, reject) => {
	axios.get(`${link}/api/lirik?judul=${judul}`)
	.then((res) => {
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
})




const instagram = async (url) => new Promise(async (resolve) => {
    const api = `https://api.vhtear.com/instadl?link=${url}&apikey=${vhtearkey}`
    axios.get(api).then(async(res) => {
        const st = res.data.result
        if(st.status === false){
            resolve(`Media Tidak Di Temukan`)
        }else{
            resolve(st)
        }
    }).catch(err => {
        console.log(err)
        resolve(`Maaf, Server Sedang Error`)
    })
})

/**
 * Get Instagram Metadata
 *
 * @param  {String} url
 */
const insta = (url) => new Promise((resolve, reject) => {
    console.log('Get metadata from =>', url)
    const uri = url.replace(/\?.*$/g, '')
    igGetInfo(uri, {})
        .then((result) => resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})

const movie = async (judul) => new Promise((resolve, reject) => {
	axios.get(`${link}/api/sdmovie?film=${encodeURIComponent(judul)}`)
	.then((res) => {
		if (res.data.error) return resolve({status: 'error', hasil: res.data.result})
		const teksmov = `Judul: ${res.data.result.title}\nRating: ${res.data.result.rating}\nSinopsis: ${res.data.result.sinopsis}\nLink: ${res.data.result.video}`
		resolve({status: 'success', hasil: teksmov, link: res.data.result.thumb})
	})
	.catch((err) => {
		reject(err)
	})
})

module.exports = {
    ytmp3,
    ig,
    ymp3,
    ymp4,
    insta,
    ytmp4,
    nhpdf,
    stalkig,
    stalkigpict,
    quote,
    wiki,
    daerah,
    jadwaldaerah,
    cuaca,
    chord,
    tulis,
    film,
    stalktt,
    ttpict,
    ig2,
	artinama,
	cekjodoh,
	covidindo,
	bapakfont,
	lirik,
    movie,
    zodiak2,
    gsm,
    gsmpict,
    jam,
    twit,
	cerpen,
	cersex,
	puisi,
	cooltext,
	cekzodiak,
	dewabatch,
	bokep2,
	kbbi,
	maps,
	instagram,
    fb,
    kusonime,
    ingfo,
    nowm,
    asupan,
    yt3,
    ssweb,
    story
}
