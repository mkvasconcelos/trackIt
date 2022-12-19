import styled from "styled-components";
import { ColorRing } from "react-loader-spinner";

export default function Loading() {
  return (
    <ContainerLoading>
      <ColorRing
        visible={true}
        height="200"
        width="200"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#126ba5", "#126ba5", "#126ba5", "#126ba5", "#126ba5"]}
      />
    </ContainerLoading>
  );
}

const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
