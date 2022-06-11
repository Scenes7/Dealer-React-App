module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: theme => ({
        'poker-chips': "url('https://www.google.com/search?q=poker+table+with+chips&tbm=isch&ved=2ahUKEwi57PWfwfDyAhVxZTUKHdubBTcQ2-cCegQIABAA&oq=poker+table+with+chips&gs_lcp=CgNpbWcQAzIFCAAQgARQzxRYnyFg3iloAHAAeACAAVuIAaABkgEBMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=Z0Q5YfmcA_HK1QHbt5a4Aw&bih=722&biw=1536#imgrc=EXksHQBynhSiAM')",
        'casino': "url('https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzaW5vfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80')",
        'casinobg': "url('https://c0.wallpaperflare.com/preview/765/743/691/poker-poker-chips-cards-play.jpg')",
        'casinoo': "url('https://media.istockphoto.com/photos/man-plays-poker-in-the-casino-picture-id1195432138?k=20&m=1195432138&s=612x612&w=0&h=063nXFCijtbbIr2nTSNhSIFJBRGbi5c0MKboL3irNEE=')",
        'ccasino': "url('https://images.pexels.com/photos/3279691/pexels-photo-3279691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
