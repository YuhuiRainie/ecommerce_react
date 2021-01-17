const DATA = {
    hats: {
        id: 1,
        title: 'Hats',
        routeName: 'hats',
        items: [
            {
                id: 1,
                name: 'Brown Brim',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2020/09/22/16007548982bfca69d2610bec9f71056cdfa7cf928_thumbnail_405x552.webp',
                price: 25
            },
            {
                id: 2,
                name: 'Blue Beanie',
                imageUrl: '//img.ltwebstatic.com/images2_pi/2019/09/02/15674112061380682638_thumbnail_405x552.webp',
                price: 18
            },
            {
                id: 3,
                name: 'Brown Cowboy',
                imageUrl: '//img.ltwebstatic.com/images2_pi/2018/08/21/15348391263465184647_thumbnail_405x552.webp',
                price: 35
            },
            {
                id: 4,
                name: 'Grey Brim',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2020/01/13/157890340297d7382bb377b7d76cdadf9b313c2d1b_thumbnail_405x552.webp',
                price: 25
            },
            {
                id: 5,
                name: 'Green Beanie',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2020/09/15/1600154435ce3de83f7e1020680743be2e5921b8f2_thumbnail_405x552.webp',
                price: 18
            },
            {
                id: 6,
                name: 'Palm Tree Cap',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2020/12/30/16093015800a68383d37c7a27cc16bef1b2a24d748_thumbnail_405x552.jpg',
                price: 14
            },
            {
                id: 7,
                name: 'Red Beanie',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2020/12/16/1608090265f524aa067ead4e9f18bfbc6533c7b32c_thumbnail_405x552.jpg',
                price: 18
            },
            {
                id: 8,
                name: 'Wolf Cap',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2020/09/15/16001499111d6af199ab1ca9ddda0e61c7bac1e826_thumbnail_405x552.jpg',
                price: 14
            },
            {
                id: 9,
                name: 'Blue Snapback',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2020/08/25/1598339841852030aacc95743a3d860e80d0d2a384_thumbnail_405x552.webp',
                price: 16
            }
        ]
    },
    sneakers: {
        id: 2,
        title: 'Sneakers',
        routeName: 'sneakers',
        items: [
            {
                id: 10,
                name: 'Adidas NMD',
                imageUrl: '//img.ltwebstatic.com/images2_pi/2019/07/04/15622315731302502977_thumbnail_405x552.webp',
                price: 220
            },
            {
                id: 11,
                name: 'Adidas Yeezy',
                imageUrl: '//img.ltwebstatic.com/images2_pi/2019/08/20/1566296487626153957_thumbnail_405x552.webp',
                price: 280
            },
            {
                id: 12,
                name: 'Black Converse',
                imageUrl: '//img.ltwebstatic.com/images2_pi/2019/07/31/15645647183844631223_thumbnail_405x552.webp',
                price: 110
            },
            {
                id: 13,
                name: 'Nike White AirForce',
                imageUrl: '//img.ltwebstatic.com/images2_pi/2019/09/18/15687913621072098997_thumbnail_405x552.webp',
                price: 160
            },
            {
                id: 14,
                name: 'Nike Red High Tops',
                imageUrl: '//img.ltwebstatic.com/images2_pi/2019/07/25/156404577892730244_thumbnail_405x552.webp',
                price: 160
            },
            {
                id: 15,
                name: 'Nike Brown High Tops',
                imageUrl: '//img.ltwebstatic.com/images2_pi/2019/07/26/15641258881397389918_thumbnail_405x552.webp',
                price: 160
            },
            {
                id: 16,
                name: 'High Heels',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2021/01/12/1610431743a254f4e72e92c11eb79bf9a3dc7742e8_thumbnail_405x552.jpg',
                price: 190
            },
            {
                id: 17,
                name: 'Timberlands',
                imageUrl: '//img.ltwebstatic.com/images2_pi/2019/05/16/15579716402813803956_thumbnail_405x552.webp',
                price: 200
            }
        ]
    },
    jackets: {
        id: 3,
        title: 'Jackets',
        routeName: 'jackets',
        items: [
            {
                id: 18,
                name: 'Black Jean Shearling',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2020/11/24/1606194254d196c51a02f67ac39aaca9259512d29e_thumbnail_405x552.webp',
                price: 125
            },
            {
                id: 19,
                name: 'Blue Jean Jacket',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2020/08/12/159719653211b9ad8e3a555c23b74260521b1871bf_thumbnail_405x552.webp',
                price: 90
            },
            {
                id: 20,
                name: 'Grey Jean Jacket',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2020/12/30/16093010260deed84a3f8e711d7f94431c8c0ef130_thumbnail_405x552.webp',
                price: 90
            },
            {
                id: 21,
                name: 'Brown Shearling',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2020/09/26/1601091200cdffdecef7be427b72a6884e353724ce_thumbnail_405x552.webp',
                price: 165
            },
            {
                id: 22,
                name: 'Tan Trench',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2020/09/08/15995739215a063af16fc4e9232214873c07560a6b_thumbnail_405x552.jpg',
                price: 185
            }
        ]
    },
    womens: {
        id: 4,
        title: 'Womens',
        routeName: 'womens',
        items: [
            {
                id: 23,
                name: 'Blue Tanktop',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2021/01/06/1609907945f3b7ce4d72a86f05caca645f16d2ef30_thumbnail_405x552.webp',
                price: 25
            },
            {
                id: 24,
                name: 'Floral Blouse',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2021/01/05/1609828133aace1c8f9872ddbee58496377ac097e0_thumbnail_405x552.jpg',
                price: 20
            },
            {
                id: 25,
                name: 'Floral Dress',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2021/01/15/1610704435088ab311c5dc04c51d73ce3970b8539c_thumbnail_405x552.jpg',
                price: 80
            },
            {
                id: 26,
                name: 'Red Dots Dress',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2020/12/21/1608560998899be08d1664e97663ad657f99c9e7fd_thumbnail_405x552.jpg',
                price: 80
            },
            {
                id: 27,
                name: 'Striped Sweater',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2020/11/27/160644954538b8f9a79e8d18f5b42439aa084cf47a_thumbnail_405x552.webp',
                price: 45
            },
            {
                id: 28,
                name: 'Yellow Track Suit',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2020/12/04/160705075300ab4d157dba4f801977ede89cfdf99c_thumbnail_405x552.webp',
                price: 135
            },
            {
                id: 29,
                name: 'White Blouse',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2021/01/06/1609900233789c5cb192cbddee734e7b948486e6e1_thumbnail_405x552.jpg',
                price: 20
            }
        ]
    },
    mens: {
        id: 5,
        title: 'Mens',
        routeName: 'mens',
        items: [
            {
                id: 30,
                name: 'Camo Down Vest',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2020/12/17/1608191555ab585116fb1b3f892150e679c960f03e_thumbnail_405x552.webp',
                price: 325
            },
            {
                id: 31,
                name: 'Floral T-shirt',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2020/12/11/1607696536d2318bcf4bb61139e94f44bf61f57e32_thumbnail_405x552.jpg',
                price: 20
            },
            {
                id: 32,
                name: 'Black & White Longsleeve',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2021/01/12/1610427555cf024c9124cdf97e07bc487396bdea40_thumbnail_405x552.jpg',
                price: 25
            },
            {
                id: 33,
                name: 'Pink T-shirt',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2020/12/29/1609225161a9fa8b794890fdef2f804ca501457091_thumbnail_405x552.jpg',
                price: 25
            },
            {
                id: 34,
                name: 'Jean Long Sleeve',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2020/12/21/16085303117d0e0d0af3afbf288e33c23de628888b_thumbnail_405x552.jpg',
                price: 40
            },
            {
                id: 35,
                name: 'Burgundy T-shirt',
                imageUrl: '//img.ltwebstatic.com/images3_pi/2020/12/16/1608089600e68418a150a93556b2f53fc857e4b0ef_thumbnail_405x552.webp',
                price: 25
            }
        ]
    }
};
 export default DATA;
