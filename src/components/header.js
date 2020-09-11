import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import logo from "../images/logo_only_black.png"

const HeaderWrapper = styled.header`
  background: #000;
  margin-bottom: 1.45rem;
  h1 {
    img {
      height: 100px;
    }
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#f8f8ff`,
            textDecoration: `none`,
          }}
        >
          <img src={logo} alt="PJT Development Logo" />
          {siteTitle}
        </Link>
      </h1>
      <ul
        style={{
          color: `#f8f8ff`,
          listStyle: `none`
        }}
      >
        <li>Process</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
