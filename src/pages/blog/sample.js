import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';

const SamplePage = () => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'design'}
              title={'Friends of Sydney: Flora Fricker'}
              image={'/blogFeatured.png'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  London-based floral designer Flora Fricker champions seasonal
                  British flowers and UK producers in her beautiful and
                  sustainable creations. This season, we worked with Flora to
                  style stores for Christmas with sustainably sourced wreaths.
                </p>

                <p className={styles.blogParagraph}>
                  Delaware limited liability company collects personal
                  information that you voluntarily provide when registering for
                  an account or making a purchase.
                </p>

                <p className={styles.blogParagraph}>
                  This Privacy Policy outlines how your information is
                  collected, used and disclosed when you access or use our
                  Services.
                </p>

                <p className={styles.blogParagraph}>
                  This Privacy Policy is incorporated by reference into our
                  Terms.
                </p>
              </div>

              {/* Images Section */}
              <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}></div>
              </div>

              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>2. Lorem ipsum</h2>

                <p className={styles.blogParagraph}>
                  Our Services are not intended for children under 13.
                </p>

                <p className={styles.blogParagraph}>
                  If you are under 18, use of our Services must involve a parent
                  or guardian.
                </p>

                <p className={styles.blogParagraph}>
                  We collect and use information in accordance with applicable
                  privacy laws.
                </p>
              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default SamplePage;
