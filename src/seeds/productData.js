/* eslint-disable no-underscore-dangle */
const productData = [
    {

        title: 'Freeknight Tas Selempang Pria',
        price: 139000,
        url: 'https://www.tokopedia.com/freeknight/freeknight-tas-selempang-pria-usb-charger-sling-bag-fashion-ts717-hitam-polos-2909e',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/3/31/48b00fa0-91d8-4554-bcc4-1b39ba2691ed.jpg',
    },
    {

        title: 'Iron Man Mark 45',
        price: 290000,
        url: 'https://www.tokopedia.com/titiancore/iron-man-mark-45-mark-xlv-mk45-zd-toys-marvel-age-of-ultron',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/23/45c81894-cbed-43ff-8251-013c53983b17.jpg',
    },
    {

        title: 'HOODIE TOMOINC x AMEDITO-SON',
        price: 399000,
        url: 'https://www.tokopedia.com/tomoincstore/hoodie-tomoinc-x-amedito-son-of-autism-island-on-fire-turtle-white-s',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/7/5aff74fe-be0c-45fc-83fc-e92c4bbc6cf1.jpg',
    },
    {

        title: 'BASEUS TRUE WIRELESS BLUETOOTH EARPHONE',
        price: 175000,
        url: 'https://www.tokopedia.com/baseus/baseus-true-wireless-bluetooth-earphone-mini-earbuds-tws-wm01-ungu',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2021/10/14/9573bf9b-1b06-4d55-815e-7761d3c8c80a.png',
    },
    {

        title: 'Celana PDL Cargo',
        price: 144057,
        url: 'https://www.tokopedia.com/abstore07/celana-pdl-cargo-big-size-pria-premium-celana-gunung-pria-size-jumbo-krem-40',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/2/21/aaa45aab-78f8-4b68-9419-e04ba2d0959c.jpg',
    },
    {

        title: 'ASUS ROG PHONE 3 5G',
        price: 3479000,
        url: 'https://www.tokopedia.com/maxsense/asus-rog-phone-3-5g-512gb-256gb-128gbgaransi-resmi-tam-not-rog-phone-5-8-128-tencent-rog-2-unit-only',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/6/3/f36edfdb-9fe7-47fa-a46b-02269169c9fc.jpg',
    },
    {

        title: 'Lenovo LOQ Ryzen 5 7640HS',
        price: 14499000,
        url: 'https://www.tokopedia.com/sinarmulia/lenovo-loq-ryzen-5-7640hs-rtx3050-512gb-ssd-8gb-win11-ohs',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/8/9/1310383f-715d-4785-8f12-434e185d0c2a.jpg',
    },
    {

        title: 'Soft Case Iphone 11 Pro Max',
        price: 16500,
        url: 'https://www.tokopedia.com/favoritcase/soft-case-iphone-11-pro-max-x-xr-xs-8-7-6-6s-plus-mickey-mouse-cute-mky-white-iph-7-8',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/9/eee27067-6740-4029-ad2b-8853a2d907c8.jpg',
    },
    {

        title: 'Setelan Busana Adat Jawa Kebaya',
        price: 165000,
        url: 'https://www.tokopedia.com/asesorispusaka/setelan-busana-adat-jawa-kebaya-lurik-bawahan-jarik-anak-perempuan',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/16/671f8683-408f-44e4-849f-64047f5a17f5.jpg',
    },
    {

        title: 'Kadonio Electric Kettle Teko Listrik',
        price: 94050,
        url: 'https://www.tokopedia.com/kadonioindonesia/kadonio-electric-kettle-teko-listrik-2-0l-temperatur-terkontrol-putih-3164f',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/6/28/357f55e7-8fd1-47df-be2f-bb1ad19a2c87.jpg',
    },
    {

        title: 'LOVE RAINBOW SET BAJU SETELAN',
        price: 219800,
        url: 'https://www.tokopedia.com/milanberry/love-rainbow-set-baju-setelan-casual-anak-remaja-cewek-korea-import-140',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/9/9/25289c13-5392-454f-941d-e680f205af07.jpg',
    },
    {

        title: 'Tas Ransel Pria Kulit MICHAEL',
        price: 279999,
        url: 'https://www.tokopedia.com/acetech/tas-ransel-pria-kulit-ransel-kulit-pria-backpack-kulit-pria-michael',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/11/8/862d3026-39c6-4a2a-a627-5728c3011727.jpg',
    },
    {

        title: 'Baju Jumpsuit Anak Perempuan',
        price: 74500,
        url: 'https://www.tokopedia.com/coconanasshop/baju-jumpsuit-anak-perempuan-import-lucu-ala-korea-pink-90',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/5/23/27663710-97dc-4c27-92e2-298feea378d4.jpg',
    },
    {

        title: 'Panci Elektrik Multifungsi Cooker Stainless',
        price: 59900,
        url: 'https://www.tokopedia.com/newstyle/panci-listrik-y05-panci-elektrik-multifungsi-elektrik-cooker-stainless-yellow',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/27/9fb55bc0-dd68-4d46-8cfa-13303394952f.jpg',
    },
    {

        title: 'MISS DAISY French Perfume Shampoo',
        price: 255000,
        url: 'https://www.tokopedia.com/sehatindonesiaku/miss-daisy-french-perfume-shampoo-hair-mask-peony-mask-250-ml',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/11/6/10a64829-0cf5-4ba5-8adf-8400f929bc1c.jpg',
    },
    {

        title: 'Tolak Angin Cair 1 Box',
        price: 34000,
        url: 'https://www.tokopedia.com/tokoariuntung/tolak-angin-cair-1-box-isi-12-sachet-agen-resmi-sido-muncul',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/9/055af255-d3f2-462c-ba3a-a919dd614a30.jpg',
    },
    {

        title: 'Setelan Overall Rok Import',
        price: 145000,
        url: 'https://www.tokopedia.com/wennylo-1/baju-setelan-overall-rok-import-anak-perempuan-untuk-usia-12-th-biru-140cm-8-9thn',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2021/2/27/a75bcc29-6b37-4bb5-b0aa-f3e5f08f9a51.jpg',
    },
    {

        title: 'TAS RANSEL ANAK IMPOR by ALTO 7',
        price: 159999,
        url: 'https://www.tokopedia.com/agentas88/tas-ransel-anak-sekolah-perempuan-sd-smp-sma-korea-impor-by-alto-7-pink-b47e3',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/8/8/2a196e97-d98b-44c1-818d-8ae87a9c6852.png',
    },
    {

        title: 'Buket bunga biru pastel unik',
        price: 99000,
        url: 'https://www.tokopedia.com/kembanggaanmu/buket-bunga-biru-pastel-unik-untuk-wisuda-hadiah-ulangtahun-pacar-s',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/8/24/69e8330f-46e5-4a1b-82dd-dd47fe4b0c14.jpg',
    },
    {

        title: 'Sneakers Wanita Import Premium',
        price: 115200,
        url: 'https://www.tokopedia.com/fashionshop8899/sepatu-wanita-sneakers-wanita-import-premium-quality-sp-53-hitam-37',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/11/18/dbc16863-5451-46f6-9ae1-1685b391dd43.jpg',
    },
    {

        title: 'Raket Badminton Yonex Astrox 100 ZZ',
        price: 2790000,
        url: 'https://www.tokopedia.com/sportscenter/new-color-raket-badminton-yonex-astrox-100-zz-100zz-kurenai',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/20/0edcf4cc-0cf9-4572-8843-e846396af03b.jpg',
    },
    {

        title: 'Apple iPhone 14 Garansi Resmi',
        price: 13749000,
        url: 'https://www.tokopedia.com/ismileofficial/apple-iphone-14-garansi-resmi-128gb-256gb-512gb-128gb-purple',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/2/15/0c4eabda-32af-4afa-b5b4-5a1363c705c4.jpg',
    },
    {

        title: 'Pelindung Charger Silicone Kartun',
        price: 32500,
        url: 'https://www.tokopedia.com/takinshop1/pelindung-charger-silicone-lucu-motif-kartun-untuk-iphone-18w-20w',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/5/16/72761778-5d60-4912-b5cd-3479d9b247fc.jpg',
    },
    {

        title: 'MAGSAFE COLOR BERWARNA SILICONE',
        price: 65000,
        url: 'https://www.tokopedia.com/supercasetokopedia/magsafe-color-berwarna-silicone-magnetic-case-iphone-ip-11-11-pro',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/12/29/e1383525-9a26-4934-9524-8137f1c1bf16.jpg',
    },
    {

        title: 'LITTLEMOMOKO- Setelan baju anak',
        price: 98000,
        url: 'https://www.tokopedia.com/littlemomoko/littlemomoko-setelan-baju-anak-laki-laki-impor-korea-motif-f-lucu-hijau-100',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/11/a20565f1-8b79-4e6d-87b6-c954aa069ce2.jpg',
    },
    {

        title: 'Raket Badminton Yonex Astrox 22 RX',
        price: 1845000,
        url: 'https://www.tokopedia.com/sportscenter/new-color-raket-badminton-yonex-astrox-22-rx-black-gold-2f5',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/12/6/e6d9fcec-7b40-41fe-90e0-8b704bf0f115.jpg',
    },
    {

        title: 'Motif Board Cream baju anak',
        price: 160000,
        url: 'https://www.tokopedia.com/littlemomoko/setelan-anak-bayi-motif-board-cream-baju-anak-0-4-tahun-premium-cream-xl',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/11/7/15733cfd-a24b-4443-a025-7e330adbeaf0.jpg',
    },
    {

        title: 'Bola Bulu Tangkis gasalle',
        price: 40000,
        url: 'https://www.tokopedia.com/monangjaya/bola-bulu-tangkis-gasalle',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/27/dc1a26dc-9e8b-4a3b-a0c8-dc95c13f936e.jpg',
    },
    {

        title: 'Bola Tenis Import isi 3',
        price: 36500,
        url: 'https://www.tokopedia.com/toi-store/bola-kasti-bola-tenis-import-isi-3',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/26/dbf8678c-0f10-4973-bee1-830799ecbb63.jpg',
    },
    {

        title: 'SONY WF-1000XM4 Black Noise',
        price: 2799000,
        url: 'https://www.tokopedia.com/sony-audio/sony-wf-1000xm4-black-noise-canceling-truly-wireless-wf1000xm4',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/9/ec910473-573b-4cca-a14c-cfdbaf68acbe.jpg',
    },
    {

        title: 'Kacamata Progresif Blueray Photocromic',
        price: 325000,
        url: 'https://www.tokopedia.com/andeskor81/kacamata-progresif-blueray-photocromic-bluecromic-prog-blueray-atas-ada-isi-b41d7',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/3/20/b840e622-323c-4383-9263-e4d44b66f018.jpg',
    },
    {

        title: 'Sepatu Anak NIKE DUNK',
        price: 2199000,
        url: 'https://www.tokopedia.com/sneakersflash/sepatu-anak-nike-dunk-low-pink-foam-red-white-gs-cw1590601-36-5',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/15/1ad3c06f-9b3a-4444-8c92-72bb19c744bc.jpg',
    },
    {

        title: 'Sepeda Motor Listrik - Viar NX',
        price: 12620000,
        url: 'https://www.tokopedia.com/viarmotorindonesia/sepeda-motor-listrik-viar-nx-hijau-jakarta-7be84',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/7/4/4b489b0c-09ae-416f-a1e2-9c4907b5ba77.png',
    },
    {

        title: 'Kemeja Adidas Original Graphic',
        price: 475000,
        url: 'https://www.tokopedia.com/lacoruna89/kemeja-adidas-original-graphic-monogram-allover-print-shirt-kaos-baju-m-ddc32',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/7/11/e2c264c0-6e4c-47e2-9fc3-ff7de4c7eef8.jpg',
    },
    {

        title: 'Jaket Bomber Pria Smith Berlin Origin',
        price: 239000,
        url: 'https://www.tokopedia.com/smithberlin/jaket-bomber-pria-smith-berlin-origin-series-s-black-88b4',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/6/7/a5e1ce5a-63b4-4765-b20e-2d39fa581004.jpg',
    },
    {

        title: 'Microphone Kingston Hyper X Quad Cast',
        price: 1849000,
        url: 'https://www.tokopedia.com/duniacom-srv/hyperx-quadcast-streaming-gaming-microphone-kingston-hyper-x-quad-cast',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2020/12/7/8e1482e7-42a6-4cab-91f9-82409929b50a.jpg',
    },
    {

        title: 'Cloud 3 Gaming Headset',
        price: 1280000,
        url: 'https://www.tokopedia.com/duniacom-srv/hyperx-cloud-iii-cloud-3-gaming-headset-black-c8f3a',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/6/10/9f58ef30-6ed2-4c25-84f8-3560360ea672.jpg',
    },
    {

        title: 'Logitech M220 Silent Wireless Mouse',
        price: 175000,
        url: 'https://www.tokopedia.com/logitech/fs-logitech-m220-silent-wireless-mouse-graphite',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/9/417846ff-dcb2-4cf1-bb95-ad8424628431.jpg',
    },
    {

        title: 'Cutter Mini Awan Lucu Unboxing',
        price: 3199,
        url: 'https://www.tokopedia.com/paffie-shop/cutter-mini-awan-lucu-unboxing-paket-gantungan-kunci-pisau-silet-atk',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/25/4c2d7dd8-8af4-479d-9e29-c07af3fd8f8a.jpg',
    },
    {

        title: 'Pita untuk kunci simbolis',
        price: 25000,
        url: 'https://www.tokopedia.com/dqueenflorist/pita-untuk-kunci-simbolis-gunting-pisau-pita-custom',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/8/fb57b09c-418a-484b-8607-f85ed454469f.jpg',
    },
    {

        title: 'Scrunchie Cepol Hijab',
        price: 19999,
        url: 'https://www.tokopedia.com/alyahijab32/scrunchie-cepol-hijab-anti-pusing-ikat-rambut-premium-dark-grey',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/6/29/1ad139ff-5329-4b2a-a78c-682a57fc18d1.jpg',
    },
    {

        title: 'JEPIT PITA BOW RIBBON',
        price: 52000,
        url: 'https://www.tokopedia.com/tatarambut/jepit-pita-bow-ribbon-besar-beige-hitam-jepitan-korea-rambut-korea-beige-04',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/3/8/a9226952-1639-4f17-b78d-951818d649fd.jpg',
    },
    {

        title: 'FLUFFY RABBIT HEADBAND',
        price: 26000,
        url: 'https://www.tokopedia.com/townshell/fluffy-rabbit-headband-bando-boneka-korea-lucu-bando-kelinci-rabbit-grey',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/23/96d314a3-4942-44d2-870b-d4c9edd01498.jpg',
    },
    {

        title: 'Grey Jack Box Kacamata',
        price: 22500,
        url: 'https://www.tokopedia.com/greyjack/grey-jack-box-kacamata-tempat-kacamata-hardcase-kokoh-karakter-lucu-cc5-box-lap',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/2/18/5c50585b-9c29-42ac-bae6-8513ce9de910.png',
    },
    {

        title: 'Cincin Panlandwoo Fashion Korea - Jennie',
        price: 69999,
        url: 'https://www.tokopedia.com/panlandwoo/cincin-panlandwoo-fashion-korea-jennie-gold',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/2/3/23ae875d-0026-4fae-8fd2-40ee3f5e3285.jpg',
    },
    {

        title: 'sepatu led anak perempuan',
        price: 140000,
        url: 'https://www.tokopedia.com/skaruvas/sepatu-led-anak-perempuan-islaa-import-sepatu-lampu-merah-muda-21',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/12/10/50ae9902-7c57-403a-8f92-1445c7f61c9d.jpg',
    },
    {

        title: 'Squishy Case Hp Pereda Stress',
        price: 3000,
        url: 'https://www.tokopedia.com/rokeet-official/squishy-doll-mini-animal-lovely-cute-squishy-case-hp-pereda-stress-random',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/hDjmkQ/2021/12/6/1e1ce568-115f-42f0-9204-be9b008d13b6.jpg',
    },
    {

        title: 'Squishy Paket Super Murah',
        price: 145000,
        url: 'https://www.tokopedia.com/shimeland/squishy-paket-super-murah-meriah-geser-gambar-utk-pilihan',
        thumbnail: 'https://images.tokopedia.net/img/cache/900/product-1/2019/3/6/226539182/226539182_edbbfde2-c2c9-477d-83d9-68aefce43e66_1080_1080.jpg',
    },
];

module.exports = () => productData[Math.floor(Math.random() * productData.length)];
