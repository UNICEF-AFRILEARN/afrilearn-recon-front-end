import React from "react";
import styles from "../comment.module.css";
import Image from "next/image";

const commentPage = () => {
  return (
    <div className={`row ${styles.commentPage}`}>
      <div className={`${styles.list1} ${styles.list}`}>
        <div className={styles.commentwrapper}>
          <div className={styles.comment}>
            <Image
              alt={"design image"}
              className={styles.commentImg}
              src={"/assets/img/common/homepage/Comment.png"}
              width={15}
              height={15}
            />
          </div>
          <div className={styles.commentCont}>
            I like the way you are able to play against others and know what you
            need to improve on. Overall it was a nice experience 😜
            <div className={styles.h3}>Tunmishe Johnson</div>
            <div className={styles.p}>Student</div>
          </div>
        </div>
      </div>
      <div className={`${styles.list2} ${styles.list}`}>
        <div className={styles.commentwrapper}>
          <div className={styles.comment}>
            <Image
              alt={"design image"}
              className={styles.commentImg}
              src={"/assets/img/common/homepage/Comment.png"}
              width={15}
              height={15}
            />
          </div>
          <div className={styles.commentCont}>
            ok it is a good help for students cause it teaches students to think
            fast while answering questions in short amount of time
            <div className={styles.h3}>Jane Olufemi</div>
            <div className={styles.p}>Parent</div>
          </div>
        </div>
      </div>
      <div className={`${styles.list3} ${styles.list}`}>
        <div className={styles.commentwrapper}>
          <div className={styles.comment}>
            <Image
              alt={"design image"}
              className={styles.commentImg}
              src={"/assets/img/common/homepage/Comment.png"}
              width={15}
              height={15}
            />
          </div>
          <div className={styles.commentCont}>
            I like the way you are able to play against others and know what you
            need to improve on. Overall it was a nice experience 😜
            <div className={styles.h3}>Muhammed Alli</div>
            <div className={styles.p}>Student</div>
          </div>
        </div>
      </div>
      <div className={`${styles.list4} ${styles.list}`}>
        <div className={styles.commentwrapper}>
          <div className={styles.comment}>
            <Image
              alt={"design image"}
              className={styles.commentImg}
              src={"/assets/img/common/homepage/Comment.png"}
              width={15}
              height={15}
            />
          </div>
          <div className={styles.commentCont}>
            I like the way you are able to play against others and know what you
            need to improve on. Overall it was a nice experience 😜
            <div className={styles.h3}>Sarah Ugbu</div>
            <div className={styles.p}>Student</div>
          </div>
        </div>
      </div>
      <div className={`${styles.list5} ${styles.list}`}>
        <div className={styles.commentwrapper}>
          <div className={styles.comment}>
            <Image
              alt={"design image"}
              className={styles.commentImg}
              src={"/assets/img/common/homepage/Comment.png"}
              width={15}
              height={15}
            />
          </div>
          <div className={styles.commentCont}>
            it is very nice and convenient to use
            <div className={styles.h3}>Tunmishe Johnson</div>
            <div className={styles.p}>Student</div>
          </div>
        </div>
      </div>
      <div className={`${styles.list6} ${styles.list}`}>
        <div className={styles.commentwrapper}>
          <div className={styles.comment}>
            <Image
              alt={"design image"}
              className={styles.commentImg}
              src={"/assets/img/common/homepage/Comment.png"}
              width={15}
              height={15}
            />
          </div>
          <div className={styles.commentCont}>
            It is really intellectually challenging
            <div className={styles.h3}>Kristin Sam</div>
            <div className={styles.p}>Teacher</div>
          </div>
        </div>
      </div>
      <div className={`${styles.list7} ${styles.list}`}>
        <div className={styles.commentwrapper}>
          <div className={styles.comment}>
            <Image
              alt={"design image"}
              className={styles.commentImg}
              src={"/assets/img/common/homepage/Comment.png"}
              width={15}
              height={15}
            />
          </div>
          <div className={styles.commentCont}>
            I like the way you are able to play against others and know what you
            need to improve on. Overall it was a nice experience 😜
            <div className={styles.h3}>Success Model College</div>
            <div className={styles.p}>School</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default commentPage;
