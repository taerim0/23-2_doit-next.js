import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './profile.module.css'

const Course = async () => { // 비동기 함수로 변경시켜줌
  const courses_response = await fetch("http://localhost:9999/courses", {
    cache: "no-cache"
  });
  const courses = await courses_response.json();
  const profile_response = await fetch("http://localhost:9999/profile", {
    cache: "no-cache"
  });
  const profile = await profile_response.json();

//   console.log(typeof(courses))
//   return (
//     <div>
//       {courses.map((course: any) => (
//         <div>
//           <span>
//             {course.code}_ {course.name}({course.courseId})
//           </span>
//           <span>{course.professtorName}</span>
//         </div>
//       ))}
//     </div>
//   );

  return (
    <html>
        <body>
        <aside id="side-menu" className={styles.navbar}>
            <span className={styles.nbLogo}>
                <Link href="/ultra/course">
                    <Image src="/img/BBlogo.png" width={75} height={75} alt="BBlogo"/>
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
                <button className={styles.nblistbutton}>
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
            <a>hi</a>
        </div>
    </body>
    </html>
  )
};
export default Course;