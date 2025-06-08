import React, { useEffect, useState, useRef } from 'react';
import { Carousel } from 'primereact/carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import CourseCard from '../QuenchYourThirst/CourseCard';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './CourseCarousel.css';

const CourseCarousel = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const swiperRef = useRef(null);

  const responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/courses');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        const filteredCourses = data.filter((course) => course.category === 'very short');

        const uniqueCourses = filteredCourses.filter(
          (course, index, self) =>
            index === self.findIndex((c) => c.course_id === course.course_id)
        );

        setCourses(uniqueCourses);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const courseTemplate = (course) => (
    <div className="course-slide">
      <CourseCard course={course} />
    </div>
  );

  if (loading) return <div className="loading-spinner">Loading courses...</div>;
  if (error) return <div className="error-message">Error loading courses: {error}</div>;

  return (
    <div className="course-carousel-container">
      {courses.length > 0 ? (
        <>
          {!isMobile ? (
            <Carousel
              value={courses}
              numVisible={3}
              numScroll={1}
              responsiveOptions={responsiveOptions}
              itemTemplate={courseTemplate}
              circular
              autoplayInterval={5000}
              showIndicators={true}
              showNavigators={true}
              className="desktop-carousel"
            />
          ) : (
            <div className="mobile-swiper-container">
              <Swiper
                ref={swiperRef}
                slidesPerView={1}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mobile-swiper"
                breakpoints={{
                  480: {
                    slidesPerView: 1.2,
                    spaceBetween: 15
                  },
                  640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20
                  }
                }}
              >
                {courses.map((course) => (
                  <SwiperSlide key={course.course_id}>
                    <CourseCard course={course} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </>
      ) : (
        <div className="no-courses">No short courses available.</div>
      )}
    </div>
  );
};

export default CourseCarousel;