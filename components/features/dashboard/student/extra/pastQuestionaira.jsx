import Image from 'next/image'
import SubHeading from './subHeading'
import styles from './../../student/pastQuetion.module.css'
import { useEffect, useState, useRef } from 'react'
import Slider from 'react-slick'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { fetchPastQuestionInitiate } from '../../../../../redux/actions/subject'

const PastQuestion = ({ subData }) => {
  // console.log(subData)
  const dispatch = useDispatch()
  const [subId, setSubId] = useState('')

  const Slidery = () => {
    const customeSlider = useRef()

    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 1500,
      cssEase: 'linear',
      initialSlide: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 415,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: true,
            speed: 5500,
            cssEase: 'linear',
            infinite: true,
          },
        },
      ],
    }
    useEffect(() => {
      // console.log(subId)
      if (subId !== '') {
        dispatch(fetchPastQuestionInitiate(subId))
      }
    }, [subId])

    return (
      <>
        {subData?.length > 2 ? (
          <Slider {...settings}>
            {subData?.map((data, i) => {
              // console.log(data.pastQuestionTypes[0]);
              return (
                <Link
                  passHref
                  href={{
                    pathname: '/dashboard/student/pastQuestion',
                    query: { Exam: data.pastQuestionTypes[0].name },
                  }}
                >
                  <div
                    key={i}
                    style={{ cursor: 'pointer' }}
                    className={`pointer ${
                      data.pastQuestionTypes[0].categoryId % 2 !== 0
                        ? styles.containerList1
                        : styles.containerList2
                    }`}
                    onClick={() =>
                      setSubId(data.pastQuestionTypes[0].categoryId)
                    }
                  >
                    <div
                      className={`pointer ${
                        data.pastQuestionTypes[0].categoryId % 2 !== 0
                          ? styles.cointainerListLeft1
                          : styles.cointainerListLeft2
                      }`}
                    >
                      <Image
                        alt={'logo image'}
                        src={data.pastQuestionTypes[0].imageUrl}
                        width="100%"
                        height="100%"
                      />
                      <div className={styles.cointainerListRight}>
                        <div className={styles.cointainerListLeftTop}>
                          {data.pastQuestionTypes[0].name}
                        </div>
                        <div className={styles.cointainerListLeftBottom}>
                          {data.pastQuestionTypes[0].description}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </Slider>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {subData?.map((data, i) => {
              // console.log(data.pastQuestionTypes[0]);
              return (
                <Link
                  passHref
                  href={{
                    pathname: '/dashboard/student/pastQuestion',
                    query: { Exam: data.pastQuestionTypes[0].name },
                  }}
                >
                  <div
                    key={i}
                    style={{ cursor: 'pointer' }}
                    className={`pointer ${
                      data.pastQuestionTypes[0].categoryId % 2 !== 0
                        ? styles.containerList1
                        : styles.containerList2
                    }`}
                    onClick={() =>
                      setSubId(data.pastQuestionTypes[0].categoryId)
                    }
                  >
                    <div
                      className={`pointer ${
                        data.pastQuestionTypes[0].categoryId % 2 !== 0
                          ? styles.cointainerListLeft1
                          : styles.cointainerListLeft2
                      }`}
                    >
                      <Image
                        alt={'logo image'}
                        src={data.pastQuestionTypes[0].imageUrl}
                        width="100%"
                        height="100%"
                      />
                      <div className={styles.cointainerListRight}>
                        <div className={styles.cointainerListLeftTop}>
                          {data.pastQuestionTypes[0].name}
                        </div>
                        <div className={styles.cointainerListLeftBottom}>
                          {data.pastQuestionTypes[0].description}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </>
    )
  }

  return (
    subData?.length > 0 && (
      <div>
        <SubHeading title="Past Questions" />
        <div className={styles.container}>
          <section className="parnet-frag-color">
            <Slidery />
          </section>
        </div>
      </div>
    )
  )
}

export default PastQuestion
