import styled from "styled-components"
import { FiMenu } from "react-icons/fi"
import { useState } from "react"
import { flexWidth } from "../../utils/constants"
import Link from "next/link"

const OuterNav = styled.nav`
background-color: ${(props) => props.theme.colors.headerBg};
padding: 1.5rem;
`

const InnerNav = styled.nav`
width: 100%;
max-width: 1024px;

margin: auto;
display: flex;
justify-content: space-between;
align-items: center;
font-family: ${(props) => props.theme.fonts.primaryText};

@media (max-width: ${flexWidth}) {
  flex-direction: column;
  align-items: flex-start;
}
`

const Brand = styled.div`
display: flex;

font-size: 2rem;
a {
  color: rgb(0, 0, 0);
}
a:hover {
  color: black;
}
`
const NavbarLinks = styled.div`
ul {
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  display: flex;
  text-align: center;
  height: 100%;
}

li {
  list-style: none;
}

a {
  padding: 1rem;
  display: block;
}

li:hover {
  background-color: #c3c6c7;
}
@media (max-width: ${flexWidth}) {
  display: ${(props) => (props.showMenu ? "flex" : "none")};

  width: 100%;
  ul {
    width: 100%;
    flex-direction: column;
  }

  li {
    text-align: center;
  }

  a {
    padding: 0.5rem 1rem;
  }
}
`

const Menu = styled.div`
position: absolute;
top: 1.75rem;
right: 1.25rem;
flex-direction: column;
display: none;
@media (max-width: ${flexWidth}) {
  display: block;
}
`
const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <OuterNav>
            <InnerNav>
                <Brand>
                    <Link href="/">
                        <a>Ryan S Rogers</a>
                    </Link>
                </Brand>
                <Menu>
                    <a onClick={() => setShowMenu(!showMenu)}>
                        <FiMenu size="2.5rem" />
                    </a>
                </Menu>
                <NavbarLinks showMenu={showMenu}>
                    <ul>
                        <li>
                            <Link href="/about">
                                <a>Me</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/cv">
                                <a>CV</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/now">
                                <a>Now</a>
                            </Link>
                        </li>
                    </ul>
                </NavbarLinks>
            </InnerNav>
        </OuterNav>
    )
}

export default Header