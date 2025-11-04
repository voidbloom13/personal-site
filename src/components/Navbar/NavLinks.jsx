import NavLink from './NavLink';
import userInfo from '../../assets/userInfo';

function NavLinks(props) {
  return (
    <div className={props.className}>
      {userInfo.links.map(link => (<NavLink key={link.link} icon={link.icon} label={link.label} link={link.link} isExternal={true} onClick={props.onClick} />))}
    </div>
  )
}

export default NavLinks;
