import { BirthdayCard } from "../../components/BirthdayCard";
import { Button } from "../../components/Button";
import * as SC from "./styles";

export const Home = () => {
  return (
    <SC.Container>
      <SC.Header>
        <SC.Title>
          Imagine if <span>Snapchat</span>
          <br /> had events.
        </SC.Title>

        <SC.Subscription>
          Easily host and share events with your friends across any social
          media.
        </SC.Subscription>
      </SC.Header>

      <SC.Section>
        <SC.CardContainer>
          <BirthdayCard />
        </SC.CardContainer>

        <SC.ButtonContainer>
          <Button />
        </SC.ButtonContainer>
      </SC.Section>
    </SC.Container>
  );
};
