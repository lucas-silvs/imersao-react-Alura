import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const estilosHomePage = {
    //backgroundColor: "gray"
    display: "flex",
    flexDirection: "column",
    flex: 1,
  };

  return (
    <>
      <CSSReset />
      <div style={estilosHomePage}>
        <Header />
        <Menu />
        <Timeline playlists={config.playlists} />
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
    margin-top: 50px;
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

function Timeline(props) {
  const playlistsNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistsNames.map((playlistNames) => {
        console.log(playlistNames);
        const videos = props.playlists[playlistNames];

        return (
          <section>
            <h2>{playlistNames}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
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
