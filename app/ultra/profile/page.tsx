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

  return (
    <html>
    <body className={styles.bodyp}>
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
                <button className={styles.nbnowbutton}>
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
        <div className={styles.base}>
            <div className={styles.baseprofile}>
                <div className={styles.bodycontent}>
                    <div className={styles.bc}>
                        <div className={styles.bg}>
                        </div>
                        <div className={styles.actsnap}>
                            <div className={styles.avatarcontainer}>
                                <div className={styles.baseprof}>
                                    <div className={styles.profimgbase}>
                                        <div className={styles.avtinner}>
                                            <div className={styles.avtframe}>
                                                <Image src="/img/avatar.png" width={140} height={140} alt="avatar"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.namecontainer}>
                                <a className={styles.profname}>
                                    {profile.name}
                                </a>
                            </div>
                            <div className={styles.idcontainer}>
                                <span>
                                    {profile.studentID}
                                </span>
                            </div>
                        </div>
                        <div className={styles.underprofile}>
                            <div className={styles.underleft}>
                                <section className={styles.lusec}>
                                    <h2 className={styles.info}>기본 정보</h2>
                                    <ul className={styles.luli}>
                                        <li className={styles.li1}>
                                            <span className={styles.span1}>
                                                성명
                                            </span>
                                            <div className={styles.profileluname}>
                                                <a className={styles.namereal}>
                                                    {profile.name}
                                                </a>
                                            </div>
                                        </li>
                                        <li className={styles.li2}>
                                            <span className={styles.span1}>
                                                이메일 주소
                                            </span>
                                            <div className={styles.profileluname}>
                                                <a className={styles.namereal}>
                                                    {profile.email}
                                                </a>
                                            </div>
                                        </li>
                                        <li className={styles.li2}>
                                            <span className={styles.span1}>
                                                학생 ID
                                            </span>
                                            <div className={styles.profileluname}>
                                                <a className={styles.namereal}>
                                                    {profile.department}
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </section>
                                <section className={styles.ldsec}>
                                    <h2 className={styles.phone}>연락처 정보</h2>
                                    <ul className={styles.luli}>
                                        <li className={styles.li1}>
                                            <span className={styles.span1}>
                                                전화번호
                                            </span>
                                            <div className={styles.profileluname}>
                                                <a className={styles.namereal}>
                                                    {profile.phoneNumber}
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                            <div className={styles.underright}>
                                <section className={styles.rsec}>
                                    <h2 className={styles.sysn}>시스템 설정</h2>
                                    <ul className={styles.rul}>
                                        <li className={styles.rli1}>
                                            <span className={styles.span1}>
                                                언어
                                            </span>
                                            <div className={styles.profileluname}>
                                                <a className={styles.namereal}>
                                                    한국어 (한국)
                                                </a>
                                            </div>
                                        </li>
                                        <li className={styles.rli2}>
                                            <span className={styles.span1}>
                                                개인 정보 설정
                                            </span>
                                            <div className={styles.profileluname}>
                                                <span className={styles.namereal}>
                                                    교수자만 내 프로필 정보를 볼 수 있음
                                                </span>
                                            </div>
                                        </li>
                                        <li className={styles.rli2}>
                                            <span className={styles.span1}>
                                                글로벌 통지
                                            </span>
                                            <div className={styles.profileluname}>
                                                <a className={styles.namereal}>
                                                    스트림 통지
                                                </a>
                                            </div>
                                        </li>
                                        <li className={styles.rli1}>
                                            <span className={styles.span1}>
                                            </span>
                                            <div className={styles.profileluname}>
                                                <a className={styles.namereal}>
                                                    이메일 통지
                                                </a>
                                            </div>
                                        </li>
                                        <li className={styles.rli1}>
                                            <span className={styles.span1}>
                                            </span>
                                            <div className={styles.profileluname}>
                                                <a className={styles.namereal}>
                                                    푸시 통지
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
  )
};
export default Course;