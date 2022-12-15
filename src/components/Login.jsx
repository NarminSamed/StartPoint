import React from 'react'
import gymVideo from '../images/login_video.mp4'
import loginImg from '../images/gym_photo.png'

const Login = () => {

  return (
    <>
      <div className="login_container" style={{
        background: `url(${loginImg})`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        backgroundSize: 'cover'
      }}>
        {/* <div className="login_video">
         <video src={gymVideo} width="750" height="500" controls loop muted autoPlay></video>
      </div> */}
        <div className="login_card_body">
          <h2>StartPoint-ə daxil ol</h2>
          <form action="" id='loginform'>
            <div className="login_form-group">
              <label htmlFor="login-form-number">Telefon nömrəsi</label>
              <div className='form_phone input_flex'>
                <input type="text" className='phone_code-disabled' id='phone_code' placeholder='+994' disabled />
                <input type="tel" id='number' className='form_input' name='number' placeholder='nömrə' />
              </div>
            </div>
            <div className="login_form-group">
              <label htmlFor="password">Şifrə</label>
              <div className='form_phone input_flex'>
                <input type="password" id='password' className='form_input' name='number' placeholder='şifrə' />
              </div>
            </div>
            <button type='submit' className='login__btn'>Partnyor girişi</button>
          </form>
          <h5>Hələ StartPoint istifadə etmirsiniz? <a href="#" className='login_link'> İndi partnyor olun</a></h5>
        </div>
        {/* <div className="login_img">
        <img src={loginImg} alt="" />
      </div> */}

      </div>


    </>
  )
}

export default Login