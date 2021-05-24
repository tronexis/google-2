import { Avatar } from "@material-ui/core";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
import {
  HiDotsVertical,
  HiMicrophone,
  HiOutlineMap,
  HiOutlineNewspaper,
  HiOutlinePhotograph,
  HiOutlinePlay,
  HiSearch,
  HiViewGrid,
  HiX,
} from "react-icons/hi";
import styled from "styled-components/macro";
import tw from "twin.macro";
import Logo from "../components/Logo";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";

export default function Search({results, ...props}) {
  console.log(results);
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value.replaceAll(" ", "+");
    term && router.push(`/search?term=${term}`);
  };

  return (
    <>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header>
          <HeaderContent>
            <Logo size=".3" onClick={() => router.push("/")} />
            <SearchBar>
              <SearchInput ref={searchInputRef} />
              <HiX />
              <ButtonGroup>
                <HiSearch />
                <HiMicrophone />
              </ButtonGroup>
              <button hidden type="submit" onClick={search}>
                Search
              </button>
            </SearchBar>
            <Nav>
              <a href="http://">Gmail</a>
              <a href="http://">Images</a>
              <HiViewGrid />
              <Avatar src="https://i.pinimg.com/originals/9c/ed/a5/9ceda5c51c58c4a447fb59038b4832be.jpg" />
            </Nav>
          </HeaderContent>
          <HeaderOptions>
            <div>
              <HeaderOption href="" title="All" icon={HiSearch} selected />
              <HeaderOption href="" title="Images" icon={HiOutlinePhotograph} />
              <HeaderOption href="" title="Videos" icon={HiOutlinePlay} />
              <HeaderOption href="" title="News" icon={HiOutlineNewspaper} />
              <HeaderOption href="" title="Maps" icon={HiOutlineMap} />
              <HeaderOption href="" title="More" icon={HiDotsVertical} />
            </div>
            <div>
              <HeaderOption href="" title="Settings" />
              <HeaderOption href="" title="Tools" />
            </div>
          </HeaderOptions>
        </Header>
        <SearchResults>
          <p>About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds)</p>
        </SearchResults>
        <main>
          {Array(50)
            .fill(0)
            .map((_) => (
              <h1>Hey</h1>
            ))}
        </main>
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || "0";
  const data = useDummyData ? Response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}

const Container = styled.div`
  ${tw``}
`;
// Container.displayName = 'Container';

const Header = styled.header`
  ${tw`sticky top-0 bg-white pt-2 border-b`}
`;

const HeaderContent = styled.div`
  ${tw`p-4 flex flex-col sm:flex-row w-full items-center`}
`;

const SearchBar = styled.form`
  ${tw`flex w-full max-w-xl rounded-full border border-gray-200 items-center mt-3 sm:mt-0 sm:ml-5 py-2 px-3 space-x-2`}
  ${tw`hover:shadow-md focus-within:shadow-md`}
  svg {
    cursor: pointer;
    transition: all 0.25s ease-in-out;

    :hover {
      transform: scale(1.25);
    }
  }
`;

const SearchInput = styled.input`
  ${tw`rounded-tl-full rounded-bl-full pl-1 flex-grow focus:outline-none`}
`;

const ButtonGroup = styled.div`
  ${tw`hidden sm:inline-flex space-x-2 border-l pl-2`}
`;

const Nav = styled.nav`
  ${tw`hidden sm:flex space-x-4 items-center ml-auto p-4 py-2`}

  > a {
    ${tw`transition hover:underline`}
  }

  > svg {
    ${tw`h-6 w-6 p-1 transform scale-150 rounded-full hover:bg-gray-100 cursor-pointer transition`}
  }
`;

const HeaderOptions = styled.div`
  ${tw`flex w-full max-w-xl text-sm text-gray-600 sm:ml-28 px-6 sm:px-4`}

  > div {
    ${tw`space-x-4`}
  }

  > div:last-child {
    ${tw`ml-auto`}
  }
`;

const HeaderOption = styled(({ title, icon, ...props }) => (
  <a {...props}>
    {icon && icon()}
    <span>{title}</span>
  </a>
))`
  ${tw`inline-flex items-center space-x-1 pb-2 hover:text-blue-600 transition`}
  ${({ selected }) => selected && tw`text-blue-600 border-b-4 border-blue-600`}

  > span {
    ${({ icon }) => icon && tw`hidden sm:inline`}
  }
`;

const SearchResults = styled.section`
  ${tw`p-4`}

  > p {
    ${tw`text-xs`}
  }
`;

const SearchResult = styled.div`
  ${tw``}
`;
