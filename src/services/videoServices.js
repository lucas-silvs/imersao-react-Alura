import { createClient } from "@supabase/supabase-js";
import React from "react";

const PROJECT_URL = "https://cbfaxiqylcqtdiauzesq.supabase.co";
const PROJECT_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiZmF4aXF5bGNxdGRpYXV6ZXNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg5NjgxMDksImV4cCI6MTk4NDU0NDEwOX0.QnkgkNNXjl17zau4WWyKEla1GcpNoiV0Xqnt8gd3nM8";
const supabase = createClient(PROJECT_URL, PROJECT_API_KEY);

export default function videoService() {
  return {
    getAllVideos(playlists, setPlaylists) {
      return supabase.from("videos").select("*");
    },
  };
}
