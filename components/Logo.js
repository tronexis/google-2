import Image from "next/image";
import styled from "styled-components/macro";
import tw from "twin.macro";

const Logo = styled(({ size, ...props }) => {
  return (
    <Image
      src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      width={272 * (size || 1)}
      height={92 * (size || 1)}
      {...props}
    />
  );
})`
  ${({onClick}) => onClick && tw`cursor-pointer`}
`;

export default Logo;
