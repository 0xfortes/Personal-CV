import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold mb-8 text-center">contact.</h2>
        <div className="flex flex-col items-center">
          <p className="mb-8 text-center text-xl">
            Feel free to reach out to me through any of the following channels:
          </p>
          <ul className="flex justify-center space-x-8">
            <li>
              <a href="mailto:luis.roque.fortes@gmail.com" className="text-4xl text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/luis-roque-fortes" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://github.com/0xfortes" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;