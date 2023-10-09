import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import StarRating from '../components/StarRating';
import { MdInfo } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa";
import { RiClosedCaptioningFill } from "react-icons/ri";
import { BiCheck } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useCartContext } from '../context/cart_context';
import { useCoursesContext } from '../context/courses_context'; 
import CourseTimeline from '../components/CourseTimeline';

const SingleCoursePage = () => {
  const { id } = useParams();
  const { fetchSingleCourse, single_course } = useCoursesContext();
  const { addToCart } = useCartContext();

  useEffect(() => {
    fetchSingleCourse(id);
  }, []);

  const [expandedContentIndex, setExpandedContentIndex] = useState(-1);

  const { id: courseID, category, image, course_name, description, rating_count, rating_star, students, creator, updated_date, lang, actual_price, discounted_price, what_you_will_learn: learnItems, content } = single_course;

  const weeksData = [
    {
      title: "AUGUST 23",
      videoUrl: "https://www.youtube.com/embed/your-video-id-1",
      text: "The first day covers the introduction to the course and sets the foundation for the topics to be covered."
    },
    {
      title: "AUGUST 25",
      videoUrl: "https://www.youtube.com/embed/your-video-id-2",
      text: "On day 2, we dive deeper into the core concepts and start hands-on exercises."
    },
    {
      title: "AUGUST 27",
      videoUrl: "https://www.youtube.com/embed/your-video-id-2",
      text: "On day 3, we dive deeper into the core concepts and start hands-on exercises."
    },
    {
      title: "AUGUST 29",
      videoUrl: "https://www.youtube.com/embed/your-video-id-2",
      text: "On day 4, we dive deeper into the core concepts and start hands-on exercises."
    },
    // Add more weeks as needed
  ];

  const toggleContent = (index) => {
    if (expandedContentIndex === index) {
      setExpandedContentIndex(-1);
    } else {
      setExpandedContentIndex(index);
    }
  };

  return (
    <SingleCourseWrapper>
      <div className='course-intro mx-auto grid'>
        <div className='course-img'>
          <img src = {image} alt = {course_name} />
        </div>
        <div className='course-details'>
          <div className='course-category bg-white text-dark text-capitalize fw-6 fs-12 d-inline-block'>{category}</div>
          <div className='course-head'>
            <h5>{course_name}</h5>
          </div>
          <div className='course-body'>
            <p className='course-para fs-18'>{description}</p>
            <div className='course-rating flex'>
              <span className='rating-star-val fw-8 fs-16'>{rating_star}</span>
              <StarRating rating_star={rating_star} />
              <span className='rating-count fw-5 fs-14'>({rating_count})</span>
              <span className='students-count fs-14'>{students}</span>
            </div>

            <ul className='course-info'>
              <li>
                <span className='fs-14'>Taught by <span className='fw-6 opacity-08'>{creator}</span></span>
              </li>
              <li className='flex'>
                <span><MdInfo /></span>
                <span className='fs-14 course-info-txt fw-5'>Last updated {updated_date}</span>
              </li>
              <li className='flex'>
                <span><TbWorld /></span>
                <span className='fs-14 course-info-txt fw-5'>{lang}</span>
              </li>
              <li className='flex'>
                <span><RiClosedCaptioningFill /></span>
                <span className='fs-14 course-info-txt fw-5'>{lang} [Auto]</span>
              </li>
            </ul>
          </div>

          <div className='course-foot'>
            <div className='course-price'>
              <span className='new-price fs-26 fw-8'>Slot Left:  {discounted_price}</span>
              {/* <span className='old-price fs-26 fw-6'>${actual_price}</span> */}
            </div>
          </div>

          <div className='course-btn'>
            <Link to = "/cart" className='add-to-cart-btn d-inline-block fw-7 bg-purple' onClick={() => addToCart(courseID, image, course_name, creator, discounted_price, category)}>
              <FaGraduationCap />  Enroll Now
            </Link>
          </div>
        </div>
      </div>

      <div className='course-full bg-white text-dark'>
        <div className='course-learn mx-auto'>
          <div className='course-sc-title'>What You'll Learn</div>
          <ul className='course-learn-list grid'>
            {
              learnItems && learnItems.map((learnItem, idx) => {
                return (
                  <li key={idx}>
                    <span><BiCheck /></span>
                    <span className='fs-14 fw-5 opacity-09'>{learnItem}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>

        <div className='course-content mx-auto'>
          <div className='course-sc-title'>Course Structure</div>
          <ul className='course-content-list'>
            {
              content && content.map((contentItem, idx) => {
                return (
                  <li key={idx}>
                    <ContentItemHeader onClick={() => toggleContent(idx)}>
                      <span>{expandedContentIndex === idx ? '-' : '+'}</span>
                      <span>Week {idx + 1}</span>
                    </ContentItemHeader>
                    {expandedContentIndex === idx && (
                      <ContentItemBody>
                        <span>Week {idx + 1}'s planned work</span>
                      </ContentItemBody>
                    )}
                  </li>
                )
              })
            }
          </ul>
        </div>

        <div className='course-content mx-auto'>
          <div className='course-sc-title'>Course Content</div>
          <ul className='course-content-list'>
            <li>
              <CourseTimeline weeks={weeksData} />
            </li>
          </ul>
        </div>
      </div>
    </SingleCourseWrapper>
  )
}

const SingleCourseWrapper = styled.div`
  background: var(--clr-dark);
  color: var(--clr-white);

  .course-intro{
    padding: 40px 16px;
    max-width: 992px;

    .course-details{
      padding-top: 20px;
    }

    .course-category{
      padding: 0px 8px;
      border-radius: 6px;
    }

    .course-head{
      font-size: 38px;
      line-height: 1.2;
      padding: 12px 0 0 0;
    }
    .course-para{
      padding: 12px 0;
    }
    .rating-star-val{
      margin-right: 7px;
      padding-bottom: 5px;
      color: var(--clr-orange);
    }
    .students-count{
      margin-left: 8px;
    }
    .rating-count{
      margin-left: 6px;
      color: #d097f6;
    }
    .course-info{
      li{
        margin-bottom: 2px;
        &:nth-child(2){
          margin-top: 10px;
        }
      }
      .course-info-txt{
        text-transform: capitalize;
        margin-left: 8px;
        margin-bottom: 4px;
      }
    }
    .course-price{
      margin-top: 12px;
      .old-price{
        color: #eceb98;
        text-decoration: line-through;
        margin-left: 10px;
      }
    }
    .course-btn{
      margin-top: 16px;
      .add-to-cart-btn{
        padding: 12px 28px;
        span{
          margin-left: 12px;
        }
      }
    }

    @media screen and (min-width: 880px){
      grid-template-columns: repeat(2, 1fr);
      column-gap: 40px;
      .course-details{
        padding-top: 0;
      }
      .course-img{
        order: 2;
      }
    }

    @media screen and (min-width: 1400px){
      grid-template-columns: 60% 40%;
    }
  }

  .course-full{
    padding: 40px 16px;
    .course-sc-title{
      font-size: 22px;
      font-weight: 700;
      margin: 12px 0;
    }
    .course-learn{
      max-width: 992px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 12px 28px 22px 28px;

      .course-learn-list{
        li{
          margin: 5px 0;
          display: flex;
          span{
            &:nth-child(1){
              opacity: 0.95;
              margin-right: 12px;
            }
          }
        }

        @media screen and (min-width: 992px){
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }

    .course-content{
      max-width: 992px;
      margin-top: 30px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 12px 28px 22px 28px;

      .course-content-list{
        li{
          background-color: #f7f9fa;
          padding: 12px 18px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          margin-bottom: 10px;
          font-weight: 800;
          font-size: 15px;
        }
      }
    }
  }

`;

const ContentItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: #fff;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  transition: background 0.3s, color 0.3s;

  span {
    font-size: 20px;
  }

  &:hover {
    background: #f0f0f0;
  }
`;

const ContentItemBody = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
`;

export default SingleCoursePage;
