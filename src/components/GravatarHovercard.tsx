import { useState } from 'react';

const GravatarHovercard = () => {
  const [openDrawerName, setOpenDrawerName] = useState<string | null>(null);

  const openDrawer = (targetDrawer: string) => {
    setOpenDrawerName(targetDrawer);
  };

  const closeDrawer = () => {
    setOpenDrawerName(null);
  };

  return (
    <div className="gravatar-hovercard">
      <div className="gravatar-hovercard__inner">
        <div className="gravatar-hovercard__header">
          <a
            className="gravatar-hovercard__avatar-link"
            href="https://gravatar.com/bwmmgw?utm_source=hovercard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="gravatar-hovercard__avatar"
              src="https://0.gravatar.com/avatar/56c70634bfbcd4fef059acb8a8ff64cd4290cb9ab7f14f9507412a3598e06023?s=256"
              width="104"
              height="104"
              alt="Bamdad Nabavianpour"
            />
          </a>
          <a
            className="gravatar-hovercard__personal-info-link"
            href="https://gravatar.com/bwmmgw?utm_source=hovercard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="gravatar-hovercard__name">Bamdad Nabavianpour</h4>
            <p className="gravatar-hovercard__job">Web designer and Network developer</p>
          </a>
        </div>
        <div className="gravatar-hovercard__body">
          <p className="gravatar-hovercard__description">
            I’m a creator specializing in app development, design, and writing.
            I craft sleek interfaces, build innovative apps, and write engaging
            posts that blend bold creativity with sharp precision.
          </p>
        </div>
        <div className="gravatar-hovercard__social-links">
          <a
            className="gravatar-hovercard__social-link"
            href="https://gravatar.com/bwmmgw?utm_source=hovercard"
            target="_blank"
            rel="noopener noreferrer"
            data-service-name="gravatar"
          >
            <img
              className="gravatar-hovercard__social-icon"
              src="https://s.gravatar.com/icons/gravatar.svg"
              width="32"
              height="32"
              alt="Gravatar"
            />
          </a>
          <a
            className="gravatar-hovercard__social-link"
            href="https://github.com/BWMMGW"
            target="_blank"
            rel="noopener noreferrer"
            data-service-name="github"
          >
            <img
              className="gravatar-hovercard__social-icon"
              src="https://s.gravatar.com/icons/github.svg"
              width="32"
              height="32"
              alt="GitHub"
            />
          </a>
        </div>

        <div className="gravatar-hovercard__footer">
          <a
            className="gravatar-hovercard__profile-url"
            title="https://gravatar.com/bwmmgw"
            href="https://gravatar.com/bwmmgw?utm_source=profile-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            gravatar.com/bwmmgw
          </a>
          <a
            className="gravatar-hovercard__profile-link"
            href="https://gravatar.com/bwmmgw?utm_source=profile-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            View profile →
          </a>
        </div>

        <div
          className="gravatar-hovercard__profile-color"
          style={{ background: 'rgb(227, 234, 252)' }}
        ></div>

        {/* Drawer logic removed – you can add if needed */}
      </div>
    </div>
  );
};

export default GravatarHovercard;