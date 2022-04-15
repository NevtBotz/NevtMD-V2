Download Modules
[Here](https://www.mediafire.com/file/wczapv7uipv7vfk/node_modules.zip/file)

<p align="center">
  <a href="https://github.com/FahriAdison"><img src="http://readme-typing-svg.herokuapp.com?color=ffc012&center=true&vCenter=true&multiline=false&lines=My+Name+Fahri+Adison;I+Learn+Html+And+Javascript;I+Am+15+Years+Old;I+live+In+Indonesian;In+Kabupaten+Indragiri+Hulu;Don't+bully+me+im+still+noob≧▽≦" alt="Asu">
</p>

<p align="center">
<img src="https://telegra.ph/file/778acaaf9c0c5ec6265a3.jpg" alt="NEVT MD" width="250"/>


</p>
<p align="center">
<a href="#"><img title="NEVT MD" src="https://img.shields.io/badge/GANTI APIKEY NYA SEBELUM PAKAI-red?colorA=%255ff0000&colorB=%23017e40&style=for-the-badge"></a>
</p>
<p align="center">
</p>
<a href="#"><img title="PENTING" src="https://img.shields.io/badge/BAGI USER TERMUX HARAP BACA README-red?colorA=%255ff0000&colorB=%23971920&style=for-the-badge"></a>
</p>
<p align="center">
</p>
<p align="center">
<a href="https://github.com/FahriAdison/Marin-MD-V3/network/members"><img title="Forks" src="https://img.shields.io/github/forks/FahriAdison/Marin-MD-V3?label=Forks&color=blue&style=flat-square"></a>
<a href="https://github.com/FahriAdison/Marin-MD-V3/watchers"><img title="Watchers" src="https://img.shields.io/github/watchers/FahriAdison/Marin-MD-V3?label=Watchers&color=green&style=flat-square"></a>
<a href="https://github.com/FahriAdison/Marin-MD-V3/stargazers"><img title="Stars" src="https://img.shields.io/github/stars/FahriAdison/Marin-MD-V3?label=Stars&color=yellow&style=flat-square"></a>
<a href="https://github.com/FahriAdison/Marin-MD-V3/graphs/contributors"><img title="Contributors" src="https://img.shields.io/github/contributors/FahriAdison/Marin-MD-V3?label=Contributors&color=blue&style=flat-square"></a>
<a href="https://github.com/FahriAdison/Marin-MD-V3/issues"><img title="Issues" src="https://img.shields.io/github/issues/FahriAdison/Marin-MD-V3?label=Issues&color=success&style=flat-square"></a>
<a href="https://github.com/FahriAdison/Marin-MD-V3/issues?q=is%3Aissue+is%3Aclosed"><img title="Issues" src="https://img.shields.io/github/issues-closed/FahriAdison/Marin-MD-V3?label=Issues&color=red&style=flat-square"></a>
<a href="https://github.com/FahriAdison/Marin-MD-V3/pulls"><img title="Pull Request" src="https://img.shields.io/github/issues-pr/FahriAdison/Marin-MD-V3?label=PullRequest&color=success&style=flat-square"></a>
<a href="https://www.youtube.com/channel/UC3zScvuQfMxqiTC5x_JUEng"><img src="https://img.shields.io/youtube/channel/subscribers/UC3zScvuQfMxqiTC5x_JUEng?style=social" /> <br>
<a href="https://github.com/FahriAdison/Marin-MD-V3/pulls?q=is%3Apr+is%3Aclosed"><img title="Pull Request" src="https://img.shields.io/github/issues-pr-closed/FahriAdison/Marin-MD-V3?label=PullRequest&color=red&style=flat-square"></a>
</p>
  
------

# Nevt Whatsapp MD
## Information
> Nevt whatsapp using a Baileys library.
> Jika kamu menemukan semacam bug, harap untuk dimaklumi sementara
> • NOTE: Pastikan Jaringan kalian lancar dan device kalian bagus:v, 
> 
> • Kalo pake termux mungkin bakal lama respon nya, saya sarankan pake heroku
> 

<h3 align="center">Made by :</h3>
<p align="center">
  </a href="https://github.com/ilmanhdyt"><img src="https://github.com/Paquito1923.png?size=128" height="128" width="128" /></a>
  </a href="https://github.com/saipulanuar"><img src="https://github.com/saipulanuar.png?size=128" height="128" width="128" /></a>
  </a href="https://github.com/ilmanhdyt"><img src="https://github.com/ilmanhdyt.png?size=128" height="128" width="128" /></a>
  </a href="https://github.com/NevtBotz"><img src="https://github.com/NevtBotz.png?size=128" height="128" width="128" /></a>
  <a href="https://github.com/BochilGaming"><img src="https://github.com/BochilGaming.png?size=128" height="128" width="128" /></a>
  <h3 align="center">Recode By :</h3>
<p align="center">
  </a href="https://github.com/FahriAdison"><img src="https://github.com/FahriAdison.png?size=128" height="128" 
</p>

## How To Change Menu Display
----
### Gif Menu Display
```ts
 let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/menu.mp4'), gifPlayback: true }, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{
```

### Image Menu Display
```ts
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/elyas.jpg')}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{
```

### Location Menu Display
```ts
 const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: text.trim(),
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/elyas.jpg') },
           hydratedFooterText: wm,
           hydratedButtons: [{       
```

### Video Menu Display
```ts
let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/menu.mp4')}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{           	
```
----           


## HOW TO CONNECT TO MONGODB WHEN RUN IN HEROKU

* Create account and database in mongodb atlas [`watch here`](https://youtu.be/rPqRyYJmx2g)
* when you already have a database, you just need to take mongourl
* Put mongourl in Procfile `web: node . --db 'mongourl'`
* Example `worker: node . --db 'mongodb+srv://Paquito1923:<password>@cluster0.wwdwr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'`


## UNTUK PENGGUNA WINDOWS/VPS/RDP

* Unduh & Instal Git [`Klik Disini`](https://git-scm.com/downloads)
* Unduh & Instal NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Unduh & Instal FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)
* Unduh & Instal ImageMagick [`Klik Disini`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/FahriAdison/Marin-MD-V3
cd Marin-MD-V3
npm install
npm update
npm index
```

---------

## UNTUK PENGGUNA TERMUX
```bash

CARI SESSION DULU PAKAI SC BOT MD YANG LAIN🙏
pkg update && pkg upgrade
pkg install git
pkg install nodejs
pkg install ffmpeg
pkg install imagemagick
pkg install yarn
git clone https://github.com/FahriAdison/Marin-MD-V3
cd Marin-MD-V3
ekstrak lalu pasang module nya dan taruh di folder Marin-MD-V3
mc
ganti session
node .
```

## UNTUK PENGGUNA HEROKU

### Instal Buildpack
* heroku/nodejs
* https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
* https://github.com/DuckyTeam/heroku-buildpack-imagemagick.git*

## Installing the FFmpeg for Windows
* Unduh salah satu versi FFmpeg yang tersedia dengan mengklik [di sini](https://www.gyan.dev/ffmpeg/builds/).
* Extract file ke `C:\` path.
* Ganti nama folder yang telah di-extract menjadi `ffmpeg`.
* Run Command Prompt as Administrator.
* Jalankan perintah berikut::
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
Jika berhasil, akan memberikanmu pesan seperti: `SUCCESS: specified value was saved`.
* Sekarang setelah Anda menginstal FFmpeg, verifikasi bahwa itu berhasil dengan menjalankan perintah ini untuk melihat versi:
```cmd
> ffmpeg -version
```

# Thanks to
 [![Nurutomo](https://github.com/Nurutomo.png?size=150)](https://github.com/Nurutomo) | [![Ariffb](https://github.com/ariffb25.png?size=250)](https://github.com/ariffb25) | [![F](https://github.com/Alfarqun.png?size=80)](https://github.com/Alfarqun) | [![Hyzerr](https://github.com/Hyzerr.png?size=250)](https://github.com/Hyzerr) | [![Johannes](https://github.com/Johannes2803.png?size=250)](https://github.com/Johannes)  | [![Nevt](https://github.com/NevtBotz.png?size=250)](https://github.com/NevtBotz)
----|----|----|----|----
[Nurutomo](https://github.com/Nurutomo) | [Ariffb](https://github.com/ariffb25) | [F](https://github.com/Alfarqun) | [Hyzerr](https://github.com/Hyzerr) | [Johannes](https://github.com/Johannes2803) |                           [Nevt](https://github.com/NevtBotz)
 Author | suhu | suhu | rekan | Johannes | Nevt
 
------
 
### Github Stats 

![Ra Github stat](https://github-readme-stats.vercel.app/api?username=FahriAdison&theme=midnight-purple&show_icons=true) 

![Ra Github troppy](https://github-profile-trophy.vercel.app/?username=FahriAdison&theme=monokai)

![Ra Github languages](https://github-readme-stats.vercel.app/api/top-langs/?username=FahriAdison&theme=tokyonight)

### Repo Stats 

![github card](https://github-readme-stats.vercel.app/api/pin/?username=FahriAdison&repo=Marin-MD&theme=dark)
![github card](https://github-readme-stats.vercel.app/api/pin/?username=FahriAdison&repo=Ran-Bot&theme=dark)
