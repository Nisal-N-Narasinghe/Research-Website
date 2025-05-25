"use client";

import { useState, useEffect } from "react";

interface TechLogo {
  name: string;
  category?: string;
  logo: string;
}

const techLogos: TechLogo[] = [
  {
    name: "GPT-4",
    logo: "logoes/chatgpt.png",
  },
  {
    name: "LLaMA",
    logo: "logoes/llama.png",
  },
  {
    name: "LangChain",
    logo: "logoes/langchain.png",
  },
  {
    name: "Python",
    logo: "logoes/python.png",
  },
  {
    name: "Flask",
    logo: "logoes/flask.png",
  },
  {
    name: "PostgreSQL",
    logo: "logoes/postgresql.png",
  },
  {
    name: "Laravel",
    logo: "logoes/laravel.png",
  },
  {
    name: "React",
    logo: "logoes/react.png",
  },
  {
    name: "Vite",
    logo: "logoes/vite.png",
  },
  {
    name: "TypeScript",
    logo: "logoes/typescript.png",
  },
  {
    name: "React Native",
    logo: "logoes/reactnative.png",
  },
  {
    name: "Tailwind",
    logo: "logoes/tailwindcss.png",
  },
  {
    name: "GCP",
    logo: "logoes/gcp.png",
  },
  {
    name: "Docker",
    logo: "logoes/docker.png",
  },
  {
    name: "Kubernetes",
    logo: "logoes/kubernetes.png",
  },
  {
    name: "Terraform",
    logo: "logoes/terraform.png",
  },
  {
    name: "Postman",
    logo: "logoes/postman.png",
  },
];

export default function TechCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % techLogos.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Duplicate logos for seamless infinite loop
  const duplicatedLogos = [...techLogos, ...techLogos];

  return (
    <div className='w-full max-w-6xl mx-auto mb-4'>
      <div className='relative overflow-hidden bg-white rounded-lg shadow-sm '>
        <div
          className='flex transition-transform duration-1000 ease-linear'
          style={{
            transform: `translateX(-${currentIndex * 160}px)`,
            width: `${duplicatedLogos.length * 160}px`,
          }}>
          {duplicatedLogos.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className='flex-shrink-0 w-40 h-20 flex items-center justify-center p-2 hover:bg-gray-50 transition-colors duration-300'>
              <img
                src={tech.logo || "/placeholder.svg"}
                alt={tech.name}
                className='max-w-full max-h-full object-contain filter  hover:scale-110 transition-all duration-300'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
