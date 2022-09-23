import * as SC from "./styles";

import { HiOutlineCalendar, HiOutlineLocationMarker } from "react-icons/hi";

export const BirthdayBash = () => {
  return (
    <SC.Container>
      <div>
        <img
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220923%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220923T000544Z&X-Amz-Expires=86400&X-Amz-Signature=90570e39a097a134db9e99508500f0d8aa6f0a695c6f0dcb1e09b637e33aa9b8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"
          alt=""
        />
      </div>

      <SC.Content>
        <SC.Header>
          <SC.Title>Birthday Bash</SC.Title>
          <SC.Description>
            Hosted by <strong>Elysia</strong>
          </SC.Description>
        </SC.Header>

        <SC.NextButtonContainer>
          <SC.NextButton>
            <SC.IconNextContainer>
              <HiOutlineCalendar size={20} color="#8456EC" />
            </SC.IconNextContainer>
            <SC.NextInfoText>
              <h2>18 August 6:00PM</h2>
              <p>to 19 August 1:00PM UTC +10</p>
            </SC.NextInfoText>
            <div>{">"}</div>
          </SC.NextButton>

          <SC.NextButton>
            <SC.IconNextContainer>
              <HiOutlineLocationMarker size={23} color="#8456EC" />
            </SC.IconNextContainer>
            <SC.NextInfoText>
              <h2>18 August 6:00PM</h2>
              <p>to 19 August 1:00PM UTC +10</p>
            </SC.NextInfoText>
            <div>{">"}</div>
          </SC.NextButton>
        </SC.NextButtonContainer>
      </SC.Content>
    </SC.Container>
  );
};
