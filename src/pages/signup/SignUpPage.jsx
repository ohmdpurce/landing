import React from 'react'
import ReactPlayer from 'react-player';
import Logo from '../../assets/images/logo.png'
// import YLGLogo from './assets/images/ylg-logo.png'
import LogoMT5Full from '../../assets/images/mt5-metatrader.png'
import Mobile from '../../assets/images/mobile.png'
import Store from '../../assets/images/store.png'
import PhoneIcon from '../../assets/images/icon-phone.png'
import FxFutures from '../../assets/images/fxfutures.png'
// import VideoImg from '../../assets/images/video.png'
import VideoPath from '../../assets/video/MT5 Mobile_Low.mp4'
import Why1 from '../../assets/images/why/1.png'
import Why2 from '../../assets/images/why/2.png'
import Why3 from '../../assets/images/why/3.png'
import Why4 from '../../assets/images/why/4.png'
import Why5 from '../../assets/images/why/5.png'
import Why6 from '../../assets/images/why/6.png'
import Aword1 from '../../assets/images/awards/1.png'
import Aword2 from '../../assets/images/awards/2.png'
import Aword3 from '../../assets/images/awards/3.png'
import Aword4 from '../../assets/images/awards/4.png'
import Aword5 from '../../assets/images/awards/5.png'
import Aword6 from '../../assets/images/awards/6.png'
import Aword7 from '../../assets/images/awards/7.png'
import Aword8 from '../../assets/images/awards/8.png'
import Aword9 from '../../assets/images/awards/9.png'
import Aword10 from '../../assets/images/awards/10.png'
import Aword11 from '../../assets/images/awards/11.png'
import Aword12 from '../../assets/images/awards/12.png'
import Aword13 from '../../assets/images/awards/13.png'
import Aword14 from '../../assets/images/awards/14.png'
import Aword15 from '../../assets/images/awards/15.png'
import Aword16 from '../../assets/images/awards/16.png'
import Aword17 from '../../assets/images/awards/17.png'
import Aword18 from '../../assets/images/awards/18.png'
import Aword19 from '../../assets/images/awards/19.png'
import Aword20 from '../../assets/images/awards/20.png'
import Aword21 from '../../assets/images/awards/21.png'
import Aword22 from '../../assets/images/awards/22.png'
import Aword23 from '../../assets/images/awards/23.png'

import PictureSlide from '../../components/PictureSlide'
import '../../styles/signup/SignUp.css'
import '../../styles/SlideShow.css'
function App() {
    const [activeButton, setActiveButton] = React.useState('individual');

    const handleButtonClick = (type) => {
        setActiveButton(type);
        console.log(type)
        // ตรงนี้คุณสามารถเพิ่มโค้ดเพื่อดำเนินการเพิ่มเติมตามประเภทที่ถูกคลิกได้
    };
    const [isChecked, setIsChecked] = React.useState({
        terms: false,
        age: false,
        privacy: false,
        riskDisclosure: false,
        durableMedium: false,
        personalData: false
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setIsChecked(prevState => ({ ...prevState, [name]: checked }));
    };

    const handleSubmit = () => {
        if (
            isChecked.terms &&
            isChecked.age &&
            isChecked.privacy &&
            isChecked.riskDisclosure &&
            isChecked.durableMedium &&
            isChecked.personalData
        ) {
            console.log('All checkboxes are checked. Submitting form...');
        } else {
            console.log('Please check all checkboxes before submitting.');
        }
    };

    const images = [
        Aword1,
        Aword2,
        Aword3,
        Aword4,
        Aword5,
        Aword6,
        Aword7,
        Aword8,
        Aword9,
        Aword10,
        Aword11,
        Aword12,
        Aword13,
        Aword14,
        Aword15,
        Aword16,
        Aword17,
        Aword18,
        Aword19,
        Aword20,
        Aword21,
        Aword22,
        Aword23,

        // เพิ่มรูปภาพตามต้องการ
    ];
    return (
        <main className='container-fluid'>
            <div className='main-page'>
                <div className='image-logo mt-3 d-flex'>
                    <img src={Logo} style={{ maxWidth: '170px', maxHeight: 'auto', width: '50vw', height: '100%' }} alt="Logo" />
                </div>
                <div className='head-ylg mt-2 lh-sm text-center'>
                    <div className="title-ylg">
                        YLG DEVELOPMENT
                    </div>
                    <div className='subtitle-ylg'>
                        เทรดทอง <span className='subtitle-ylg-in'>Gold Spot</span>
                    </div>
                </div>

                <div>
                    <div className='text-center'>
                        <div className='subtitle-ylg-why'>ทำไมต้องเลือก <span className='subtitle-ylg-why-in'>YLG BULLION</span></div>
                    </div>
                    <div className="why-ylg-img mt-2">
                        <div className="row justify-content-center" >
                            <div className="mt-1 mb-1 col-md-4 col-lg-4 col-sm-6 col-auto">
                                <div className="gallery-item">
                                    <img src={Why1} alt="รูปที่ 1" />
                                    <div className="caption">มาตราฐานระดับ <br />loco london gold</div>
                                </div>
                            </div>
                            <div className="mt-1 mb-1 col-md-4 col-lg-4 col-sm-6 col-auto">
                                <div className="gallery-item">
                                    <img src={Why2} alt="รูปที่ 2" />
                                    <div className="caption">บริการทุกวัน<br />ตลอด 24 ชั่วโมง</div>
                                </div>
                            </div>
                            <div className="mt-1 mb-1 col-md-4 col-lg-4 col-sm-6 col-auto">
                                <div className="gallery-item">
                                    <img src={Why3} alt="รูปที่ 3" />
                                    <div className="caption">เข้าสู่ผลิตภัณฑ์<br />ที่หลากหลาย</div>
                                </div>
                            </div>
                            <div className="mt-1 mb-1 col-md-4 col-lg-4 col-sm-6 col-auto">
                                <div className="gallery-item">
                                    <img src={Why4} alt="รูปที่ 4" />
                                    <div className="caption">ซื้อขาย margin<br />ทองคำ และเงิน<br />ในอัตราแข่งขัน</div>
                                </div>
                            </div>
                            <div className="mt-1 mb-1 col-md-4 col-lg-4 col-sm-6 col-auto">
                                <div className="gallery-item">
                                    <img src={Why5} alt="รูปที่ 5" />
                                    <div className="caption">สามารถป้อนความเสี่ยง<br />1 กรัม หรือ 1 ออนซ์<br />ต่อการซื้อจายได้</div>
                                </div>
                            </div>
                            <div className="mt-1 mb-1 col-md-4 col-lg-4 col-sm-6 col-auto">
                                <div className="gallery-item">
                                    <img src={Why6} alt="รูปที่ 6" />
                                    <div className="caption">บริการใน แพรตฟอร์ม<br />ออนไลน์ เพื่อตรง<br />เป้าหมายมากขึ้น</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <div className='text-center'>
                        <div className='ylg-awards'>&nbsp;Trusted in Our Services &nbsp;
                            <span className='subtitle-ylg-awards'>&quot;Quality Awards&quot;</span></div>
                    </div>
                </div>

                <div className="text-center">
                    <PictureSlide images={images} />
                </div>

                <div className='mt-3'>
                    <img src={LogoMT5Full} style={{ maxWidth: '350px', maxHeight: 'auto', width: '100%', height: '100%' }} alt="LogoMT5" />
                </div>

                <div className='position-relative' style={{ marginBottom: '80px' }}>
                    <img src={Mobile} style={{ maxWidth: '480px', maxHeight: 'auto', width: '100%', height: '100%' }} alt="Mobile" />
                    <div className='position-absolute text-center' style={{ bottom: "-75px", width: '100%' }}>
                        <img src={Store} style={{ maxWidth: '400px', width: '100%', height: '100%' }} alt="Store" />
                    </div>
                </div>

                <div className='des-phone'>
                    <img src={PhoneIcon} alt="PhoneIcon" />
                    02-687 9888 EXT. 615, 625
                </div>
                <div className='product'>
                    <div className='mt-4 title-product'>
                        PRODUCT
                    </div>
                    <div className='mt-3'>
                        <div className='text-center title-product-sub'>
                            <img style={{ maxWidth: '200px', width: '40vw', height: '100%' }} src={FxFutures} alt="FxFutures" />
                        </div>
                    </div>
                </div>
                <div className='mt-5 how-to-trade'>
                    <div className='title-how-to-trade'>
                        HOW TO TRADE
                    </div>
                    <div className='title-how-to-trade-sub' >
                        {/* <img src={VideoImg} style={{ maxWidth: '700px', width: '80vw', height: '100%' }} alt="VideoImg" /> */}
                        <ReactPlayer
                            url={VideoPath} // กำหนด URL ของวิดีโอที่คุณต้องการเล่น
                            controls // แสดงตัวควบคุมของตัวเล่นวิดีโอ (play, pause, volume, etc.)
                            width="auto" // กำหนดความกว้างของตัวเล่นวิดีโอ
                            height="auto" // กำหนดความสูงของตัวเล่นวิดีโอ
                        />
                    </div>
                </div>
                <div className='d-flex flex-column justify-content-center'>
                    <button className='mt-5 button-mt5-v1 '>
                        MT5 Demo
                    </button>
                    <button className='mt-4 button-mt5-v1'>
                        MT5
                    </button>
                    <button className='mt-4 button-mt5-v2'>
                        Create Account
                    </button>
                    <button className='mt-4 button-mt5-v2'>
                        Download info.
                    </button>
                </div>
                <div className='open-account mt-4' >
                    <div className='mt-4 text-center'>
                        <div className='open-account-title'>Open An Account</div>
                    </div>
                    <div className='mt-2 text-center'>
                        <button
                            id='individual'
                            className={activeButton === 'individual' ? 'active' : ''}
                            onClick={() => handleButtonClick('individual')}
                        >
                            Individual Account
                        </button>
                        <button
                            id='corporate'
                            className={activeButton === 'corporate' ? 'active' : ''}
                            onClick={() => handleButtonClick('corporate')}
                        >
                            Corporate Account
                        </button>
                    </div>

                    {activeButton === 'individual' ?
                        <div className='information-register d-flex justify-content-center mb-4' >
                            <div className='' >
                                <div className="row align-items-start mt-2">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="mt-2">
                                            <label htmlFor="InputName" className="form-label">Name*</label>
                                            <input type="text" className="form-control" id="InputName" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="mt-2">
                                            <label htmlFor="InputSurname" className="form-label">Surname*</label>
                                            <input type="text" className="form-control" id="InputSurname" placeholder="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row align-items-start mt-3">
                                    <div className="">
                                        <label htmlFor="InputEmail" className="form-label">Email* <span>&nbsp;&nbsp;Your email will also be your username</span></label>
                                        <input type="email" className="form-control" id="InputEmail" placeholder="" />
                                    </div>
                                </div>

                                <div className="row align-items-start mt-3">
                                    <div className="">
                                        <label htmlFor="InputMobileNumber" className="form-label">Mobile Number*</label>
                                        <input type="text" className="form-control" id="InputMobileNumber" placeholder="" />
                                    </div>
                                </div>

                                <div className="row align-items-start mt-3">
                                    <div className="">
                                        <label htmlFor="InputVerificationCode" className="form-label">Verification Code*</label>
                                        <div className="input-group">
                                            <button id="sendCodeButton" className="btn-sendcode" onClick="sendVerificationCode()">Send Code</button>
                                            <input type="text" className="form-control" id="InputVerificationCode" placeholder="Verification Code*" />
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="row align-items-start mt-3">
                                    <div className="">
                                        <label htmlFor="InputMobileNumber" className="form-label">Mobile Number*</label>
                                        <input type="text" className="form-control" id="InputMobileNumber" placeholder="" />
                                    </div>
                                </div> */}

                                <div className="row align-items-start mt-3">
                                    <div className="">
                                        <label htmlFor="InputNationality" className="form-label">Nationality*</label>
                                        <select className="form-select" id="InputNationality" aria-label="Please Select">
                                            <option selected disabled>Please Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row align-items-start mt-3">
                                    <div className="col-md-6 col-sm-12 mt-2">
                                        <div className="">
                                            <label htmlFor="InputTradingAccountType" className="form-label">Trading Account Type*</label>
                                            {/* <input type="text" className="form-control" id="InputTradingAccountType" placeholder="Please Select" /> */}
                                            <select className="form-select" id="InputTradingAccountType" aria-label="Please Select">
                                                <option selected disabled>Please Select</option>
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12  mt-2">
                                        <div className="">
                                            <label htmlFor="InputTradingAccountLeverage" className="form-label">Trading Account Leverage*</label>
                                            {/* <input type="text" className="form-control" id="InputTradingAccountLeverage" placeholder="Please Select" /> */}
                                            <select className="form-select" id="InputTradingAccountLeverage" aria-label="Please Select">
                                                <option selected disabled>Please Select</option>
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 mt-2">
                                        <div className="">
                                            <label htmlFor="InputTradingAccountCurrency" className="form-label">Trading Account Currency*</label>
                                            {/* <input type="text" className="form-control" id="InputTradingAccountCurrency" placeholder="USD" /> */}
                                            <select className="form-select" id="InputTradingAccountCurrency" aria-label="Please Select">
                                                <option selected disabled>Please Select</option>
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="row align-items-start mt-3">
                                    <div className="col-md-6 col-sm-12 mt-2">
                                        <div className="">
                                            <label htmlFor="InputPassword" className="form-label">Password*</label>
                                            <input type="password" className="form-control" id="InputPassword" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 mt-2">
                                        <div className="">
                                            <label htmlFor="InputConfirmPassword" className="form-label">Confirm Password*</label>
                                            <input type="password" className="form-control" id="InputConfirmPassword" placeholder="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        : <div className='information-register d-flex justify-content-center mb-4' >
                            <div className='' >

                                <div className="row align-items-start mt-3">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="mt-2">
                                            <label htmlFor="InputCompanyNames" className="form-label">Company Names*</label>
                                            <input type="text" className="form-control" id="InputCompanyNames" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="mt-2">
                                            <label htmlFor="InputCompanyType" className="form-label">Company type*</label>
                                            <input type="text" className="form-control" id="InputCompanyType" placeholder="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row align-items-start mt-3">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="mt-2">
                                            <label htmlFor="InputCountryOfIncorporation" className="form-label">Country of incorporation</label>
                                            <input type="text" className="form-control" id="InputCountryOfIncorporation" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="mt-2">
                                            <label htmlFor="InputVerificationCode" className="form-label">Verification Code*</label>
                                            <div className="input-group">
                                                <button id="sendCodeButton" className="btn-sendcode" onClick="sendVerificationCode()">Send Code</button>
                                                <input type="text" className="form-control" id="InputVerificationCode" placeholder="Verification Code*" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row align-items-start mt-3">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="mt-2">
                                            <label htmlFor="InputEmail" className="form-label">Email*</label>
                                            <input type="email" className="form-control" id="InputEmail" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="mt-2">
                                            <label htmlFor="InputDesignation" className="form-label">Designation</label>
                                            <input type="text" className="form-control" id="InputDesignation" placeholder="" />
                                        </div>
                                    </div>
                                </div>


                                <div className="row align-items-start mt-3">
                                    <div className="col-md-6 col-sm-12 mt-2">
                                        <div className="">
                                            <label htmlFor="InputTradingAccountType" className="form-label">Trading Account Type*</label>
                                            {/* <input type="text" className="form-control" id="InputTradingAccountType" placeholder="Please Select" /> */}
                                            <select className="form-select" id="InputTradingAccountType" aria-label="Please Select">
                                                <option selected disabled>Please Select</option>
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12  mt-2">
                                        <div className="">
                                            <label htmlFor="InputTradingAccountLeverage" className="form-label">Trading Account Leverage*</label>
                                            {/* <input type="text" className="form-control" id="InputTradingAccountLeverage" placeholder="Please Select" /> */}
                                            <select className="form-select" id="InputTradingAccountLeverage" aria-label="Please Select">
                                                <option selected disabled>Please Select</option>
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 mt-2">
                                        <div className="">
                                            <label htmlFor="InputTradingAccountCurrency" className="form-label">Trading Account Currency*</label>
                                            {/* <input type="text" className="form-control" id="InputTradingAccountCurrency" placeholder="USD" /> */}
                                            <select className="form-select" id="InputTradingAccountCurrency" aria-label="Please Select">
                                                <option selected disabled>Please Select</option>
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="row align-items-start mt-3">
                                    <div className="col-md-6 col-sm-12 mt-2">
                                        <div className="">
                                            <label htmlFor="InputPassword" className="form-label">Password*</label>
                                            <input type="password" className="form-control" id="InputPassword" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 mt-2">
                                        <div className="">
                                            <label htmlFor="InputConfirmPassword" className="form-label">Confirm Password*</label>
                                            <input type="password" className="form-control" id="InputConfirmPassword" placeholder="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className='confirm-check d-flex flex-column'>
                        <label className=''>

                            <input
                                type="checkbox"
                                name="terms"
                                checked={isChecked.terms}
                                onChange={handleCheckboxChange}
                            />
                            <span className="checkmark"></span>
                            I confirm that I&apos;ve read the <u>Teams and Condition</u>

                        </label>
                        {/* <br /> */}
                        <label className=''>
                            <input
                                type="checkbox"
                                name="age"
                                checked={isChecked.age}
                                onChange={handleCheckboxChange}
                            />
                            <span className="checkmark"></span>
                            I confirm that I am at least 18 years old
                        </label>
                        {/* <br /> */}
                        <label className=''>
                            <input
                                type="checkbox"
                                name="privacy"
                                checked={isChecked.privacy}
                                onChange={handleCheckboxChange}
                            />
                            <span className="checkmark"></span>
                            I confirm that I&apos;ve read the <u>Private Policy</u>

                        </label >
                        {/* <br /> */}
                        <label className=' mb-3'>
                            <input
                                type="checkbox"
                                name="riskDisclosure"
                                checked={isChecked.riskDisclosure}
                                onChange={handleCheckboxChange}
                            />
                            <span className="checkmark"></span>
                            I confirm that I&apos;ve read the <u>Risk Disclosure Document</u>
                        </label>
                        {/* <br /> */}
                        <label className=' mb-3'>
                            <input
                                type="checkbox"
                                name="durableMedium"
                                checked={isChecked.durableMedium}
                                onChange={handleCheckboxChange}
                            />
                            <span className="checkmark"></span>
                            I hereby acknowledge and consent that the company shall provide me with the information only through a durable medium (i.e., any instrument which enables a client to store information for future reference and adequate period, and allows the unchanged reproduction of the information stored).
                        </label>
                        {/* <br /> */}
                        <label>
                            <input
                                type="checkbox"
                                name="personalData"
                                checked={isChecked.personalData}
                                onChange={handleCheckboxChange}
                            />
                            <span className="checkmark"></span>
                            You agree that the company may collect, use, and disclose your personal data which you have provided in this form, for providing material that you have agreed to receive, in accordance with the Privacy Policy
                        </label>
                        <br />
                    </div>
                    <div className='text-center m-3 mb-5'>
                        <button className='button-mt5-v3' onClick={handleSubmit} disabled={!Object.values(isChecked).every(Boolean)}>
                            Open An Account
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default App
