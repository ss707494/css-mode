<template>
  <Mode id="app"
  >
    <header>
      <HeaderTop>
        <strong>sound cloud</strong>
        <section>
          <button>sign in</button>
          <TopOrangeBtn>create account</TopOrangeBtn>
          <span>for create</span>
        </section>
      </HeaderTop>
      <HeaderContent>
        <h5>Connect on SoundCloud</h5>
        <div>
          Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the
          world.
        </div>
        <button>Sign up for free</button>
      </HeaderContent>
    </header>
    <Main>
      <MainTop>
        <input
            type="text"/>
        <i>
          <button></button>
        </i>
        <!--<span>or</span>-->
        <!--<button>Upload your own</button>-->
      </MainTop>
      <MainTitle>Hear what’s trending for free in the SoundCloud community</MainTitle>
      <MainList>
        <MainListItem v-for="item in 20"
                      :key="item"
        >
          <img :src="temImg[parseInt(Math.random() * (temImg.length))]"
               alt="">
          <div>ft A Boogie wit</div>
          <span>6IX9INE</span>
        </MainListItem>
      </MainList>
    </Main>
  </Mode>
</template>

<script>
import CssObj from './StyledComponentsCss'

export default {
  name: 'app',
  components: {
    ...CssObj
  },
  data() {
    return {
      temImg: [
        'https://i1.sndcdn.com/artworks-000447592005-fdzlud-t200x200.jpg',
        'https://i1.sndcdn.com/artworks-000126562483-prqgma-t200x200.jpg',
        'https://i1.sndcdn.com/artworks-000446564331-01hoea-t200x200.jpg',
        'https://i1.sndcdn.com/artworks-000451832751-v52ypo-t200x200.jpg',
      ]
    }
  },
}
</script>
