import React from 'react';

export default function Aboutme() {
  return (
    <section
      id="Aboutme"
      className="bg-blue-900 text-white min-h-screen flex flex-col md:flex-row items-center justify-center p-10"
    >
      
      <div className="mb-6 md:mb-0 md:mr-10">
        <img
          src="/foto.jpeg"
          alt="Minha foto"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg"
        />
      </div>

    
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-3xl font-bold mb-4">Sobre mim</h1>
        <h2 className="text-lg leading-relaxed">
          Olá, sou <span className="font-semibold">Bia Rodrigues</span>. desenvolvedora web apaixonada por tecnologia, inovação e pela arte de transformar ideias em soluções digitais eficientes. Desde o início da minha trajetória profissional, encontrei no desenvolvimento web um campo dinâmico e desafiador, onde criatividade e lógica caminham lado a lado para criar experiências únicas para os usuários.
        </h2>
      </div>
    </section>
  );
}