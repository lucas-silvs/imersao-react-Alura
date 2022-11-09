import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import Banner from "../src/components/Banner";
import React from "react";

function HomePage() {
  const estilosHomePage = {
    //backgroundColor: "gray"
    display: "flex",
    flexDirection: "column",
    flex: 1,
  };
  const [valorDaBusca, setValorDaBusca] = React.useState("");

  return (
    <>
      <CSSReset />

      <div style={estilosHomePage}>
        <Banner />
        <Header />
        <Menu busca={valorDaBusca} setValor={setValorDaBusca} />
        <Timeline busca={valorDaBusca} playlists={config.playlists} />
      </div>
    </>
  );
}

export default HomePage;

// function Menu() {
// 	return <div>Menu</div>;
//   }
const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner" alt="foto do banner" /> */}
      <section className="user-info">
        <img
          src={`https://github.com/${config.github}.png`}
          alt="foto do perfil do usuario"
        ></img>
        <div>
          <h2>{config.name}</h2>

          <p> {config.job} </p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline({ busca, ...props }) {
  const playlistsNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistsNames.map((playlistNames) => {
        const videos = props.playlists[playlistNames];

        return (
          <section key={playlistNames}>
            <h2>{playlistNames}</h2>
            <div>
              {videos
                .filter((video) => {
                  const tituloVideoNormalizado = video.title.toLowerCase();
                  const tituloBuscaNormalizado = busca.toLowerCase();
                  return tituloVideoNormalizado.includes(
                    tituloBuscaNormalizado
                  );
                })
                .map((video) => {
                  return (
                    <a
                      href={video.url}
                      key={`${video.url}-${videos.indexOf(video)}`}
                    >
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
