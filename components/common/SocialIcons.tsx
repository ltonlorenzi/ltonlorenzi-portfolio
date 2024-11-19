import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialIcons = () => (
  <div className="flex space-x-4">
    <a
      href="https://www.linkedin.com/in/ltonlorenzi"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform transform hover:scale-110 hover:text-blue-500"
    >
      <FaLinkedin size={30} />
    </a>
    <a
      href="mailto:luciano.tonlorenzi@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform transform hover:scale-110 hover:text-red-500"
    >
      <AiOutlineMail size={30} />
    </a>
    <a
      href="https://github.com/ltonlorenzi"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform transform hover:scale-110 hover:text-gray-500"
    >
      <FaGithub size={30} />
    </a>
  </div>
);

export default SocialIcons;
