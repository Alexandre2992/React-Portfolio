import React, { useState } from "react";
import CharFilter from "./CharFilter";

function App() {
  return (
    <div>
      <CharFilter sizeText={210}>
        O Gil Vicente Futebol Clube, mais conhecido como Gil Vicente, é um clube
        português sediado na cidade de Barcelos. É mais conhecido pela sua
        equipa de futebol profissional, que joga atualmente na Liga Portugal
        Betclic, a competição mais importante do futebol português. Fundado a 3
        de maio de 1924, no feriado municipal, é um dos clubes mais
        representativos da região do Minho, a par do FC Famalicão e logo a
        seguir ao SC Braga e Vitória SC, e conta com 25 presenças no mais alto
        escalão do futebol português. As alcunhas da equipa são "barcelenses",
        "galos", associado à cidade e à sua mascote, o galo. Os seus apoiantes
        são chamados de "gilistas". Os seus jogos de futebol em casa são
        realizados no Estádio Cidade de Barcelos, inaugurado em 2004, com
        capacidade para 12 046 lugares, tendo substituído o antigo Estádio
        Adelino Ribeiro Novo. É visto como um clube com uma identidade regional
        forte, representando o concelho de Barcelos e sendo um orgulho local
        pelo seu historial no futebol português. Mesmo quando o clube passou por
        períodos difíceis , como o "Caso Mateus", os adeptos mantiveram o seu
        apoio constante, evitando problemas maiores. O Gil Vicente FC tem um
        total de 6 títulos conquistados. Ganhou 2 títulos da Segunda Liga, 1
        título da III Divisão e 3 títulos da 1º Divisão da AF Braga. Em adição,
        foi finalista na Taça da Liga em 2011/12.
      </CharFilter>
    </div>
  );
}

export default App;
