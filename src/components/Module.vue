<template>
  <div id="app"
       :class="$style.mode">
    <header :class="$style.header">
      <header :class="$style.top">
        <strong>sound cloud</strong>
        <section>
          <button>sign in</button>
          <button :class="$style.btn__orange">create account</button>
          <span>for create</span>
        </section>
      </header>
      <section :class="$style.content">
        <h5>Connect on SoundCloud</h5>
        <div>
          Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the
          world.
        </div>
        <button>Sign up for free</button>
      </section>
    </header>
    <main :class="$style.main">
      <header :class="$style.top">
        <input type="text"/>
        <i>
          <button></button>
        </i>
        <span>or</span>
        <button>Upload your own</button>
      </header>
      <div :class="$style.title">Hear what’s trending for free in the SoundCloud community</div>
      <section :class="$style.list">
              <span v-for="item in 20"
                    :key="item"
                    :class="$style.item"
              >
                  <img src="https://i1.sndcdn.com/artworks-000447592005-fdzlud-t200x200.jpg"
                       alt="">
                  <div>ft A Boogie wit</div>
                  <span>6IX9INE</span>
              </span>
      </section>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style module
       lang="scss">
  :global {
    * {
      margin: 0;
      padding: 0;
    }
  }
  $orange: #f50;
  %orange-btn {
    color: #fff;
    background: $orange;
    border: 0;
    border-radius: 4px;
    height: 40px;
  }
  .mode {
    width: 1200px;
    margin: 0 auto;
    > header {
      height: 450px;
      background: url("https://a-v2.sndcdn.com/assets/images/home/hp_image-6155d6b.jpg") no-repeat;
      color: #fff;
    }
    > main {
    }
  }
  .header {
    .top {
      height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 20px 90px;
      > strong {
        font-size: 20px;
      }
      > section {
        > button {
          color: #fff;
          background: transparent;
          border: 1px solid #fff;
          border-radius: 4px;
          padding: 2px 10px;
          height: 30px;
          margin-right: 10px;
        }
        .btn__orange {
          @extend %orange-btn;
          height: 30px;
        }
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      > h5 {
        font-size: 32px;
        font-weight: normal;
        margin-bottom: 20px;
      }
      > div {
        max-width: 530px;
        text-align: center;
        margin-bottom: 30px;
        line-height: 30px;
      }
      > button {
        @extend %orange-btn;
        padding: 5px 20px;
      }
    }
  }
  .main {
    .top {
      text-align: center;
      margin-top: 40px;
      > input {
        height: 46px;
        background: #f2f2f2;
        padding: 0 16px;
        color: #666;
        border: 0;
        border-radius: 4px;
        width: 600px;
      }
      > span {
        margin: 0 10px;
      }
      > button {
        @extend %orange-btn;
        padding: 5px 20px;
        height: 46px;
      }
    }
    .title {
      text-align: center;
      margin: 30px auto;
      font-size: 24px;
    }
    .list {
      margin: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      display: grid;
      grid-template-columns: repeat(auto-fit, 15%);
      .item {
        flex: 0 0 15%;
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
        > img {
          width: 100%;
        }
        > div {
          color: #333;
          font-size: 14px;
          line-height: 28px;
        }
        > span {
          color: #999;
          font-size: 12px;
        }
      }
    }
  }
</style>
