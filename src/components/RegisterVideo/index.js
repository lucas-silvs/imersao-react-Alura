import React, { useState } from "react";
import { StyledRegisterVideo } from "./styles";

//Custom Hook
function useForm(props) {
  const [dadosVideo, setDadosVideo] = React.useState(props.initialValues);

  return {
    dadosVideo,
    handlerChange: (e) => {
      const value = e.target.value;
      var field = e.target.name;
      setDadosVideo({
        ...dadosVideo,
        [field]: value,
      });
    },
    clearForm: () => {
      setDadosVideo({ titulo: "", url: "" });
    },
  };
}

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: { titulo: "", url: "" },
  });
  const [formVisivel, setFormVisivel] = React.useState(false);
  const [imagem, setImagem] = React.useState("");

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>

      {formVisivel && (
        <form
          onSubmit={(evento) => {
            evento.preventDefault();
            formCadastro.clearForm();
            var idUrl = formCadastro.dadosVideo.url.split("=")[1];
            setImagem(`https://img.youtube.com/vi/${idUrl}/hqdefault.jpg`);
          }}
        >
          <div>
            <button
              className="close-modal"
              onClick={() => setFormVisivel(false)}
            >
              X
            </button>
            <input
              placeholder="Titulo do video"
              name="titulo"
              value={formCadastro.dadosVideo.titulo}
              onChange={(e) => formCadastro.handlerChange(e)}
            ></input>
            <input
              placeholder="URL"
              name="url"
              value={formCadastro.dadosVideo.url}
              onChange={(e) => formCadastro.handlerChange(e)}
            ></input>
            <button type="submit">Cadastrar video</button>

            <img src={imagem} />
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  );
}
