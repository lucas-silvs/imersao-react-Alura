import { createClient } from "@supabase/supabase-js";
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

const PROJECT_URL = "https://cbfaxiqylcqtdiauzesq.supabase.co";
const PROJECT_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiZmF4aXF5bGNxdGRpYXV6ZXNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg5NjgxMDksImV4cCI6MTk4NDU0NDEwOX0.QnkgkNNXjl17zau4WWyKEla1GcpNoiV0Xqnt8gd3nM8";
const supabase = createClient(PROJECT_URL, PROJECT_API_KEY);

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
            var idUrl = formCadastro.dadosVideo.url.split("v=")[1];
            var urlThumb = `https://img.youtube.com/vi/${idUrl}/hqdefault.jpg`;

            //Contrato dos campos do banco de dados que será mapeado entre o front e o back
            supabase
              .from("videos")
              .insert({
                title: formCadastro.dadosVideo.titulo,
                url: formCadastro.dadosVideo.url,
                thumb: urlThumb,
                playlistType: "jogos",
              })
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });

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
