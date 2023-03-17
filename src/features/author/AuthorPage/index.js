import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { Description, Image, Wrapper } from "./styled";
import image from "./marta.jpg";

export default () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Marta Żebrowska-Giers"
      body={
        <>
          <Wrapper>
            <Image height={200} src={image} alt="Zdjęcia Marta" />
            <Description>
              <p>
                <strong>Kurpianka</strong>, która w 2006 roku przeprowadziła się
                do <strong>Gdańska</strong> i już tam została 😍.
              </p>
              <p>
                <strong>Magister farmacji</strong> z 11-letnim doświadczeniem w
                zawodzie, również na stanowiskach kierowniczych.
              </p>
              <p>
                Od 2008 roku śpiewam w dużym zespole muzycznym -{" "}
                <strong>Chórze Gdańskiego Uniwersytetu Medycznego</strong>,
                koncertujemy po całym świecie i nagrywamy ciekawe płyty 💪🏻.
              </p>
              <p>
                W wolnych chwilach uczę się{" "}
                <strong>języka hiszpańskiego</strong> i czytam książki z zakresu{" "}
                <strong>psychologii</strong>. Wyrabianie normy kroków też
                sprawia mi <strong>frajdę!</strong>
              </p>
              <p>
                Moim marzeniem jest zmiana branży i zostanie{" "}
                <strong>programistką Front-endu</strong>, dlatego też powstała
                ta aplikacja - zadanie w trakcie nauki kodowania z kursem{" "}
                <strong>YouCode</strong>.
              </p>
            </Description>
          </Wrapper>
        </>
      }
    />
  </Container>
);
