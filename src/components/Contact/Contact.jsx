import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'



const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b771ea24-82f9-4ebf-8065-ff414b2d9b0f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>メッセージを送る <img src={msg_icon} alt="" /></h3>
        <p>こちらのサービスをご利用いただき、誠にありがとうございます。アビ様が近日中にご連絡いたします。できる限りサポートし、皆さまの旅がストレスなく楽しいものとなるよう努めます。</p>
        <ul>
          <li> <img src={mail_icon} alt="" /> abhigavande2804@gmail.com</li>
          <li> <img src={phone_icon} alt="" />1234567</li>
          <li> <img src={location_icon} alt="" />北砂5丁目5-1004,江東区</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>お名前</label>
          <input type="text" name='name' placeholder='お名前を入力してください' required />
          <label>電話番号</label>
          <input type="tel" name='phone' placeholder='携帯番号を入力してください' required />
          <label>ここにメッセージを書いてください</label>
          <textarea name="message" rows="6" placeholder='メッセージを入力してください' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>

    </div>
  )
}

export default Contact
