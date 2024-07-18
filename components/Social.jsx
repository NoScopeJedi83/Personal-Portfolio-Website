import Link from "next/link";

import {FaGithub, FaLinkedin, FaInstagram, FaTwitter} from 'react-icons/fa';

const socials = [
    {icon: <FaGithub />, path : 'https://github.com/NoScopeJedi83'},
    {icon: <FaLinkedin />, path : 'https://www.linkedin.com/in/atharv-grover-62a16020a/'},
    {icon: <FaTwitter />, path : 'https://x.com/athxrvhimsxlf'},
    {icon: <FaInstagram />, path : 'https://www.instagram.com/athxrvvvvvv/'},
];

const Social = ({containerStyles, iconStyles}) => {
  return (
  <div className={containerStyles}>
    {socials.map((item, index)=> {
        return (
        <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
        );
    })}
  </div>
  );
};

export default Social;