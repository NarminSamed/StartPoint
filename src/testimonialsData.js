import { Image } from 'cloudinary-react'
import svg from './assets/punk.svg'





export const testimonialsData = [{
  id: 1,
  icon: <img src={svg} alt="svg" />,
  details: 'StartPoint-də hər şey var. Bizim üçün ən vacib məsələlərdən biri harada oluruq olsun, zalı uzaqdan da idarə edə bilmək idi. Bu StartPoint-lə yüksək keyfiyyətlə mövcuddur.',
  image: <Image style={{
    borderRadius: "50%",
    height: 64,
    width: 64
  }} cloudName='dkt4cajom'
    publicId='https://res.cloudinary.com/dkt4cajom/image/upload/v1658069663/jake-nackos-IF9TK5Uy-KI-unsplash_gyphib.jpg' />,
  name: 'Azadə İsayeva',
  workplace: 'Angels Pilates-in sahibi',
},
{
  id: 2,
  icon: <img src={svg} alt="svg" />,
  details: 'Məni StartPoint-ə cəlb edən əsas şey brend proqram və onun imkanları idi. İstifadəsi asan push bildiriş funksiyası üzvlərlə əlaqə saxlamağa imkan verdi.',
  image: <Image style={{
    borderRadius: "50%",
    height: 64,
    width: 64
  }} cloudName='dkt4cajom'
    publicId='https://res.cloudinary.com/dkt4cajom/image/upload/v1658069671/michael-dam-mEZ3PoFGs_k-unsplash_cbbrxr.jpg' />,
  name: 'Azadə İsayeva',
  workplace: 'NZ Pilates - in sahibi',
},
{
  id: 3,
  icon: <img src={svg} alt="svg" />,
  details: 'Tətbiq digərlərindən üstündür - bu, istifadəçi təcrübəsini o qədər rahar edir. Bizim qeydiyyat vaxtımızı yarıya ediribdir.',
  image: <Image style={{
    borderRadius: "50%",
    height: 64,
    width: 64
  }} cloudName='dkt4cajom'
    publicId='https://res.cloudinary.com/dkt4cajom/image/upload/v1658069681/warren-wong-VVEwJJRRHgk-unsplash_fibwii.jpg' />,
  name: 'Cavid Hümbətov',
  workplace: 'CH Fitness - in sahibi',
},

{
  id: 4,
  icon: <img src={svg} alt="svg" />,
  details: 'Tətbiq digərlərindən üstündür - bu, istifadəçi təcrübəsini o qədər rahar edir. Bizim qeydiyyat vaxtımızı yarıya ediribdir.',
  image: <Image style={{
    borderRadius: "50%",
    height: 64,
    width: 64
  }} cloudName='dkt4cajom'
    publicId='https://res.cloudinary.com/dkt4cajom/image/upload/v1658069681/warren-wong-VVEwJJRRHgk-unsplash_fibwii.jpg' />,
  name: 'Cavid Hümbətov',
  workplace: 'CH Fitness - in sahibi',
},

{
  id: 5,
  icon: <img src={svg} alt="svg" />,
  details: 'Tətbiq digərlərindən üstündür - bu, istifadəçi təcrübəsini o qədər rahar edir. Bizim qeydiyyat vaxtımızı yarıya ediribdir.',
  image: <Image style={{
    borderRadius: "50%",
    height: 64,
    width: 64
  }} cloudName='dkt4cajom'
    publicId='https://res.cloudinary.com/dkt4cajom/image/upload/v1658069681/warren-wong-VVEwJJRRHgk-unsplash_fibwii.jpg' />,
  name: 'Cavid Hümbətov',
  workplace: 'CH Fitness - in sahibi',
}
]