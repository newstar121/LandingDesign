import logo from './logo.svg';
import './custom.css';
// import './App.css';

function App() {
  return (
    <div className="flex flex-column bg-0 text-normal">
      {/* header */}
      <div className="flex align-center w-full" >
        <div className='flex align-center justify-center ml-3r' style={{ width: '10rem', padding: '2.5rem' }}>
          <img className='w-full h-full' src="assets/images/Asset.png"></img>
        </div>
        <div className='mark flex align-center justify-center text-grey' style={{ width: '35rem' }}>
          <span className='fw-32 text-1-4r lh-2'>For Traders</span>
          <span className='fw-32 text-1-4r lh-2 ml-2r mr-2r'>For Managers</span>
          <span className='fw-32 text-1-4r lh-2'>Docs</span>
        </div>
        <div className='flex align-center justify-centrer' style={{ width: '15rem', padding: '1rem' }}>
          <img className='w-2r h-2r' src="assets/images/Twitter.png"></img>
          <img className='w-2r h-2r' src="assets/images/Discord.png" style={{ marginLeft: '1rem', marginRight: '1rem' }}></img>
          <img className='w-2r h-2r' src="assets/images/Subtract.png"></img>
        </div>
        <div className='mark custom-border flex justify-center align-center mr-5r' style={{ width: '15rem', padding: '1rem' }}>
          <span className=' text-grey fw-37-5 text-1-6r w-full App'>LAUNCH DAPP</span>
        </div>
      </div>
      {/* divider */}
      <div className='divider h-0-3r w-full'></div>
      {/* body1 */}
      <div className='bg-1 padding-5r flex flex-column justify-around h-50r'>
        <div className='flex align-center text-white'>
          <span className='text-4r fw-43-75 lh-5' >
            Choose Pentos and elevate your on-chain investment journey today.
          </span>
          <div className='w-full mark'></div>
        </div>
        <div className='flex align-center text-white'>
          <span className='text-2r fw-25 lh-2-2'>
            Embrace your role as a manager or trader, and manage your on-chain portfolio on one seamless platform.
          </span>
          <div className='w-full mark'></div>
        </div>
      </div>
      {/* divider2 */}
      <div className='divider h-0-3r w-full'></div>
      {/* body2 */}
      <div className='bg-2 padding-5r flex flex-column justify-around h-165r'>
        <span className='text-2r fw-43-75 lh-5 text-white' >
          Why Pentos?
        </span>
        <div className='flex flex-column text-white'>
          <div className='fw-43-75 text-4r lh-6'>
            We’re committed to <span className='text-yellow'>reshaping they way you invest</span> in crypto, making it <span className='text-yellow'>more accessible and dynamic</span> than ever before.
          </div>
          <div className='fw-25 text-1-6r lh-2'>
            Pentos Indexes are tokenized portfolios that can be created from the ground up with a multitude of parameters to create your index or buy in one click an existing one.
          </div>
        </div>
        {/* 1 */}
        <div className='flex align-center ml-1r mr-1r'>
          <div className='flex flex-reverse-column justify-space-between w-half text-white'>
            <img src='assets/images/1.svg' className='w-5r h-18-8r' style={{ paddingTop: '1rem', paddingBottom: '1rem' }}></img>
            <div className='flex flex-column justify-center ml-m-2r'>
              <span className='fw-37-5 text-2r lh-2-8'>Fully Customizable</span>
              <span className='fw-25 text-1-5r lh-2-2'>Design your first tokenized portfolio from scratch</span>
            </div>
          </div>
          <img src='assets/images/bg2.svg' className='w-half mark'></img>
        </div>
        {/* 2 */}
        <div className='flex align-center ml-1r mr-1r'>
          <img src='assets/images/bg3.svg' className='w-half mark'></img>
          <div className='flex flex-reverse-column align-center justify-space-between w-half text-white pl-m-10r'>
            <div className='flex w-full justify-flex-end'>
              <img src='assets/images/2.svg' className='w-7-1r h-18-8r mr-m-5r' style={{ paddingTop: '1rem', paddingBottom: '1rem' }}></img>
              {/* <img src='assets/images/bg4.svg' style={{position:' absolute', width: '90rem', height: '75rem', marginLeft:' 0rem', marginTop: '-10rem'  }}></img> */}
            </div>
            <div>
              <span className='fw-37-5 text-2r lh-2-8'>Dynamic management</span>
              <span className='fw-25 text-1-5r lh-2-2'>Management tool to create a dynamic & evolving index</span>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className='flex align-center ml-1r mr-1r'>
          <div className='flex flex-reverse-column justify-space-between w-half text-white'>
            <img src='assets/images/3.svg' className='w-7-1r h-18-8r' style={{ paddingTop: '1rem', paddingBottom: '1rem' }}></img>
            <div className='flex flex-column justify-center ml-m-2r'>
              <span className='fw-37-5 text-2r lh-2-8'>AI-Driven Innovation</span>
              <span className='fw-25 text-1-5r lh-2-2'>Leverage AI-powered index builder to craft a well rounded basket of assets in one click.</span>
            </div>
          </div>
          <img src='assets/images/bg2.svg' className='w-half mark'></img>
        </div>
      </div>
      {/* divider3 */}
      <div className='divider2 h-0-3r w-full'></div>
      {/* body3 */}
      <div className='bg-3 padding-5r flex flex-column justify-around text-white h-165r'>
        <span className='fw-43-75 text-2r lh-5'>For The Master Trader In You</span>
        <div>
          <div className='fw-43-75 text-4r lh-6'>
            Get <span className='text-yellow'>access to masterfully created portfolios.</span>
          </div>
          <span className='fw-25 text-1-6r lh-2-4'>Copy and track these user-created Indexes.</span>
        </div>
        <div className='flex ml-r-5r'>
          <img className='w-half mark' src="assets/images/bg6.svg" style={{ width: '40%', height: '50vh' }} />
          <div className='flex flex-column align-center justify-around w-half ml-m-2r'>
            <div className='flex align-center w-full'>
              <img src='assets/images/_1.svg' style={{ width: '6.8rem', height: '6.2rem' }}></img>
              <span className='fw-25 text-1-5r lh-2-2'>Get access to masterfully crafted sectoral portfolios.</span>
            </div>
            <div className='flex align-center w-full'>
              <img src='assets/images/_2.svg' style={{ width: '6.8rem', height: '6.2rem' }}></img>
              <span className='fw-25 text-1-5r lh-2-2'>Follow, copy and track user-created indexes, tapping into collective wisdom.</span>
            </div>
            <div className='flex align-center w-full'>
              <img src='assets/images/_3.svg' style={{ width: '6.8rem', height: '6.2rem' }}></img>
              <span className='fw-25 text-1-5r lh-2-2'>Embrace the power of shared knowledge and expertise, all at your fingertips.</span>
            </div>
            <div className='flex align-center w-full'>
              <img src='assets/images/_4.svg' style={{ width: '6.8rem', height: '6.2rem' }}></img>
              <span className='fw-25 text-1-5r lh-2-2'>AI powered index builder for a basket in one click</span>
            </div>
          </div>
        </div>
        <div className='flex flex-column align-flex-end justify-around'>
          <span className='fw-700 text-30 lh-5'>Empowering Managers to Thrive</span>
          <div className='fw-700 text-4r lh-6' style={{textAlign: 'right'}}><span className='text-yellow'>Monetize your expertise </span>with</div>
          <div className='fw-700 text-4r lh-6'>Pentos</div>
          <span className='fw-400 text-25 lh-2'>Everyone should have the opportunity to showcase their investment prowess</span>
        </div>
        <div className='flex'>
          <div className='flex flex-column align-center justify-around w-half'>
            <div className='flex align-center'>
              <img src='assets/images/_1.svg' style={{ width: '6.8rem', height: '6.2rem' }}></img>
              <span className='fw-25 text-1-5r lh-2-2'>Design a personalized index that reflects your investment style, or create one to follow a specific narrative.</span>
            </div>
            <div className='flex align-center'>
              <img src='assets/images/_2.svg' style={{ width: '6.8rem', height: '6.2rem' }}></img>
              <span className='fw-25 text-1-5r lh-2-2'>Utilize dynamic and evolving index tools, including back testing, limit orders and more to optimize your strategy.</span>
            </div>
            <div className='flex align-center'>
              <img src='assets/images/_3.svg' style={{ width: '6.8rem', height: '6.2rem' }}></img>
              <span className='fw-25 text-1-5r lh-2-2'>Benefit from your expertise by earning management and performance fees.</span>
            </div>
          </div>
          <img className='w-half mark' src="assets/images/bg7.svg" style={{ width: '45%', height: '50vh', marginTop: '2rem', marginRight: '-2rem' }} />
        </div>
      </div>
      {/* divider4 */}
      <div className='divider2 h-0-3r w-full'></div>
      {/* body4 */}
      <div className='bg-4 padding-5r flex flex-column justify-around text-white h-180r'>
        <div>
          <div className='fw-43-75 text-4r lh-6'>
            Pentos, the Sanctuary
          </div>
          <span className='fw-25 text-1-6r lh-2-4'>
            We provide and meet the needs of crypto traders and investors. By offering a revolutionary approach to crypto asset management, we provide users with everything they need, through our own tools and tools of our collaborators
          </span>
        </div>
        <div className='flex'>
          <div className='w-half mark'>
            <img src="assets/images/bg10.svg" style={{ width: '23.7rem', height: '34rem' }} />
          </div>
          <div className='flex flex-column w-half' style={{ marginTop: '7rem', marginRight: '2rem' }}>
            <span className='fw-600 text-30 lh-45'>Pentos - Swap</span>
            <span className='fw-400 text-24 lh-36'>Buy and sell pre-built indexes at a glance, streamlining your investment process.</span>
          </div>
        </div>
        <div className='flex'>
          <div className='flex flex-column w-half' style={{ marginTop: '7rem', marginRight: '2rem' }}>
            <span className='fw-600 text-30 lh-45'>Pentos - Aggregator</span>
            <span className='fw-400 text-24 lh-36'>Save time and effort with our efficient & seamless DEX aggregator - no need to look elsewhere. </span>
          </div>
          <div className='w-half mark'>
            <img src="assets/images/bg9.svg" style={{ width: '36rem', height: '30rem' }} />
          </div>
        </div>
        <div className='flex'>
          <div className='w-half mark'>
            <img src="assets/images/bg8.svg" style={{ width: '34rem', height: '39rem' }} />
          </div>
          <div className='flex flex-column w-half' style={{ marginTop: '7rem', marginRight: '2rem' }}>
            <span className='fw-600 text-30 lh-45'>Pentos - DCA</span>
            <span className='fw-400 text-24 lh-36'>Invest smarter, not harder. DCA your way on Pentos.</span>
          </div>
        </div>
      </div>
      {/* divider4 */}
      <div className='divider5 h-0-3r w-full'></div>
      {/* body5 */}
      <div className='bg-5 padding-5r flex flex-column justify-around text-white h-66r'>
        <span className='fw-700 text-30 lh-5'>Embrace Pentos: Fostering a sustainable creator economy and coomunity</span>
        <span className='fw-400 text-25 lh-38'>Pentos is committed to building a thriving ecosystem that rewards creativity, research and expertise. Through our cutting-edge Crypto Index Management (CIM) platform,  we enable users to securely and efficiently monetize their investing knowledge, while fostering a collaborative and supportive community. </span>
        <div className='border fw-600 text-1-6r lh-40'>
          Partners.
        </div>
      </div>
      {/* divider5 */}
      <div className='divider5 h-0-3r w-full'></div>
      {/* body6 */}
      <div className='flex justify-between padding-5r text-white h-24r'>
        <div className='flex align-center'>
          <img src="assets/images/Asset.png" className='h-5r w-5r' style={{ padding: '1rem' }}></img>
          <div className='flex flex-column'>
            <span className='fw-600 text-30 lh-45'>Pentos</span>
            <span className='fw-400 text-14 lh-21'>©2023 Pentos Finance. All rights reserved.</span>
          </div>
        </div>
        <div className='flex mark'>
          <div className='flex flex-column mr-2r'>
            <span className='fw-600 text-24 lh-36' style={{ marginBottom: '2rem' }}>About</span>
            <span className='fw-400 text-18 lh-27'>Traders</span>
            <span className='fw-400 text-18 lh-27'>Managers</span>
            <span className='fw-400 text-18 lh-27'>Why Pentos</span>
            <span className='fw-400 text-18 lh-27'>Docs</span>
          </div>
          <div className='flex flex-column'>
            <span className='fw-600 text-24 lh-36' style={{ marginBottom: '2rem' }}>Community</span>
            <span className='fw-400 text-18 lh-27'>Traders</span>
            <span className='fw-400 text-18 lh-27'>Discord</span>
            <span className='fw-400 text-18 lh-27'>Twitter</span>
            <span className='fw-400 text-18 lh-27'>Telegram</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
