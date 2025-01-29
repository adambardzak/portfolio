"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Project = {
  id: number;
  name: string;
  year: string;
  category: string;
  images: string[];
};

const projects: Project[] = [
  {
    id: 1,
    name: "OFTA",
    year: "2024 - 2025",
    category: "Eye surgery clinic",
    images: [
      "/projects/ofta/ofta_1.png",
      "/projects/ofta/ofta_2.png",
      "/projects/ofta/ofta_3.png",
      "/projects/ofta/ofta_4.png",
      "/projects/ofta/ofta_5.png",
      "/projects/ofta/ofta_6.png",
      "/projects/ofta/ofta_7.png",
      "/projects/ofta/ofta_mobil_1.png",
      "/projects/ofta/ofta_mobil_2.png",
      "/projects/ofta/ofta_mobil_3.png",
      "/projects/ofta/ofta_mobil_4.png",
    ],
  },
  {
    id: 2,
    name: "OFTA",
    year: "2024",
    category: "E-commerce Platform",
    images: [
      "/projects/ofta/ofta_1.png",
      "/projects/ofta/ofta_2.png",
      "/projects/ofta/ofta_3.png",
      "/projects/ofta/ofta_4.png",
      "/projects/ofta/ofta_5.png",
      "/projects/ofta/ofta_6.png",
      "/projects/ofta/ofta_7.png",
      "/projects/ofta/ofta_mobil_1.png",
      "/projects/ofta/ofta_mobil_2.png",
      "/projects/ofta/ofta_mobil_3.png",
      "/projects/ofta/ofta_mobil_4.png",
    ],
  },
  {
    id: 3,
    name: "OFTA",
    year: "2024",
    category: "E-commerce Platform",
    images: [
      "/projects/ofta/ofta_1.png",
      "/projects/ofta/ofta_2.png",
      "/projects/ofta/ofta_3.png",
      "/projects/ofta/ofta_4.png",
      "/projects/ofta/ofta_5.png",
      "/projects/ofta/ofta_6.png",
      "/projects/ofta/ofta_7.png",
      "/projects/ofta/ofta_mobil_1.png",
      "/projects/ofta/ofta_mobil_2.png",
      "/projects/ofta/ofta_mobil_3.png",
      "/projects/ofta/ofta_mobil_4.png",
    ],
  },
  // Add more projects
];

const ProjectPreview = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  // Automatically cycle through images when project is hovered
  React.useEffect(() => {
    if (hoveredProject !== null) {
      const interval = setInterval(() => {
        setImageIndex((prev) => {
          const project = projects.find((p) => p.id === hoveredProject);
          if (!project) return 0;
          return (prev + 1) % project.images.length;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
    return () => setImageIndex(0);
  }, [hoveredProject]);

  return (
    <div className="w-full flex justify-end relative">
      {/* Projects List */}
      <div className="w-full pl-36">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            onHoverStart={() => setHoveredProject(project.id)}
            onHoverEnd={() => setHoveredProject(null)}
            className="group relative py-6 cursor-pointer"
          >
            <div className="space-y-1">
              <div className="flex items-baseline gap-4">
                <span className="font-space text-sm text-text-muted-light dark:text-text-muted-dark">
                  {String(project.id).padStart(2, "0")}
                </span>
                <h2 className="font-monument text-4xl text-text-light dark:text-text-dark">
                  {project.name}
                </h2>
                <span className="font-space text-sm text-text-muted-light dark:text-text-muted-dark ml-auto">
                  {project.year}
                </span>
              </div>
              <p className="font-space text-sm text-text-muted-light dark:text-text-muted-dark ml-10">
                {project.category}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Preview */}
      <div className="w-full absolute pointer-events-none">
        <div className="sticky  pl-12">
          <AnimatePresence>
            {hoveredProject !== null && (
              <motion.div
                className="w-full aspect-[4/3] relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-hover-light dark:bg-hover-dark">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={imageIndex}
                      className=" inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={
                          projects.find((p) => p.id === hoveredProject)?.images[
                            imageIndex
                          ] || ""
                        }
                        alt="Project preview"
                        fill
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Image counter */}
                  <div
                    className="absolute bottom-4 right-4 px-2 py-1 bg-black/20 backdrop-blur-sm rounded text-xs 
                    font-space text-white"
                  >
                    {imageIndex + 1} /{" "}
                    {
                      projects.find((p) => p.id === hoveredProject)?.images
                        .length
                    }
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
