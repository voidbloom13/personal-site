import NavLink from './NavLink';
import userInfo from '../../assets/userInfo';

function NavSections(props) {
  return (
    <div className={props.className}>
      {userInfo.sections.map(link => (<NavLink key={link.link} label={link.label} link={link.link} isExternal={false} onClick={props.onClick} />))}
    </div>
  )
}

export default NavSections;
