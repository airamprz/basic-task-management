"use client";
import React, { useState } from "react";
import { ProjectCard } from "../components/ProjectCard";

const initialProjects = [
  { id: "project1", name: "Proyecto 1" },
  { id: "project2", name: "Proyecto 2" },
];


export default function ProjectsIndexPage() {
  const [projects, setProjects] = useState(initialProjects);
  const [newProject, setNewProject] = useState({ name: "", id: 0 });

  const handleNewProjectChange = (event) => {
    setNewProject({ ...newProject, name: event.target.value });
  };

  const handleNewProjectSubmit = (event) => {
    event.preventDefault();
    setProjects([
      ...projects,
      {
        id: projects.length + 1,
        name: newProject.name,
      },
    ]);
    setNewProject({ name: "", id: 0 });
  };

  const handleProjectDelete = (projectId) => {
    const newProjects = projects.filter((project) => project.id !== projectId);
    setProjects(newProjects);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <h1 className="text-black text-3xl ml-4 mt-4 mb-4">Listado de proyectos</h1>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onDelete={handleProjectDelete}
              />
            ))}
          </div>

          <h2 className="text-black text-3xl ml-4 mt-8">Agregar nuevo proyecto</h2>
          <form onSubmit={handleNewProjectSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              value={newProject.name}
              onChange={handleNewProjectChange}
              placeholder="Ingresa el nombre del proyecto"
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Agregar Proyecto
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
