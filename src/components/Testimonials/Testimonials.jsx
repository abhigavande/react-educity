import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'





const Testimonials = () => {

  const slider = useRef();
  let tx = 0;


  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }


  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div><h3>宮崎駿</h3>
                  <span>日本、大阪</span>
                </div>
              </div>
              <p>アビのサービスはまるで魔法のよう！ストレスフリーで、たくさんの知識を得ることができました。まるで日本の天才、羽生結弦選手のように、すべてをスムーズにこなせる気分です！ありがとうございます！</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div><h3>井川遥</h3>
                  <span>日本、東京</span>
                </div>
              </div>
              <p> アビのサポートで、知識の海を泳ぐことができました！これで僕も松本人志さんのように、面白いトークができるかも？ありがとうございました！本当に本当にありがとうございます。時間があれば会いましょう</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div><h3>石原さとみ</h3>
                  <span>名古屋</span>
                </div>
              </div>
              <p> アビのサービスは、まるで佐藤健さんが演じるヒーローのように頼りになりました！ストレスゼロで、知識が爆発的に増えました。今ならきっと、佐藤健さんのようにクールに決められる気がします！時間があれば会いましょう</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div><h3>Keiko Kitagawa</h3>
                  <span>群馬</span>
                </div>
              </div>
              <p> アビのおかげで、知識を得るのがこんなに楽しいとは思いませんでした！まるで堺雅人さんの演技のように、完璧にできた気分です。これで私も名探偵の仲間入りかも。時間があれば会いましょう。またね。bye bye</p>
            </div>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Testimonials
