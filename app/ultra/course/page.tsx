import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './course.module.css'

const Course = async () => { // 비동기 함수로 변경시켜줌
  const courses_response = await fetch("http://localhost:9999/courses", {
    cache: "no-cache"
  });
  const courses = await courses_response.json();
  const profile_response = await fetch("http://localhost:9999/profile", {
    cache: "no-cache"
  });
  const profile = await profile_response.json();

  return (
    <html>
        <body>
        <aside id="side-menu" className={styles.navbar}>
            <span className={styles.nbLogo}>
                <Link href="/ultra/course">
                    <Image src="/img/BBlogo.png" width={73} height={73} alt="BBlogo"/>
                </Link>
            </span>
            <header className={styles.nbheader}></header>
            <button className={styles.nblistbutton}>
                    <div className={styles.nbbd}>
                        🕭 아주Bb 안내사항
                    </div>
                </button>
                <button className={styles.nblistbutton}>
                    <Link href={'/ultra/profile'} className={styles.link}>
                    <div className={styles.nbbd}>
                        ㋡ {profile.name}
                    </div>
                    </Link>
                </button>
                <button className={styles.nblistbutton}>
                    <div className={styles.nbbd}>
                        𑁍 활동 스트림
                    </div>
                </button>
                <button className={styles.nbnowbutton}>
                    <Link href={'/ultra/course'} className={styles.link}>
                    <div className={styles.nbbd}>
                        ⌸ 코스
                    </div>
                    </Link>
                </button>
                <button className={styles.nblistbutton}>
                    <div className={styles.nbbd}>
                        ☷ 조직
                    </div>
                </button>
                <button className={styles.nblistbutton}>
                    <div className={styles.nbbd}>
                        ⊟ 캘린더
                    </div>
                </button>
                <button className={styles.nblistbutton}>
                    <div className={styles.nbbd}>
                        ✉ 메세지
                    </div>
                </button>
                <button className={styles.nblistbutton}>
                    <div className={styles.nbbd}>
                        ᔠ 성적
                    </div>
                </button>
                <button className={styles.nblistbutton}>
                    <div className={styles.nbbd}>
                        ⏍ 도구
                    </div>
                </button>
                <button className={styles.nblistbutton}>
                    <div className={styles.nbbd}>
                        ⦰ 로그아웃
                    </div>
                </button>
        </aside>
        <div className={styles.course}>
            <div className={styles.coursebase}>
                <div className={styles.coursetop}>
                    <a className={styles.courseheader}>코스</a>
                </div>
                <div className={styles.coursebody}>
                    <section className={styles.courselist}>
                        <div className={styles.clist}>
                            <div className={styles.fav}>
                                <h3>2023학년 2학기</h3>
                            </div>
                            {courses.map((course: any) => (
                                <div className={styles.cc}>
                                    <article className={styles.artic}>
                                        <div className={styles.clistc}>
                                            <div className={styles.spanlist}>
                                                <a>
                                                    {course.classId}
                                                </a>
                                            </div>
                                        </div>
                                        <a className={styles.classname}>
                                            <h4 className={styles.nameh}>
                                                {course.code}_{course.name}({course.courseId})
                                            </h4>
                                            <span className={styles.ocs}>
                                                Original 코스 보기
                                            </span>
                                        </a>
                                        <div className={styles.artbot}>
                                            <div className={styles.botbi}>
                                                <div className={styles.botbii1}>
                                                    <span className={styles.botb1}>
                                                        공개
                                                    </span>
                                                </div>
                                                <div className={styles.botbii2}>
                                                    <div className={styles.botb2}>
                                                        |
                                                    </div>
                                                    <div className={styles.botb2}>
                                                        {course.professorName}
                                                    </div>
                                                    <div className={styles.botb2}>
                                                        |
                                                    </div>
                                                    <div className={styles.botb2}>
                                                        추가 정보 ∨
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </body>
    </html>
  )
};
export default Course;