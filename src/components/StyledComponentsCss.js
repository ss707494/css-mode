import styled, { injectGlobal } from 'vue-styled-components'

injectGlobal`
    * {
      margin: 0;
      padding: 0;
    }
`

const orange = `#f50`
const orangeBtn = `
  color: #fff;
  background: ${orange};
  border: 0;
  border-radius: 4px;
  height: 40px;
`
const BaseOrangeBtn = styled.button`
  && {
    ${orangeBtn}
  }
`

const outObj = {
  Mode: styled('div')`
    width: 1200px;
    margin: 0 auto;
    > header {
      height: ${props => props.height || 450}px;
      background: url("https://a-v2.sndcdn.com/assets/images/home/hp_image-6155d6b.jpg") no-repeat;
      color: #fff;
    }
  `,
  HeaderTop: styled.div` 
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px 90px;
    > strong {
      font-size: 20px;
    }
    > section > button {
      color: #fff;
      background: transparent;
      border: 1px solid #fff;
      border-radius: 4px;
      padding: 2px 10px;
      height: 30px;
      margin-right: 10px;
    }
  `,
  TopOrangeBtn: styled(BaseOrangeBtn)`
    &&& {
        padding: 2px 10px;
        margin-right: 10px;
        height: 30px;
    }
  `,
  HeaderContent: styled.section`
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
      ${orangeBtn};
      padding: 5px 20px;
    }
  `,
  Main: styled.main``,
  MainTop: styled.header`
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
      ${orangeBtn};
      padding: 5px 20px;
      height: 46px;
    }
  `,
  MainTitle: styled.div`
    text-align: center;
    margin: 30px auto;
    font-size: 24px;
  `,
  MainList: styled.section`
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    display: grid;
    grid-template-columns: repeat(auto-fit, 15%);
    
  `,
  MainListItem: styled.span`
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
  `
}


export default outObj