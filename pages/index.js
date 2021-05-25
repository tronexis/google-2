import Head from "next/head";
import Image from "next/image";
import tw from "twin.macro";
import styled from "styled-components/macro";
import { HiGlobe, HiMicrophone, HiSearch, HiViewGrid } from "react-icons/hi";
import { useRef } from "react";
import { useRouter } from "next/router";
import Logo from "../components/Logo";

export default function App() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value.replaceAll(' ', '+');
    term && router.push(`/search?term=${term}`);
  };

  return (
    <Container>
      <Head>
        <title>Google 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <Nav>
          <a href="http://">About</a>
          <a href="http://">Store</a>
        </Nav>
        <Nav>
          <a href="http://">Gmail</a>
          <a href="http://">Images</a>
          <HiViewGrid />
          <Avatar src="https://i.pinimg.com/originals/9c/ed/a5/9ceda5c51c58c4a447fb59038b4832be.jpg" />
        </Nav>
      </Header>
      <Main>
        <Logo />
        <SearchBar>
          <HiSearch />
          <SearchInput ref={searchInputRef} />
          <HiMicrophone />
        </SearchBar>
        <ButtonGroup>
          <Button onClick={search}>Google Search</Button>
          <Button onClick={search}>I'm Feeling Lucky</Button>
        </ButtonGroup>
      </Main>
      <Footer>
        <FooterSection>
          <Location>Bangladesh</Location>
        </FooterSection>
        <FooterSection grid>
          <Tagline Icon={HiGlobe}>Carbon Neutral since 2007</Tagline>
          <Nav>
            <a href="#">Advertising</a>
            <a href="#">Business</a>
            <a href="#">How Search Works</a>
          </Nav>
          <Nav>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Settings</a>
          </Nav>
        </FooterSection>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  ${tw`flex flex-col h-screen text-gray-700`}
`;

const Header = styled.header`
  ${tw`flex justify-between items-center text-sm`}
`;

const Nav = styled.nav`
  ${tw`flex space-x-4 items-center p-4 py-2`}

  > a {
    ${tw`transition hover:underline`}
  }

  > svg {
    ${tw`h-6 w-6 p-1 transform scale-150 rounded-full hover:bg-gray-100 cursor-pointer transition`}
  }
`;

const GridIcon = styled(HiViewGrid)`
  ${tw`h-6 w-6 p-1 transform scale-150 rounded-full hover:bg-gray-100 cursor-pointer transition`}
`;

const Avatar = styled.img`
  ${tw`rounded-full h-10 cursor-pointer`}
  ${tw`transition transform hover:scale-110`}
`;

const Main = styled.form`
  ${tw`flex flex-1 flex-col justify-center items-center space-y-4`}
`;

const SearchBar = styled.div`
  ${tw`flex w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl items-center hover:shadow-lg focus-within:shadow-lg border border-gray-100 rounded-full px-4 py-2 space-x-2 transition`}
`;

const SearchInput = styled.input`
  ${tw`flex-grow focus:outline-none`}
`;

const ButtonGroup = styled.div`
  ${tw`flex flex-col space-y-3 w-1/2 sm:flex-row sm:space-x-3 sm:space-y-0 justify-center`}
`;

const Button = styled.button`
  ${tw`font-semibold bg-gray-100 ring-gray-200 hover:ring-1 focus:outline-none focus:ring-1 rounded p-2 sm:p-3 transition`}
`;

const Footer = styled.footer`
  ${tw`grid text-sm text-gray-600 font-semibold bg-gray-200 divide-y divide-gray-300 p-1`}
`;

const FooterSection = styled.footer`
  ${tw`p-2 px-4 space-y-2 items-center`}
  ${({ grid }) =>
    grid &&
    tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense`}

  > :nth-child(2), > :last-child {
    ${tw`justify-center p-0`}
  }

  > :first-child {
    ${tw`md:col-span-3 lg:col-span-1 lg:col-start-2`}
  }

  > :nth-child(2) {
    ${tw`md:justify-self-start`}
  }

  > :nth-child(3) {
    ${tw`md:justify-self-end`}
  }
`;

const Location = styled.p``;

const Tagline = styled(({ Icon, children, ...props }) => (
  <div {...props}>
    <Icon />
    <span>{children}</span>
  </div>
))`
  ${tw`flex space-x-1 justify-center items-center`}
`;
