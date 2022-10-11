/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import styles from './homepage.module.css'
import Slider from 'react-slick'
import Image from 'next/image'
import WhyAfrilearn from './extra/whyAfrilearn'
import ExploreAfrilearn from './extra/exploreAfrilearn'
import CommentPage from './extra/commentPage'
import { BsCheck2All } from 'react-icons/bs'
import { Accordion, Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { getCourseInitiate } from '../../../redux/actions/course'
import { fetchRoles } from '../../../redux/actions/auth'
import Spinner from '../../widgets/spinner/index'

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div id="homepageFirstSection" className="row">
          <div className="col-md-6" id="homepageFirstSectionText">
            <h1 className={styles.mainheading}>Get ahead with Afrilearn!</h1>

            <p className={styles.underHeadingP}>
              Access free, world-class Primary and Secondary Education (Ages
              6-18) for Best Grades and Success in life.
            </p>
            <div className={`row ${styles.afterSubHeading}`}>
              <div className={`col-md-4 ${styles.afterSubHeading_button}`}>
                <span className={styles.joinForFree}>
                  <Link passHref href="/register">
                    JOIN FOR FREE
                  </Link>
                </span>
              </div>
              <div className={`col-md-6 ${styles.afterSubHeading_button2}`}>
                <span className={styles.experienceAfrilearn}>
                  <Image
                    alt={'design image'}
                    className={styles.experienceAfrilearnImg}
                    src={
                      '/assets/img/common/homepage/play-button-arrowhead 10.png'
                    }
                    width={15}
                    height={15}
                  />
                  <Link passHref href="/">
                    Experience Afrilearn
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6 center">
            <Image
              alt={'design image'}
              className={`centerImage ${styles.experienceAfrilearnImg}`}
              src={
                '/assets/img/common/homepage/73984-girl-studying-on-laptop (1).gif'
              }
              width={550}
              height={500}
            />
          </div>
        </div>
      </div>
      <WhyAfrilearn />
      <ExploreAfrilearn />
      <GameIntro />
      <CrossPlatform />
      <JoinLeague />
      <Testimonials />
      <Faq />
      <QuickJoin />
      <Partners />

      <Footer />
    </>
  )
}

const GameIntro = () => {
  const signIn = (e) => {
    e.preventDefault()
    router.push('/dashboard/quiz')
  }
  const router = useRouter()
  const data = {
    title: 'Gamified experience with rewards.',
    description: [
      'Fun practice to ace JSSCE, WASSCE, UTME, GCE, NECO and more in one sitting',
    ],
    imageURL: '/assets/img/common/homepage/school.png',
  }
  return (
    <>
      <div className={`row ${styles.landingpageg} mobile-responsiveness`}>
        <section className={`row ${styles.profiles}`}>
          <div className={`col-md-4 ${styles.landingpagegText}`}>
            <h3 className={`${styles.profileshh3} font-conrreted`}>
              {data?.title}
              <br className="desktopOnly " />
              {data?.titlePart2}
            </h3>
            {data?.description.map((item) => {
              return (
                <p key={item}>
                  <span className={styles.bulletTextt}>{item}</span>
                </p>
              )
            })}
            <section className={`row`}>
              <div className={`row ${styles.afterSubHeading}`}>
                <div className="col-md-6">
                  <button className={styles.joinForGames}>
                    <Link passHref href=" /register">
                      JOIN FOR FREE
                    </Link>
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div className={`col-md-6 ${styles.profileImagePosition}`}>
            <Image
              alt={'design image'}
              src={data?.imageURL}
              width={600}
              height={400}
              className={styles.profileImage}
            />
          </div>
        </section>
      </div>
    </>
  )
}
const CrossPlatform = () => {
  const data = {
    title: 'Learn on any device.',
    description: ['Anywhere, everywhere. Cancel anytime.'],
    imageURLs: ['/assets/img/common/homepage/learn.png'],
  }
  return (
    <>
      <div className={`row ${styles.crossPlatform}`}>
        <section className={`row ${styles.profiles}`}>
          <div className={`col-md-6 ${styles.sectionImageContainer}`}>
            <Image
              alt={'design image'}
              src={data?.imageURLs[0]}
              width={'754px'}
              height={'618px'}
            />
          </div>
          <div className={`col-md-6 ${styles.crossPlatformTextPosition}`}>
            <h3>
              {data?.title}
              <br className="desktopOnly" />
              {data?.titlePart2}
            </h3>
            {data?.description.map((item) => {
              return (
                <p key={item}>
                  <span className={styles.bulletTexttt}>{item}</span>
                </p>
              )
            })}
            <section className={`row ${styles.mobileDownloadSection}`}>
              <div className="mobileOnlyy">
                <div className="col-md-4 m-2">
                  <Link
                    passHref
                    href="https://play.google.com/store/apps/details?id=com.afrilearn"
                  >
                    <Image
                      alt={'design image'}
                      src="/assets/img/common/homepage/Google Play Badge.png"
                      width={'241.28px'}
                      height={'71.49px'}
                    />
                  </Link>
                </div>
                <div className="col-md-4 m-2">
                  <Link
                    passHref
                    href="https://apps.apple.com/ng/app/afrilearn/id1587978653"
                  >
                    <Image
                      alt={'design image'}
                      src="/assets/img/common/homepage/App Store Badge.png"
                      width={'241.28px'}
                      height={'71.49px'}
                    />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  )
}

const JoinLeague = () => {
  const router = useRouter()

  const registerUser = () => {
    router.push('/register')
  }

  const example = [
    {
      id: 1,
      added: 'Everything in free:',
      title: 'Afrilearn Free',
      button: 'JOIN FOR FREE',
      details: [
        '50,000+ Official Past Questions & Solutions',
        '5000+ Curriculum-Relevant Class Notes2',
        '3000+ Curriculum-Relevant Video Lessons',
        'Gamified competitions with weekly cash prizes',
        'Discover your strength with insightful analytics',
        'Boost your confidence with personalised learning',
        'Achieve best grades, university admission, and success in life.',
      ],
    },
    {
      id: 2,
      added: 'Everything in free plus:',
      title: 'Afrilearn Pro',
      button: 'START FREE TRIAL',
      details: [
        'Unlimited Video Lessons',
        'Online Homework Help',
        'Solutions Review with personalized lesson to practice your mistakes.',
        'Coding Classes (Including HTML, CSS and JavaScript)',
        'Languages Classes (Including Yoruba, Ibo etc)',
        'Access to live tutors',
        'Students & teachers chat room',
        'No Ads',
      ],
    },
    {
      id: 3,
      added: 'Everything in Pro plus:',
      title: 'Afrilearn Enterprise',
      button: 'REQUEST A DEMO',
      details: [
        'Transform your students’ lives with world-class supplementary education',
        'Multiply students’ enrollment and stand out from the competition',
        'Access ready lesson notes to accelerate your students’ learning',
        'Conduct seamless examinations with instant results for your students.',
        'Access powerful data insights to advance academic excellence',
        'Cut back Faculty workload to save time and resources',
        'Minimize the time spent creating, administering, and grading exams',
        'Earn more while delivering your school’s mandate',
      ],
    },
  ]

  return (
    <>
      <div className={`${styles.faq}`}>
        <h2>Join league of world-class learners</h2>
        <div className={styles.cardstylling}>
          {example.map((examp) => {
            return (
              <>
                <div className="card text-center p-4">
                  <div className="card-title">
                    <h4>{examp.title}</h4>
                    <p>{examp.added}</p>
                  </div>
                  <div className="card-body text-dark" id={examp.id}>
                    <ul>
                      {examp.details.map((arrFour, i) => (
                        <li key={i}>
                          <span>{<BsCheck2All color="#00D9B6" />}</span>
                          {arrFour}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    className={styles.gamebtnwrapper}
                  onClick={registerUser}>{examp.button}</button>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

const Testimonials = () => {
  const data = {
    title: 'What people are saying about Afrilearn?',
    description: [
      'Our greatest advertisement are the\ntestimonials of successful learners!',
    ],
    imageURLs: [
      '/assets/img/common/homepage/Quote Mark.png',
      '/assets/img/common/homepage/group.svg',
    ],
  }
  return (
    <>
      <div className="row">
        <div
          id="landingpage-testimonials"
          className={`row ${styles.testimonials}`}
          style={{ margin: '93px' }}
        >
          <section className={styles.container}>
            <div
              className={`col-xl-6 col-lg-7 col-md-8 col-sm-9 ${styles.heroText}`}
            >
              <h1 className={styles.heroTextHone}>{`${data.title}`}</h1>
            </div>
            {/* <div className='col-lg-7 '></div> */}
            <p>{data.description[0]}</p>
            <section className={`row`}>
              <div className={`col-md-12`}>
                <Image
                  alt={'design image'}
                  className={styles.mark}
                  src="/assets/img/common/homepage/Quote Mark.png"
                  width={'70%'}
                  height={'70%'}
                />
              </div>
            </section>
          </section>
        </div>
        <CommentPage />
        {/* </section> */}
      </div>
    </>
  )
}

const Faq = () => {
  const [currentModal, openModal] = useState(null)
  const [answerId, setAnswerId] = useState(null)
  const data = {
    title: 'Frequently asked questions',
    questions: [
      'What is Afrilearn?',
      'What is included in Afrilearn subscription?',
      'How do I cancel?',
      'Where can I watch?',
    ],
    imageURL: ['/assets/img/common/homepage/faq.svg'],
  }

  const answer = {
    answers: [
      'Subscription includes unlimited access to all video lessons',
      'audio lessons, class notes, practice quizzes, live classes',
      'and more, covering all subjects and topics, in your chosen',
      'class. Brace yourself for a profoundly life-changing  experience.',
    ],
  }

  const faqQuestions = [
    {
      id: 1,
      faq: 'What is Afrilearn?',
      answ: 'Subscription includes unlimited access to all video lessons',
    },
    {
      id: 2,
      faq: 'What is included in Afrilearn subscription?',
      answ: 'audio lessons, class notes, practice quizzes, live classes',
    },
    {
      id: 3,
      faq: 'How do I cancel?',
      answ: 'and more, covering all subjects and topics, in your chosen',
    },
    {
      id: 4,
      faq: 'Where can I watch?',
      answ: 'Subscription includes unlimited access to all video lessons',
    },
  ]

  const handleToggle = (id) => {
    console.log(id)
    openModal(!currentModal)
  }

  return (
    <>
      <div
        id="landingpage-faq"
        className={`row ${styles.faq}`}
        style={{ margin: '25px' }}
      >
        <h2>{data.title}</h2>
        <section>
          {faqQuestions.map((faq, i) => {
            return (
              <Accordion key={i}>
                <Accordion.Item eventKey={i}>
                  <Accordion.Header>{faq.faq}</Accordion.Header>

                  <Accordion.Body
                    key={i}
                    className="border-0 accordion-body-com"
                  >
                    {faq.answ}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            )
          })}
        </section>
      </div>
    </>
  )
}
const QuickJoin = () => {
  const { roles } = useSelector((state) => state.auth)
  const [classSelected, setClassSelected] = useState('')
  const [classParams, setClassParamsm] = useState('')
  const [classId, setClassId] = useState('')

  const dispatch = useDispatch()
  const router = useRouter()

  //Extract school classes:
  const courseContext = roles.courses
  // let classId = "5fff7371de0bdb47f826feb2"

  const data = {
    title: 'Ready for success?',
    description: ['Join the league of high-flying learners'],
    courses: ['1', '2', '3'],
    imageURL: [
      '/assets/img/common/homepage/quick-join-classes.svg',
      '/assets/img/common/homepage/quick-join-button.svg',
    ],
  }

  //Navigate to class-info-details:
  const goToPerformance = () => {
    router.push({
      pathname: `/classes/[_classes]`,
      query: { _classes: classParams, classId: '5fff7380de0bdb47f826feb3' },
    })
  }

  console.log('classParams', classParams)

  //   const getClassId =  () => {

  // }

  useEffect(() => {
    if (classSelected === 'Primary One') {
      setClassParamsm('primary-one')
      setClassId('5fc8cfbb81a55b4c3c19737d')
    } else if (classSelected === 'Primary Two') {
      setClassParamsm('primary-two')
      setClassId('5fd12c70e74b15663c5f4c6e')
    } else if (classSelected === 'Primary Three') {
      setClassParamsm('primary-three')
      setClassId('5fff5a67de0bdb47f826fea8')
    } else if (classSelected === 'Primary Four') {
      setClassParamsm('primary-four')
      setClassId('5fff5a7ede0bdb47f826fea9')
    } else if (classSelected === 'Primary Five') {
      setClassParamsm('primary-five')
      setClassId('5fff5aaede0bdb47f826feaa')
    } else if (classSelected === 'Primary Six') {
      setClassParamsm('primary-six')
      setClassId('5fff5abede0bdb47f826feab')
    } else if (classSelected === 'JSS One') {
      setClassParamsm('jss-one')
      setClassId('5fff72b3de0bdb47f826feaf')
    } else if (classSelected === 'JSS Two') {
      setClassParamsm('jss-two')
      setClassId('5fff7329de0bdb47f826feb0')
    } else if (classSelected === 'Jss Three') {
      setClassParamsm('jss-three')
      setClassId('5fff734ade0bdb47f826feb1')
    } else if (classSelected === 'SSS One') {
      setClassParamsm('sss-one')
      setClassId('5fff7371de0bdb47f826feb2')
    } else if (classSelected === 'SSS Two') {
      setClassParamsm('sss-two')
      setClassId('5fff7380de0bdb47f826feb3')
    } else if (classSelected === 'SSS Three') {
      setClassParamsm('sss-three')
      setClassId('5fff7399de0bdb47f826feb4')
    } else if (classSelected === 'Afrilearn KidsCode') {
      setClassParamsm('kidscode')
      setClassId('629dbb4c5a5f270016033712')
    }
  }, [classSelected])

  // useEffect(() => {
  //   getClassId()
  // },[classSelected])

  useEffect(() => {
    dispatch(fetchRoles())
  }, [])
  useEffect(() => {
    dispatch(getCourseInitiate(classId))
  }, [classId])

  return (
    <>
      <div id="landingpage-quickJoin" className={`row ${styles.quickJoin}`}>
        <h2>{data.title}</h2>
        <h6>{data.description}</h6>
        <section className={styles.quickJoinSec}>
          <div className={`row ${styles.courseSelectSection}`}>
            {!roles ? (
              <Spinner />
            ) : (
              <div className="col-md-12">
                <div className="row">
                  <div className={`col-8 ${styles.paddingRightOff}`}>
                    <select
                      value={classSelected}
                      onChange={(e) => {
                        setClassSelected(e.target.value)
                        goToPerformance()
                      }}
                      className={` ${styles.myPlaceholder}`}
                    >
                      <option value={'default'}>Select a Class</option>
                      {courseContext?.map((schoolClass, index) => (
                        <option>{schoolClass.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className={`col-4 ${styles.paddingLeftOff}`}>
                    <Link href="/register">
                      <input type="submit" value="JOIN FOR FREE" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}
const Partners = () => {
  const data = {
    title: 'Key Supporters',
    partners: [
      {
        position: 0,
        logoURL: '/assets/img/common/partners/African-Union-Logo.svg',
        name: '',
      },
      {
        position: 1,
        logoURL: '/assets/img/common/partners/download-1.svg',
        name: '',
      },
      {
        position: 3,
        logoURL: '/assets/img/common/partners/UK-Nigeria-tech-hub.svg',
        name: '',
      },
      {
        position: 4,
        logoURL: '/assets/img/common/partners/us-chambers.svg',
        name: '',
      },
      {
        position: 5,
        logoURL: '/assets/img/common/partners/unicef.png',
        name: '',
      },
      {
        position: 6,
        logoURL: '/assets/img/common/partners/BellaNaija-Logo_Black.svg',
        name: '',
      },
      {
        position: 7,
        logoURL: '/assets/img/common/partners/netherland-kingdom.svg',
        name: '',
      },
    ],
  }

  const customeSlider = useRef()

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    // cssEase: 'linear',
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 821,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <div id="landingpage-partners" className={` ${styles.partners}`}>
        <h2>{data.title}</h2>
        <section className="parnet-frag-color">
          <Slider {...settings} ref={customeSlider}>
            {data.partners.map((partner, i) => {
              return (
                <div key={i} className={`${styles.box} image-box-corrected`}>
                  <Image
                    alt={'design image'}
                    className={styles.partnerLogo}
                    src={partner.logoURL}
                    layout={'fill'}
                  />
                </div>
              )
            })}
          </Slider>
        </section>
      </div>
    </>
  )
}
const Footer = () => {
  const data = {
    imageURL: [
      '/assets/img/common/homepage/facebook.svg',
      '/assets/img/common/homepage/instagram.svg',
      '/assets/img/common/homepage/twitter.svg',
      '/assets/img/common/homepage/inkedlin.svg',
      '/assets/img/common/homepage/youtube.svg',
    ],
  }
  const currentYear = new Date().getFullYear()

  return (
    <section>
      <Row id="landingpage-footer" className={`pt-lg-5 ${styles.footer}`}>
        <Col xs={12} lg={3} className={`ps-lg-5 ${styles.footerlogo}`}>
          <Image
            alt={'design image'}
            src="/assets/img/common/homepage/whitelogo.png"
            width={'220px'}
            height={'80px'}
          />
        </Col>
        <Col xs={12} lg={7} className={` ${styles.footerrigh}`}>
          <Row>
            <Col xs={12} md={4} className={` ${styles.footerText}`}>
              <h3>Quicklinks</h3>
              <ul>
                <li>
                  <Link passHref href="http://blog.myafrilearn.com/">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link passHref href="https://web.facebook.com/myAfrilearn">
                    Media
                  </Link>
                </li>
                <li>
                  <Link passHref href="https://myafrilearn.com/join-the-team">
                    Teach on Afrilearn
                  </Link>
                </li>
                <li>
                  <Link
                    passHref
                    href="https://play.google.com/store/apps/details?id=com.afrilearn"
                  >
                    Download App
                  </Link>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={4} className={` ${styles.footerText}`}>
              <h3>Company</h3>
              <ul>
                <li>
                  <Link passHref href="https://myafrilearn.com/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link passHref href="https://myafrilearn.com/impact-stories">
                    Impact Stories
                  </Link>
                </li>
                <li>
                  <Link passHref href="https://myafrilearn.com/about#team">
                    Team
                  </Link>
                </li>
                <li>
                  <Link passHref href="https://myafrilearn.com/faculty">
                    Faculty
                  </Link>
                </li>
                <li>
                  <Link passHref href="https://myafrilearn.com/join-the-team">
                    Career
                  </Link>
                </li>
                <li>
                  <Link passHref href="https://myafrilearn.com/partnership">
                    Paternership
                  </Link>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={4} className={` ${styles.footerText}`}>
              <h3>Contact</h3>
              <ul>
                <li>hello@myafrilearn.com</li>
                <li>+ 234 802 785 5262</li>
                <li>+234 805 154 4949</li>
                <li>
                  6 Gbemisola Street, Allen Avenue, Ikeja, Lagos, Nigeria.
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>

      <div>
        <div className={`row ${styles.last}`}>
          <div className={`col-md-3 ${styles.lasttt}`}>
            <p> &copy; {currentYear} Afrilearn. All rights reserved</p>
          </div>
          <div className={`col-md-2 ${styles.lastt}`}>
            <li>
              <Link passHref href="">
                Privacy Policy
              </Link>
            </li>
          </div>
          <div className={`col-md-2 ${styles.lastt}`}>
            <li>
              <Link passHref href="/">
                Terms of Service
              </Link>
            </li>
          </div>
          <div className={`col-lg-2 col-md-4 col-sm-2 row ${styles.grided}`}>
            <div style={{ width: '45px', padding: '0' }}>
              <Link passHref href="https://web.facebook.com/myAfrilearn">
                <Image
                  alt={'design image'}
                  src="/assets/img/common/homepage/Group 2361.png"
                  width={'35px'}
                  height={'35px'}
                />
              </Link>
            </div>
            <div style={{ width: '45px', padding: '0' }}>
              <Link
                passHref
                href="https://www.instagram.com/accounts/login/?next=/afrilearn/"
              >
                <Image
                  alt={'design image'}
                  src="/assets/img/common/homepage/Social Icons2.png"
                  width="35px"
                  height="35px"
                />
              </Link>
            </div>
            <div style={{ width: '45px', padding: '0' }}>
              <Link passHref href="https://twitter.com/Afrilearn">
                <Image
                  alt={'design image'}
                  src="/assets/img/common/homepage/Social Icons1.png"
                  width="35px"
                  height="35px"
                />
              </Link>
            </div>
            <div style={{ width: '45px', padding: '0' }}>
              <Link passHref href="https://www.linkedin.com/company/afrilearn/">
                <Image
                  alt={'design image'}
                  src="/assets/img/common/homepage/Group 2362.png"
                  width={'35px'}
                  height={'35px'}
                />
              </Link>
            </div>
            <div style={{ width: '45px', padding: '0' }}>
              <Link
                passHref
                href="https://www.youtube.com/channel/UC_BnnokJom1DWipMl0oSxWA"
              >
                <Image
                  alt={'design image'}
                  src="/assets/img/common/homepage/Social Icons.png"
                  width={'35px'}
                  height={'35px'}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
