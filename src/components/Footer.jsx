import React from 'react';
import {
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from '../assets/Icons';

const footerMenuData = [
  'lorem ipsum',
  'lorem ipsum',
  'lorem ipsum',
  'lorem ipsum',
  'lorem ipsum',
  'lorem ipsum',
  'lorem ipsum',
  'lorem ipsum',
];

export default function Footer() {
  return (
    <footer className="flex justify-between p-12">
      {/* Footer menu */}
      <div className="grid grid-cols-3 gap-x-8">
        {footerMenuData?.map((content) => (
          <div>{content}</div>
        ))}
      </div>

      {/* Social media */}
      <div>
        <div className="mb-8">Follow us</div>
        <div className="flex gap-12">
          <FacebookIcon />
          <InstagramIcon />
          <DiscordIcon />
          <LinkedInIcon />
        </div>
      </div>
    </footer>
  );
}
