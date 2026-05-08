import type { NextPage } from 'next';
import Head from 'next/head';

const PrivacyPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - iahc Network</title>
      </Head>
      <div>
        <h5>Who we are</h5>
        <p>
          Our website address is:{' '}
          <a href="https://iahc.ir" target="_blank" rel="noopener noreferrer">
            https://iahc.ir
          </a>
        </p>

        <h5>Comments</h5>
        <p>When visitors leave comments, we collect:</p>
        <ul>
          <li>Data shown in the comments form</li>
          <li>Visitor&apos;s IP address</li>
          <li>Browser user agent string</li>
        </ul>
        <p>We use this information for spam detection.</p>
        <p>
          An anonymized string (hash) from your email may be provided to Gravatar to check service
          usage. Their privacy policy is available at:{' '}
          <a href="https://automattic.com/privacy/" target="_blank" rel="noopener noreferrer">
            https://automattic.com/privacy/
          </a>
          . After comment approval, your profile picture becomes publicly visible with your comment.
        </p>

        <h5>Media</h5>
        <p>If uploading images:</p>
        <ul>
          <li>Avoid images with embedded location data (EXIF GPS)</li>
          <li>Visitors can download/extract location data from website images</li>
        </ul>

        <h5>Cookies</h5>
        <p>When you leave a comment, you may opt-in to saving:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Website</li>
        </ul>
        <p>These cookies last one year and prevent re-entering details.</p>
        <p>On login page:</p>
        <ul>
          <li>Temporary cookie checks browser cookie acceptance</li>
          <li>Contains no personal data</li>
          <li>Discarded when browser closes</li>
        </ul>
        <p>When logged in:</p>
        <ul>
          <li>Login cookies last two days</li>
          <li>Screen options cookies last one year</li>
          <li>&quot;Remember Me&quot; extends login to two weeks</li>
          <li>Logging out removes login cookies</li>
        </ul>
        <p>When editing/publishing articles:</p>
        <ul>
          <li>Additional cookie saves post ID</li>
          <li>Contains no personal data</li>
          <li>Expires after 1 day</li>
        </ul>

        <h5>Embedded Content</h5>
        <p>Articles may include embedded content (videos, images, etc.) which:</p>
        <ul>
          <li>Behaves identically to visiting the source website</li>
          <li>May collect data about you</li>
          <li>Use cookies</li>
          <li>Embed third-party tracking</li>
          <li>Monitor interactions (especially when logged into that site)</li>
        </ul>

        <h5>Who we share your data with</h5>
        <p>Password reset requests include your IP address in the reset email.</p>

        <h5>How long we retain your data</h5>
        <p>Comments and metadata are retained indefinitely to auto-approve follow-up comments.</p>
        <p>Registered users&apos; personal information is stored in their profile. All users can:</p>
        <ul>
          <li>See their personal information</li>
          <li>Edit their personal information</li>
          <li>Delete their personal information (except username)</li>
        </ul>
        <p>Administrators can also see and edit this information.</p>

        <h5>Your data rights</h5>
        <p>If you have an account or left comments, you can:</p>
        <ul>
          <li>Request exported personal data file</li>
          <li>Request erasure of personal data</li>
        </ul>
        <p>This excludes data we must retain for administrative, legal, or security purposes.</p>

        <h5>Where your data is sent</h5>
        <p>Visitor comments may be processed through automated spam detection services.</p>
      </div>
    </>
  );
};

export default PrivacyPage;