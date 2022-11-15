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
      console.log("valor cadastrado: " + dadosVideo);
    },
    clearForm: () => {
      setDadosVideo({ titulo: "", url: "" });
      console.log("valor limpo: " + { dadosVideo });
    },
  };
}

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: { titulo: "", url: "" },
  });
  const [formVisivel, setFormVisivel] = React.useState(false);

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
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  );
}
