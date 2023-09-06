/* eslint-disable react/prop-types */
import { List, Link } from './FollowUs.styled';
import { facebook, instagram, youtube } from '../../../../images';

const service = [facebook, instagram, youtube];
const label = ['facebook', 'instagram', 'youtube'];

export const Socials = ({ gap }) => {
  return (
    <List gap={gap}>
      {service.map((icon, i) => {
        const alt = `${label[i]} link`;
        return (
          <li key={label[i]}>
            <Link
              href={`https://${label[i]}.com`}
              rel="noreferrer noopener nofollow"
              target="_blank"
            >
              <img src={icon} alt={alt} />
            </Link>
          </li>
        );
      })}
    </List>
  );
};
