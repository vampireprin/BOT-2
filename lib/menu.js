const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
O código-fonte / bot é um programa de código aberto (gratuito) escrito usando
 Javascript, você pode usar, copiar, modificar,
 combinar, publicar, distribuir, sublicenciar e / ou
 vender uma cópia sem remover o autor principal do código-fonte / bot.

 Ao usar este código-fonte / bot, você concorda com os seguintes Termos e Condições:
 - O código-fonte / bot não armazena seus dados em nossos servidores.
 - O código-fonte / bot não é responsável por seus pedidos para este bot.
 - Código-fonte / bot que você pode ver em https://github.com/ArugaZ/whatsapp-bot

Instagram: https://instagram.com/ini.arga/

Best regards, ArugaZ.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}!

Salve Família, essa scripts desse bot, é de um indonésio, eu só trauzir
    
Comandos✨

*${prefix}stc*
*${prefix}ttp*
*${prefix}sgif*
*${prefix}stickergiphy*
*${prefix}stmg*
*${prefix}meme*
*${prefix}nulis*
*${prefix}quotemaker*
*${prefix}rate*
*${prefix}kapan*
*${prefix}apakah*
*${prefix}bisakah*
*${prefix}infosurah*
*${prefix}surah*
*${prefix}tafsir*
*${prefix}ALaudio*
*${prefix}jsolat*
*${prefix}nekopoi*
*${prefix}katakasar*
*${prefix}klasmen*
*${prefix}instagram*
*${prefix}ytmp3*
*${prefix}ig*
*${prefix}ytmp4*
*${prefix}facebook*
*${prefix}tiktokpic*
*${prefix}artinama*
*${prefix}cekjodoh*
*${prefix}zodiak*
*${prefix}motivasi*
*${prefix}urgay*
*${prefix}images*
*${prefix}sreddit*
*${prefix}resep*
*${prefix}stalkig*
*${prefix}wiki*
*${prefix}cuaca*
*${prefix}chord*
*${prefix}lirik*
*${prefix}play*
*${prefix}movie*
*${prefix}whatanime*
*${prefix}aiquote*
*${prefix}doggo*
*${prefix}fakta*
*${prefix}fakboy*
*${prefix}katabijak*
*${prefix}quote*
*${prefix}brainly*
*${prefix}cerpen*
*${prefix}cersex*
*${prefix}puisi*
*${prefix}anime*
*${prefix}kpop*
*${prefix}memes*
*${prefix}tts*
*${prefix}translate*
*${prefix}resi*
*${prefix}covidindo*
*${prefix}ceklokasi*
*${prefix}shortlink*
*${prefix}bapakfont*
*${prefix}linkgc*
*${prefix}adminList*
*${prefix}ownergc*
*${prefix}me*
*${prefix}listban*
*${prefix}listblock*
*${prefix}gcinfo*
*${prefix}dewabatch*
*${prefix}howmuch*
*${prefix}mtk*
*${prefix}google*
*${prefix}ptl*
*${prefix}grupbot*
*${prefix}read*
*${prefix}getpic @tagmember*
*${prefix}santet*
*${prefix}nyenye*
*${prefix}saylist*
*${prefix}addsay*
*${prefix}say*
*${prefix}delsay*
*${prefix}listbacot*
*${prefix}addbacot*
*${prefix}bacot*
*${prefix}delbacot*
*${prefix}jadian*
*${prefix}mystat*
*${prefix}infogempa*
*${prefix}tod*
*${prefix}kbbi*
*${prefix}pornhub*
*${prefix}infobmkg*
*${prefix}bucin*
*${prefix}ytsearch*
*${prefix}tahta*
*${prefix}artimimpi*
*${prefix}family100*
*${prefix}playstore*
*${prefix}shopee*
*${prefix}glitch*
*${prefix}distance*
*${prefix}emojisticker*
*${prefix}jadwalbola*
*${prefix}caklontong*
*${prefix}tebakgambar*
*${prefix}simi*
*${prefix}kusonime*
*${prefix}tiktok*
*${prefix}play2*
*${prefix}asupan*
*${prefix}stalktiktok*
*${prefix}logoff*
*${prefix}blackpink*
*${prefix}glowtext*
*${prefix}twitter*
*${prefix}quotesen*
*${prefix}gsmarena*
*${prefix}infoalamat*
*${prefix}ig2*
*${prefix}detail*


Anime :
*${prefix}nhpdf [código]*
*${prefix}rhug*
*${prefix}slap*
*${prefix}waifu*
*${prefix}nsfwgif*
*${prefix}bjgif*
*${prefix}cumgif*
*${prefix}kissgif*
*${prefix}rhentai*
*${prefix}pussy*
*${prefix}bjanime*
*${prefix}gifhentai*
*${prefix}boobs*
*${prefix}randomhentai*
*${prefix}randomhug*
*${prefix}baka*
*${prefix}animeavatar*
*${prefix}neko*
*${prefix}loli*
*${prefix}wallpaper*
*${prefix}wallpaper2*
*${prefix}wpanime*
*${prefix}nekonsfw*


Imagens :
*${prefix}ameliandani*
*${prefix}pictcogan*
*${prefix}pictcecan*
*${prefix}aesthetic*

Bot:
*${prefix}tnc*
*${prefix}donasi*
*${prefix}botstat*
*${prefix}ownerbot*
*${prefix}join*
 _-_-_-_-_-_-_-_-_-_-_-_-_-_
ADM DO Bot:
*${prefix}ban* - banir
*${prefix}bc* - promoção
*${prefix}leaveall* - Sair todos os grupos
*${prefix}clearall* - Limpar o Chat
*${prefix}setstatus*
*${prefix}setpic*
*${prefix}screen*
*${prefix}addprem*
*${prefix}delprem*
    
*Author    : Aruga Z*
*Owner BOT : Thoriq*
    
https://github.com/thoriqazzikra/whatsapp-bot2
    
Me come?✨`
}
    
    /*
    Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.
    */
    
exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Para ADMIRAR
*${prefix}add*
*${prefix}kick* @tag
*${prefix}promote* @tag
*${prefix}demote* @tag
*${prefix}infoall*
*${prefix}del*
*${prefix}mutegrup on/off*
*${prefix}seticon*
*${prefix}revoke link gc*
*${prefix}setgroupname*
*${prefix}resend*
*${prefix}bokep*
*${prefix}antilink on/off*
*${prefix}edotensei*
    
_-_-_-_-_-_-_-_-_-_-_-_-_-_
⚠ [ *Ademir do Grupo* ] ⚠
Aqui estão os recursos do proprietário do grupo neste bot!
*${prefix}kickall*
*O grupo proprietário é um criador do grupo.*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

https://trakteer.id/arugabot

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih. -ArugaZ`
}
